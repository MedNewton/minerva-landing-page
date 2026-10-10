'use client';

import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/icons';
import { GUIDE_SLUG } from '@/lib/guide';
import { useI18n } from '@/lib/i18n/client';

/**
 * Hero copy. The right column is intentionally empty: at scroll=0 the three
 * <CardZone/> cards are transformed by GSAP to sit here as a single scorecard,
 * then unfold into their own 3-column grid as the user scrolls.
 */
export function Hero() {
  const { dict, locale } = useI18n();
  const t = dict.hero;

  return (
    <section id="hero" className="relative">
      <Container className="pt-12 pb-12 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-[7fr_4fr] gap-12 lg:gap-10 items-center">
          <div>
            <p className="text-sm font-medium text-accent mb-5">{t.eyebrow}</p>
            <h1 className="display font-semibold text-fg mb-6">
              {t.titleLine1}
              <br />
              <span className="text-fg-muted">{t.titleLine2}</span>
            </h1>
            <p className="body-lg text-fg-muted max-w-[36rem] mb-7 lg:mb-8">{t.description}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 mb-8 lg:mb-10">
              <a
                href="https://app.minerva-app.website"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-11 px-9 rounded-full bg-fg text-bg text-[0.9375rem] font-semibold whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                {t.ctaPrimary}
                <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`/${locale}/${GUIDE_SLUG}`}
                className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-border-strong bg-surface text-fg text-[0.9375rem] font-semibold whitespace-nowrap hover:border-fg-subtle transition-colors duration-150"
              >
                {t.ctaHowTo}
              </a>
              <a
                href="#pricing"
                className="group inline-flex items-center gap-1.5 h-11 sm:ml-2 text-[0.9375rem] font-medium text-accent hover:text-accent-strong transition-colors duration-150"
              >
                {t.ctaSecondary}
                <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
