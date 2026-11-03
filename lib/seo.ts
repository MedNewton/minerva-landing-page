import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n/config';

export const SITE_URL = 'https://www.minerva-app.website';

const OG_LOCALE: Record<Locale, string> = { it: 'it_IT', en: 'en_US' };

const OG_IMAGE_ALT: Record<Locale, string> = {
  it: 'MINERVA: match intelligenti, partnership più solide',
  en: 'MINERVA: smart matches, stronger partnerships',
};

/**
 * Title, description and the link preview (LinkedIn, WhatsApp, X…) for a page.
 * Without og:image the crawlers pick any image on the page, which showed a
 * partner's logo instead of MINERVA's.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  /** Path after the locale, '' for the home page. */
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `/${locale}${path}`;
  const image = {
    url: `/og/og-${locale}.jpg`,
    width: 1200,
    height: 630,
    alt: OG_IMAGE_ALT[locale],
  };
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: `/en${path}`, it: `/it${path}` },
    },
    openGraph: {
      type: 'website',
      siteName: 'MINERVA',
      title,
      description,
      url,
      locale: OG_LOCALE[locale],
      alternateLocale: OG_LOCALE[locale === 'it' ? 'en' : 'it'],
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  };
}
