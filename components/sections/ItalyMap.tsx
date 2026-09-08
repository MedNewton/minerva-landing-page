'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { TagCloud } from '@/components/ui/TagCloud';
import type { RegionSlug } from '@/lib/data/italy-map-paths';
import { DEFAULT_REGION, REGION_BASE } from '@/lib/data/regions';
import { useI18n } from '@/lib/i18n/client';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { MQ } from '@/lib/media';
import { ItalyMapSvg } from './italy-map/ItalyMapSvg';
import { RegionPicker } from './italy-map/RegionPicker';
import { formatK } from './italy-map/format';

const FADE_MS = 300;
const TOOLTIP_PAD = 12;

/**
 * Interactive regional breakdown. Click a region on the SVG map (desktop) or
 * pick one from the dropdown (mobile) → the left column fades out, swaps
 * name / tagline / 4 stats / key sectors / districts, and fades back in.
 * Hovering a region shows a floating tooltip that follows the cursor.
 */
export function ItalyMap() {
  const { dict } = useI18n();
  const t = dict.map;
  const [active, setActive] = useState<RegionSlug>(DEFAULT_REGION); // highlighted path + picker label (immediate)
  const [shown, setShown] = useState<RegionSlug>(DEFAULT_REGION); // detail column (after fade-out)
  const [changing, setChanging] = useState(false);
  const [hovered, setHovered] = useState<RegionSlug | null>(null);
  const isMobile = useMediaQuery(MQ.mobile);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const activate = (slug: RegionSlug) => {
    if (slug === active) return;
    setActive(slug);
    setChanging(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShown(slug);
      setChanging(false);
    }, FADE_MS);
  };

  const positionTooltip = (e: React.MouseEvent) => {
    const tip = tooltipRef.current;
    if (!tip) return;
    const rect = tip.getBoundingClientRect();
    let x = e.clientX + TOOLTIP_PAD;
    let y = e.clientY + TOOLTIP_PAD;
    if (x + rect.width > window.innerWidth) x = e.clientX - rect.width - TOOLTIP_PAD;
    if (y + rect.height > window.innerHeight) y = e.clientY - rect.height - TOOLTIP_PAD;
    tip.style.left = `${x}px`;
    tip.style.top = `${y}px`;
  };

  const region = { ...REGION_BASE[shown], ...t.regions[shown] };
  const hoveredRegion = hovered ? { ...REGION_BASE[hovered], ...t.regions[hovered] } : null;
  const hoveredTier = hovered ? REGION_BASE[hovered].tier : null;

  return (
    <section id="italy-map" className="py-20 lg:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: region data */}
          <div className={`im-detail min-w-0${changing ? ' is-changing' : ''}`}>
            {/* Desktop heading */}
            <h2 className="h1 font-semibold text-fg leading-tight mb-3 hidden lg:block">
              {t.headingPrefix} {region.name}
            </h2>
            {/* Mobile heading — region as an inline dropdown */}
            <h2 className="h1 font-semibold text-fg leading-tight mb-3 lg:hidden">
              {t.headingPrefix} <RegionPicker value={active} onChange={activate} />
            </h2>
            <p className="body-md text-fg-muted mb-8 lg:mb-10 max-w-md">{region.tagline}</p>

            <dl className="grid grid-cols-[max-content_max-content] gap-x-16 lg:grid-cols-4 lg:gap-x-5 gap-y-6 mb-8 lg:mb-10">
              {[
                [formatK(region.stats.companies), t.statLabels.companies],
                [formatK(region.stats.employed), t.statLabels.employed],
                [region.stats.gdpShare, t.statLabels.gdpShare],
                [region.stats.exports2023, t.statLabels.exports],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl lg:text-3xl font-medium text-fg leading-none">{value}</dt>
                  <dd className="text-sm text-fg-muted mt-0.5">{label}</dd>
                </div>
              ))}
            </dl>

            <div className="mb-8 lg:mb-10">
              <h3 className="text-xl font-semibold text-fg mb-[18px]">{t.keySectors}</h3>
              <TagCloud id="imIndustries" tags={region.industries} mobile={isMobile} className="flex flex-wrap gap-2 max-w-md -ml-1" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fg mb-[18px]">{t.industrialDistricts}</h3>
              <ul className="space-y-2.5 max-w-md">
                {region.districts.map((d) => (
                  <li key={d.name}>
                    <div className="text-sm font-semibold text-fg-muted dark:text-fg">{d.name}</div>
                    <div className="text-sm text-fg-muted mt-0.5">{d.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Floating tooltip (desktop) */}
          <div
            ref={tooltipRef}
            className={`im-tooltip${hoveredRegion ? ' is-visible' : ''}`}
            role="tooltip"
            aria-hidden={!hoveredRegion}
          >
            <div className="im-tt-name">{hoveredRegion?.name}</div>
            <div className="im-tt-stats">
              <span>
                <strong>{hoveredRegion ? formatK(hoveredRegion.stats.companies) : ''}</strong> {t.tooltip.companies}
              </span>
              <span>
                <strong>{hoveredRegion?.stats.gdpShare}</strong> {t.tooltip.gdp}
              </span>
            </div>
            <div className="im-tt-hint">{hoveredTier ? (hoveredTier === 1 ? t.tooltip.details : t.tooltip.view) : ''}</div>
          </div>

          {/* RIGHT: SVG map (desktop) */}
          <ItalyMapSvg
            activeSlug={active}
            onSelect={activate}
            onEnter={setHovered}
            onMove={positionTooltip}
            onLeave={() => setHovered(null)}
          />
        </div>
      </Container>
    </section>
  );
}
