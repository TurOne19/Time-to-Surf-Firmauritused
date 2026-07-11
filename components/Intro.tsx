"use client";

import { useLanguage } from "@/lib/language-context";
import StringLights from "./StringLights";
import Reveal from "./Reveal";
import { Starfish } from "./Critters";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <section className="bg-sand relative overflow-hidden">
      <Starfish className="hidden md:block absolute top-10 right-8 w-14 h-14 text-ink/10 rotate-12" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="font-label text-ink/60 text-xs tracking-widest2 uppercase mb-4">
              {t.intro.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.12] text-ink text-balance">
              {t.intro.title}
            </h2>
          </Reveal>

          <Reveal className="md:col-span-7 flex flex-col gap-5" delay={120}>
            {t.intro.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-ink/80 text-base md:text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}

            <div className="mt-4 pt-6 border-t border-ink/15">
              <p className="font-label text-xs tracking-wideish uppercase text-ink/60 mb-3">
                {t.suitedFor.title}
              </p>
              <ul className="flex flex-wrap gap-3">
                {t.suitedFor.items.map((item, i) => (
                  <li
                    key={i}
                    className="font-body text-sm text-ink border border-ink/20 px-4 py-2 bg-ivory/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
      <StringLights variant="onSand" />
    </section>
  );
}
