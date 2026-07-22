"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { useSiteConfig } from "@/lib/site-config";

export default function FinalCta() {
  const { t } = useLanguage();
  const { links, media } = useSiteConfig();

  return (
    <section id="contact" className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink">
      <Image
        src={media.finalCta}
        alt=""
        fill
        className="object-cover object-[62%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/15 to-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/25 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pb-24 pt-40 sm:px-8 md:pb-32 lg:px-12 lg:pb-36">
        <div className="max-w-4xl">
          <p className="mb-7 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            {t.finalCta.eyebrow}
          </p>

          <h2 className="max-w-4xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {t.finalCta.title}
          </h2>

          <p className="mt-7 max-w-2xl font-body text-base leading-relaxed text-ivory/80 md:text-lg">
            {t.finalCta.subtitle}
          </p>

          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex min-h-[56px] items-center gap-5 bg-gold px-7 py-4 font-label text-[11px] font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ivory md:mt-12"
          >
            {t.finalCta.telegramCta}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/25 text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
