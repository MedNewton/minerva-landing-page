import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SignupGuide } from '@/components/guide/SignupGuide';
import { GUIDE_SLUG } from '@/lib/guide';
import { getDictionary } from '@/lib/i18n';
import { hasLocale } from '@/lib/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { meta } = getDictionary(lang).howTo;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: { en: `/en/${GUIDE_SLUG}`, it: `/it/${GUIDE_SLUG}` },
    },
  };
}

export default async function SignupGuidePage({ params }: PageProps<'/[lang]/come-iscriversi'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SignupGuide locale={lang} />;
}
