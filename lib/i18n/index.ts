import type { Locale } from './config';
import type { Dictionary } from './types';
import { en } from './dictionaries/en';
import { it } from './dictionaries/it';

const dictionaries: Record<Locale, Dictionary> = { en, it };

/** Resolve the full dictionary for a locale (server-side; clients receive it via <LocaleProvider>). */
export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
