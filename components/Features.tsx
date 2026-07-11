"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="program" className="relative overflow-hidden bg-ink">
      <svg
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[900px] text-ivory/[0.035]"
        viewBox="0 0 900 520"
        fill="none"
        aria-hidden="true"
      >
        <path d="M8 331C171 153 294 459 462 278S742 135 892 244" stroke="currentColor" />
        <path d="M3 372C171 194 298 500 469 319S747 176 899 285" stroke="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-[90rem] px-5 py-28 sm:px-8 md:py-32 lg:px-12 lg:py-36">
        <Reveal className="grid gap-10 border-b border-ivory/15 pb-14 md:grid-cols-12 md:items-end md:pb-20">
          <div className="md:col-span-7">
            <p className="mb-6 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {t.features.eyebrow}
            </p>
            <h2 className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ivory sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {t.features.title}
            </h2>
          </div>

          <div className="md:col-span-5 md:pb-1">
            <p className="max-w-lg font-body text-base leading-relaxed text-ivory/70 md:text-lg">
              {t.features.subtitle}
            </p>
            <div className="mt-6 flex max-w-lg gap-4 border-l border-gold/60 pl-5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold shadow-[0_0_0_5px_rgba(217,169,78,0.1)]" aria-hidden="true" />
              <div>
                <p className="font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {t.features.adaptabilityTitle}
                </p>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ivory/60">
                  {t.features.adaptabilityText}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <ol className="relative mt-16 md:mt-20 lg:mt-24">
          <div className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-gold/70 via-gold/30 to-gold/5 lg:left-1/2" aria-hidden="true" />

          {t.features.items.map((item, index) => {
            const isRight = index % 2 === 1;

            return (
              <li key={item.title} className="relative pb-16 last:pb-0 md:pb-16 lg:pb-20">
                <Reveal
                  delay={Math.min(index * 70, 280)}
                  className={`relative grid lg:grid-cols-2 ${isRight ? "lg:text-left" : "lg:text-right"}`}
                >
                <span
                  className="absolute left-[13px] top-3 z-10 h-[11px] w-[11px] rounded-full border border-gold bg-ink shadow-[0_0_0_7px_rgba(217,169,78,0.08)] lg:left-1/2 lg:-translate-x-1/2"
                  aria-hidden="true"
                />

                <div
                  className={`relative ml-12 max-w-xl border-t border-ivory/15 pt-6 lg:ml-0 ${
                    isRight ? "lg:col-start-2 lg:ml-14" : "lg:mr-14 lg:justify-self-end"
                  }`}
                >
                  <div className={`mb-5 flex items-end gap-4 ${isRight ? "" : "lg:justify-end"}`}>
                    <span className="font-display text-6xl font-medium leading-none tracking-[-0.06em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mb-1.5 font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/40">
                      {t.features.stages[index]}
                    </span>
                  </div>

                  <h3 className="text-balance font-display text-2xl leading-tight text-ivory md:text-3xl">
                    {item.title}
                  </h3>
                  <p className={`mt-4 font-body text-sm leading-relaxed text-ivory/60 md:text-base ${isRight ? "" : "lg:ml-auto"}`}>
                    {item.desc}
                  </p>

                  <span
                    className={`mt-7 block h-px w-12 bg-gold/50 ${isRight ? "" : "lg:ml-auto"}`}
                    aria-hidden="true"
                  />
                </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <div className="mt-20 flex items-center justify-between border-t border-ivory/10 pt-7 font-label text-[9px] uppercase tracking-[0.2em] text-ivory/30 md:mt-20">
          <span>{t.features.timelineStart}</span>
          <span className="mx-5 h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" aria-hidden="true" />
          <span>{t.features.timelineEnd}</span>
        </div>
      </div>
    </section>
  );
}
