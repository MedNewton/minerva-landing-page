export interface ComparisonRow {
  capability: string;
  minerva: string;
  /** Traditional discovery cell. `none` renders the dash icon. */
  traditional: string | { none: true };
  /** Render both value cells in the mono font (numbers, prices). */
  mono?: boolean;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { capability: 'Verified company identity', minerva: 'Camera di Commercio', traditional: 'Self-reported or manually verified' },
  { capability: 'Cultural-fit signal', minerva: '47 dimensions', traditional: { none: true } },
  { capability: 'Time to first qualified match', minerva: '~72 h', traditional: 'Weeks or months', mono: true },
  { capability: 'Cost transparency', minerva: '€0 – €39 / mo', traditional: 'Variable and unpredictable', mono: true },
  { capability: 'Signal-to-noise', minerva: 'Ranked list of qualified matches', traditional: 'Search and outreach based' },
  { capability: 'GDPR posture', minerva: 'EU-resident by design', traditional: 'Depends on provider' },
];
