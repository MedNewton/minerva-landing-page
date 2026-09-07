'use client';

import { useEffect, useRef } from 'react';
import { STACK_COMPANIES } from '@/lib/data/companies';
import { prefersReducedMotion } from '@/lib/media';

const OFFSET = 11;
const SCALE_STEP = 0.05;
const DIM_STEP = 0.06;
const VISIBLE = 3;
const INTERVAL = 3500;
const LEAVE_MS = 200;

/**
 * Auto-rotating company card stack (ported from the card-stack handoff).
 * Front card fades + scales to 0.8 over 200ms while the rest spring forward;
 * the leaver re-enters at the back. Advances every 3.5s, pauses on hover,
 * stays still under prefers-reduced-motion. Calls `onAdvance` on every rotation
 * so the glass counter underneath can tick in sync.
 */
export function CompanyCardStack({ onAdvance }: { onAdvance: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const onAdvanceRef = useRef(onAdvance);
  useEffect(() => {
    onAdvanceRef.current = onAdvance;
  }, [onAdvance]);

  useEffect(() => {
    const mount = mountRef.current;
    const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
    if (!mount || cards.length !== STACK_COMPANIES.length) return;

    let order = cards.map((_, i) => i);
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;

    const place = (el: HTMLDivElement, depth: number) => {
      if (depth >= VISIBLE) {
        el.style.transform = `translateY(${-(VISIBLE - 1) * OFFSET}px) scale(${1 - (VISIBLE - 1) * SCALE_STEP})`;
        el.style.filter = `brightness(${1 - (VISIBLE - 1) * DIM_STEP})`;
        el.style.opacity = '0';
        el.style.zIndex = '0';
        return;
      }
      el.style.transform = `translateY(${-depth * OFFSET}px) scale(${1 - depth * SCALE_STEP})`;
      el.style.filter = `brightness(${1 - depth * DIM_STEP})`;
      el.style.opacity = '1';
      el.style.zIndex = String(VISIBLE - depth);
    };

    const render = () => order.forEach((idx, depth) => place(cards[idx], depth));

    const advance = () => {
      onAdvanceRef.current();

      const frontEl = cards[order[0]];
      frontEl.classList.add('cs-leaving');
      frontEl.style.transform = 'translateY(0) scale(0.8)';
      frontEl.style.opacity = '0';

      order.slice(1).forEach((idx, i) => place(cards[idx], i));

      leaveTimer = setTimeout(() => {
        order = [...order.slice(1), order[0]];
        frontEl.classList.remove('cs-leaving');
        frontEl.style.transition = 'none';
        place(frontEl, VISIBLE);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            frontEl.style.transition = '';
          });
        });
      }, LEAVE_MS);
    };

    render();
    if (prefersReducedMotion()) return;

    let timerId: ReturnType<typeof setInterval> | null = setInterval(advance, INTERVAL);
    const pause = () => {
      if (timerId) clearInterval(timerId);
      timerId = null;
    };
    const resume = () => {
      if (!timerId) timerId = setInterval(advance, INTERVAL);
    };
    mount.addEventListener('mouseenter', pause);
    mount.addEventListener('mouseleave', resume);

    return () => {
      pause();
      if (leaveTimer) clearTimeout(leaveTimer);
      mount.removeEventListener('mouseenter', pause);
      mount.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <div className="cs-scene">
      <div className="cs-stack" ref={mountRef}>
        {STACK_COMPANIES.map((item, i) => (
          <div
            key={item.title}
            className="cs-card"
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <div className="cs-card-inner">
              <img className="cs-thumb" src={item.logo} alt="" loading="eager" />
              <div className="cs-info">
                <div className="cs-title">{item.title}</div>
                <div className="cs-subtitle">{item.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
