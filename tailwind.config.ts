import type { Config } from 'tailwindcss';

/**
 * Mirrors the inline `tailwind.config` the original single-file landing passed
 * to the Tailwind CDN. Every semantic colour resolves to a CSS variable defined
 * in app/globals.css so the `.dark` class swaps the whole palette.
 */
const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-alt': 'var(--surface-alt)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        primary: 'var(--primary)',
        'on-primary': 'var(--on-primary)',
        'primary-hover': 'var(--primary-hover)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        muted: 'var(--muted)',
        success: 'var(--success)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        container: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
