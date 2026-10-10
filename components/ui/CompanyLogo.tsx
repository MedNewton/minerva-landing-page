import Image from 'next/image';
import { LOGOS, type LogoId } from '@/lib/logos';

/**
 * A company logo on a light tile, sized by the caller (`className` sets the
 * tile's width/height). The tile stays white in dark mode and on gradients so
 * colour logos keep their contrast; the image is contained, never cropped or
 * filtered. Set `decorative` when the company name is printed right next to the
 * logo, so screen readers don't announce it twice.
 */
export function CompanyLogo({
  id,
  className = 'h-10 w-20',
  sizes = '96px',
  decorative = false,
}: {
  id: LogoId;
  className?: string;
  /** Rendered width hint for the srcset (retina picks the 2× candidate). */
  sizes?: string;
  decorative?: boolean;
}) {
  const logo = LOGOS[id];
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-logo-tile-border bg-logo-tile p-1.5 ${className}`.trim()}
    >
      <Image
        src={logo.src}
        alt={decorative ? '' : logo.name}
        width={logo.width}
        height={logo.height}
        sizes={sizes}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
