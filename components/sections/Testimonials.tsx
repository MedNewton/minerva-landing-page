'use client';

import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { useI18n } from '@/lib/i18n/client';
import { TestimonialCard } from './testimonials/TestimonialCard';
import { TestimonialStats } from './testimonials/TestimonialStats';

/** Sticky intro on the left, vertical infinite marquee of testimonial cards on the right. */
export function Testimonials() {
  const { dict } = useI18n();
  const t = dict.testimonials;

  return (
    <section aria-labelledby="testimonials" className="py-20 lg:py-28 bg-bg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <Eyebrow uppercase>{t.eyebrow}</Eyebrow>
            <h2 id="testimonials" className="h1 font-semibold text-fg leading-tight mb-4">
              {t.heading}
            </h2>
            <p className="body-md text-fg-muted mb-10 lg:mb-12 max-w-md">{t.description}</p>
            <TestimonialStats />
          </div>

          <div className="tt-marquee" aria-label={t.listLabel}>
            <div className="tt-track">
              {t.items.map((item) => (
                <TestimonialCard key={item.name} t={item} />
              ))}
              {/* Duplicate set for a seamless loop */}
              {t.items.map((item) => (
                <TestimonialCard key={`dup-${item.name}`} t={item} hidden />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
