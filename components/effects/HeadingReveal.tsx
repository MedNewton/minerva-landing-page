'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger, SplitText } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/media';

const STAGGER_MS = 35;
const DURATION = 0.9;
const THRESHOLD = 0.15;
const ROOT_MARGIN_PX = -50;

/**
 * Per-word rise-in reveal on every visible section heading (h1/h2), fired
 * once when the heading enters the viewport. Skips `.sr-only`, anything inside
 * `.hidden`, and the scroll-features slide headings (they animate on slide
 * swap instead). Elements marked `data-split-ignore` inside a heading are
 * left intact (e.g. the mobile region picker).
 */
export function HeadingReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let cancelled = false;
    const splits: SplitText[] = [];
    const startPct = (1 - THRESHOLD) * 100;
    const start = `top ${startPct}%-=${Math.abs(ROOT_MARGIN_PX)}px`;

    const init = () => {
      if (cancelled) return;
      document.querySelectorAll<HTMLElement>('section h1, section h2').forEach((el) => {
        if (el.classList.contains('sr-only')) return;
        if (el.closest('.hidden')) return;
        if (el.closest('.sf-slide')) return;

        // Trim source-formatting whitespace so it doesn't become a phantom
        // space before the first masked word.
        const trimmed = el.innerHTML.replace(/^\s+|\s+$/g, '');
        if (trimmed !== el.innerHTML) el.innerHTML = trimmed;

        const ignore = el.querySelectorAll('[data-split-ignore]');
        splits.push(
          new SplitText(el, {
            type: 'words',
            mask: 'words',
            smartWrap: true,
            wordsClass: 'split-word',
            ignore: ignore.length ? Array.from(ignore) : undefined,
            onSplit: (self) =>
              gsap.fromTo(
                self.words,
                { opacity: 0, yPercent: 100 },
                {
                  opacity: 1,
                  yPercent: 0,
                  duration: DURATION,
                  ease: 'power3.out',
                  stagger: STAGGER_MS / 1000,
                  scrollTrigger: { trigger: el, start, once: true, fastScrollEnd: true },
                  willChange: 'transform, opacity',
                  force3D: true,
                },
              ),
          }),
        );
      });
      // Headings may change geometry once fonts are in — keep trigger positions honest.
      ScrollTrigger.refresh();
    };

    if (document.fonts && document.fonts.status !== 'loaded') {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    return () => {
      cancelled = true;
      splits.forEach((s) => s.revert());
    };
  }, []);

  return null;
}
