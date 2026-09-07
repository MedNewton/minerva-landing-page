'use client';

import { useEffect, type RefObject } from 'react';
import { gsap, ScrollTrigger, SplitText } from '@/lib/gsap';
import { MQ, prefersReducedMotion } from '@/lib/media';

const STEPS = 3;

/** Header → categories → review sub-parts of the glass Reputation card. */
function collectRcardParts(rcard: HTMLElement) {
  const headerEl = rcard.children[0];
  const headerLeft = headerEl?.children[0];
  const headerRight = headerEl?.children[1];
  const reputationWord = headerLeft?.children[0];
  const subtitle = headerLeft?.children[1];
  const headerItems = [reputationWord, headerRight, subtitle].filter((e): e is Element => Boolean(e));
  const categories = rcard.children[1] ? Array.from(rcard.children[1].children) : [];
  const review = rcard.querySelector('.sf-rcard-review-box');
  return { headerItems, categories, review };
}

/**
 * Pinned "scroll features" section.
 *
 * Desktop (≥1024px): the section pins for 3 viewports of scroll; each third
 * activates one slide (text + visual cross-fade via `.is-active`). The capsule
 * indicator fills continuously and, on every swap, the heading words rise in
 * (SplitText), the bullet list staggers in and the Reputation card reveals
 * header → categories → review.
 *
 * Mobile (≤1023px): CSS unfolds every slide vertically, so the reveal for the
 * verification rows and the Reputation card fires per visual as it scrolls in.
 *
 * Everything respects prefers-reduced-motion.
 */
