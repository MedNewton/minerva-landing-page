'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TagCloud } from '@/components/ui/TagCloud';
import { ArrowRightIcon } from '@/components/ui/icons';
import { INDUSTRIES, type IndustryId } from '@/lib/data/industries';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { MQ } from '@/lib/media';
import { useDockMagnification } from './industries/useDockMagnification';

const FADE_MS = 300;

/**
 * "Who Minerva is for": clickable vertical list (dock magnification on hover,
 * horizontal pill tabs on mobile) + a detail panel that fades out, swaps
 * image/tags/copy, and fades back in.
 */
export function Industries() {
  const [active, setActive] = useState<IndustryId>(INDUSTRIES[0].id); // highlighted tab (immediate)
  const [shown, setShown] = useState<IndustryId>(INDUSTRIES[0].id); // panel content (after fade-out)
  const [changing, setChanging] = useState(false);
  const isMobile = useMediaQuery(MQ.mobile);
  const listRef = useRef<HTMLUListElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useDockMagnification(listRef);
  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const select = (id: IndustryId) => {
    if (id === active) return;
    setActive(id);
    setChanging(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShown(id);
      setChanging(false);
    }, FADE_MS);
  };

  const entry = INDUSTRIES.find((i) => i.id === shown) ?? INDUSTRIES[0];

  return (
    <section aria-labelledby="industries-it" className="py-20 lg:py-28 bg-surface-alt dark:bg-bg border-y border-border">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Eyebrow uppercase>Who Minerva is for</Eyebrow>
            <h2 id="industries-it" className="h1 font-semibold text-fg mb-10 lg:mb-12">
              Built for the Italian productive fabric
            </h2>
            <ul ref={listRef} className="sf-ind-list space-y-1" id="sfIndList" role="tablist" aria-label="Industries">
              {INDUSTRIES.map((ind, i) => {
                const on = ind.id === active;
                return (
                  <li key={ind.id}>
                    <button
                      type="button"
                      data-industry={ind.id}
                      className={`sf-ind-item${on ? ' is-active' : ''}`}
                      role="tab"
                      aria-selected={on}
                      onClick={() => select(ind.id)}
                    >
                      <span className="sf-ind-idx">{String(i + 1).padStart(2, '0')}</span>
                      <span className="sf-ind-label">{ind.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={`sf-ind-detail${changing ? ' is-changing' : ''}`} role="tabpanel">
            <Image
              src={entry.img}
              alt=""
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="sf-ind-img aspect-[16/9] w-full rounded-2xl mb-6 object-cover bg-surface-alt"
            />

            <TagCloud tags={entry.tags} mobile={isMobile} className="sf-ind-tags flex flex-wrap gap-2 mb-6" />

            <div className="sf-ind-desc max-w-prose mb-8 pl-1">
              <p className="sf-ind-desc-lead body-md text-fg font-medium mb-3">{entry.lead}</p>
              <p className="sf-ind-desc-body body-md text-fg-muted">{entry.body}</p>
            </div>
            <a
              href="https://www.app.minerva-app.website"
              target="_blank"
              rel="noopener noreferrer"
              className="sf-ind-cta inline-flex items-center gap-2 px-2 py-2 rounded-md text-fg font-semibold hover:bg-surface-alt transition-colors group"
            >
              <span>Find matches</span>
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
