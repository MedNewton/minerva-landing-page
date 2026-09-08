import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, hasLocale, LOCALE_COOKIE, LOCALES, type Locale } from '@/lib/i18n/config';

/** Explicit choice (cookie set by the header switcher) → browser preference → default. */
function pickLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (hasLocale(cookie)) return cookie;

  const acceptLanguage = request.headers.get('accept-language') ?? '';
  for (const part of acceptLanguage.split(',')) {
    const base = part.split(';')[0].trim().toLowerCase().split('-')[0];
    if (hasLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocalePrefix = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${pickLocale(request)}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, public assets, and any file request (contains a dot).
  matcher: ['/((?!_next|assets|.*\\..*).*)'],
};
