"use client";


import React, { useEffect, useRef, useState } from 'react';

// util: simple relative time
function timeAgo(iso?: string) {
  if (!iso) return '';
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diff = Math.max(0, Math.floor((now - then) / 1000));
  const units: [number, string][] = [
    [60, 's'],
    [60, 'm'],
    [24, 'h'],
    [7, 'd'],
    [4.345, 'w'],
    [12, 'mo'],
  ];
  let val = diff;
  let label = 's';
  for (let i = 0; i < units.length; i++) {
    const [step, l] = units[i];
    if (val < step) { label = l; break; }
    val = Math.floor(val / step);
    label = l;
  }
  return `${val}${label}`;
}

function linkify(text: string) {
  if (!text) return text;
  // URLs
  let out = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1<\/a>');
  // Mentions
  out = out.replace(/(^|\s)@([a-zA-Z0-9_]{1,15})/g, '$1<a href="https://twitter.com/$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">@$2<\/a>');
  // Hashtags
  out = out.replace(/(^|\s)#(\w+)/g, '$1<a href="https://twitter.com/hashtag/$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">#$2<\/a>');
  return out;
}

// Lightweight types for API mode
// Extend as your API grows (media, metrics, etc.)
type ApiMedia = {
  type: 'photo' | 'video' | 'animated_gif';
  url?: string; // direct media URL (photo)
  preview_image_url?: string; // for video/gif
};

type ApiTweet = {
  id: string;
  text: string;
  created_at?: string;
  author?: { name?: string; username?: string; profile_image_url?: string };
  url?: string;
  media?: ApiMedia[]; // optional media array
};


interface XTimelineProps {
  screenName?: string;
  height?: number;
  theme?: 'light' | 'dark';
  useMarkup?: boolean;
  /**
   * widgets: use platform.twitter.com/widgets.js
   * api: fetch from your server route (e.g. /api/twitter/timeline)
   */
  mode?: 'widgets' | 'api';
  /**
   * When mode==='api', this endpoint will be called with `?username=<screenName>`
   * Defaults to `/api/twitter/timeline`.
   */
  apiPath?: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTimeline: (
          source: { sourceType: string; screenName: string },
          target: HTMLElement,
          options?: {
            height?: number;
            theme?: string;
            chrome?: string;
          }
        ) => Promise<HTMLElement>;
        load: (element?: HTMLElement) => void;
      };
      ready?: (callback: () => void) => void;
    };
  }
}

