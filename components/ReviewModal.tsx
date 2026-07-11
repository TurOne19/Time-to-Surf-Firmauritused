"use client";

import { useEffect, useState, FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";

interface Props {
  onClose: () => void;
}

export default function ReviewModal({ onClose }: Props) {
  const { t } = useLanguage();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // NOTE: no backend yet — this simply confirms receipt in the UI.
    // Wire this up to your review store (e.g. Supabase) and only display
    // reviews here once approved, matching the moderated list below.
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-sm flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-sand p-7 md:p-10 max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-ink/50 hover:text-ink transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h3 className="font-display text-2xl md:text-3xl text-ink mb-7">
              {t.reviews.modalTitle}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="font-label text-xs tracking-wideish uppercase text-ink/60">
                  {t.reviews.formName}
                </span>
                <input
                  required
                  type="text"
                  placeholder={t.reviews.formNamePlaceholder}
                  className="font-body bg-ivory/70 border border-ink/20 px-4 py-3 text-ink placeholder:text-ink/35 focus:border-gold-2 outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-label text-xs tracking-wideish uppercase text-ink/60">
                  {t.reviews.formRole}
                </span>
                <input
                  type="text"
                  placeholder={t.reviews.formRolePlaceholder}
                  className="font-body bg-ivory/70 border border-ink/20 px-4 py-3 text-ink placeholder:text-ink/35 focus:border-gold-2 outline-none"
                />
              </label>

              <div className="flex flex-col gap-2">
                <span className="font-label text-xs tracking-wideish uppercase text-ink/60">
                  {t.reviews.formRating}
                </span>
                <div className="flex gap-1.5" onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHoverRating(n)}
                      aria-label={`${n}`}
                      className="p-0.5"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={n <= (hoverRating || rating) ? "#D9A94E" : "none"}
                        stroke="#D9A94E"
                        strokeWidth="1.3"
                      >
                        <path d="M12 3.5L14.7 9.3L21 10.1L16.5 14.4L17.6 20.6L12 17.6L6.4 20.6L7.5 14.4L3 10.1L9.3 9.3Z" strokeLinejoin="round" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex flex-col gap-2">
                <span className="font-label text-xs tracking-wideish uppercase text-ink/60">
                  {t.reviews.formText}
                </span>
                <textarea
                  required
                  rows={4}
                  placeholder={t.reviews.formTextPlaceholder}
                  className="font-body bg-ivory/70 border border-ink/20 px-4 py-3 text-ink placeholder:text-ink/35 focus:border-gold-2 outline-none resize-none"
                />
              </label>

              <div className="flex items-center gap-4 mt-2">
                <button
                  type="submit"
                  className="bg-ink text-ivory px-6 py-3 font-label text-xs tracking-wideish uppercase hover:bg-gold hover:text-ink transition-colors"
                >
                  {t.reviews.formSubmit}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="font-label text-xs tracking-wideish uppercase text-ink/50 hover:text-ink"
                >
                  {t.reviews.formCancel}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-start gap-4 py-6">
            <span className="text-gold text-3xl" aria-hidden="true">✦</span>
            <h3 className="font-display text-2xl md:text-3xl text-ink">
              {t.reviews.thankYouTitle}
            </h3>
            <p className="font-body text-ink/70 leading-relaxed">{t.reviews.thankYouText}</p>
            <button
              onClick={onClose}
              className="mt-2 bg-ink text-ivory px-6 py-3 font-label text-xs tracking-wideish uppercase hover:bg-gold hover:text-ink transition-colors"
            >
              {t.reviews.thankYouClose}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
