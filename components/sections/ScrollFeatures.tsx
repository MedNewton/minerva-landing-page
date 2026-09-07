'use client';

import { useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { MatchingPreview } from './scroll-features/MatchingPreview';
import { ReputationCard } from './scroll-features/ReputationCard';
import { VerificationCards } from './scroll-features/VerificationCards';
import { TEXT_SLIDES } from './scroll-features/slides';
import { useScrollFeatures } from './scroll-features/useScrollFeatures';

const VISUALS = [MatchingPreview, VerificationCards, ReputationCard];

/**
 * Product section: three text slides on the left, three visuals on the right,
 * pinned and scrubbed on desktop (see useScrollFeatures) and unfolded
 * vertically on mobile (see the `#scroll-features` rules in globals.css).
 */
export function ScrollFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollFeatures(sectionRef);

  return (
    <section ref={sectionRef} id="scroll-features" className="relative">
      <div className="sf-pin">
        <Container className="py-12 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch min-h-[70vh]">
            {/* LEFT: text slides + scroll indicator */}
            <div className="flex flex-col">
              <div className="sf-text-slides relative min-h-[460px] lg:min-h-[480px]">
                {TEXT_SLIDES.map((slide, i) => (
                  <div key={i} className={`sf-slide space-y-6${i === 0 ? ' is-active' : ''}`} data-slide={i}>
                    <h2 className="h1 font-semibold text-fg leading-tight">{slide.heading}</h2>
                    {slide.intro && <p className="body-md text-fg-muted max-w-md">{slide.intro}</p>}
                    <p className="body-md text-fg max-w-md font-medium">{slide.statement}</p>
                    <ul className="space-y-3 max-w-md">
                      {slide.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 body-md text-fg">
                          <span className="text-accent font-semibold flex-shrink-0 leading-relaxed">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <div className="sf-indicator" role="tablist" aria-label="Section progress">
                  {TEXT_SLIDES.map((_, i) => (
                    <span
                      key={i}
                      className={`sf-seg${i === 0 ? ' is-active' : ''}`}
                      role="tab"
                      aria-selected={i === 0}
                      aria-label={`Step ${i + 1} of ${TEXT_SLIDES.length}`}
                      data-step={i}
                    >
                      <span className="sf-fill" />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: visual slides */}
            <div className="sf-visual-slides relative aspect-square max-w-lg ml-auto w-full">
              {VISUALS.map((Visual, i) => (
                <div key={i} className={`sf-slide${i === 0 ? ' is-active' : ''}`} data-slide={i}>
                  <Visual />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
