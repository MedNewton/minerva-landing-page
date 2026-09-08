'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useI18n } from '@/lib/i18n/client';
import { LOCALE_COOKIE, LOCALES, type Locale } from '@/lib/i18n/config';

function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

/**
 * EN/IT segmented control in the header (visible on every breakpoint).
 * Persists the choice in the proxy's locale cookie, then swaps the /[lang]
 * segment of the current URL.
 */
export function LanguageSwitch() {
  const { locale, dict } = useI18n();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    persistLocale(next);
    router.push(`/${next}${pathname.replace(/^\/[^/]+/, '')}`);
  };

  return (
    <div
      role="group"
      aria-label={dict.header.languageLabel}
      className="flex items-center rounded-[10px] bg-muted p-0.5"
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={l === locale}
          className={`h-8 px-2.5 rounded-lg text-xs font-semibold uppercase tracking-wide transition-colors duration-150 ${
            l === locale ? 'bg-surface text-fg shadow-sm' : 'text-fg-muted hover:text-fg'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
