import { NextResponse } from "next/server";

/**
 * Robust Twitter v2 timeline proxy with proper error surfacing and media support.
 */

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN ?? "";

const TWITTER_API_BASE_URL = "https://api.twitter.com/2";


class TwitterError extends Error {
  status: number;
  detail?: string;
  retryAfter?: number;
  constructor(message: string, status: number, detail?: string, retryAfter?: number) {
    super(message);
    this.name = "TwitterError";
    this.status = status;
    this.detail = detail;
    this.retryAfter = retryAfter;
  }
}

async function fetchTwitter<T = any>(url: string, tried = false): Promise<T> {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      // Helps Twitter identify the app; some proxies throttle unknown agents harder
      "User-Agent": "abn-app/1.0 (+https://abn.local)",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    let detail = "";
    try {
      detail = await res.text();
    } catch {
      // ignore body read errors
    }

    const retryAfterHeader = res.headers.get("retry-after");
    const retryAfter = retryAfterHeader ? Number(retryAfterHeader) : undefined;

    // If rate limited, retry once after Retry-After (or 2s default)
    if (res.status === 429 && !tried) {
      const waitMs = (retryAfter && !Number.isNaN(retryAfter) ? retryAfter : 2) * 1000;
      await new Promise((r) => setTimeout(r, waitMs));
      return fetchTwitter<T>(url, true);
    }

    const message = `Twitter API ${res.status} ${res.statusText}${detail ? `: ${detail}` : ""}`;
    throw new TwitterError(message, res.status, detail, retryAfter);
  }

  return res.json();
}

async function getUser(username: string) {
  const url = `${TWITTER_API_BASE_URL}/users/by/username/${encodeURIComponent(
    username
  )}?user.fields=profile_image_url,name,username`;
  return fetchTwitter(url);
}

async function getTweets(userId: string, max = 10) {
  // Include media expansions so images/videos can be rendered
  const url =
    `${TWITTER_API_BASE_URL}/users/${userId}/tweets` +
    `?max_results=${Math.min(Math.max(max, 5), 25)}` +
    `&tweet.fields=created_at,entities,public_metrics,attachments` +
    `&expansions=author_id,attachments.media_keys` +
    `&user.fields=name,username,profile_image_url` +
    `&media.fields=media_key,type,url,preview_image_url,alt_text,variants,width,height`;
  return fetchTwitter(url);
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = (searchParams.get("username") || "aniket_abncap").trim();
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Number(limitParam) : 10;

    if (!BEARER_TOKEN) {
      return NextResponse.json(
        { error: "Missing TWITTER_BEARER_TOKEN on server" },
        { status: 401 }
      );
    }

    // 1) Resolve user
    const userResp = await getUser(username);
    const user = userResp?.data;
    if (!user?.id) {
      return NextResponse.json(
        { error: "User not found", tweets: [] },
        { status: 404 }
      );
    }

    // 2) Fetch tweets with media
    const tweetsResp = await getTweets(user.id, limit);

    const usersArr = tweetsResp?.includes?.users || [];
    const mediaArr = tweetsResp?.includes?.media || [];

    const usersById = new Map<string, any>(usersArr.map((u: any) => [u.id, u]));
    const mediaByKey = new Map<string, any>(
      mediaArr.map((m: any) => [m.media_key, m])
    );

    const tweets = (tweetsResp?.data || []).map((t: any) => {
      const author = usersById.get(t.author_id) || user;
      const media = (t?.attachments?.media_keys || [])
        .map((k: string) => mediaByKey.get(k))
        .filter(Boolean);

      return {
        id: t.id,
        text: t.text,
        created_at: t.created_at,
        url: `https://x.com/${author?.username}/status/${t.id}`,
        author: {
          name: author?.name,
          username: author?.username,
          profile_image_url: author?.profile_image_url,
        },
        media,
        metrics: t.public_metrics,
      };
    });

    return NextResponse.json({ tweets }, { status: 200 });
  } catch (err: any) {
    // Log server-side for debugging (do not leak tokens)
    console.error("[/api/twitter/timeline] error:", err?.message || err);

    if (err instanceof TwitterError) {
      const body: Record<string, any> = {
        error: err.message,
      };
      const headers: Record<string, string> = {};

      if (typeof err.retryAfter === "number" && !Number.isNaN(err.retryAfter)) {
        headers["Retry-After"] = String(err.retryAfter);
      }

      return new NextResponse(JSON.stringify(body), {
        status: err.status,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
    }

    const msg = String(err?.message || "Unknown error");
    // Fallback mapping if it wasn't a TwitterError
    const status =
      msg.includes("unauthorized") || msg.includes("401")
        ? 401
        : msg.includes("403")
        ? 403
        : msg.includes("429")
        ? 429
        : 500;

    return NextResponse.json({ error: msg }, { status });
  }
}