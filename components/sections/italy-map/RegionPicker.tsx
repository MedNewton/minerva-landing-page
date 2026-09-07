'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/icons';
import type { RegionSlug } from '@/lib/data/italy-map-paths';
import { REGIONS } from '@/lib/data/regions';

interface Props {
  value: RegionSlug;
  onChange: (slug: RegionSlug) => void;
}

/**
 * Mobile-only region dropdown rendered inline with the heading (the SVG map is
 * hidden below 1024px). Custom button + listbox instead of a native <select>
 * so it can be styled like the heading text.
 */
export function RegionPicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  // Close on any click outside the picker.
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [open]);

  return (
    <span ref={wrapRef} className="im-region-select-wrap" data-split-ignore>
      <button
        type="button"
        className="im-region-select"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Choose region"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{REGIONS[value].name}</span>
        <ChevronDownIcon className="im-region-chevron" strokeWidth={2.5} />
      </button>
      <ul className="im-region-menu" role="listbox" hidden={!open}>
        {(Object.keys(REGIONS) as RegionSlug[]).map((slug) => (
          <li
            key={slug}
            role="option"
            aria-selected={slug === value}
            tabIndex={-1}
            onClick={() => {
              onChange(slug);
              setOpen(false);
            }}
          >
            {REGIONS[slug].name}
          </li>
        ))}
      </ul>
    </span>
  );
}
