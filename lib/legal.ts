import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { marked } from 'marked';
import type { LegalSlug } from '@/lib/i18n/types';

/**
 * The legal documents live as Markdown in public/assets/ (Italian is their
 * legally binding language; both locales render the same text). Converted to
 * HTML at build time — the pages are statically generated.
 */

const FILES: Record<LegalSlug, string> = {
  terms: 'MINERVA - TERMINI E CONDIZIONI DI UTILIZZO.md',
  privacy: 'MINERVA - INFORMATIVA PRIVACY.md',
  'cookie-policy': 'MINERVA - COOKIE POLICY.md',
};

export const LEGAL_SLUGS = Object.keys(FILES) as LegalSlug[];

export const hasLegalSlug = (value: string): value is LegalSlug => value in FILES;

export async function getLegalHtml(slug: LegalSlug): Promise<string> {
  const file = path.join(process.cwd(), 'public', 'assets', FILES[slug]);
  const markdown = await readFile(file, 'utf-8');
  return marked.parse(markdown, { async: false });
}
