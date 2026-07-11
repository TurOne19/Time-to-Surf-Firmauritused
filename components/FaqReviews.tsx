"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";
import ReviewModal from "./ReviewModal";

const PAGE_SIZE = 3;

function localeTag(locale: string) {
  if (locale === "ru") return "ru-RU";
  if (locale === "en") return "en-GB";
  return "et-EE";
}

function Stars({ rating, light = false }: { rating: number; light?: boolean }) {
  return (
    <div className="flex gap-1" aria-label={`${rating}/5`}>
      {[1, 2, 3, 4, 5].map((number) => (
        <svg
          key={number}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={number <= rating ? "#D9A94E" : "none"}
          stroke={number <= rating ? "#D9A94E" : light ? "rgba(247,241,227,.3)" : "rgba(12,38,48,.25)"}
          strokeWidth="1.4"
          aria-hidden="true"
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
  const pageStart = page * PAGE_SIZE;
  const visibleReviews = t.reviews.items.slice(pageStart, pageStart + PAGE_SIZE);
  const featured = visibleReviews[0];
  const secondary = visibleReviews.slice(1);

  const dateFmt = useMemo(
    () => new Intl.DateTimeFormat(localeTag(locale), { month: "long", year: "numeric" }),
    [locale]
  );

  return (
    <>
      <section id="faq" className="relative overflow-hidden bg-sand pb-28 pt-28 sm:pt-36 md:pb-40 lg:pt-44">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-6 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {t.faq.eyebrow}
            </p>
            <h2 className="max-w-lg text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ink sm:text-5xl md:text-6xl">
              {t.faq.title}
            </h2>
            <div className="mt-10 hidden items-center gap-4 text-ink/30 lg:flex" aria-hidden="true">
              <span className="h-px w-20 bg-ink/20" />
              <span className="font-display text-2xl italic">FAQ</span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <div className="border-t border-ink/15">
              {t.faq.items.map((item, index) => {
                const open = openFaq === index;
                return (
                  <div key={item.q} className="border-b border-ink/15">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
                      aria-expanded={open}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-label text-[9px] tracking-[0.16em] text-gold-2">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg leading-snug text-ink md:text-xl">
                          {item.q}
                        </span>
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 text-xl text-ink transition-all duration-300 ${
                          open ? "rotate-45 border-gold bg-gold text-ink" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pl-9 pr-12 font-body text-sm leading-[1.8] text-ink/70 md:pl-10 md:text-base">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <svg
          className="absolute -bottom-px left-0 h-16 w-full text-ink md:h-24"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 62C226 19 403 89 625 55C858 19 1050 83 1440 25V96H0Z" fill="currentColor" />
        </svg>
      </section>

      <section className="relative overflow-hidden bg-ink py-28 sm:py-36 lg:py-40">
        <div className="pointer-events-none absolute -right-24 top-20 font-display text-[22rem] leading-none text-ivory/[0.025]" aria-hidden="true">
          “
        </div>

        <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-12 flex flex-col gap-8 border-b border-ivory/15 pb-10 md:flex-row md:items-end md:justify-between lg:mb-16">
            <div>
              <p className="mb-5 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-10 bg-gold" aria-hidden="true" />
                {t.reviews.eyebrow}
              </p>
              <h2 className="font-display text-4xl font-medium leading-none tracking-[-0.025em] text-ivory sm:text-5xl md:text-6xl">
                {t.reviews.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mr-2 border-b border-ivory/30 pb-1 font-label text-[10px] uppercase tracking-[0.16em] text-ivory/70 transition-colors hover:border-gold hover:text-gold"
              >
                {t.reviews.leaveReview}
              </button>
              {pageCount > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setPage((value) => (value - 1 + pageCount) % pageCount)}
                    aria-label={t.reviews.prev}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => setPage((value) => (value + 1) % pageCount)}
                    aria-label={t.reviews.next}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    →
                  </button>
                </>
              )}
            </div>
          </Reveal>

          {featured && (
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-7">
                <article className="relative flex min-h-[470px] flex-col justify-between border-l border-gold/60 pl-6 sm:pl-10 lg:min-h-[540px] lg:pl-14">
                  <div>
                    <div className="mb-8 flex items-center justify-between gap-5">
                      <Stars rating={featured.rating} light />
                      <span className="font-label text-[9px] uppercase tracking-[0.18em] text-ivory/30">
                        0{pageStart + 1} / 0{t.reviews.items.length}
                      </span>
                    </div>
                    <blockquote className="max-w-4xl text-balance font-display text-3xl leading-[1.2] tracking-[-0.02em] text-ivory sm:text-4xl md:text-5xl">
                      “{featured.text}”
                    </blockquote>
                  </div>

                  <footer className="mt-12 grid gap-6 border-t border-ivory/15 pt-7 sm:grid-cols-2">
                    <div>
                      <p className="font-display text-xl text-ivory">{featured.name}</p>
                      <p className="mt-1 font-body text-xs text-ivory/50">{featured.role}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                        {t.reviews.companies[pageStart]}
                      </p>
                      <p className="mt-2 font-body text-sm text-ivory/60">
                        {t.reviews.eventSizes[pageStart]} · {dateFmt.format(new Date(featured.date))}
                      </p>
                    </div>
                  </footer>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-5" delay={120}>
                <div className="border-t border-ivory/15">
                  {secondary.map((review, index) => {
                    const absoluteIndex = pageStart + index + 1;
                    return (
                      <article key={review.date} className="border-b border-ivory/15 py-8 first:pt-7 lg:py-10">
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <p className="font-label text-[9px] font-semibold uppercase tracking-[0.16em] text-gold">
                            {t.reviews.companies[absoluteIndex]}
                          </p>
                          <Stars rating={review.rating} light />
                        </div>
                        <blockquote className="font-display text-xl leading-relaxed text-ivory/80 md:text-2xl">
                          “{review.text}”
                        </blockquote>
                        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 font-body text-xs text-ivory/40">
                          <span>{review.name} · {review.role}</span>
                          <span>{t.reviews.eventSizes[absoluteIndex]}</span>
                        </footer>
                      </article>
                    );
                  })}
                </div>

                <p className="mt-6 font-label text-[9px] uppercase tracking-[0.18em] text-ivory/30">
                  {t.reviews.caseLabel} · {t.reviews.pageOf} {page + 1}/{pageCount}
                </p>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      {modalOpen && <ReviewModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
