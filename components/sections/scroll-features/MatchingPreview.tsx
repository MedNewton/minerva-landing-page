'use client';

import { useCallback, useState } from 'react';
import { CompanyCardStack } from './CompanyCardStack';
import { GlassCounter } from './GlassCounter';

const START = 47;

/** Slide 1 visual: rotating company stack + a counter that ticks with each rotation. */
export function MatchingPreview() {
  const [count, setCount] = useState(START);
  const onAdvance = useCallback(() => setCount((c) => (c + 1) % 100), []);

  return (
    <div
      className="w-full h-full rounded-3xl bg-surface-alt bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/scroll-card-bg-1.png')" }}
    >
      <CompanyCardStack onAdvance={onAdvance} />
      <GlassCounter count={count} />
    </div>
  );
}
