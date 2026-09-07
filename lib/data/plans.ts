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

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'FREE',
    icon: '/assets/icons/plan-free.svg',
    description: 'Perfect for discovering companies and understanding your compatibility potential.',
    price: '€0',
    cta: { label: 'Start', href: '#cta', variant: 'outline' },
    featuresTitle: 'Includes:',
    features: [
      'Verified company profile',
      'Company name and representative information',
      'Business sector and company details',
      'Company values and positioning',
      'Basic compatibility overview',
      'Affinity indicators with other companies',
      'Up to 3 match requests per month',
      'Access to verified Italian companies',
    ],
    notes: [],
  },
  {
    id: 'smart',
    name: 'SMART',
    icon: '/assets/icons/plan-smart.svg',
    description: 'Gain full visibility into companies, reputation, and compatibility.',
    price: '€249',
    cta: { label: 'Select', href: '#cta', variant: 'solid' },
    featuresTitle: 'Everything in Free, plus:',
    features: [
      'Full company profile information',
      'Complete compatibility analysis',
      'Reputation score and ratings',
      'Anonymous reviews from verified partners',
      'Business background and company insights',
      'Unlimited profile exploration',
      'Advanced match recommendations',
      'Detailed compatibility breakdown',
    ],
    notes: [
      'Note: Direct contact information is not included.',
      'Note: for the first subscriptions until December 2027',
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    icon: '/assets/icons/plan-premium.svg',
    description: 'Turn qualified matches into real business relationships.',
    price: '€599',
    cta: { label: 'Select', href: '#cta', variant: 'solid' },
    featuresTitle: 'Everything in Smart, plus:',
    features: [
      'Direct messaging',
      'Meeting scheduling and shared calendar',
      'Email access',
      'Phone number access (when available)',
      'Priority match recommendations',
      'Unlimited match requests',
      'Direct communication with decision-makers',
      'Faster access to new opportunities',
    ],
    notes: ['Note: for the first subscriptions valid for 24 months'],
  },
];
