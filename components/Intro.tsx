"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-sand">
      <svg
        className="pointer-events-none absolute -right-24 top-16 h-[360px] w-[720px] text-ink/[0.07]"
        viewBox="0 0 720 360"
        fill="none"
        aria-hidden="true"
      >
        <path d="M8 219C127 106 235 315 356 190S585 99 711 171" stroke="currentColor" />
        <path d="M2 250C126 137 234 346 361 220S590 130 718 202" stroke="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-[90rem] px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-20">
          <Reveal className="lg:col-span-5 lg:pt-12">
            <p className="mb-7 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {t.intro.eyebrow}
            </p>

            <h2 className="max-w-xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {t.intro.title}
            </h2>

            <div className="mt-9 max-w-xl space-y-5 border-l border-ink/15 pl-5 sm:pl-7">
              {t.intro.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === t.intro.paragraphs.length - 1
                      ? "font-display text-xl italic leading-relaxed text-ink sm:text-2xl"
                      : "font-body text-base leading-relaxed text-ink/72 md:text-lg"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <p className="mb-4 font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                {t.suitedFor.title}
              </p>
              <ul className="flex max-w-xl flex-wrap gap-x-5 gap-y-3">
                {t.suitedFor.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-body text-sm text-ink/75">
                    <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="relative lg:col-span-7 lg:min-h-[820px]" delay={120}>
            <figure className="relative w-[92%] sm:w-[82%] lg:w-[78%]">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand-2">
                <Image
                  src="/intro-team.jpg"
                  alt={t.intro.photoAlts[0]}
                  fill
                  priority
                  className="object-cover object-[58%_center]"
                  sizes="(min-width: 1024px) 44vw, 82vw"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-3 font-label text-[10px] uppercase tracking-[0.16em] text-ink/50">
                <span>01</span>
                <span className="h-px w-7 bg-ink/25" aria-hidden="true" />
                {t.intro.photoCaptions[0]}
              </figcaption>
            </figure>

            <figure className="relative z-10 -mt-8 ml-auto w-[58%] sm:-mt-20 sm:w-[48%] lg:absolute lg:right-0 lg:top-[245px] lg:mt-0 lg:w-[43%]">
              <div className="relative aspect-[3/4] overflow-hidden border-[8px] border-sand bg-sand-2 sm:border-[12px]">
                <Image
                  src="/intro-evening.jpg"
                  alt={t.intro.photoAlts[1]}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 25vw, 48vw"
                />
              </div>
              <figcaption className="mt-2 flex items-center justify-end gap-3 pr-1 font-label text-[10px] uppercase tracking-[0.16em] text-ink/50">
                {t.intro.photoCaptions[1]}
                <span className="h-px w-7 bg-ink/25" aria-hidden="true" />
                <span>02</span>
              </figcaption>
            </figure>

            <div className="mt-14 max-w-sm border-t border-ink/15 pt-7 sm:mt-10 lg:absolute lg:bottom-4 lg:left-0 lg:mt-0 lg:w-[48%]">
              <p className="mb-6 font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/45">
                {t.intro.journeyTitle}
              </p>
              <ol className="relative space-y-0 before:absolute before:bottom-4 before:left-[5px] before:top-4 before:w-px before:bg-ink/15">
                {t.intro.journey.map((step, index) => (
                  <li key={step.title} className="relative grid grid-cols-[12px_1fr] gap-4 pb-6 last:pb-0">
                    <span className="relative z-10 mt-1.5 h-[11px] w-[11px] rounded-full border border-gold bg-sand" aria-hidden="true" />
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-label text-[9px] tracking-[0.16em] text-gold">0{index + 1}</span>
                        <h3 className="font-display text-lg text-ink">{step.title}</h3>
                      </div>
                      <p className="mt-1 pl-7 font-body text-xs leading-relaxed text-ink/55">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
