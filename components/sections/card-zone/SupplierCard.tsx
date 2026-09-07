import { GROWTH_INDUSTRY_CHIPS } from '@/lib/data/companies';

const CHIP = 'inline-flex items-center px-3 py-1.5 rounded-full bg-surface-alt text-xs font-medium text-fg shrink-0';
const AXIS_LABEL = 'text-[11px] font-medium text-fg-subtle tracking-wide pointer-events-none select-none';
const TICK = 'block absolute text-[10px] font-medium text-fg-subtle tracking-wide pointer-events-none select-none';

/** "Growing every day" — industry chip marquee + accent growth chart. */
export function SupplierCard() {
  return (
    <article data-card="supplier" className="rounded-xl bg-surface p-6 lg:p-7 flex flex-col justify-between overflow-hidden">
      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-fg leading-tight tracking-tight">Growing every day</h3>
        <p className="text-base text-fg-muted mt-3 leading-snug">More companies. More opportunities. Better matches.</p>
      </div>

      {/* Industry chips: endless horizontal scroll with side fades (desktop only) */}
      <div className="-mx-6 lg:-mx-7 mt-6 relative overflow-hidden hidden lg:block">
        <div className="chip-track flex items-center gap-2 w-max">
          {GROWTH_INDUSTRY_CHIPS.map((c) => (
            <span key={c} className={CHIP}>
              {c}
            </span>
          ))}
          {GROWTH_INDUSTRY_CHIPS.map((c) => (
            <span key={`dup-${c}`} aria-hidden="true" className={CHIP}>
              {c}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10" style={{ background: 'linear-gradient(to right, var(--surface), transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10" style={{ background: 'linear-gradient(to left, var(--surface), transparent)' }} />
      </div>

      {/* Accent growth chart — bleeds to card edges; revealed via clip-path once the morph settles */}
      <div className="-mx-6 lg:-mx-7 -mb-6 lg:-mb-7 mt-8 relative">
        <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="supplier-chart block w-full h-40 lg:h-64" aria-hidden="true">
          <defs>
            <linearGradient id="supplier-growth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="var(--border)" opacity="0.6">
            <line x1="0" y1="30" x2="400" y2="30" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="60" x2="400" y2="60" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="90" x2="400" y2="90" vectorEffect="non-scaling-stroke" />
            <line x1="100" y1="0" x2="100" y2="120" vectorEffect="non-scaling-stroke" />
            <line x1="200" y1="0" x2="200" y2="120" vectorEffect="non-scaling-stroke" />
            <line x1="300" y1="0" x2="300" y2="120" vectorEffect="non-scaling-stroke" />
          </g>
          <g className="chart-content">
            <path d="M 0 96 C 60 92, 120 80, 180 60 C 240 42, 300 22, 400 6 L 400 120 L 0 120 Z" fill="url(#supplier-growth)" />
            <path
              d="M 0 96 C 60 92, 120 80, 180 60 C 240 42, 300 22, 400 6"
              stroke="var(--accent)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
        <span className={`hidden lg:block absolute left-3 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 ${AXIS_LABEL}`}>Level of growth</span>
        <span className={`hidden lg:block absolute bottom-2 right-6 ${AXIS_LABEL}`}>N. of partnerships</span>
        <span className={`${TICK} left-9 top-[25%] -translate-y-1/2`}>3×</span>
        <span className={`${TICK} left-9 top-[50%] -translate-y-1/2`}>2×</span>
        <span className={`${TICK} left-9 top-[75%] -translate-y-1/2`}>1×</span>
        <span className={`${TICK} bottom-6 left-1/4 -translate-x-1/2`}>100</span>
        <span className={`${TICK} bottom-6 left-1/2 -translate-x-1/2`}>200</span>
        <span className={`${TICK} bottom-6 left-3/4 -translate-x-1/2`}>300</span>
      </div>
    </article>
  );
}
