/** Supported locales and shared i18n constants (safe to import from proxy, server and client code). */
export const LOCALES = ['en', 'it'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Cookie the proxy reads (and the header switcher writes) to remember the visitor's choice. */
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const hasLocale = (value: string | undefined | null): value is Locale =>
  LOCALES.includes(value as Locale);
