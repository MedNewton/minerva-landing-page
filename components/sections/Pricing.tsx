'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { useI18n } from '@/lib/i18n/client';
import { gsap } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/media';
import { PlanCard } from './pricing/PlanCard';

/**
 * Three plan cards. Each one rises + zooms in when its own top crosses 75% of
 * the viewport, then staggers its feature list — identical params per card so
 * stacked mobile cards animate one by one as the user reaches them.
 */
export function Pricing() {
  const { dict } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      section.querySelectorAll<HTMLElement>('article').forEach((card) => {
        const items = card.querySelectorAll('ul li');
        if (items.length) gsap.set(items, { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 75%', once: true },
        });
        tl.fromTo(
          card,
          { opacity: 0, y: 140, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out' },
        );
        if (items.length) {
          tl.to(items, { opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.18 }, 0.35);
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <Eyebrow uppercase>{dict.pricing.eyebrow}</Eyebrow>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {dict.pricing.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
