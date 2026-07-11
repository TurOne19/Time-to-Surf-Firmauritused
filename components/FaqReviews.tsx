"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";
import ReviewModal from "./ReviewModal";
import { Crab } from "./Critters";

const PAGE_SIZE = 3;

function localeTag(locale: string) {
  if (locale === "ru") return "ru-RU";
  if (locale === "en") return "en-GB";
  return "et-EE";
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating}/5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={n <= rating ? "#D9A94E" : "none"}
          stroke="#D9A94E"
          strokeWidth="1.4"
        >
          <path d="M12 3.5L14.7 9.3L21 10.1L16.5 14.4L17.6 20.6L12 17.6L6.4 20.6L7.5 14.4L3 10.1L9.3 9.3Z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export default function FaqReviews() {
  const { t, locale } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [page, setPage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const pageCount = Math.ceil(t.reviews.items.length / PAGE_SIZE);
  const visibleReviews = useMemo(
    () => t.reviews.items.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [t.reviews.items, page]
  );

  const dateFmt = useMemo(
    () => new Intl.DateTimeFormat(localeTag(locale), { month: "long", year: "numeric" }),
    [locale]
  );

  return (
    <section id="faq" className="bg-sand relative overflow-hidden">
      <Crab className="hidden lg:block absolute top-16 right-10 w-14 h-11 text-ink/10" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* FAQ column */}
          <Reveal>
            <p className="font-label text-ink/60 text-xs tracking-widest2 uppercase mb-4">
              {t.faq.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.12] text-balance mb-8">
              {t.faq.title}
            </h2>

            <div className="flex flex-col border-t border-ink/15">
              {t.faq.items.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} className="border-b border-ink/15">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="font-display text-base md:text-lg text-ink pr-4">
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 text-gold-2 text-xl transition-transform duration-300 ${
                          open ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-body text-ink/70 text-sm md:text-base leading-relaxed pr-6">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Reviews column */}
          <Reveal delay={120}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="font-label text-ink/60 text-xs tracking-widest2 uppercase mb-4">
                  {t.reviews.eyebrow}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.12] text-balance">
                  {t.reviews.title}
                </h2>
              </div>

              {pageCount > 1 && (
                <div className="hidden sm:flex flex-col gap-1.5 shrink-0 pt-2">
                  <button
                    onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
                    aria-label={t.reviews.prev}
                    className="w-9 h-9 border border-ink/25 flex items-center justify-center hover:border-gold-2 hover:text-gold-2 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 15L12 8L19 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setPage((p) => (p + 1) % pageCount)}
                    aria-label={t.reviews.next}
                    className="w-9 h-9 border border-ink/25 flex items-center justify-center hover:border-gold-2 hover:text-gold-2 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 9L12 16L19 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3.5 min-h-[300px]">
              {visibleReviews.map((r, i) => (
                <div key={`${page}-${i}`} className="bg-ivory/70 border border-ink/10 p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-display text-base text-ink">{r.name}</p>
                      <p className="font-body text-xs text-ink/50">{r.role}</p>
                    </div>
                    <Stars rating={r.rating} />
                  </div>
                  <p className="font-body text-sm text-ink/75 leading-relaxed mb-3">{r.text}</p>
                  <div className="flex items-center gap-2 font-label text-[10px] tracking-wideish uppercase text-ink/40">
                    <span className="text-foam">✓</span>
                    {t.reviews.badge}
                    <span className="text-ink/25">·</span>
                    {dateFmt.format(new Date(r.date))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-6">
              {pageCount > 1 ? (
                <p className="font-label text-[11px] tracking-wideish uppercase text-ink/40">
                  {t.reviews.pageOf} {page + 1}/{pageCount}
                </p>
              ) : (
                <span />
              )}
              <button
                onClick={() => setModalOpen(true)}
                className="font-label text-xs tracking-wideish uppercase border border-ink/30 text-ink px-5 py-2.5 hover:border-gold hover:text-gold-2 transition-colors"
              >
                {t.reviews.leaveReview}
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {modalOpen && <ReviewModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
