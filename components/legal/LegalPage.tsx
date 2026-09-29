import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Container } from '@/components/ui/Container';
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';
import type { LegalSlug } from '@/lib/i18n/types';
import { getLegalHtml } from '@/lib/legal';

/**
 * Shared frame for the legal documents: localized page header, then the
 * Markdown source rendered verbatim (the documents are authored in Italian,
 * their legally binding language, and shown as-is on every locale).
 */
export async function LegalPage({ locale, slug }: { locale: Locale; slug: LegalSlug }) {
  const dict = getDictionary(locale);
  const t = dict.legal;
  const html = await getLegalHtml(slug);

  return (
    <>
      <Header />
      <main>
        <Container className="py-12 lg:py-16">
          <div className="max-w-3xl mx-auto">
            <a
              href={`/${locale}`}
              className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors duration-150 mb-8"
            >
              ← {t.backHome}
            </a>
            <h1 className="h1 font-semibold text-fg mb-4">{t.docs[slug].title}</h1>
            {t.languageNote && (
              <p className="text-sm text-fg-muted bg-surface-alt border border-border rounded-xl px-4 py-3 mb-8">
                {t.languageNote}
              </p>
            )}
            <article className="legal-prose" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
