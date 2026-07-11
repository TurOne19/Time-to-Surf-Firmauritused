"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";
import { Shell } from "./Critters";

function CountUpTitle({ title }: { title: string }) {
  const match = title.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLHeadingElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    const target = parseInt(match[1], 10);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 1100;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.round(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!match) {
    return (
      <h3 ref={ref} className="font-display text-lg md:text-xl text-ink leading-snug">
        {title}
      </h3>
    );
  }

  return (
    <h3 ref={ref} className="font-display text-lg md:text-xl text-ink leading-snug">
      {count}
      {match[2]}
    </h3>
  );
}

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section id="why" className="bg-sand relative overflow-hidden">
      <Shell className="hidden md:block absolute bottom-8 left-8 w-12 h-10 text-gold-2/25" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-label text-ink/60 text-xs tracking-widest2 uppercase mb-4">
            {t.trust.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.12] text-balance">
            {t.trust.title}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
          {t.trust.items.map((item, i) => (
            <Reveal key={i} delay={i * 90} className="h-full">
              <div className="bg-sand p-8 md:p-9 flex flex-col gap-4 h-full">
                <span className="text-gold-2 text-2xl" aria-hidden="true">
                  {i % 2 === 0 ? "❖" : "⟡"}
                </span>
                <CountUpTitle title={item.title} />
                <p className="font-body text-ink/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
