export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";

// --- lightweight in-memory caches (reset on serverless cold start) ---
type CacheEntry<T> = { data: T; expiresAt: number };
const g: any = globalThis as any;
if (!g.__x_timeline_cache) g.__x_timeline_cache = new Map<string, CacheEntry<any>>();
if (!g.__x_user_cache) g.__x_user_cache = new Map<string, CacheEntry<any>>();
const timelineCache: Map<string, CacheEntry<any>> = g.__x_timeline_cache;
const userCache: Map<string, CacheEntry<any>> = g.__x_user_cache;

if (!g.__x_rate_cooldown) g.__x_rate_cooldown = new Map<string, number>();
const cooldownMap: Map<string, number> = g.__x_rate_cooldown;
const RATE_WINDOW_MS = 60_000; // 1 minute soft-cooldown per username+limit
function shouldCooldown(key: string) {
  const last = cooldownMap.get(key) || 0;
  const now = Date.now();
  const remaining = last + RATE_WINDOW_MS - now;
  return { active: remaining > 0, remaining };
}
function tripCooldown(key: string) {
  cooldownMap.set(key, Date.now());
}

function cacheGet<T>(map: Map<string, CacheEntry<T>>, key: string): T | undefined {
  const entry = map.get(key);
  if (!entry) return undefined;
  if (Date.now() > entry.expiresAt) {
    map.delete(key);
    return undefined;
  }
  return entry.data;
  }
function cacheSet<T>(map: Map<string, CacheEntry<T>>, key: string, data: T, ttlMs: number) {
  map.set(key, { data, expiresAt: Date.now() + ttlMs });
}

/**
 * Robust Twitter v2 timeline proxy with proper error surfacing and media support.
 */
function fallbackPayload(u: string) {
  return {
    tweets: [],
    fallback: {
      type: "profile",
      username: u,
      // Frontend can render <a class="twitter-timeline" href="https://twitter.com/${u}" ...></a>
      embedParams: {
        "data-width": "400",
        "data-height": "600",
        "data-chrome": "nofooter noborders"
      }
    }
  };
}

// Prefer secure server-side env; do NOT expose token to client. If missing, we also check NEXT_PUBLIC_* on the server
// to ease misconfigured deployments (reading it here does not send it to the client).
const BEARER_TOKEN =
  process.env.TWITTER_BEARER_TOKEN ||
  process.env.X_BEARER_TOKEN ||
  process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN ||
  "";

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
  const cacheKey = `user:${username.toLowerCase()}`;
  const cached = cacheGet<any>(userCache, cacheKey);
  if (cached) return cached;

  const url = `${TWITTER_API_BASE_URL}/users/by/username/${encodeURIComponent(
    username
  )}?user.fields=profile_image_url,name,username`;
  const resp = await fetchTwitter(url);
  cacheSet(userCache, cacheKey, resp, 24 * 60 * 60 * 1000); // cache user id for 24h
  return resp;
}

