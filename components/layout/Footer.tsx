'use client';

import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { useI18n } from '@/lib/i18n/client';

export function Footer() {
  const { dict, locale } = useI18n();
  const t = dict.footer;
  // Placeholder links ('#') stay as-is; real paths and section anchors get the locale prefix
  // so they resolve from subpages like /en/terms too.
  const localize = (href: string) => (href === '#' ? href : `/${locale}${href}`);

  return (
    <footer className="bg-surface-alt">
      <Container className="py-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <Logo className="inline-flex mb-5" />
            <p className="text-sm text-fg-muted max-w-sm leading-relaxed mb-5">{t.description}</p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {t.columns.map((col) => (
              <div key={col.title}>
                <h4
                  className="text-xs font-medium text-fg-subtle mb-4"
                  style={{ letterSpacing: '0.04em', textTransform: 'uppercase' }}
                >
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={localize(l.href)} className="text-fg-muted hover:text-fg transition-colors duration-150">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-xs text-fg-subtle leading-relaxed text-center">
          <p className="font-medium text-fg-muted">{t.company.statement}</p>
          <address className="not-italic mt-1">
            {t.company.name} – {t.company.address}
            <br />
            {t.company.vat} –{' '}
            {t.company.pecLabel}:{' '}
            <a
              href={`mailto:${t.company.pec}`}
              className="hover:text-fg transition-colors duration-150"
            >
              {t.company.pec}
            </a>
          </address>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-fg-subtle">
          <span>{t.copyright}</span>
          <span>{t.tagline}</span>
        </div>
      </Container>
    </footer>
  );
}
