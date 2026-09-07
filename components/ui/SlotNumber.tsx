import type { CSSProperties } from 'react';

/**
 * Slot-machine number. Each digit is a vertical reel of 0–9 repeated
 * (1 + digitIndex) cycles, ending on the target digit. Reels start at 0 and
 * are spun into place by `useSlotMachines` when the element scrolls into view.
 */
export function SlotNumber({ value, className = '' }: { value: number; className?: string }) {
  const digits = String(value).split('');
  return (
    <span className={`slot-machine ${className}`.trim()} data-count-to={value}>
      {digits.map((char, charIdx) => {
        const digit = parseInt(char, 10);
        const cycles = 1 + charIdx;
        const reel: number[] = [];
        for (let c = 0; c < cycles; c++) for (let i = 0; i <= 9; i++) reel.push(i);
        for (let i = 0; i <= digit; i++) reel.push(i);
        const finalIndex = reel.length - 1;
        return (
          <span key={charIdx} className="slot">
            <span
              className="slot-reel"
              style={{ '--slot-final': `-${finalIndex}em` } as CSSProperties}
            >
              {reel.map((n, i) => (
                <span key={i} className="slot-digit">
                  {n}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
