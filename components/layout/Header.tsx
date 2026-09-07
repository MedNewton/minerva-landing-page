'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { MoonIcon, SunIcon } from '@/components/ui/icons';
import { NAV_LINKS } from '@/lib/data/navigation';

const THEME_KEY = 'minerva-theme';

/**
 * Fixed site header. Auto-hides on scroll down and reveals on scroll up
 * (CSS transform on `.is-hidden`). Hosts the dark-mode toggle — the icon swap
 * is pure CSS (`dark:` variants), the click just flips the `.dark` class and
 * persists the choice.
 */
export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let lastY = window.scrollY;
    let hidden = false;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (y < 80) {
        if (hidden) {
          header.classList.remove('is-hidden');
          hidden = false;
        }
      } else if (delta > 2 && !hidden) {
        header.classList.add('is-hidden');
        hidden = true;
      } else if (delta < -2 && hidden) {
        header.classList.remove('is-hidden');
        hidden = false;
      }
      lastY = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    } catch {
      /* storage unavailable (private mode) — theme still toggles for the session */
    }
  };

  return (
    <header ref={headerRef} id="siteHeader" className="sticky top-0 z-50 bg-surface border-b border-border">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-7 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-fg-muted hover:text-fg transition-colors duration-150">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="h-10 w-10 inline-flex items-center justify-center rounded-[10px] text-fg-muted hover:text-fg hover:bg-muted transition-colors duration-150"
            >
              <SunIcon className="hidden dark:block" />
              <MoonIcon className="block dark:hidden" />
            </button>
            <a
              href="#cta"
              className="hidden sm:inline-flex text-sm text-fg-muted hover:text-fg px-3 h-10 items-center rounded-[10px] transition-colors duration-150"
            >
              Sign in
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
