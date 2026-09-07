import type { Metadata, Viewport } from 'next';
import { Google_Sans_Code, Google_Sans_Flex } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'Minerva — Find Italian partners who share how you operate',
  description:
    'B2B matchmaking for Italian PMI on 47 dimensions of operating culture. Verified through Camera di Commercio. GDPR by design.',
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="text-fg antialiased">
        {/* Fixed page-bottom mesh gradient (behind content); revealed by transparent sections */}
        <div className="bg-glow" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
