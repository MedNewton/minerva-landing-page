'use client';

import { useRef } from 'react';
import { SlotNumber } from '@/components/ui/SlotNumber';
import { useI18n } from '@/lib/i18n/client';
import { useSlotMachines } from '@/lib/hooks/useSlotMachines';

export function TestimonialStats() {
  const { dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  useSlotMachines(ref, { mode: 'each', threshold: 0.5 });

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 max-w-md">
      {dict.testimonials.stats.map((s) => (
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
