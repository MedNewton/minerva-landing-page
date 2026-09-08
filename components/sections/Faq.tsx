'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { useI18n } from '@/lib/i18n/client';
import { prefersReducedMotion } from '@/lib/media';
import { FaqItem } from './faq/FaqItem';

export function Faq() {
  const { dict } = useI18n();
  const t = dict.faq;
  const sectionRef = useRef<HTMLElement>(null);

  // Only one <details> open at a time.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = Array.from(section.querySelectorAll<HTMLDetailsElement>('details'));
    const handlers = items.map((d) => {
      const onToggle = () => {
        if (d.open) items.forEach((other) => other !== d && (other.open = false));
      };
      d.addEventListener('toggle', onToggle);
      return () => d.removeEventListener('toggle', onToggle);
    });
    return () => handlers.forEach((off) => off());
  }, []);

  // Smooth height animation. Native <details> hides collapsed content with
  // display:none, which can't transition, so we manage `open` manually and
  // animate `.faq-collapse` between 0 and scrollHeight.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const cleanups: Array<() => void> = [];
    section.querySelectorAll<HTMLDetailsElement>('details').forEach((d) => {
      const wrap = d.querySelector<HTMLElement>('.faq-collapse');
      const summary = d.querySelector<HTMLElement>('summary');
      if (!wrap || !summary) return;
      if (!d.open) wrap.style.height = '0';

      const onClick = (e: MouseEvent) => {
        e.preventDefault();
        if (d.open) {
          wrap.style.height = `${wrap.scrollHeight}px`;
          void wrap.offsetHeight; // commit the starting height
          wrap.style.height = '0';
          wrap.addEventListener('transitionend', function done(ev) {
            if (ev.propertyName !== 'height') return;
            d.open = false;
            wrap.removeEventListener('transitionend', done);
          });
        } else {
          d.open = true;
          wrap.style.height = '0';
          void wrap.offsetHeight;
          wrap.style.height = `${wrap.scrollHeight}px`;
          wrap.addEventListener('transitionend', function done(ev) {
            if (ev.propertyName !== 'height') return;
            wrap.style.height = 'auto'; // adapt if content reflows later
            wrap.removeEventListener('transitionend', done);
          });
        }
      };
      summary.addEventListener('click', onClick);
      cleanups.push(() => {
        summary.removeEventListener('click', onClick);
        wrap.style.height = '';
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-20 lg:py-28 bg-surface-alt border-t border-border">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="h1 font-semibold text-fg mb-4">{t.heading}</h2>
          <p className="body-lg text-fg-muted">{t.description}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
          {t.columns.map((column, c) => (
            <div key={c} className="space-y-3">
              {column.map((item) => (
                <FaqItem key={item.question} item={item} />
              ))}

              {c === t.columns.length - 1 && (
                <div className="flex items-center justify-between gap-4 bg-surface dark:bg-[#242C3A] rounded-xl px-5 h-[61px]">
                  <div className="flex items-center gap-4 min-w-0">
                    <img src="/assets/icons/faq-contact.svg" alt="" width={29} height={29} aria-hidden="true" className="shrink-0" />
                    <span className="font-semibold text-fg">{t.moreQuestions}</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center shrink-0 whitespace-nowrap h-9 px-5 rounded-full border border-border-strong bg-surface text-fg text-sm font-semibold hover:bg-surface-alt transition-colors"
                  >
                    {t.contactUs}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
