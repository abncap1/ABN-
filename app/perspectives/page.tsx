"use client";

import React, { useState } from "react";
import { Play, ExternalLink, X } from "lucide-react";
import { XTimeline } from "@/components/XTimeline";
// Lightweight X (Twitter) timeline embed (markup + widgets.js)
function TwEmbed({
  profile = "aniket_abncap",
  height = 600,
}: {
  profile?: string;
  height?: number;
}) {
  const [loaded, setLoaded] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const ensureScript = () =>
      new Promise<void>((resolve, reject) => {
        // already present
        if ((window as any).twttr?.widgets) return resolve();
        const existing = document.getElementById("twitter-widgets");
        if (existing) {
          existing.addEventListener("load", () => resolve());
          existing.addEventListener("error", () =>
            reject(new Error("widgets.js failed"))
          );
          return;
        }
        const s = document.createElement("script");
        s.id = "twitter-widgets";
        s.src = "https://platform.twitter.com/widgets.js";
        s.async = true;
        s.charset = "utf-8";
        s.onload = () => resolve();
        s.onerror = () => reject(new Error("widgets.js failed"));
        document.body.appendChild(s);
      });

    ensureScript()
      .then(() => {
        // Render/upgrade any anchors inside container
        try {
          (window as any).twttr?.widgets?.load &&
            containerRef.current &&
            (window as any).twttr.widgets.load(containerRef.current);
          setLoaded(true);
        } catch (e) {
          setLoaded(false);
        }
      })
      .catch(() => setLoaded(false));
  }, [profile, height]);

  return (
    <div className="w-full flex justify-center">
      {/* The timeline honors parent width (max 520px per X docs). */}
      <div ref={containerRef} className="w-full max-w-[520px] mx-auto">
        <a
          className="twitter-timeline"
          href={`https://twitter.com/${profile}`}
          data-height={String(height)}
          data-chrome="noheader nofooter noborders transparent"
          data-dnt="true"
          data-aria-polite="polite"
        >
          Tweets by @{profile}
        </a>
        {!loaded && (
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center">
            Loading timeline…
          </div>
        )}
      </div>
    </div>
  );
}

interface VideoData {
  id: string;
  embedUrl: string;
  title: string;
}

const videos: VideoData[] = [
  {
    id: "YtrY0oyd-Ls",
    embedUrl: "https://www.youtube.com/embed/YtrY0oyd-Ls",
    title: "",
  },
  {
    id: "LsV5nMxwTGM",
    embedUrl: "https://www.youtube.com/embed/LsV5nMxwTGM",
    title: "",
  },
  {
    id: "LsV5dfvxwTGM",
    embedUrl: "https://www.youtube.com/embed/fEroxqDOaps?si=lxmzU5nc97dBheIf",
    title: "",
  },
  
];

export default function PerspectivePage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Expert Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            Investment Perspectives
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/80 leading-relaxed mb-8">
            Gain valuable insights from our expertise in the areas of business
            building in India
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center font-sans"
            onClick={() =>
              document
                .getElementById("videos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Play className="mr-2 h-5 w-5" />
            Explore Videos
          </button>
        </div>
      </section>

      <section id="videos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-sans">
              Featured Content
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-sans">
              Watch our latest educational videos covering essential investment
              topics and market insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="p-0">
                  <div className="relative aspect-video bg-slate-100 dark:bg-slate-700 rounded-t-lg overflow-hidden">
                    <iframe
                      src={`${video.embedUrl}?rel=0&modestbranding=1`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="bg-blue-600/90 text-white rounded-full p-4">
                        <Play className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-sans">
                      {video.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center font-sans"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(video);
                        }}
                      >
                        Watch Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 mb-12 px-4">
        <a
          href="https://x.com/aniket_abncap?t=c1yinpbZSsbHm4ZAWjUiAg&s=08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on X (Twitter)"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-neutral-950 hover:bg-neutral-900 rounded-2xl shadow-lg transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.52l-5.178-6.776L5.36 21.75H2.05l7.732-8.843L1.56 2.25H7.7l4.663 6.105 5.881-6.105z" />
          </svg>
          <span className="truncate">Connect on X (Twitter)</span>
        </a>

        <a
          href="https://www.linkedin.com/in/aniketnikumb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#0077b5] hover:bg-[#006097] rounded-2xl shadow-lg transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#006097]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.77 0 5-2.24 5-5v-14c0-2.76-2.23-5-5-5zm-11.47 20h-2.99v-9.99h2.99v9.99zm-1.49-11.43c-.96 0-1.73-.78-1.73-1.73s.77-1.73 1.73-1.73 1.73.77 1.73 1.73-.78 1.73-1.73 1.73zm13.46 11.43h-2.99v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5h-2.99v-9.99h2.87v1.36h.04c.4-.75 1.37-1.54 2.83-1.54 3.03 0 3.59 2 3.59 4.6v5.57z" />
          </svg>
          <span className="truncate">Connect on LinkedIn</span>
        </a>
      </div>

      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-sans">
            Follow Us on Twitter
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 font-sans">
            Stay updated with our latest market insights, trends, and
            announcements.
          </p>
          <XTimeline
            screenName="aniket_abncap"
            mode="api"
            apiPath="/api/twitter/timeline"
          />{" "}
        </div>
      </section>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full bg-slate-100 dark:bg-slate-700">
              <iframe
                src={`${selectedVideo.embedUrl}?rel=0&modestbranding=1&autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedVideo.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
