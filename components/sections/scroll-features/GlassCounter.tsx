'use client';

import { useEffect, useRef } from 'react';
import { useI18n } from '@/lib/i18n/client';

const TRANSITION_MS = 750;
const REEL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // 0–9 plus a duplicate 0 for forward wrap

const toDigits = (n: number) => String(n).padStart(2, '0').split('').map(Number);

/**
 * Two-digit glass counter under the card stack. Each digit is a reel; the reel
 * translates -N em to show digit N. On a 9→0 wrap it scrolls forward to the
 * duplicate 0 (position 10) and snaps back silently, so motion is always
 * forward — never a reverse spin.
 */
export function GlassCounter({ count }: { count: number }) {
  const { dict } = useI18n();
  const reelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const currentRef = useRef<number[] | null>(null);
  const initial = toDigits(count);

  useEffect(() => {
    const reels = reelRefs.current.filter((r): r is HTMLDivElement => r !== null);
    if (reels.length < 2) return;

    const setImmediate = (reel: HTMLDivElement, digit: number) => {
      reel.style.transition = 'none';
      reel.style.transform = `translateY(-${digit}em)`;
      void reel.offsetWidth; // force reflow so the next paint commits
      requestAnimationFrame(() => {
        reel.style.transition = '';
      });
    };

    const timers: Array<ReturnType<typeof setTimeout>> = [];
    const animate = (reel: HTMLDivElement, from: number, to: number) => {
      if (from === to) return;
      if (to < from) {
        reel.style.transform = 'translateY(-10em)';
        timers.push(setTimeout(() => setImmediate(reel, to), TRANSITION_MS));
      } else {
        reel.style.transform = `translateY(-${to}em)`;
      }
    };

    const next = toDigits(count);
    const current = currentRef.current;
    if (!current) {
      reels.forEach((reel, i) => setImmediate(reel, next[i]));
    } else {
      reels.forEach((reel, i) => animate(reel, current[i], next[i]));
    }
    currentRef.current = next;

    return () => timers.forEach(clearTimeout);
  }, [count]);

  return (
    <div className="sf-counter" aria-live="polite">
      <div className="sfc-digits">
        {initial.map((digit, pos) => (
          <div key={pos} className="sfc-digit">
            <div className="sfc-window">
              <div
                className="sfc-reel"
                data-pos={pos}
                ref={(el) => {
                  reelRefs.current[pos] = el;
                }}
                style={{ transform: `translateY(-${digit}em)` }}
              >
                {REEL.map((n, i) => (
                  <span key={i}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="sfc-label">{dict.scrollFeatures.counterLabel}</p>
    </div>
  );
}
