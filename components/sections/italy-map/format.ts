/** "447,000+" → "447K+", "13,000+" → "13K+". Keeps a trailing "+" if present. */
export function formatK(s: string): string {
  if (!s) return '';
  const m = /^([\d,]+)(\+?)$/.exec(String(s));
  if (!m) return s;
  const n = parseInt(m[1].replace(/,/g, ''), 10);
  if (Number.isNaN(n)) return s;
  return (n >= 1000 ? `${Math.round(n / 1000)}K` : String(n)) + (m[2] || '');
}