async function getTweets(userId: string, max = 10) {
  const clamped = Math.min(Math.max(max, 5), 25);
  const url =
    `${TWITTER_API_BASE_URL}/users/${userId}/tweets` +
    `?max_results=${clamped}` +
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

    const cacheKey = `timeline:${username.toLowerCase()}:${Math.min(Math.max(limit, 5), 25)}`;

    const cd = shouldCooldown(cacheKey);
    if (cd.active) {
      const cachedOnCooldown = cacheGet<any>(timelineCache, cacheKey);
      if (cachedOnCooldown) {
        return new NextResponse(JSON.stringify(cachedOnCooldown), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=600",
            "X-Cache": "COOLDOWN-HIT",
          },
        });
      }
    }


    const cachedTimeline = cacheGet<any>(timelineCache, cacheKey);
    if (cachedTimeline) {
      return new NextResponse(JSON.stringify(cachedTimeline), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=600",
          "X-Cache": "HIT",
        },
      });
    }

    if (!BEARER_TOKEN) {
      const payload = fallbackPayload(username);
      return new NextResponse(JSON.stringify(payload), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=1800",
          "X-Cache": "FALLBACK-NO-TOKEN"
        }
      });
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

    const payload = { tweets };
    tripCooldown(cacheKey);
    // Cache timelines for 2 minutes to absorb rate limits; serve stale on 429 later.
    cacheSet(timelineCache, cacheKey, payload, 2 * 60 * 1000);

    return new NextResponse(JSON.stringify(payload), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=600",
        "X-Cache": "MISS",
      },
    });
  } catch (err: any) {
    // Log server-side for debugging (do not leak tokens)
    console.error("[/api/twitter/timeline] error:", err?.message || err);

    // Serve stale cached timeline on rate-limit (best-effort UX)
    if (err instanceof TwitterError && err.status === 429) {
      {
        const urlObj = new URL(req.url);
        const username = (urlObj.searchParams.get("username") || "aniket_abncap").trim().toLowerCase();
        const limitParam = urlObj.searchParams.get("limit");
        const limit = limitParam ? Number(limitParam) : 10;
        const cacheKey = `timeline:${username}:${Math.min(Math.max(limit, 5), 25)}`;

        const stale = timelineCache.get(cacheKey);
        if (stale?.data) {
          return new NextResponse(JSON.stringify({ ...stale.data, stale: true }), {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=600",
              "X-Cache": "STALE",
            },
          });
        }

        // No stale cache available — return fallback embed payload so the client can use widgets.js
        const payload = fallbackPayload(username);
        return new NextResponse(JSON.stringify({ ...payload, rate_limited: true }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=120, s-maxage=120, stale-while-revalidate=1200",
            "X-Cache": "FALLBACK-429",
            ...(typeof err.retryAfter === "number" && !Number.isNaN(err.retryAfter) ? { "Retry-After": String(err.retryAfter) } : {})
          },
        });
      }
    }

    if (err instanceof TwitterError) {
      const urlObj = new URL(req.url);
      const username = (urlObj.searchParams.get("username") || "aniket_abncap").trim().toLowerCase();

      if (err.status === 401 || err.status === 403 || err.status === 429) {
        const payload = fallbackPayload(username);
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=180, s-maxage=180, stale-while-revalidate=900",
          "X-Cache": `FALLBACK-${err.status}`
        };
        if (typeof err.retryAfter === "number" && !Number.isNaN(err.retryAfter)) {
          headers["Retry-After"] = String(err.retryAfter);
        }
        return new NextResponse(JSON.stringify({ ...payload, error: err.message, status: err.status }), {
          status: 200,
          headers
        });
      }

      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (typeof err.retryAfter === "number" && !Number.isNaN(err.retryAfter)) {
        headers["Retry-After"] = String(err.retryAfter);
      }
      return new NextResponse(JSON.stringify({ error: err.message, status: err.status }), { status: err.status, headers });
    }

    const msg = String(err?.message || "Unknown error");
    if (!BEARER_TOKEN) {
      return NextResponse.json(
        {
          error: "Server missing X API credentials.",
          hint:
            "Configure TWITTER_BEARER_TOKEN in server env (Vercel dashboard) and redeploy.",
        },
        { status: 500 }
      );
    }
    // Fallback mapping if it wasn't a TwitterError
    const status =
      msg.includes("unauthorized") || msg.includes("401")
        ? 401
        : msg.includes("403")
        ? 403
        : msg.includes("429")
        ? 429
        : 500;

    if (status === 401 || status === 403 || status === 429) {
      const urlObj = new URL(req.url);
      const username = (urlObj.searchParams.get("username") || "aniket_abncap").trim().toLowerCase();
      const payload = fallbackPayload(username);
      return new NextResponse(JSON.stringify({ ...payload, error: msg, status }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=180, s-maxage=180, stale-while-revalidate=900",
          "X-Cache": `FALLBACK-${status}`
        }
      });
    }
    return NextResponse.json({ error: msg }, { status });
  }
}