"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { getGalleryItems } from "@/lib/gallery";
import GalleryTile from "./GalleryTile";
import Lightbox from "./Lightbox";

type Filter = "all" | "photo" | "video";

const INITIAL_COUNT = 16;

export default function Gallery() {
  const { t } = useLanguage();
  const allItems = useMemo(() => getGalleryItems(), []);
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? allItems : allItems.filter((i) => i.type === filter)),
    [allItems, filter]
  );

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="gallery" className="bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-14">
          <div className="max-w-xl">
            <p className="font-label text-ink/60 text-xs tracking-widest2 uppercase mb-4 flex items-center gap-3">
              <span className="text-gold" aria-hidden="true">❖</span>
              {t.gallery.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.12] text-balance mb-4">
              {t.gallery.title}
            </h2>
            <p className="font-body text-ink/70 text-base leading-relaxed">
              {t.gallery.subtitle}
            </p>
          </div>

          <div className="flex gap-2 font-label text-xs tracking-wideish uppercase shrink-0">
            {(["all", "photo", "video"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setExpanded(false);
                }}
                className={`px-4 py-2 border transition-colors ${
                  filter === f
                    ? "bg-ink text-ivory border-ink"
                    : "border-ink/25 text-ink/60 hover:border-ink/60"
                }`}
              >
                {t.gallery.filters[f]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3">
          {visible.map((item, i) => (
            <GalleryTile
              key={item.id}
              item={item}
              photoLabel={t.gallery.photoLabel}
              videoLabel={t.gallery.videoLabel}
              onOpen={() => setOpenIndex(filtered.indexOf(item))}
            />
          ))}
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="font-label text-xs tracking-wideish uppercase border border-ink/30 text-ink px-6 py-3 hover:border-gold hover:text-gold-2 transition-colors"
            >
              {expanded ? t.gallery.showLess : `${t.gallery.showAll} (${filtered.length})`}
            </button>
          </div>
        )}

        <p className="font-body text-xs text-ink/40 mt-8 max-w-md">{t.gallery.note}</p>
      </div>

      {openIndex !== null && (
        <Lightbox
          items={filtered}
          startIndex={openIndex}
          photoLabel={t.gallery.photoLabel}
          videoLabel={t.gallery.videoLabel}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
