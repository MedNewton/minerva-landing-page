import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegalPage } from '@/components/legal/LegalPage';
import { getDictionary } from '@/lib/i18n';
import { hasLocale } from '@/lib/i18n/config';
import { LEGAL_SLUGS, hasLegalSlug } from '@/lib/legal';

export function generateStaticParams() {
  return LEGAL_SLUGS.map((doc) => ({ doc }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; doc: string }>;
}): Promise<Metadata> {
  const { lang, doc } = await params;
  if (!hasLocale(lang) || !hasLegalSlug(doc)) notFound();
  const entry = getDictionary(lang).legal.docs[doc];
  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      languages: { en: `/en/${doc}`, it: `/it/${doc}` },
    },
  };
}

export default async function LegalDocumentPage({ params }: PageProps<'/[lang]/[doc]'>) {
  const { lang, doc } = await params;
  if (!hasLocale(lang) || !hasLegalSlug(doc)) notFound();
  return <LegalPage locale={lang} slug={doc} />;
}
