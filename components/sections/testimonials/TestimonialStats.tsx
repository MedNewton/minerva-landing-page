'use client';

import { useRef } from 'react';
import { SlotNumber } from '@/components/ui/SlotNumber';
import { useSlotMachines } from '@/lib/hooks/useSlotMachines';

const STATS = [
  { value: 200, suffix: '+', label: ['Verified', 'companies'] },
  { value: 47, suffix: '', label: ['Compatibility', 'dimensions'] },
  { value: 92, suffix: '%', label: ['Match', 'satisfaction rate'] },
];

export function TestimonialStats() {
  const ref = useRef<HTMLDivElement>(null);
  useSlotMachines(ref, { mode: 'each', threshold: 0.5 });

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 max-w-md">
      {STATS.map((s) => (
        <div key={s.value}>
          <div className="text-2xl lg:text-3xl font-medium text-fg leading-none tabular-nums">
            <SlotNumber value={s.value} />
            {s.suffix}
          </div>
          <div className="text-sm text-fg-muted mt-2 leading-snug">
            {s.label[0]}
            <br />
            {s.label[1]}
          </div>
        </div>
      ))}
    </div>
  );
}
