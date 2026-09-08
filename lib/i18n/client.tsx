'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Locale } from './config';
import type { Dictionary } from './types';

interface I18n {
  locale: Locale;
  dict: Dictionary;
}

const I18nContext = createContext<I18n | null>(null);

/** Mounted once in the [lang] layout; hands the server-resolved dictionary to every client component. */
export function LocaleProvider({ locale, dict, children }: I18n & { children: ReactNode }) {
  return <I18nContext.Provider value={{ locale, dict }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <LocaleProvider>');
  return ctx;
}
