import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { FOOTER_COLUMNS } from '@/lib/data/navigation';

export function Footer() {
  return (
    <footer className="bg-surface-alt">
      <Container className="py-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <Logo className="inline-flex mb-5" />
            <p className="text-sm text-fg-muted max-w-sm leading-relaxed mb-5">
              B2B matchmaking for Italian PMI. Cultural compatibility on 47 dimensions, verified through Camera di
              Commercio.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
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
          <span>© 2026 Minerva SRL. All rights reserved.</span>
          <span>Built in Milano · Made in Italy</span>
        </div>
      </Container>
    </footer>
  );
}
