export interface FaqItem {
  icon: string;
  question: string;
  answer: string;
}

/** Two columns, rendered left/right on desktop and stacked on mobile. */
export const FAQ_COLUMNS: FaqItem[][] = [
  [
    {
      icon: '/assets/icons/faq-who-behind.svg',
      question: 'Who is behind Minerva?',
      answer:
        'Minerva is an Italian platform founded in 2024 by a team with deep experience in the Italian PMI ecosystem. We work closely with the Camera di Commercio and trade associations to ensure the platform respects the specifics of the Italian market. Headquartered in Milan, with a publicly verifiable P.IVA.',
    },
    {
      icon: '/assets/icons/faq-results.svg',
      question: 'How long does it take to get results?',
      answer:
        'Creating the profile takes about 10 minutes. Camera di Commercio verification is automatic and completes within 24 hours. The first matches arrive within 48 hours of verification. Most companies start their first qualified conversation within the first week.',
    },
    {
      icon: '/assets/icons/faq-sector.svg',
      question: 'Is my sector covered by Minerva?',
      answer:
        "We currently cover manufacturing, technology, food & beverage, professional services, health and logistics. We're expanding to new sectors every month. If your sector isn't covered yet, you can sign up for free and you'll be among the first to know when we add it.",
    },
    {
      icon: '/assets/icons/faq-different.svg',
      question: 'How is this different from LinkedIn or a trade fair?',
      answer:
        'LinkedIn is great for individual careers; Minerva is built for B2B relationships between companies. Trade fairs offer physical presence but at high cost and with random contacts. Minerva combines the verification of a trade fair (real companies, verified decision-makers) with the scalability of digital (algorithmic matching, continuous contacts, predictable costs).',
    },
  ],
  [
    {
      icon: '/assets/icons/faq-cost.svg',
      question: 'What does Minerva really cost?',
      answer:
        'The Free plan is free, always. Forever. It lets you create your profile, see matches and send up to 3 requests per month. Premium starts at €39/month (billed annually) and includes unlimited full matches, reviews and direct contacts. You can cancel anytime, no penalties.',
    },
    {
      icon: '/assets/icons/faq-small.svg',
      question: 'Is Minerva suitable for small companies too?',
      answer:
        "Yes. Minerva is built specifically for Italian PMI — from micro-enterprises (1-10 employees) to medium-sized companies (50-250 employees). The algorithm accounts for company size in matching, so a micro-enterprise isn't suggested to an enterprise (or vice versa) unless there's real compatibility.",
    },
    {
      icon: '/assets/icons/faq-data.svg',
      question: "Who sees my company's data?",
      answer:
        'Only the companies you actively choose to connect with. Basic profile information (sector, size, values) is visible to all verified companies, but sensitive data (exact revenue, contacts, detailed org chart) is shared only after your explicit authorization, case by case.',
    },
  ],
];
