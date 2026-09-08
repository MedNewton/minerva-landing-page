'use client';

import type { CSSProperties } from 'react';
import { useI18n } from '@/lib/i18n/client';
import type { PartnerTile } from '@/lib/i18n/types';

function Tile({ icon, title, subtitle, hidden }: PartnerTile & { hidden?: boolean }) {
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
  const { dict } = useI18n();
  const t = dict.cards.partner;

  return (
    <article data-card="partner" className="rounded-xl bg-surface p-6 lg:p-7 flex flex-col overflow-hidden">
      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-fg leading-tight tracking-tight">{t.title}</h3>
        <p className="text-base text-fg-muted mt-3 leading-snug">{t.description}</p>
      </div>

      <div className="relative flex-1 mt-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pi-track flex flex-row lg:flex-col gap-3 w-max lg:w-auto items-start">
            {t.tiles.map((tile) => (
              <Tile key={tile.title} {...tile} />
            ))}
            {t.tiles.map((tile) => (
              <Tile key={`dup-${tile.title}`} {...tile} hidden />
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
