'use client';

import { StarIcon } from '@/components/ui/icons';
import { useI18n } from '@/lib/i18n/client';

/**
 * Slide 3 visual: glass reputation card.
 * DOM order matters — useScrollFeatures reveals header → categories → review
 * by walking `.sf-rcard` children [0], [1] and `.sf-rcard-review-box`.
 */
export function ReputationCard() {
  const { dict } = useI18n();
  const t = dict.scrollFeatures.reputation;

  return (
    <div
      className="w-full h-full rounded-3xl bg-surface-alt bg-cover bg-center flex items-center justify-center overflow-hidden p-4"
      style={{ backgroundImage: "url('/assets/images/scroll-card-bg-3.jpg')" }}
    >
      <div className="sf-rcard" aria-hidden="true">
        <div className="flex items-start justify-between mb-[34px]">
          <div>
            <div className="text-4xl font-bold leading-none">{t.title}</div>
            <div className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.reviews}
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold leading-none" style={{ color: '#fff' }}>
              {t.score}
            </span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              /5
            </span>
          </div>
        </div>

        <div className="space-y-2.5 px-[3px]">
          {t.categories.map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <span className="text-sm w-32 shrink-0" style={{ color: '#fff' }}>
                {c.label}
              </span>
              <div className="flex gap-0.5 flex-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} style={i + 1 > c.stars ? { opacity: 0.4 } : undefined} />
                ))}
              </div>
              <span className="font-mono text-sm font-semibold w-8 text-right">{c.score}</span>
            </div>
          ))}
        </div>

        <div className="sf-rcard-review-box">
          <img src="/assets/icons/quote.svg" alt="" className="sf-rcard-quote-icon" />
          <div className="sf-rcard-quote-text">
            <p className="text-base font-medium" style={{ color: '#fff' }}>
              {t.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
