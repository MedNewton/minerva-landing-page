export interface Testimonial {
  sector: string;
  quote: string;
  name: string;
  role: string;
  portrait: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    sector: 'Manufacturing',
    quote:
      'In three weeks we found five strategic partners for our production chain. Companies that share our values on sustainability and artisanal quality. No cold leads — just conversations that made sense from the very first contact.',
    name: 'Marco Rossi',
    role: 'CEO & Founder',
    portrait: '/assets/portraits/marco-rossi.png',
  },
  {
    sector: 'Technology',
    quote:
      "We connected Aurora Digital with three enterprise clients in under a month. The platform really understands the Italian B2B context — ATECO codes, specific sectors, company sizes. An essential tool if you're growing in the Italian market.",
    name: 'Lorenzo Bianchi',
    role: 'Co-founder & CEO',
    portrait: '/assets/portraits/lorenzo-bianchi.png',
  },
  {
    sector: 'Food & Beverage',
    quote:
      'For a small family business like ours, Minerva opened contacts with distributors and restaurateurs we would never have found at trade fairs. The anonymous reviews from other partners helped us choose who to work with.',
    name: 'Maria Esposito',
    role: 'Commercial Director',
    portrait: '/assets/portraits/maria-esposito.png',
  },
];
