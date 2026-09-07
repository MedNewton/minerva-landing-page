import type { SVGProps } from 'react';

/** Lucide-style inline icons. Stroke inherits `currentColor`. */
type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

function Svg({ size = 16, strokeWidth = 2, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Svg>
);

export const SunIcon = (p: IconProps) => (
  <Svg size={18} strokeWidth={1.75} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </Svg>
);

export const MoonIcon = (p: IconProps) => (
  <Svg size={18} strokeWidth={1.75} {...p}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Svg>
);

export const TrendingUpIcon = (p: IconProps) => (
  <Svg size={14} {...p}>
    <path d="M3 3v18h18" />
    <path d="m7 14 4-4 4 4 5-5" />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg size={14} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg size={14} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Svg>
);

export const CheckCircleIcon = (p: IconProps) => (
  <Svg size={14} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg size={16} strokeWidth={2.25} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const MinusIcon = (p: IconProps) => (
  <Svg size={16} strokeWidth={2.25} {...p}>
    <path d="M5 12h14" />
  </Svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Svg size={18} {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

/** Filled star used on the glass Reputation card. */
export const StarIcon = ({ size = 13, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#FFD400" stroke="none" aria-hidden="true" style={style}>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
