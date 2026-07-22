"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section id="why" className="relative overflow-hidden bg-sand">
      <svg
        className="pointer-events-none absolute -right-32 top-8 h-[360px] w-[720px] text-ink/[0.055]"
        viewBox="0 0 720 360"
        fill="none"
        aria-hidden="true"
      >
        <path d="M7 223C129 102 237 322 363 190S594 91 713 173" stroke="currentColor" />
        <path d="M2 256C131 135 240 355 368 223S599 124 719 206" stroke="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-[90rem] px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-40">
        <Reveal className="mb-14 grid gap-8 md:grid-cols-12 md:items-end lg:mb-20">
          <div className="md:col-span-7">
            <p className="mb-6 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {t.trust.eyebrow}
            </p>
            <h2 className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ink sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              {t.trust.title}
            </h2>
          </div>
          <p className="max-w-md font-display text-xl italic leading-relaxed text-ink/60 md:col-span-5 md:justify-self-end md:text-2xl">
            {t.trust.stepsLabel}
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-14 xl:gap-20">
          <Reveal className="lg:col-span-7">
            <figure className="relative h-full min-h-[480px] overflow-hidden bg-sand-2 sm:min-h-[580px] lg:min-h-[680px]">
              <Image
                src="/gallery/DSC_9017.jpg"
                alt={t.trust.photoAlt}
                fill
                className="object-cover object-[60%_center]"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" aria-hidden="true" />

              <figcaption className="absolute bottom-0 left-0 flex w-full items-end justify-between gap-5 p-6 text-ivory sm:p-8 md:p-10">
                <div>
                  <span className="block font-display text-5xl leading-none text-gold sm:text-6xl">10+</span>
                  <span className="mt-2 block max-w-xs font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/80">
                    {t.trust.proofLabel}
                  </span>
                </div>
                <span className="hidden max-w-[190px] border-l border-ivory/30 pl-5 font-body text-xs leading-relaxed text-ivory/70 sm:block">
                  Time to Surf · Tallinn
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:py-4" delay={120}>
            <ol className="relative h-full before:absolute before:bottom-5 before:left-[7px] before:top-5 before:w-px before:bg-ink/15">
              {t.trust.items.map((item, index) => (
                <li key={item.title} className="relative grid grid-cols-[16px_1fr] gap-5 border-b border-ink/15 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:py-9 lg:py-8 xl:py-10">
                  <span className="relative z-10 mt-1.5 h-[15px] w-[15px] rounded-full border border-gold-2 bg-sand shadow-[0_0_0_6px_rgba(196,146,74,0.08)]" aria-hidden="true" />
                  <div>
                    <p className="mb-2 font-label text-[9px] font-semibold uppercase tracking-[0.18em] text-gold-2">
                      {String(index + 1).padStart(2, "0")} · {t.trust.eyebrow}
                    </p>
                    <h3 className="text-balance font-display text-2xl leading-tight text-ink md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-ink/70 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
