import { HeadingReveal } from '@/components/effects/HeadingReveal';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { CardZone } from '@/components/sections/CardZone';
import { Comparison } from '@/components/sections/Comparison';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { Industries } from '@/components/sections/Industries';
import { ItalyMap } from '@/components/sections/ItalyMap';
import { Pricing } from '@/components/sections/Pricing';
import { ScrollFeatures } from '@/components/sections/ScrollFeatures';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <CardZone />
        <Stats />
        <ScrollFeatures />
        <Industries />
        <ItalyMap />
        <Comparison />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      {/* Per-word heading reveal across every section (runs once fonts are ready) */}
      <HeadingReveal />
    </>
  );
}
