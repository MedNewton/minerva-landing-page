'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { SlotNumber } from '@/components/ui/SlotNumber';
import { CheckCircleIcon, ClockIcon, ShieldIcon, TrendingUpIcon } from '@/components/ui/icons';
import { useSlotMachines } from '@/lib/hooks/useSlotMachines';

const PORTRAITS = [1, 2, 3, 4].map((n) => `/assets/portraits/portrait-${n}.jpg`);

/** "MINERVA by the numbers" — copy on the left, three stat cards on the right. */
export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  // Tall layout: each number spins only when it enters the viewport.
  useSlotMachines(sectionRef, { mode: 'each', threshold: 0.5 });

  return (
    <section ref={sectionRef} aria-label="Building meaningful business connections" className="py-20 lg:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-alt text-fg-muted text-sm">
              <TrendingUpIcon className="text-success" />
              MINERVA by the numbers
            </span>

            <h2 className="h1 font-semibold text-fg mt-6 lg:mt-8 max-w-xl">
              Building meaningful business connections.
            </h2>

            <p className="body-lg text-fg-muted mt-5 max-w-xl">
              MINERVA helps companies find clients, suppliers, strategic partners, and collaboration opportunities
              through intelligent compatibility matching.
            </p>

            <div className="mt-10 lg:mt-14 max-w-xl">
              <p className="text-fg-muted text-[0.9375rem]">
                <span className="font-medium text-fg">Every match is evaluated</span> across 47 business dimensions
                and verified through trusted company data.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2">
                  {PORTRAITS.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-2 border-bg object-cover"
                    />
                  ))}
                </div>
                <span className="text-fg-muted text-sm">
                  <span className="text-fg font-medium">—</span> rated 4.8/5
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <article className="bg-surface-alt rounded-3xl p-7 lg:p-9 lg:min-h-[300px] flex flex-col lg:justify-between">
              <span className="inline-flex items-center gap-2 text-fg-muted text-sm">
                <ShieldIcon className="text-success" />
                Verified network
              </span>
              <div className="mt-8 lg:mt-0">
                <div className="font-mono text-5xl lg:text-7xl font-medium text-fg leading-none tracking-tight">
                  <SlotNumber value={200} />+
                </div>
                <p className="text-fg-muted text-[18px] lg:text-base mt-2 lg:mt-5">Verified Italian companies</p>
              </div>
            </article>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <article className="bg-surface-alt rounded-3xl p-7 lg:p-8 lg:min-h-[260px] flex flex-col lg:justify-between">
                <span className="inline-flex items-center gap-2 text-fg-muted text-sm">
                  <ClockIcon className="text-success" />
                  Smart matching
                </span>
                <div className="mt-8 lg:mt-0">
                  <div className="font-mono text-5xl lg:text-6xl font-medium text-fg leading-none tracking-tight">
                    <SlotNumber value={47} />
                  </div>
                  <p className="text-fg-muted text-[18px] lg:text-sm mt-2 lg:mt-4">Compatibility dimensions</p>
                </div>
              </article>

              <article className="bg-surface-alt rounded-3xl p-7 lg:p-8 lg:min-h-[260px] flex flex-col lg:justify-between">
                <span className="inline-flex items-center gap-2 text-fg-muted text-sm">
                  <CheckCircleIcon className="text-success" />
                  Match success
                </span>
                <div className="mt-8 lg:mt-0">
                  <div className="font-mono text-5xl lg:text-6xl font-medium text-fg leading-none tracking-tight">
                    <SlotNumber value={92} />%
                  </div>
                  <p className="text-fg-muted text-[18px] lg:text-sm mt-2 lg:mt-4">
                    Companies matched within the first two weeks
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
