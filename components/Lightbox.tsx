"use client";

import { useEffect, useState } from "react";
import { GalleryItem, toneFor } from "@/lib/gallery";

interface Props {
  items: GalleryItem[];
  startIndex: number;
  photoLabel: string;
  videoLabel: string;
  onClose: () => void;
}

export default function Lightbox({ items, startIndex, photoLabel, videoLabel, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [errored, setErrored] = useState(false);
  const item = items[index];

  useEffect(() => {
    setErrored(false);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [items.length, onClose]);

  const [from, to] = toneFor(item.index + (item.type === "video" ? 3 : 0));
  const label = item.type === "photo" ? photoLabel : videoLabel;
  const imgSrc = item.type === "photo" ? item.src : item.poster;

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/96 backdrop-blur-md flex items-center justify-center px-4 py-10"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 md:top-8 md:right-8 text-ivory/70 hover:text-gold transition-colors"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => (i - 1 + items.length) % items.length);
        }}
        aria-label="Previous"
        className="absolute left-2 md:left-6 text-ivory/60 hover:text-gold transition-colors p-3"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M15 5L8 12L15 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className="relative max-w-3xl w-full max-h-[80vh] aspect-[4/5] md:aspect-[16/10]"
        onClick={(e) => e.stopPropagation()}
      >
        {!errored && imgSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt={`${label} ${item.index} — Time to Surf`}
            className="w-full h-full object-contain"
            onError={() => setErrored(true)}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-4"
            style={{ background: `linear-gradient(155deg, ${from} 0%, ${to} 100%)` }}
          >
            <span className="font-display text-2xl text-ivory/70">
              {label} {String(item.index).padStart(2, "0")}
            </span>
            <span className="font-label text-xs tracking-wideish uppercase text-ivory/40">
              Time to Surf
            </span>
          </div>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => (i + 1) % items.length);
        }}
        aria-label="Next"
        className="absolute right-2 md:right-6 text-ivory/60 hover:text-gold transition-colors p-3"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-label text-xs tracking-wideish text-ivory/50">
        {index + 1} / {items.length}
      </p>
    </div>
  );
}
