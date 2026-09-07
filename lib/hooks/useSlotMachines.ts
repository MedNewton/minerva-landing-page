'use client';

import { useEffect, type RefObject } from 'react';
import { animateFillBar, animateSlotMachine } from '@/lib/slot-machine';
import { prefersReducedMotion } from '@/lib/media';

interface Options {
  /**
   * `container`: fire every reel (and progress bar) at once when the container
   * itself scrolls into view — for small cards.
   * `each`: observe every `.slot-machine` individually — for tall layouts
   * where the top and bottom numbers sit a viewport apart.
   */
  mode: 'container' | 'each';
  threshold?: number;
  /** Also grow `[data-fill-to]` bars (container mode only). */
  animateBars?: boolean;
}

/**
 * Triggers slot-machine reels (see <SlotNumber/>) once, via IntersectionObserver.
 * Respects prefers-reduced-motion: CSS parks reels on their final digit and this
 * hook stays idle.
 */
export function useSlotMachines(
  ref: RefObject<HTMLElement | null>,
  { mode, threshold = mode === 'container' ? 0.3 : 0.5, animateBars = false }: Options,
) {
  useEffect(() => {
    const container = ref.current;
    if (!container || prefersReducedMotion()) return;

    const observers: IntersectionObserver[] = [];

    if (mode === 'container') {
      const bars = animateBars
        ? Array.from(container.querySelectorAll<HTMLElement>('[data-fill-to]'))
        : [];
      bars.forEach((bar) => {
        bar.style.width = '0%';
      });
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            container
              .querySelectorAll<HTMLElement>('.slot-machine')
              .forEach((el, elIdx) => animateSlotMachine(el, elIdx));
            bars.forEach(animateFillBar);
            observer.unobserve(entry.target);
          });
        },
        { threshold },
      );
      observer.observe(container);
      observers.push(observer);
    } else {
      container.querySelectorAll<HTMLElement>('.slot-machine').forEach((slotEl) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              animateSlotMachine(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            });
          },
          { threshold },
        );
        observer.observe(slotEl);
        observers.push(observer);
      });
    }

    return () => observers.forEach((o) => o.disconnect());
  }, [ref, mode, threshold, animateBars]);
}
