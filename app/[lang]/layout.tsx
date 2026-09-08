import type { Metadata, Viewport } from 'next';
import { Google_Sans_Code, Google_Sans_Flex } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n';
import { LocaleProvider } from '@/lib/i18n/client';
import { hasLocale, LOCALES } from '@/lib/i18n/config';
import '../globals.css';

const sans = Google_Sans_Flex({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = Google_Sans_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: { en: '/en', it: '/it' },
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

/**
 * Runs synchronously before first paint so the `.dark` class is already on
 * <html> when the page renders (no light→dark flash).
 * Order of precedence: `?theme=light|dark` → localStorage → system preference.
 */
const themeInitScript = `
(function () {
  try {
    var root = document.documentElement;
    var forced = new URLSearchParams(window.location.search).get('theme');
    var stored = localStorage.getItem('minerva-theme');
    var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (forced === 'dark') root.classList.add('dark');
    else if (forced === 'light') root.classList.remove('dark');
    else if (stored === 'dark' || (!stored && systemDark)) root.classList.add('dark');
  } catch (e) {}
})();
`;

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="text-fg antialiased">
        {/* Fixed page-bottom mesh gradient (behind content); revealed by transparent sections */}
        <div className="bg-glow" aria-hidden="true" />
        <LocaleProvider locale={lang} dict={dict}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
