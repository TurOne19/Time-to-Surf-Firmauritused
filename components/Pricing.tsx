"use client";

import { useLanguage } from "@/lib/language-context";
import { useSiteConfig } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function Pricing() {
  const { t } = useLanguage();
  const { links } = useSiteConfig();

  return (
    <section id="pricing" className="relative overflow-hidden bg-ink">
      <svg
        className="pointer-events-none absolute -left-36 bottom-0 h-[440px] w-[760px] text-ivory/[0.035]"
        viewBox="0 0 760 440"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 288C142 139 247 395 389 244S626 124 753 215" stroke="currentColor" />
        <path d="M1 324C145 175 251 431 396 280S631 160 759 251" stroke="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-[90rem] px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-20">
          <Reveal className="lg:col-span-7">
            <p className="mb-7 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {t.pricing.eyebrow}
            </p>

            <h2 className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ivory sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              {t.pricing.title}
            </h2>

            <p className="mt-8 max-w-2xl font-body text-base leading-relaxed text-ivory/70 md:text-lg">
              {t.pricing.lead}
            </p>

            <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:mt-16">
              {t.pricing.factors.map((factor, index) => (
                <div key={factor.title} className="border-t border-ivory/15 pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-label text-[9px] font-semibold tracking-[0.18em] text-gold">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-xl text-ivory md:text-2xl">{factor.title}</h3>
                  </div>
                  <p className="mt-2.5 pl-7 font-body text-sm leading-relaxed text-ivory/60">
                    {factor.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pt-8" delay={120}>
            <div className="relative bg-ivory p-7 text-ink sm:p-10 lg:p-9 xl:p-11">
              <div className="absolute right-7 top-7 font-display text-6xl leading-none text-ink/[0.06]" aria-hidden="true">
                01
              </div>

              <p className="relative font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-2">
                {t.pricing.offerEyebrow}
              </p>
              <h3 className="relative mt-5 max-w-md text-balance font-display text-3xl leading-[1.08] tracking-[-0.02em] text-ink sm:text-4xl">
                {t.pricing.offerTitle}
              </h3>
              <p className="relative mt-5 font-body text-sm leading-relaxed text-ink/70 md:text-base">
                {t.pricing.offerText}
              </p>

              <div className="my-8 h-px bg-ink/15" aria-hidden="true" />

              <p className="mb-4 font-label text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                {t.pricing.packageName}
              </p>
              <ul className="space-y-3">
                {t.pricing.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm leading-relaxed text-ink/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-2" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex min-h-[52px] w-full items-center justify-between gap-4 bg-ink px-6 py-4 font-label text-[10px] font-semibold uppercase tracking-[0.15em] text-ivory transition-colors hover:bg-gold hover:text-ink"
              >
                {t.pricing.cta}
                <span className="text-lg leading-none" aria-hidden="true">→</span>
              </a>
              <p className="mt-3 font-body text-xs leading-relaxed text-ink/50">
                {t.pricing.responseNote}
              </p>

              <div className="mt-8 flex items-end justify-between gap-5 border-t border-ink/15 pt-6">
                <div>
                  <p className="font-label text-[9px] uppercase tracking-[0.16em] text-ink/40">
                    {t.pricing.priceNote}
                  </p>
                  <p className="mt-1 font-body text-xs text-ink/50">{t.pricing.durationNote}</p>
                </div>
                <span className="font-display text-3xl text-ink/70">€350</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
