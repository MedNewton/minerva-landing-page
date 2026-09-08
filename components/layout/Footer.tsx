'use client';

import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { useI18n } from '@/lib/i18n/client';

export function Footer() {
  const { dict } = useI18n();
  const t = dict.footer;

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
                      <a href={l.href} className="text-fg-muted hover:text-fg transition-colors duration-150">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-fg-subtle">
          <span>{t.copyright}</span>
          <span>{t.tagline}</span>
        </div>
      </Container>
    </footer>
  );
}
