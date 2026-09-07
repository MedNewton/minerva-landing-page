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

export const INDUSTRIES: Industry[] = [
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    img: '/assets/images/industry-manufacturing.jpg',
    tags: ['Industrial Manufacturing', 'Precision Engineering', 'Automotive Components', 'Packaging', 'Metalworking', 'Textile Production', 'Machinery & Equipment', 'Industrial Suppliers'],
    lead: 'Manufacturing companies thrive on strong supply chains and trusted relationships.',
    body: 'MINERVA helps manufacturers identify reliable suppliers, production partners, distributors, and industrial collaborators who align with their operational standards, growth ambitions, and business culture. Expand beyond your existing network and uncover opportunities across Italy and Europe.',
  },
  {
    id: 'technology',
    label: 'Technology & Software',
    img: '/assets/images/industry-technology.jpg',
    tags: ['Software Development', 'SaaS', 'AI & Machine Learning', 'Cybersecurity', 'Cloud Services', 'IT Consulting', 'FinTech', 'Digital Transformation'],
    lead: 'Technology businesses move fast, but meaningful partnerships are built on more than innovation alone.',
    body: 'MINERVA helps software companies, digital agencies, and technology providers connect with clients, strategic partners, investors, and collaborators who share similar goals, decision-making styles, and growth trajectories.',
  },
  {
    id: 'food',
    label: 'Food & Beverage',
    img: '/assets/images/industry-food.jpg',
    tags: ['Food Production', 'Beverage Manufacturing', 'Agriculture', 'Coffee & Roasting', 'Dairy Products', 'Wine & Spirits', 'Packaging', 'Hospitality Supply'],
    lead: 'From local producers to international brands, success in food and beverage depends on trusted relationships.',
    body: 'MINERVA helps businesses discover distributors, suppliers, hospitality partners, retailers, and production collaborators that can help bring products to new markets and strengthen existing operations.',
  },
  {
    id: 'professional',
    label: 'Professional Services',
    img: '/assets/images/industry-professional.jpg',
    tags: ['Consulting', 'Legal Services', 'Accounting', 'Marketing Agencies', 'Business Advisory', 'Human Resources', 'Financial Services', 'Training & Education'],
    lead: 'Professional service firms grow through reputation, expertise, and the right connections.',
    body: 'MINERVA helps agencies, consultants, and advisors identify organizations that value their capabilities, while also uncovering partnership opportunities that expand service offerings and create new business channels.',
  },
  {
    id: 'health',
    label: 'Health & Medical Services',
    img: '/assets/images/industry-health.jpg',
    tags: ['Healthcare Providers', 'Medical Devices', 'Clinics', 'Diagnostics', 'Pharmaceuticals', 'Telemedicine', 'Wellness Services', 'Healthcare Technology'],
    lead: 'Healthcare organizations operate in an environment where trust, compliance, and expertise are essential.',
    body: 'MINERVA helps clinics, medical service providers, healthcare innovators, and life science companies connect with partners, suppliers, and organizations that support sustainable growth and better patient outcomes.',
  },
  {
    id: 'logistics',
    label: 'Logistics & Transport',
    img: '/assets/images/industry-logistics.jpg',
    tags: ['Freight & Shipping', 'Supply Chain Management', 'Warehousing', 'Last-Mile Delivery', 'Fleet Operations', 'International Transport', 'Customs Services', 'Distribution Networks'],
    lead: 'Logistics companies are the backbone of modern commerce.',
    body: 'MINERVA helps transport operators, logistics providers, and supply chain specialists discover reliable partners, new clients, distribution opportunities, and strategic alliances that improve efficiency and unlock growth across regional and international markets.',
  },
];
