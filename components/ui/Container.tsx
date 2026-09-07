import type { ReactNode } from 'react';

/** The 72rem content column every section shares. */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-container mx-auto px-6 lg:px-8 ${className}`.trim()}>{children}</div>;
}
