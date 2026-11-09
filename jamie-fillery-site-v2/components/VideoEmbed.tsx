"use client";

import { useState } from "react";
import { toEmbedUrl } from "@/lib/video";

/** Click-to-load embed: nothing from YouTube/Vimeo loads until the visitor presses play (faster, more private). */
export default function VideoEmbed({ url, title }: { url: string; title: string }) {
  const [active, setActive] = useState(false);
  const embed = toEmbedUrl(url);

  if (!embed) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        Watch {title} ↗
      </a>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-ink ring-1 ring-bone/10">
      {active ? (
        <iframe
          src={`${embed}${embed.includes("?") ? "&" : "?"}autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-graphite to-ink"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-bone/40 transition-all duration-300 group-hover:scale-105 group-hover:border-brass">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-bone" aria-hidden>
              <path d="M6 4l14 8-14 8z" />
            </svg>
          </span>
          <span className="text-xs uppercase tracking-wider2 text-mist">{title}</span>
        </button>
      )}
    </div>
  );
}
