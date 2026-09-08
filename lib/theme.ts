/** Shared dark-mode helpers (browser-only; callers run in effects or event handlers). */
export const THEME_KEY = 'minerva-theme';

/** `?theme=light|dark` → localStorage → system preference (same order as the layout's init script). */
export function resolveTheme(): 'dark' | 'light' {
  try {
    const forced = new URLSearchParams(window.location.search).get('theme');
    if (forced === 'dark' || forced === 'light') return forced;
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    /* storage unavailable (private mode) — fall through to system preference */
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function applyResolvedTheme() {
  document.documentElement.classList.toggle('dark', resolveTheme() === 'dark');
}
