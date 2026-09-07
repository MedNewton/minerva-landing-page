import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TESTIMONIALS } from '@/lib/data/testimonials';
import { TestimonialCard } from './testimonials/TestimonialCard';
import { TestimonialStats } from './testimonials/TestimonialStats';

/** Sticky intro on the left, vertical infinite marquee of testimonial cards on the right. */
export function Testimonials() {
  return (
    <section aria-labelledby="testimonials" className="py-20 lg:py-28 bg-bg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <Eyebrow uppercase>From Italian founders</Eyebrow>
            <h2 id="testimonials" className="h1 font-semibold text-fg leading-tight mb-4">
              Trusted by ambitious Italian companies
            </h2>
            <p className="body-md text-fg-muted mb-10 lg:mb-12 max-w-md">
              Connect with verified businesses, discover qualified opportunities, and build partnerships that create
              long-term value.
            </p>
            <TestimonialStats />
          </div>

          <div className="tt-marquee" aria-label="Testimonials">
            <div className="tt-track">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
              {/* Duplicate set for a seamless loop */}
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={`dup-${t.name}`} t={t} hidden />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
