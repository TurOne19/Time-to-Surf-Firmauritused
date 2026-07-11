"use client";

import { useLanguage } from "@/lib/language-context";
import { MAPS_EMBED_URL, MAPS_LINK_URL } from "@/lib/constants";

export default function LocationStrip() {
  const { t } = useLanguage();

  return (
    <div className="border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <p className="font-label text-gold text-xs tracking-widest2 uppercase mb-3">
          {t.location.eyebrow}
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-ivory mb-8">
          {t.location.title}
        </h3>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div className="w-full h-56 md:h-full min-h-[220px] border border-gold/20 overflow-hidden">
            <iframe
              src={MAPS_EMBED_URL}
              title="Time to Surf — Stroomi rand"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[1.05]"
              style={{ border: 0 }}
            />
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="font-label text-xs tracking-wideish uppercase text-gold/80 mb-1.5">
                {t.location.addressLabel}
              </p>
              <p className="font-body text-ivory/75 text-sm leading-relaxed">
                {t.location.addressText}
              </p>
            </div>
            <div>
              <p className="font-label text-xs tracking-wideish uppercase text-gold/80 mb-1.5">
                {t.location.howToLabel}
              </p>
              <p className="font-body text-ivory/75 text-sm leading-relaxed">
                {t.location.howToText}
              </p>
            </div>
            <div>
              <p className="font-label text-xs tracking-wideish uppercase text-gold/80 mb-1.5">
                {t.location.parkingLabel}
              </p>
              <p className="font-body text-ivory/75 text-sm leading-relaxed">
                {t.location.parkingText}
              </p>
            </div>

            <a
              href={MAPS_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start font-label text-xs tracking-wideish uppercase border border-gold/40 text-gold px-5 py-2.5 hover:bg-gold hover:text-ink transition-colors mt-1"
            >
              {t.location.openInMaps}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
