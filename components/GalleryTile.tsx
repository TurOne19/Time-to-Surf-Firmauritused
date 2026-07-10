"use client";

import { useState } from "react";
import { GalleryItem, toneFor } from "@/lib/gallery";

interface Props {
  item: GalleryItem;
  photoLabel: string;
  videoLabel: string;
  onOpen: () => void;
}

export default function GalleryTile({ item, photoLabel, videoLabel, onOpen }: Props) {
  const [errored, setErrored] = useState(false);
  const [from, to] = toneFor(item.index + (item.type === "video" ? 3 : 0));
  const label = item.type === "photo" ? photoLabel : videoLabel;

  const showImage = !errored;
  const imgSrc = item.type === "photo" ? item.src : item.poster;

  return (
    <button
      onClick={onOpen}
      className="group relative aspect-[4/5] w-full overflow-hidden bg-ink text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      aria-label={`${label} ${item.index}`}
    >
      {showImage && imgSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt={`${label} ${item.index} — Time to Surf`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      )}

      {!showImage && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-transform duration-700 group-hover:scale-[1.06]"
          style={{
            background: `linear-gradient(155deg, ${from} 0%, ${to} 100%)`,
          }}
        >
          <span className="text-gold/80" aria-hidden="true">
            {item.type === "photo" ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="2.5" y="6" width="19" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 6L9.5 3.5H14.5L16 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor" />
              </svg>
            )}
          </span>
          <span className="font-label text-[11px] tracking-wideish uppercase text-ivory/60">
            {label} {String(item.index).padStart(2, "0")}
          </span>
        </div>
      )}

      {item.type === "video" && (
        <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ink/60 backdrop-blur-sm flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M8 5.5L18 12L8 18.5V5.5Z" fill="#EFE3CB" />
          </svg>
        </span>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
