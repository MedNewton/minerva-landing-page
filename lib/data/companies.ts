/** Companies rotating through the "Candidate for matching" card stack. */
export interface StackCompany {
  title: string;
  subtitle: string;
  logo: string;
}

export const STACK_COMPANIES: StackCompany[] = [
  { title: 'Barilla', subtitle: 'Food Production · Parma', logo: '/assets/icons/barilla.svg' },
  { title: 'Brembo', subtitle: 'Automotive Components · Bergamo', logo: '/assets/icons/brembo.svg' },
  { title: 'Reply', subtitle: 'Technology Consulting · Torino', logo: '/assets/icons/reply.svg' },
  { title: "De'Longhi", subtitle: 'Consumer Appliances · Treviso', logo: '/assets/icons/delonghi.svg' },
  { title: 'IMA Group', subtitle: 'Packaging · Bologna', logo: '/assets/icons/ima.svg' },
];

/** Industry chips scrolling inside the "Growing every day" card. */
export const GROWTH_INDUSTRY_CHIPS = [
  'Insurance', 'Banking', 'IT', 'Automotive', 'Electronics', 'Chemical', 'HORECA', 'Consulting', 'Logistics',
];

/** Tiles scrolling inside the "100+ industries" card. */
export const PARTNER_TILES = [
  { icon: '/assets/icons/clients.svg', title: 'Clients', subtitle: 'Find new clients' },
  { icon: '/assets/icons/suppliers.svg', title: 'Suppliers', subtitle: 'Find reliable suppliers' },
  { icon: '/assets/icons/partners.svg', title: 'Partners', subtitle: 'Strategic partnerships' },
  { icon: '/assets/icons/collaborators.svg', title: 'Collaborators', subtitle: 'Find talents and collaborators' },
  { icon: '/assets/icons/ma-operation.svg', title: 'M&A Operation', subtitle: 'Buying or selling a company' },
];

/** Sample match shown in the "Client match" scorecard. */
export const CLIENT_MATCH = {
  ticket: '#MIN-04821',
  score: 87,
  verifiedOn: '21 May 2026',
  companies: [
    { logo: '/assets/icons/lavazza.svg', name: 'Lavazza', meta: 'Coffee & Beverage · Torino' },
    { logo: '/assets/icons/sacmi.svg', name: 'SACMI', meta: 'Packaging Equipment · Imola' },
  ],
  dimensions: [
    { label: 'Operating culture', value: 82 },
    { label: 'Decision velocity', value: 91 },
    { label: 'Risk appetite', value: 74 },
    { label: 'Governance maturity', value: 88 },
    { label: 'Communication style', value: 85 },
  ],
};
