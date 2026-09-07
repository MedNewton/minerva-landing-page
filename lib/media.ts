/** Shared media-query strings so breakpoints stay in sync with Tailwind's `lg`. */
export const MQ = {
  desktop: '(min-width: 1024px)',
  mobile: '(max-width: 1023px)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  noReducedMotion: '(prefers-reduced-motion: no-preference)',
  hover: '(hover: hover)',
} as const;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia(MQ.reducedMotion).matches;
