'use client';

import { CheckIcon } from '@/components/ui/icons';
import { useI18n } from '@/lib/i18n/client';

/** Slide 2 visual: three frosted verification rows. */
export function VerificationCards() {
  const { dict } = useI18n();

  return (
    <div
      className="w-full h-full rounded-3xl bg-surface-alt bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/scroll-card-bg-2.jpg')" }}
    >
      <div className="sf-vcards">
        {dict.scrollFeatures.verificationCards.map((c) => (
          <div key={c.title} className="sf-vcard">
            <div className="sf-vcard-icon">
              <CheckIcon size={14} strokeWidth={2.5} />
            </div>
            <div className="sf-vcard-info">
              <div className="sf-vcard-title">{c.title}</div>
              <div className="sf-vcard-subtitle">{c.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
