"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";
import ReviewModal from "./ReviewModal";

export default function FaqReviews() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="faq" className="relative overflow-hidden bg-sand pb-32 pt-28 sm:pt-36 md:pb-40 lg:pt-44">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <Reveal className="lg:col-span-7">
            <p className="mb-6 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {t.faq.eyebrow}
            </p>
            <h2 className="mb-12 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ink sm:text-5xl md:text-6xl">
              {t.faq.title}
            </h2>

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
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 text-xl transition-all duration-300 ${
                          open ? "rotate-45 border-gold bg-gold" : ""
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

          <Reveal className="lg:col-span-5 lg:pt-16" delay={120}>
            <aside className="relative overflow-hidden bg-ink p-7 text-ivory sm:p-10 lg:sticky lg:top-28 xl:p-12">
              <span className="absolute -right-8 -top-20 font-display text-[15rem] leading-none text-ivory/[0.035]" aria-hidden="true">
                “
              </span>

              <div className="relative">
                <p className="mb-7 flex items-center gap-3 font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  <span className="h-px w-8 bg-gold" aria-hidden="true" />
                  {t.reviews.eyebrow}
                </p>
                <h2 className="max-w-md text-balance font-display text-3xl leading-[1.08] tracking-[-0.02em] text-ivory sm:text-4xl">
                  {t.reviews.emptyTitle}
                </h2>
                <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-ivory/70 md:text-base">
                  {t.reviews.emptyText}
                </p>

                <div className="my-8 border-y border-ivory/15 py-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold" aria-hidden="true">✓</span>
                    <p className="font-body text-sm leading-relaxed text-ivory/60">
                      {t.reviews.moderationNote}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="group flex min-h-[58px] w-full items-center justify-between gap-5 bg-gold px-6 py-4 font-label text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ivory"
                >
                  {t.reviews.leaveReview}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/25 text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </button>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>

      <svg
        className="absolute -bottom-px left-0 h-16 w-full text-ink md:h-24"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 62C226 19 403 89 625 55C858 19 1050 83 1440 25V96H0Z" fill="currentColor" />
      </svg>

      {modalOpen && <ReviewModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