export function useScrollFeatures(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const pinEl = section.querySelector<HTMLElement>('.sf-pin');
    const slides = Array.from(section.querySelectorAll<HTMLElement>('.sf-slide'));
    const segs = Array.from(section.querySelectorAll<HTMLElement>('.sf-seg'));
    if (!pinEl || !slides.length || !segs.length) return;

    const headingWords: Record<number, Element[]> = {};
    const slideLists: Record<number, Element[]> = {};
    const rcardParts: Record<number, ReturnType<typeof collectRcardParts>> = {};
    const splits: SplitText[] = [];
    const triggers: ScrollTrigger[] = [];
    let cancelled = false;
    let firstActivate = true;
    let activeIdx = 0;

    const animateHeadingWords = (words?: Element[]) => {
      if (!words?.length) return;
      gsap.fromTo(words, { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.035, overwrite: true });
    };
    const animateSlideList = (idx: number) => {
      const lis = slideLists[idx];
      if (!lis?.length) return;
      gsap.fromTo(lis, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.18, delay: 0.35, overwrite: true });
    };
    const animateRcard = (idx: number) => {
      const parts = rcardParts[idx];
      if (!parts) return;
      if (parts.headerItems.length) {
        gsap.fromTo(parts.headerItems, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12, delay: 0.25, overwrite: true });
      }
      if (parts.categories.length) {
        gsap.fromTo(parts.categories, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.18, delay: 1.2, overwrite: true });
      }
      if (parts.review) {
        // after the 4 categories have settled (1.2 + 3*0.18 + 0.7 ≈ 2.44s)
        gsap.fromTo(parts.review, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: 'power2.out', delay: 2.5, overwrite: true });
      }
    };

    // Discrete: which slide is visible + indicator classes.
    const setActiveSlide = (idx: number) => {
      slides.forEach((s) => s.classList.toggle('is-active', Number(s.dataset.slide) === idx));
      segs.forEach((seg, i) => {
        seg.classList.toggle('is-active', i === idx);
        seg.classList.toggle('is-done', i < idx);
        seg.setAttribute('aria-selected', i === idx ? 'true' : 'false');
      });
      // Skip on the initial setup call: slide 0 has its own entry trigger.
      if (!firstActivate) {
        animateHeadingWords(headingWords[idx]);
        animateSlideList(idx);
        animateRcard(idx);
      }
      firstActivate = false;
    };

    // Continuous: capsule fill. Passed segs hold 100% so scrolling back up only
    // ever shrinks the new active capsule instead of refilling it.
    const setFill = (idx: number, fill: number) => {
      segs.forEach((seg, i) => {
        const f = seg.querySelector<HTMLElement>('.sf-fill');
        if (!f) return;
        const w = i === idx ? fill : i < idx ? 1 : 0;
        f.style.width = `${(w * 100).toFixed(1)}%`;
      });
    };

    setActiveSlide(0);
    setFill(0, 0);

    // === Slide-heading word reveal (desktop only; mobile shows all slides unfolded) ===
    if (!prefersReducedMotion() && window.matchMedia(MQ.desktop).matches) {
      const setupSlideHeadings = () => {
        if (cancelled) return;
        section.querySelectorAll<HTMLElement>('.sf-text-slides .sf-slide').forEach((slide) => {
          const h2 = slide.querySelector<HTMLElement>('h2');
          if (!h2) return;
          const idx = Number(slide.dataset.slide);
          const trimmed = h2.innerHTML.replace(/^\s+|\s+$/g, '');
          if (trimmed !== h2.innerHTML) h2.innerHTML = trimmed;
          const split = new SplitText(h2, { type: 'words', mask: 'words', smartWrap: true, wordsClass: 'split-word' });
          splits.push(split);
          headingWords[idx] = split.words;
          gsap.set(split.words, { opacity: 0, yPercent: 100 });

          const visualSlide = section.querySelector<HTMLElement>(`.sf-visual-slides [data-slide="${idx}"]`);
          const items = [
            ...Array.from(slide.querySelectorAll('ul li')),
            ...(visualSlide ? Array.from(visualSlide.querySelectorAll('.sf-vcard')) : []),
          ];
          if (items.length) {
            slideLists[idx] = items;
            gsap.set(items, { opacity: 0 });
          }
          const rcard = visualSlide?.querySelector<HTMLElement>('.sf-rcard');
          if (rcard) {
            const parts = collectRcardParts(rcard);
            rcardParts[idx] = parts;
            const all = [...parts.headerItems, ...parts.categories, parts.review].filter(Boolean);
            if (all.length) gsap.set(all, { opacity: 0 });
          }
        });
        if (headingWords[0] || slideLists[0]) {
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              start: 'top 85%',
              once: true,
              onEnter: () => {
                animateHeadingWords(headingWords[0]);
                animateSlideList(0);
              },
            }),
          );
        }
      };
      if (document.fonts && document.fonts.status !== 'loaded') {
        document.fonts.ready.then(setupSlideHeadings);
      } else {
        setupSlideHeadings();
      }
    }

    const mm = gsap.matchMedia();

    // ===== Mobile reveal: per-visual stagger when each visual scrolls in =====
    mm.add(`${MQ.mobile} and ${MQ.noReducedMotion}`, () => {
      const v1 = section.querySelector<HTMLElement>('.sf-visual-slides [data-slide="1"]');
      const vcards = v1 ? Array.from(v1.querySelectorAll('.sf-vcard')) : [];
      if (vcards.length) {
        gsap.set(vcards, { opacity: 0, y: 16 });
        ScrollTrigger.create({
          trigger: v1,
          start: 'top 80%',
          once: true,
          onEnter: () => gsap.to(vcards, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.18 }),
        });
      }

      const v2 = section.querySelector<HTMLElement>('.sf-visual-slides [data-slide="2"]');
      const rcard = v2?.querySelector<HTMLElement>('.sf-rcard');
      if (rcard) {
        const { headerItems, categories, review } = collectRcardParts(rcard);
        const all = [...headerItems, ...categories, review].filter(Boolean);
        gsap.set(all, { opacity: 0 });
        gsap.set(headerItems, { y: 16 });
        ScrollTrigger.create({
          trigger: v2,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            if (headerItems.length) gsap.to(headerItems, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', stagger: 0.12 });
            if (categories.length) gsap.to(categories, { opacity: 1, duration: 0.65, ease: 'power2.out', stagger: 0.14, delay: 0.55 });
            if (review) gsap.to(review, { opacity: 1, duration: 0.65, ease: 'power2.out', delay: 1.4 });
          },
        });
      }
    });

    // ===== Desktop: pin + scrub through 3 slides =====
    mm.add(`${MQ.desktop} and ${MQ.noReducedMotion}`, () => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=300%', // one viewport of scroll per step
        pin: pinEl,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          const exact = p * STEPS;
          let idx = Math.floor(exact);
          if (idx >= STEPS) idx = STEPS - 1;
          // last step: snap the fill to 1 once fully scrolled
          const f = idx === STEPS - 1 ? Math.max(exact - idx, p >= 1 ? 1 : 0) : Math.min(exact - idx, 1);
          if (idx !== activeIdx) {
            activeIdx = idx;
            setActiveSlide(idx);
          }
          setFill(idx, f);
        },
      });
      return () => {
        activeIdx = 0;
        setActiveSlide(0);
        setFill(0, 0);
      };
    });

    return () => {
      cancelled = true;
      mm.revert();
      triggers.forEach((t) => t.kill());
      const reset = [
        ...Object.values(slideLists).flat(),
        ...Object.values(rcardParts).flatMap((p) => [...p.headerItems, ...p.categories, p.review]).filter(Boolean),
      ];
      if (reset.length) gsap.set(reset, { clearProps: 'all' });
      splits.forEach((s) => s.revert());
    };
  }, [sectionRef]);
}
