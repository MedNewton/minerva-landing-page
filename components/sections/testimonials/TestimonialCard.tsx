'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n/client';
import type { Testimonial } from '@/lib/i18n/types';

export function TestimonialCard({ t, hidden = false }: { t: Testimonial; hidden?: boolean }) {
  const { dict } = useI18n();
  return (
    <article className="bg-surface-alt rounded-3xl p-6 lg:p-7 flex flex-col" aria-hidden={hidden || undefined}>
      <div className="flex items-start justify-between mb-3">
        <img src="/assets/icons/quotation.svg" alt="" width={32} height={32} aria-hidden="true" />
        <span className="inline-flex px-2.5 py-1 rounded-full bg-surface text-xs text-fg-muted">{t.sector}</span>
      </div>
      <p className="text-[0.9375rem] text-fg leading-relaxed mb-6 flex-1">{t.quote}</p>
      <div className="pt-5 mb-4">
        <div className="flex items-center gap-3">
          <Image
            src={t.portrait}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-fg">{t.name}</div>
            <div className="text-xs text-fg-subtle mt-0.5">{t.role}</div>
          </div>
          <div className="flex gap-0.5" aria-label={hidden ? undefined : dict.testimonials.ratingLabel}>
            {Array.from({ length: 5 }, (_, i) => (
              <img key={i} src="/assets/icons/star.svg" alt="" width={16} height={16} aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
