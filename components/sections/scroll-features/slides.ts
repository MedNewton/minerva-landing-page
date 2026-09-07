export interface TextSlide {
  heading: string;
  /** Optional muted intro paragraph (slide 1 only). */
  intro?: string;
  statement: string;
  bullets: string[];
}

export const TEXT_SLIDES: TextSlide[] = [
  {
    heading: 'Find companies that fit how you do business.',
    intro:
      'MINERVA helps companies identify compatible clients, suppliers, and strategic partners by analyzing organizational characteristics, business goals, and operational alignment.',
    statement: 'Understand not only who matches — but why.',
    bullets: [
      'Compatibility analysis across 47 dimensions',
      'Clear explanation behind every match',
      'Continuously refined recommendations',
    ],
  },
  {
    heading: 'Verified companies. Trusted connections.',
    statement:
      "Connect with confidence, knowing you're engaging with legitimate organizations and verified decision-makers.",
    bullets: [
      'Verified through official Italian business records',
      'GDPR-compliant and aligned with local regulations',
      'Authorized company representatives identified',
    ],
  },
  {
    heading: 'Reputation built on real business relationships.',
    statement:
      'Every review is tied to a verified business relationship and contributes to a transparent picture of how companies work together.',
    bullets: [
      'Reputation based on completed collaborations',
      'Verified feedback from real business partners',
      'Multi-dimensional evaluation beyond star ratings',
    ],
  },
];

export const VERIFICATION_CARDS = [
  { title: 'Business Registration Verified', subtitle: 'Verified on Mar 15, 2026' },
  { title: 'ATECO Confirmed', subtitle: '13.20.00 · Textile Manufacturing' },
  { title: 'Authorized Representative Identified', subtitle: 'Marco Rossi · CEO & Founder' },
];

export const REPUTATION = {
  reviews: '12 reviews from verified partners',
  score: '4.6',
  categories: [
    { label: 'Reliability', score: '4.8', stars: 5 },
    { label: 'Values alignment', score: '4.7', stars: 5 },
    { label: 'Communication', score: '4.5', stars: 4.5 },
    { label: 'Follow-through', score: '4.4', stars: 5 },
  ],
  quote: 'Reliable partner, values genuinely aligned. Clear communication from the start. Recommended.',
};
