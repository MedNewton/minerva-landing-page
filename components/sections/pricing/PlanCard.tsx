import type { Plan } from '@/lib/data/plans';

const CTA_BASE = 'inline-flex items-center justify-center h-11 px-9 rounded-full text-[0.9375rem] font-semibold';
const CTA_VARIANT = {
  outline: 'border border-border-strong bg-surface text-fg hover:bg-surface-alt transition-colors',
  solid: 'bg-fg text-bg hover:opacity-90 transition-opacity',
};

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="rounded-[1.5rem] p-3.5 lg:p-[18px] flex flex-col transition-colors duration-200">
      <div className="flex items-center gap-3 mb-5 lg:mb-6">
        <img src={plan.icon} alt="" width={37} height={37} aria-hidden="true" />
        <h3 className="text-[28px] lg:text-[34px] font-semibold text-fg">{plan.name}</h3>
      </div>

      <p className="text-fg-muted text-[0.9375rem] leading-relaxed mb-5 lg:mb-6">{plan.description}</p>

      <div className="flex items-center justify-between gap-3 mb-5 lg:mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl lg:text-[32px] font-medium text-fg leading-none">{plan.price}</span>
          <span className="text-sm text-fg-muted">/ month</span>
        </div>
        <a href={plan.cta.href} className={`${CTA_BASE} ${CTA_VARIANT[plan.cta.variant]}`}>
          {plan.cta.label}
        </a>
      </div>

      <p className="text-sm font-semibold text-fg mb-3">{plan.featuresTitle}</p>
      <ul className="space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[0.9375rem] text-fg">
            <img src="/assets/icons/bullet.svg" alt="" width={10} height={10} aria-hidden="true" className="shrink-0 mt-[7px]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {plan.notes.map((n) => (
        <p key={n} className="text-sm text-fg-muted mt-3">
          {n}
        </p>
      ))}
    </article>
  );
}
