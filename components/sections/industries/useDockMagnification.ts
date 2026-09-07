'use client';

import { useEffect, type RefObject } from 'react';
import { MQ, prefersReducedMotion } from '@/lib/media';

const MAX_SCALE = 1.22;
const SPREAD = 1.7; // in item heights
const EASE = 0.14;

/**
 * macOS-dock style magnification for the industries list (ported from the
 * SectorDock handoff). A rAF loop eases each item's `--scale` toward a target
 * derived from cursor distance with a cosine falloff. Skipped on touch
 * (no hover) and under prefers-reduced-motion.
 */
export function useDockMagnification(listRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (prefersReducedMotion() || !window.matchMedia(MQ.hover).matches) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>('.sf-ind-item'));
    if (!items.length) return;

    const state = items.map(() => ({ cur: 1, target: 1 }));
    let activeY: number | null = null;
    let rafId: number | null = null;

    const computeTargets = () => {
      items.forEach((el, i) => {
        const s = state[i];
        if (activeY === null) {
          s.target = 1;
          return;
        }
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(activeY - center) / rect.height;
        let scale = 1;
        if (dist < SPREAD) {
          const t = dist / SPREAD;
          scale = 1 + (MAX_SCALE - 1) * Math.pow(Math.cos((t * Math.PI) / 2), 2);
        }
        s.target = scale;
      });
    };

    const loop = () => {
      let moving = false;
      items.forEach((el, i) => {
        const s = state[i];
        s.cur += (s.target - s.cur) * EASE;
        if (Math.abs(s.target - s.cur) > 0.0005) moving = true;
        else s.cur = s.target;
        el.style.setProperty('--scale', s.cur.toFixed(4));
      });
      rafId = moving ? requestAnimationFrame(loop) : null;
    };

    const kick = () => {
      computeTargets();
      if (rafId === null) rafId = requestAnimationFrame(loop);
    };
    const onMove = (e: MouseEvent) => {
      activeY = e.clientY;
      kick();
    };
    const onLeave = () => {
      activeY = null;
      kick();
    };

    list.addEventListener('mousemove', onMove);
    list.addEventListener('mouseleave', onLeave);
    return () => {
      list.removeEventListener('mousemove', onMove);
      list.removeEventListener('mouseleave', onLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
      items.forEach((el) => el.style.removeProperty('--scale'));
    };
  }, [listRef]);
}
