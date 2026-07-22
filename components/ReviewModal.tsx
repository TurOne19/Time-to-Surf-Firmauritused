"use client";

import { useEffect, useState, FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";

interface Props {
  onClose: () => void;
}

const fieldClass =
  "w-full border border-ink/20 bg-ivory/70 px-4 py-3 font-body text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold-2";
const labelClass =
  "font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/60";

export default function ReviewModal({ onClose }: Props) {
  const { t } = useLanguage();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 px-4 py-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-sand p-6 sm:p-9 md:p-11"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-ivory text-ink transition-colors hover:border-gold hover:bg-gold sm:right-6 sm:top-6"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <p className="mb-4 font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-2">
              Time to Surf · Feedback
            </p>
            <h3 className="mb-3 max-w-lg font-display text-3xl leading-tight text-ink md:text-4xl">
              {t.reviews.modalTitle}
            </h3>
            <p className="mb-8 max-w-xl font-body text-sm leading-relaxed text-ink/60">
              {t.reviews.moderationNote}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>{t.reviews.formName}</span>
                  <input required type="text" placeholder={t.reviews.formNamePlaceholder} className={fieldClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>{t.reviews.formContact}</span>
                  <input required type="text" placeholder={t.reviews.formContactPlaceholder} className={fieldClass} />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>{t.reviews.formCompany}</span>
                  <input required type="text" placeholder={t.reviews.formCompanyPlaceholder} className={fieldClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>{t.reviews.formRole}</span>
                  <input type="text" placeholder={t.reviews.formRolePlaceholder} className={fieldClass} />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className={labelClass}>{t.reviews.formEventType}</span>
                  <select required defaultValue="" className={fieldClass}>
                    <option value="" disabled>-</option>
                    {t.reviews.formEventTypes.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>{t.reviews.formEventSize}</span>
                  <input required type="number" min="1" inputMode="numeric" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>{t.reviews.formEventDate}</span>
                  <input required type="date" className={fieldClass} />
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <span className={labelClass}>{t.reviews.formRating}</span>
                <div className="flex gap-1.5" onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map((number) => (
                    <button
                      key={number}
                      type="button"
                      onClick={() => setRating(number)}
                      onMouseEnter={() => setHoverRating(number)}
                      aria-label={`${number}`}
                      className="p-0.5"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill={number <= (hoverRating || rating) ? "#D9A94E" : "none"}
                        stroke="#C4924A"
                        strokeWidth="1.3"
                        aria-hidden="true"
                      >
                        <path d="M12 3.5L14.7 9.3L21 10.1L16.5 14.4L17.6 20.6L12 17.6L6.4 20.6L7.5 14.4L3 10.1L9.3 9.3Z" strokeLinejoin="round" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex flex-col gap-2">
                <span className={labelClass}>{t.reviews.formText}</span>
                <textarea required rows={5} placeholder={t.reviews.formTextPlaceholder} className={`${fieldClass} resize-none`} />
              </label>

              <label className="flex cursor-pointer items-start gap-3 border-t border-ink/15 pt-5">
                <input required type="checkbox" className="mt-1 h-4 w-4 accent-[#C4924A]" />
                <span className="font-body text-xs leading-relaxed text-ink/60">{t.reviews.formConsent}</span>
              </label>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="submit"
                  className="bg-ink px-7 py-3.5 font-label text-[10px] font-semibold uppercase tracking-[0.15em] text-ivory transition-colors hover:bg-gold hover:text-ink"
                >
                  {t.reviews.formSubmit}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="font-label text-[10px] uppercase tracking-[0.14em] text-ink/50 transition-colors hover:text-ink"
                >
                  {t.reviews.formCancel}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-start gap-4 py-8">
            <span className="text-3xl text-gold" aria-hidden="true">✦</span>
            <h3 className="font-display text-3xl text-ink md:text-4xl">{t.reviews.thankYouTitle}</h3>
            <p className="max-w-lg font-body leading-relaxed text-ink/70">{t.reviews.thankYouText}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 bg-ink px-6 py-3 font-label text-[10px] uppercase tracking-[0.15em] text-ivory transition-colors hover:bg-gold hover:text-ink"
            >
              {t.reviews.thankYouClose}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
