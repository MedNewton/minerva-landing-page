'use client';

import { useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { ClientCard } from './card-zone/ClientCard';
import { PartnerCard } from './card-zone/PartnerCard';
import { SupplierCard } from './card-zone/SupplierCard';
import { useCardMorph } from './card-zone/useCardMorph';

/**
 * Three feature cards in a natural 3-column grid under the hero. At scroll=0
 * they are transformed to read as the hero's scorecard visual (see useCardMorph).
 */
export function CardZone() {
  const sectionRef = useRef<HTMLElement>(null);
  useCardMorph(sectionRef);

  return (
    <section ref={sectionRef} id="card-zone" className="pt-0 pb-12 lg:pt-28 lg:pb-16">
      <Container>
        <div className="card-stack">
          <SupplierCard />
          <ClientCard />
          <PartnerCard />
        </div>
      </Container>
    </section>
  );
}