export function XTimeline({
  screenName = 'aniket_abncap',
  height = 600,
  theme = 'light',
  useMarkup = false,
  mode = 'widgets',
  apiPath = '/api/twitter/timeline',
}: XTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fallbackMarkup, setFallbackMarkup] = useState(false);

  // API mode state
  const [tweets, setTweets] = useState<ApiTweet[] | null>(null);
  const [loadingApi, setLoadingApi] = useState(false);

  // --- API mode: fetch pre-rendered timeline via your server route ---
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (mode !== 'api') return;

    const controller = new AbortController();
    const load = async () => {
      try {
        setLoadingApi(true);
        setError(null);
        setTweets(null);
        const url = `${apiPath}?username=${encodeURIComponent(screenName)}`;
        const res = await fetch(url, { signal: controller.signal, headers: { 'Accept': 'application/json' } });
        if (!res.ok) {
          throw new Error(`Timeline request failed (${res.status})`);
        }
        const json = await res.json();
        // Expecting { tweets: ApiTweet[] }
        const items: ApiTweet[] = Array.isArray(json?.tweets) ? json.tweets : [];
        setTweets(items);
      } catch (e: any) {
        if (e?.name !== 'AbortError') {
          console.error('[XTimeline] API mode failed:', e);
          setError(e?.message || 'Failed to load timeline');
        }
      } finally {
        setLoadingApi(false);
      }
    };

    load();
    return () => controller.abort();
  }, [mode, apiPath, screenName]);

  // --- load twitter widgets.js only on client and only once ---
  const ensureTwitterScript = () =>
    new Promise<void>((resolve, reject) => {
      if (typeof window === 'undefined') return reject(new Error('SSR'));

      // Already present & initialized
      if (window.twttr?.widgets) {
        resolve();
        return;
      }

      // Existing tag present but not loaded yet
      const existing = document.getElementById('twitter-widgets');
      if (existing) {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => reject(new Error('widgets.js failed to load')));
        return;
      }

      const script = document.createElement('script');
      script.id = 'twitter-widgets';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      script.onload = () => {
        // widgets.js loaded; wait for twttr to be ready if available
        if (window.twttr?.ready) {
          window.twttr.ready(() => resolve());
        } else {
          // fallback: resolve on next tick
          setTimeout(() => resolve(), 0);
        }
      };
      script.onerror = () => reject(new Error('widgets.js failed to load'));
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    });

  const renderTimeline = async () => {
    try {
      if (mode !== 'widgets') return;
      await ensureTwitterScript();

      if (useMarkup) {
        setFallbackMarkup(true);
        window.twttr?.widgets?.load?.(containerRef.current || undefined);
        setIsLoaded(true);
        setError(null);
        return;
      }

      const target = containerRef.current;
      if (!target || !window.twttr?.widgets) {
        throw new Error('Twitter widgets not ready');
      }

      // Clear previous embed (useful on prop changes/navigation)
      target.innerHTML = '';
      setFallbackMarkup(false);

      await window.twttr.widgets.createTimeline(
        { sourceType: 'profile', screenName },
        target,
        {
          height,
          theme,
          // hide chrome to avoid layout issues on small screens
          chrome: 'noheader nofooter noborders transparent',
        }
      );

      setIsLoaded(true);
      setError(null);
    } catch (e: any) {
      console.error('[XTimeline] Failed to load timeline:', e);
      setFallbackMarkup(true);
      setIsLoaded(false);
      window.twttr?.widgets?.load?.(containerRef.current || undefined);
      setError(null);
    }
  };

  useEffect(() => {
    if (mode !== 'widgets') return;
    let cancelled = false;
    const go = async () => {
      await renderTimeline();
      if (cancelled) return;
      // Some adblockers delay widget init; try a second pass if nothing rendered after a short delay
      setTimeout(() => {
        if (!cancelled) {
          if (!useMarkup && containerRef.current && containerRef.current.childElementCount === 0) {
            setFallbackMarkup(true);
            // Trigger parsing of the newly shown <a class="twitter-timeline"> markup
            window.twttr?.widgets?.load?.(containerRef.current);
          }
        }
      }, 1200);
    };
    go();
    return () => {
      cancelled = true;
    };
    // re-render if props change
  }, [mode, screenName, height, theme, useMarkup]);

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* API MODE */}
        {mode === 'api' && (
          <div className="min-h-[200px]">
            {loadingApi && (
              <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border-2 border-slate-300 dark:border-slate-600 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-3 w-1/3 rounded bg-slate-200 dark:bg-slate-700 mb-2 animate-pulse" />
                    <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
                  <div className="h-3 w-5/6 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
                  <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
                </div>
              </div>
            )}
            {!loadingApi && error && (
              <div className="p-4 text-sm text-red-700 bg-red-50 rounded border border-red-200">{error}</div>
            )}
            {!loadingApi && !error && Array.isArray(tweets) && tweets.length > 0 && (
              <ul className="space-y-4">
                {tweets.map((t) => (
                  <li key={t.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
                    <div className="flex gap-3">
                      {t.author?.profile_image_url && (
                        <img src={t.author.profile_image_url} alt={t.author?.name || 'avatar'} className="h-11 w-11 rounded-full object-cover" />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 text-[13px] sm:text-sm text-slate-600 dark:text-slate-300">
                          <span className="font-semibold text-slate-900 dark:text-slate-100">{t.author?.name || screenName}</span>
                          <span className="truncate">@{t.author?.username || screenName}</span>
                          {t.created_at && <span className="opacity-70">· {timeAgo(t.created_at)}</span>}
                        </div>
                        <div className="mt-1 text-[15px] sm:text-base leading-relaxed text-slate-900 dark:text-slate-100" dangerouslySetInnerHTML={{ __html: linkify(t.text) }} />

                        {/* Media grid */}
                        {Array.isArray(t.media) && t.media.length > 0 && (
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {t.media.map((m, i) => (
                              <div key={i} className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                                {m.type === 'photo' && m.url && (
                                  <img src={m.url} alt="tweet media" className="w-full h-auto object-cover" />
                                )}
                                {m.type !== 'photo' && (m.preview_image_url || m.url) && (
                                  <a href={t.url || (m.url || '#')} target="_blank" rel="noopener noreferrer" className="group block relative">
                                    <img src={(m.preview_image_url || m.url)!} alt="tweet media preview" className="w-full h-auto object-cover" />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                      <span className="px-3 py-1 rounded-full bg-white/90 text-black text-xs font-medium">Play on X</span>
                                    </div>
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="mt-3 flex items-center gap-3">
                          {t.url && (
                            <a href={t.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M13.5 6H18a3 3 0 013 3v9a3 3 0 01-3 3H6a3 3 0 01-3-3v-4.5a1.5 1.5 0 013 0V18a.75.75 0 00.75.75H18A.75.75 0 0018.75 18V9A.75.75 0 0018 8.25h-4.5a1.5 1.5 0 010-3z"/><path d="M8.25 3a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 003 0V7.5h3a1.5 1.5 0 000-3h-3V4.5a1.5 1.5 0 00-1.5-1.5z"/></svg>
                              View on X
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {!loadingApi && !error && Array.isArray(tweets) && tweets.length === 0 && (
              <div className="p-4 text-sm text-slate-600 dark:text-slate-300">No Tweets to show.</div>
            )}
          </div>
        )}

        {/* WIDGETS MODE */}
        {mode === 'widgets' && (
          <div ref={containerRef} className="min-h-[400px]">
            {(fallbackMarkup || useMarkup) && (
              <a className="twitter-timeline"
                href={`https://twitter.com/${screenName}`}
                data-height={String(height)}
                data-chrome="noheader nofooter noborders transparent">
                Tweets by @{screenName}
              </a>
            )}
            {!isLoaded && !fallbackMarkup && !useMarkup && (
              <div className="flex items-center justify-center h-[400px] bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-center px-6">
                  <div className="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent mx-auto mb-4"></div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Loading timeline…</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
