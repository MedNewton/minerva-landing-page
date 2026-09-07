import { ITALY_MAP_PATHS, type RegionSlug } from '@/lib/data/italy-map-paths';

interface Props {
  activeSlug: RegionSlug;
  onSelect: (slug: RegionSlug) => void;
  onEnter: (slug: RegionSlug) => void;
  onMove: (e: React.MouseEvent) => void;
  onLeave: () => void;
}

/** Inline SVG of Italy's 20 regions. Fill/stroke states live in globals.css (`.im-path`). */
export function ItalyMapSvg({ activeSlug, onSelect, onEnter, onMove, onLeave }: Props) {
  return (
    <div className="im-map-wrap">
      <svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          {ITALY_MAP_PATHS.map((p) => (
            <path
              key={p.slug}
              className={`im-path${p.slug === activeSlug ? ' is-active' : ''}`}
              data-slug={p.slug}
              data-name={p.name}
              d={p.d}
              onClick={() => onSelect(p.slug)}
              onMouseEnter={() => onEnter(p.slug)}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
