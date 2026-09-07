/** Outlined pill used for industry tags (Industries + Italy map sections). */
export const CHIP_CLASS =
  'inline-flex items-center px-3 py-1.5 rounded-full bg-surface border border-border text-sm font-medium text-fg-muted whitespace-nowrap';

export function Chip({ children, hidden = false }: { children: string; hidden?: boolean }) {
  return (
    <span className={CHIP_CLASS} aria-hidden={hidden || undefined}>
      {children}
    </span>
  );
}
