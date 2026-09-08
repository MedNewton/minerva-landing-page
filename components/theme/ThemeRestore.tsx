'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect } from 'react';
import { applyResolvedTheme } from '@/lib/theme';

// useLayoutEffect fires before paint (no light-mode flash) but warns during SSR.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Re-applies the `.dark` class after every route change. Navigating between
 * locales re-renders the [lang] root layout, and the patch resets <html>'s
 * className to the server value — dropping the class the pre-paint init
 * script (or the header toggle) added outside React.
 */
export function ThemeRestore() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    applyResolvedTheme();
  }, [pathname]);

  return null;
}
