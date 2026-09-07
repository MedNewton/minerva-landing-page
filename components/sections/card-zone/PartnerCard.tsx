import type { CSSProperties } from 'react';
import { PARTNER_TILES } from '@/lib/data/companies';

function Tile({ icon, title, subtitle, hidden }: (typeof PARTNER_TILES)[number] & { hidden?: boolean }) {
  return (
    <div className="flex items-center gap-3 p-2.5 shrink-0" aria-hidden={hidden || undefined}>
      <span className="industry-icon" style={{ '--icon': `url('${icon}')` } as CSSProperties} />
      <div className="min-w-0">
        <div className="text-sm font-semibold text-fg whitespace-nowrap">{title}</div>
        <div className="text-xs text-fg-muted whitespace-nowrap">{subtitle}</div>
      </div>
    </div>
  );
}

/** "100+ industries" — endless scroll of tiles: vertical on desktop, horizontal on mobile. */
export function PartnerCard() {
  return (
    <article data-card="partner" className="rounded-xl bg-surface p-6 lg:p-7 flex flex-col overflow-hidden">
      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-fg leading-tight tracking-tight">100+ industries.</h3>
        <p className="text-base text-fg-muted mt-3 leading-snug">Unlimited collaboration opportunities.</p>
      </div>

      <div className="relative flex-1 mt-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pi-track flex flex-row lg:flex-col gap-3 w-max lg:w-auto items-start">
            {PARTNER_TILES.map((t) => (
              <Tile key={t.title} {...t} />
            ))}
            {PARTNER_TILES.map((t) => (
              <Tile key={`dup-${t.title}`} {...t} hidden />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 hidden lg:block" style={{ background: 'linear-gradient(to bottom, var(--surface), transparent)' }} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 hidden lg:block" style={{ background: 'linear-gradient(to top, var(--surface), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 lg:hidden" style={{ background: 'linear-gradient(to right, var(--surface), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 lg:hidden" style={{ background: 'linear-gradient(to left, var(--surface), transparent)' }} />
        </div>
      </div>
    </article>
  );
}
