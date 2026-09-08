import type { RegionSlug } from '@/lib/data/italy-map-paths';

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/** Tiles scrolling inside the "100+ industries" card. */
export interface PartnerTile {
  icon: string;
  title: string;
  subtitle: string;
}

/** Companies rotating through the "Candidate for matching" card stack. */
export interface StackCompany {
  title: string;
  subtitle: string;
  logo: string;
}

/** Sample match shown in the "Client match" scorecard. */
export interface ClientMatch {
  ticket: string;
  score: number;
  verifiedOn: string;
  companies: { logo: string; name: string; meta: string }[];
  dimensions: { label: string; value: number }[];
}

export interface TextSlide {
  heading: string;
  /** Optional muted intro paragraph (slide 1 only). */
  intro?: string;
  statement: string;
  bullets: string[];
}

export interface VerificationCard {
  title: string;
  subtitle: string;
}

export interface Reputation {
  title: string;
  reviews: string;
  score: string;
  categories: { label: string; score: string; stars: number }[];
  quote: string;
}

export type IndustryId =
  | 'manufacturing'
  | 'technology'
  | 'food'
  | 'professional'
  | 'health'
  | 'logistics';

export interface Industry {
  id: IndustryId;
  label: string;
  img: string;
  tags: string[];
  lead: string;
  body: string;
}

export interface ComparisonRow {
  capability: string;
  minerva: string;
  /** Traditional discovery cell. `null` renders the dash icon + "None" label. */
  traditional: string | null;
  /** Render both value cells in the mono font (numbers, prices). */
  mono?: boolean;
}

export interface Testimonial {
  sector: string;
  quote: string;
  name: string;
  role: string;
  portrait: string;
}

export interface TestimonialStat {
  value: number;
  suffix: string;
  label: [string, string];
}

export interface Plan {
  id: 'free' | 'smart' | 'premium';
  name: string;
  icon: string;
  description: string;
  price: string;
  cta: { label: string; href: string; variant: 'outline' | 'solid' };
  featuresTitle: string;
  features: string[];
  notes: string[];
}

export interface FaqEntry {
  icon: string;
  question: string;
  answer: string;
}

/** Locale-dependent copy for one region (structural stats live in lib/data/regions.ts). */
export interface RegionL10n {
  tagline: string;
  industries: string[];
  districts: { name: string; description: string }[];
}

/** Every user-visible string on the landing page, per locale. */
export interface Dictionary {
  meta: { title: string; description: string };
  header: {
    nav: NavLink[];
    signIn: string;
    toggleTheme: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  cards: {
    supplier: { title: string; description: string; chips: string[]; axisY: string; axisX: string };
    client: {
      badge: string;
      scoreLabel: [string, string];
      verified: string;
      match: ClientMatch;
    };
    partner: { title: string; description: string; tiles: PartnerTile[] };
  };
  stats: {
    eyebrow: string;
    heading: string;
    description: string;
    evaluatedStrong: string;
    evaluatedRest: string;
    rated: string;
    cards: {
      network: { label: string; caption: string };
      matching: { label: string; caption: string };
      success: { label: string; caption: string };
    };
  };
  scrollFeatures: {
    slides: TextSlide[];
    progressLabel: string;
    /** Template with `{n}` and `{total}` placeholders. */
    stepLabel: string;
    stackCompanies: StackCompany[];
    counterLabel: string;
    verificationCards: VerificationCard[];
    reputation: Reputation;
  };
  industries: {
    eyebrow: string;
    heading: string;
    listLabel: string;
    cta: string;
    items: Industry[];
  };
  map: {
    headingPrefix: string;
    statLabels: { companies: string; employed: string; gdpShare: string; exports: string };
    keySectors: string;
    industrialDistricts: string;
    chooseRegion: string;
    tooltip: { companies: string; gdp: string; details: string; view: string };
    regions: Record<RegionSlug, RegionL10n>;
  };
  comparison: {
    eyebrow: string;
    heading: string;
    capability: string;
    traditional: string;
    none: string;
    rows: ComparisonRow[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    description: string;
    listLabel: string;
    ratingLabel: string;
    stats: TestimonialStat[];
    items: Testimonial[];
  };
  pricing: { eyebrow: string; perMonth: string; plans: Plan[] };
  faq: {
    heading: string;
    description: string;
    moreQuestions: string;
    contactUs: string;
    columns: FaqEntry[][];
  };
  footer: {
    description: string;
    columns: FooterColumn[];
    copyright: string;
    tagline: string;
  };
}
