import type { ReactNode } from 'react';

/** Small accent label above a section heading. */
export function Eyebrow({
  children,
  uppercase = false,
  className = 'mb-3',
}: {
  children: ReactNode;
  uppercase?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-sm font-medium text-accent ${className}`.trim()}
      style={uppercase ? { letterSpacing: '0.12em', textTransform: 'uppercase' } : undefined}
    >
      {children}
    </p>
  );
}
