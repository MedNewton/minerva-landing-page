/**
 * Every company logo shown on the landing page, in one place. To add a logo,
 * drop the file in public/logos/ and add an entry here; to swap a logo, replace
 * the file (or point `src` at the new one) and update `width`/`height`.
 * Copy that changes per locale (sector, city) stays in the dictionaries, which
 * reference logos by id.
 *
 * `name` doubles as the alt text (a brand name reads the same in every locale).
 * `width`/`height` are the file's intrinsic size: <CompanyLogo/> derives the
 * aspect ratio from them, so there is no layout shift and nothing is stretched.
 * Prefer SVG; for PNG supply at least 3× the largest rendered size (retina).
 */
export const LOGOS = {
  mpm: {
    name: 'MPM',
    src: '/logos/mpm-logo.png',
    width: 1688,
    height: 595,
  },
  cosmopolitan: {
    name: 'Cosmopolitan Business Hotel',
    // Vector, converted from the original Illustrator file (Cosmopolitan_Logo.ps is a PDF).
    src: '/logos/cosmopolitan-logo.svg',
    width: 268,
    height: 136,
  },
} as const satisfies Record<string, CompanyLogoAsset>;

export interface CompanyLogoAsset {
  name: string;
  src: string;
  width: number;
  height: number;
}

export type LogoId = keyof typeof LOGOS;
