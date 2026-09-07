'use client';

import { useRef } from 'react';
import { SlotNumber } from '@/components/ui/SlotNumber';
import { CheckCircleIcon } from '@/components/ui/icons';
import { CLIENT_MATCH } from '@/lib/data/companies';
import { useSlotMachines } from '@/lib/hooks/useSlotMachines';

/** "Client match" scorecard — the card that doubles as the hero visual at scroll=0. */
export function ClientCard() {
  const cardRef = useRef<HTMLElement>(null);
  // Small card: spin every number and grow every bar together when it enters view.
  useSlotMachines(cardRef, { mode: 'container', threshold: 0.3, animateBars: true });

  return (
    <article ref={cardRef} data-card="client" className="rounded-xl bg-surface p-6 lg:p-7">
      <div className="flex items-center justify-between text-sm sm:text-xs text-fg-subtle mb-5">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Client match
        </span>
        <span className="font-mono hidden sm:inline-block">{CLIENT_MATCH.ticket}</span>
        {/* mobile: compact score in the top-right */}
        <span className="font-mono sm:hidden text-base font-semibold text-fg">
          <SlotNumber value={CLIENT_MATCH.score} />
          <span className="text-fg-muted">/100</span>
        </span>
      </div>

      <div className="space-y-3 sm:mb-6">
        {CLIENT_MATCH.companies.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <img src={c.logo} alt="" className="h-10 w-10 sm:h-9 sm:w-9 rounded shrink-0" />
            <div className="min-w-0">
              <div className="text-base sm:text-sm font-semibold truncate">{c.name}</div>
              <div className="text-[13px] sm:text-xs text-fg-subtle">{c.meta}</div>
            </div>
          </div>
        ))}
      </div>

      {/* desktop-only: big compatibility score */}
      <div className="pt-5 mb-5 border-t border-border hidden sm:flex items-center justify-between">
        <div className="text-[0.8125rem] leading-tight">
          Compatibility
          <br />
          score
        </div>
        <div className="font-mono text-[2.25rem] leading-none font-medium tracking-tight">
          <SlotNumber value={CLIENT_MATCH.score} />
          <span className="text-base text-fg-subtle ml-1">/100</span>
        </div>
      </div>

      {/* desktop-only: dimension bars */}
      <div className="space-y-2.5 mb-5 hidden sm:block">
        {CLIENT_MATCH.dimensions.map((d) => (
          <div key={d.label} className="flex items-center gap-3">
            <span className="text-[0.8125rem] flex-1 truncate">{d.label}</span>
            <div className="w-20 sm:w-24 h-1 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-accent" data-fill-to={d.value} style={{ width: `${d.value}%` }} />
            </div>
            <SlotNumber value={d.value} className="font-mono text-[0.8125rem] w-7 text-right text-fg-muted" />
          </div>
        ))}
      </div>

      {/* desktop-only: verification footer */}
      <div className="pt-4 border-t border-border hidden sm:flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-1.5 text-fg-subtle">
          <CheckCircleIcon size={13} strokeWidth={2.25} className="text-success" />
          Verified · Camera di Commercio
        </span>
        <span className="font-mono text-fg-subtle">{CLIENT_MATCH.verifiedOn}</span>
      </div>
    </article>
  );
}
