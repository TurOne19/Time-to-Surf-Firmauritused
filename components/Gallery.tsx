"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { GalleryItem, getGalleryItems } from "@/lib/gallery";
import GalleryTile from "./GalleryTile";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

type Filter = "all" | "photo" | "video";

const INITIAL_COUNT = 16;

const curatedItems: GalleryItem[] = [
  { id: "story-atmosphere", index: 1, type: "photo", src: "/gallery/DSC_8879.jpg" },
  { id: "story-people", index: 2, type: "photo", src: "/gallery/DSC_8978.jpg" },
  { id: "story-details", index: 3, type: "photo", src: "/gallery/IMG_8781.JPG" },
  { id: "story-equipment", index: 4, type: "photo", src: "/gallery/DSC_9001.jpg" },
  { id: "story-finale", index: 5, type: "photo", src: "/gallery/DSC_8989.jpg" },
];

const curatedTiles = [
  "md:col-start-1 md:col-end-8 md:row-start-1 md:row-end-8",
  "md:col-start-8 md:col-end-11 md:row-start-1 md:row-end-4",
  "md:col-start-11 md:col-end-13 md:row-start-1 md:row-end-4",
  "md:col-start-8 md:col-end-10 md:row-start-4 md:row-end-8",
  "md:col-start-10 md:col-end-13 md:row-start-4 md:row-end-8",
];

const curatedPositions = [
  "object-center",
  "object-[65%_62%]",
  "object-[42%_55%]",
  "object-[22%_78%]",
  "object-[58%_58%]",
];

export default function Gallery() {
  const { t } = useLanguage();
  const allItems = useMemo(() => getGalleryItems(), []);
  const [filter, setFilter] = useState<Filter>("all");
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<{ items: GalleryItem[]; index: number } | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? allItems : allItems.filter((item) => item.type === filter)),
    [allItems, filter]
  );
  const visibleArchive = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="gallery" className="relative overflow-hidden bg-sand">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-ink/10" aria-hidden="true" />

      <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-20">
        <Reveal className="mb-8 grid gap-6 md:grid-cols-12 md:items-end lg:mb-9">
          <div className="md:col-span-7">
            <p className="mb-4 flex items-center gap-3 font-label text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/50">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {t.gallery.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-medium leading-none tracking-[-0.025em] text-ink sm:text-5xl lg:text-6xl">
              {t.gallery.title}
            </h2>
          </div>
          <p className="max-w-md font-body text-sm leading-relaxed text-ink/60 md:col-span-5 md:justify-self-end md:text-right">
            {t.gallery.storySubtitle}
          </p>
        </Reveal>

        <Reveal className="grid auto-rows-[150px] grid-cols-2 gap-2 sm:auto-rows-[190px] md:h-[500px] md:grid-cols-12 md:grid-rows-7 md:gap-2.5" delay={100}>
          {curatedItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox({ items: curatedItems, index })}
              className={`group relative overflow-hidden bg-ink text-left ${
                index === 0 ? "col-span-2 row-span-2" : ""
              } ${curatedTiles[index]}`}
              aria-label={`${t.gallery.photoLabel}: ${t.gallery.curatedCaptions[index]}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={t.gallery.curatedAlts[index]}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] ${curatedPositions[index]}`}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              <span className="absolute bottom-0 left-0 flex w-full items-end justify-between gap-3 p-4 text-ivory md:p-3.5 lg:p-4">
                <span>
                  <span className="block font-label text-[8px] uppercase tracking-[0.2em] text-gold">
                    0{index + 1}
                  </span>
                  <span className="mt-1 block font-display text-lg leading-none md:text-base lg:text-lg">
                    {t.gallery.curatedCaptions[index]}
                  </span>
                </span>
                <span className="mb-0.5 hidden h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ivory/35 text-xs transition-colors group-hover:border-gold group-hover:text-gold sm:flex" aria-hidden="true">
                  +
                </span>
              </span>
            </button>
          ))}
        </Reveal>

        <div className="mt-7 flex flex-col items-start justify-between gap-5 border-t border-ink/15 pt-5 sm:flex-row sm:items-center">
          <p className="max-w-lg font-display text-base italic leading-relaxed text-ink/55">
            {t.gallery.storyNote}
          </p>
          <button
            type="button"
            onClick={() => setArchiveOpen((open) => !open)}
            className="group inline-flex shrink-0 items-center gap-4 font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-ink"
            aria-expanded={archiveOpen}
          >
            <span className="border-b border-ink/30 pb-1 transition-colors group-hover:border-gold">
              {archiveOpen ? t.gallery.showLess : t.gallery.viewFull}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-ivory transition-colors group-hover:bg-gold group-hover:text-ink" aria-hidden="true">
              {archiveOpen ? "−" : "→"}
            </span>
          </button>
        </div>

        {archiveOpen && (
          <div className="mt-14 border-t border-ink/15 pt-10">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/45">
                {t.gallery.archiveTitle}
              </p>
              <div className="flex gap-2 font-label text-[10px] uppercase tracking-wideish">
                {(["all", "photo", "video"] as Filter[]).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setFilter(value);
                      setShowAll(false);
                    }}
                    className={`border px-4 py-2 transition-colors ${
                      filter === value
                        ? "border-ink bg-ink text-ivory"
                        : "border-ink/20 text-ink/55 hover:border-ink/50"
                    }`}
                  >
                    {t.gallery.filters[value]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {visibleArchive.map((item) => (
                <GalleryTile
                  key={item.id}
                  item={item}
                  photoLabel={t.gallery.photoLabel}
                  videoLabel={t.gallery.videoLabel}
                  onOpen={() => setLightbox({ items: filtered, index: filtered.indexOf(item) })}
                />
              ))}
            </div>

            {filtered.length > INITIAL_COUNT && (
              <div className="mt-9 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAll((value) => !value)}
                  className="border border-ink/25 px-6 py-3 font-label text-[10px] uppercase tracking-wideish text-ink transition-colors hover:border-gold hover:text-gold-2"
                >
                  {showAll ? t.gallery.showLess : `${t.gallery.showAll} (${filtered.length})`}
                </button>
              </div>
            )}

            <p className="mt-7 max-w-md font-body text-xs text-ink/40">{t.gallery.note}</p>
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          items={lightbox.items}
          startIndex={lightbox.index}
          photoLabel={t.gallery.photoLabel}
          videoLabel={t.gallery.videoLabel}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
