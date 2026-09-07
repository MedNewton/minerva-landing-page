'use client';

import { useEffect, type RefObject } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { MQ } from '@/lib/media';

/** Page coordinates walking offsetParents — ignores any active transforms. */
function getNaturalRect(el: HTMLElement) {
  let x = 0;
  let y = 0;
  let current: HTMLElement | null = el;
  while (current) {
    x += current.offsetLeft || 0;
    y += current.offsetTop || 0;
    current = current.offsetParent as HTMLElement | null;
  }
  return { left: x - window.scrollX, top: y - window.scrollY, width: el.offsetWidth, height: el.offsetHeight };
}

function getNaturalTop(el: HTMLElement) {
  let y = 0;
  let current: HTMLElement | null = el;
  while (current) {
    y += current.offsetTop || 0;
    current = current.offsetParent as HTMLElement | null;
  }
  return y;
}

/**
 * Scroll-driven card morph.
 *
 * Desktop (≥1024px): the three cards live in a natural 3-col grid. At scroll=0
 * GSAP transforms them to look like a single scorecard in the hero's right
 * column; scrolling past the hero scrubs them back to their natural spots. Once
 * settled, the growth chart reveals and the whole stack zooms out gently.
 *
 * Mobile (≤1023px): only the Client card is visible at first; the other two
 * unfold downward from behind it while the section scrolls in.
 *
 * Both branches reverse on scroll-up and skip under prefers-reduced-motion.
 */
export function useCardMorph(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const cardZone = sectionRef.current;
    if (!cardZone) return;
    const client = cardZone.querySelector<HTMLElement>('[data-card="client"]');
    const supplier = cardZone.querySelector<HTMLElement>('[data-card="supplier"]');
    const partner = cardZone.querySelector<HTMLElement>('[data-card="partner"]');
    const cardStack = cardZone.querySelector<HTMLElement>('.card-stack');
    const chart = cardZone.querySelector<SVGElement>('.supplier-chart');
    const heroInner = document.querySelector<HTMLElement>('#hero > div');
    if (!client || !supplier || !partner || !cardStack) return;

    const mm = gsap.matchMedia();

    mm.add(`${MQ.desktop} and ${MQ.noReducedMotion}`, () => {
      if (!heroInner) return;

      // Where each card must sit to "appear in the hero right column" — recomputed on refresh.
      const computeInitial = () => {
        const heroRect = heroInner.getBoundingClientRect();
        const clientNat = getNaturalRect(client);
        const supplierNat = getNaturalRect(supplier);
        const partnerNat = getNaturalRect(partner);

        const padding = 32; // lg:px-8
        const gridGap = 40; // lg:gap-10
        const heroPtLg = 96; // lg:pt-24
        const heroPbLg = 112; // lg:pb-28
        const innerWidth = heroRect.width - 2 * padding;
        const oneFr = (innerWidth - gridGap) / 11; // 7fr + 4fr
        const leftColW = oneFr * 7;
        const rightColW = oneFr * 4;
        const heroTargetX = heroRect.left + padding + leftColW + gridGap + rightColW / 2;
        const heroTargetY = heroRect.top + heroPtLg + (heroRect.height - heroPtLg - heroPbLg) / 2;
        const cardScale = rightColW / clientNat.width;

        const dx = (r: { left: number; width: number }) => heroTargetX - (r.left + r.width / 2);
        const dy = (r: { top: number; height: number }) => heroTargetY - (r.top + r.height / 2);

        return {
          client: { x: dx(clientNat), y: dy(clientNat), scale: cardScale },
          supplier: { x: dx(supplierNat), y: dy(supplierNat), scale: cardScale },
          partner: { x: dx(partnerNat), y: dy(partnerNat), scale: cardScale },
        };
      };

      let t = computeInitial();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          endTrigger: cardZone,
          end: 'top top',
          scrub: 0.5,
          invalidateOnRefresh: true,
          onRefresh: () => {
            t = computeInitial();
          },
        },
      });

      // Cards animate FROM (transformed into the hero) TO (natural identity).
      tl.from(client, { x: () => t.client.x, y: () => t.client.y, scale: () => t.client.scale, ease: 'none', immediateRender: true }, 0);
      tl.from(supplier, { x: () => t.supplier.x, y: () => t.supplier.y, scale: () => t.supplier.scale, opacity: 0, ease: 'none', immediateRender: true }, 0);
      tl.from(partner, { x: () => t.partner.x, y: () => t.partner.y, scale: () => t.partner.scale, opacity: 0, ease: 'none', immediateRender: true }, 0);

      // Growth chart draws once the morph is ~85% done.
      if (chart) {
        ScrollTrigger.create({
          trigger: cardZone,
          start: 'top 20%',
          once: true,
          onEnter: () => chart.classList.add('animate'),
        });
      }

      // Depth effect: the whole stack (not the cards, to avoid fighting the morph) zooms out past the section.
      gsap.to(cardStack, {
        scale: 0.85,
        opacity: 0.5,
        ease: 'none',
        scrollTrigger: { trigger: cardZone, start: 'top top', end: '+=500', scrub: 0.5 },
      });

      return () => {
        chart?.classList.remove('animate');
      };
    });

    mm.add(`${MQ.mobile} and ${MQ.noReducedMotion}`, () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardZone,
          start: 'top center',
          end: 'top top',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
      // Cards animate FROM (stacked behind the Client card) TO (natural identity).
      tl.from(supplier, { y: () => getNaturalTop(client) - getNaturalTop(supplier), scale: 0.94, opacity: 0, ease: 'none', immediateRender: true }, 0);
      tl.from(partner, { y: () => getNaturalTop(client) - getNaturalTop(partner), scale: 0.88, opacity: 0, ease: 'none', immediateRender: true }, 0);

      if (chart) {
        ScrollTrigger.create({
          trigger: cardZone,
          start: 'top 20%',
          once: true,
          onEnter: () => chart.classList.add('animate'),
        });
      }

      return () => {
        chart?.classList.remove('animate');
      };
    });

    return () => mm.revert();
  }, [sectionRef]);
}
