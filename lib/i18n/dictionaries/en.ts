import type { Dictionary } from '../types';

export const en: Dictionary = {
  meta: {
    title: 'Minerva — Find Italian partners who share how you operate',
    description:
      'B2B matchmaking for Italian PMI on 47 dimensions of operating culture. Verified through Camera di Commercio. GDPR by design.',
  },

  header: {
    nav: [
      { label: 'Product', href: '#scroll-features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Trust', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
    signIn: 'Sign in',
    toggleTheme: 'Toggle dark mode',
    languageLabel: 'Language',
  },

  hero: {
    eyebrow: 'For Italian PMI · Verified through Camera di Commercio',
    titleLine1: 'Intelligent matches.',
    titleLine2: 'Stronger partnerships.',
    description:
      "MINERVA connects companies based on real compatibility across values, capabilities, and growth goals. Discover opportunities you wouldn't find on your own.",
    ctaPrimary: 'Explore platform',
    ctaSecondary: 'View plans',
  },

  cards: {
    supplier: {
      title: 'Growing every day',
      description: 'More companies. More opportunities. Better matches.',
      chips: ['Insurance', 'Banking', 'IT', 'Automotive', 'Electronics', 'Chemical', 'HORECA', 'Consulting', 'Logistics'],
      axisY: 'Level of growth',
      axisX: 'N. of partnerships',
    },
    client: {
      badge: 'Client match',
      scoreLabel: ['Compatibility', 'score'],
      verified: 'Verified · Camera di Commercio',
      match: {
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
      },
    },
    partner: {
      title: '100+ industries.',
      description: 'Unlimited collaboration opportunities.',
      tiles: [
        { icon: '/assets/icons/clients.svg', title: 'Clients', subtitle: 'Find new clients' },
        { icon: '/assets/icons/suppliers.svg', title: 'Suppliers', subtitle: 'Find reliable suppliers' },
        { icon: '/assets/icons/partners.svg', title: 'Partners', subtitle: 'Strategic partnerships' },
        { icon: '/assets/icons/collaborators.svg', title: 'Collaborators', subtitle: 'Find talents and collaborators' },
        { icon: '/assets/icons/ma-operation.svg', title: 'M&A Operation', subtitle: 'Buying or selling a company' },
      ],
    },
  },

  stats: {
    eyebrow: 'MINERVA by the numbers',
    heading: 'Building meaningful business connections.',
    description:
      'MINERVA helps companies find clients, suppliers, strategic partners, and collaboration opportunities through intelligent compatibility matching.',
    evaluatedStrong: 'Every match is evaluated',
    evaluatedRest: ' across 47 business dimensions and verified through trusted company data.',
    rated: 'rated 4.8/5',
    cards: {
      network: { label: 'Verified network', caption: 'Verified Italian companies' },
      matching: { label: 'Smart matching', caption: 'Compatibility dimensions' },
      success: { label: 'Match success', caption: 'Companies matched within the first two weeks' },
    },
  },

  scrollFeatures: {
    slides: [
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
    ],
    progressLabel: 'Section progress',
    stepLabel: 'Step {n} of {total}',
    stackCompanies: [
      { title: 'Barilla', subtitle: 'Food Production · Parma', logo: '/assets/icons/barilla.svg' },
      { title: 'Brembo', subtitle: 'Automotive Components · Bergamo', logo: '/assets/icons/brembo.svg' },
      { title: 'Reply', subtitle: 'Technology Consulting · Torino', logo: '/assets/icons/reply.svg' },
      { title: "De'Longhi", subtitle: 'Consumer Appliances · Treviso', logo: '/assets/icons/delonghi.svg' },
      { title: 'IMA Group', subtitle: 'Packaging · Bologna', logo: '/assets/icons/ima.svg' },
    ],
    counterLabel: 'Candidate for matching',
    verificationCards: [
      { title: 'Business Registration Verified', subtitle: 'Verified on Mar 15, 2026' },
      { title: 'ATECO Confirmed', subtitle: '13.20.00 · Textile Manufacturing' },
      { title: 'Authorized Representative Identified', subtitle: 'Marco Rossi · CEO & Founder' },
    ],
    reputation: {
      title: 'Reputation',
      reviews: '12 reviews from verified partners',
      score: '4.6',
      categories: [
        { label: 'Reliability', score: '4.8', stars: 5 },
        { label: 'Values alignment', score: '4.7', stars: 5 },
        { label: 'Communication', score: '4.5', stars: 4.5 },
        { label: 'Follow-through', score: '4.4', stars: 5 },
      ],
      quote: 'Reliable partner, values genuinely aligned. Clear communication from the start. Recommended.',
    },
  },

  industries: {
    eyebrow: 'Who Minerva is for',
    heading: 'Built for the Italian productive fabric',
    listLabel: 'Industries',
    cta: 'Find matches',
    items: [
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
    ],
  },

  map: {
    headingPrefix: 'Doing Business in',
    statLabels: { companies: 'Companies', employed: 'Employed', gdpShare: 'of GDP', exports: 'Exports 2023' },
    keySectors: 'Key sectors',
    industrialDistricts: 'Industrial districts',
    chooseRegion: 'Choose region',
    tooltip: { companies: 'companies', gdp: 'of GDP', details: 'Click for details', view: 'Click to view' },
    regions: {
      'valle-d-aosta': {
        tagline: 'Small autonomous region: alpine tourism, hydroelectric energy, traditional craftsmanship.',
        industries: ['Alpine tourism', 'Hydroelectric energy', 'Traditional craftsmanship', 'Mountain viticulture'],
        districts: [
          { name: 'Hydroelectric district (Compagnia Valdostana delle Acque)', description: 'Hydroelectric power, alpine basin management' },
          { name: 'Cervinia-Courmayeur tourism hub', description: 'High-end alpine tourism, winter sports' },
        ],
      },
      piemonte: {
        tagline: 'Cradle of Italian industry: automotive innovation, world-class wines and mechatronics.',
        industries: ['Automotive and components', 'Aerospace', 'Mechatronics', 'Wine production', 'Food & beverage', 'ICT and gaming', 'Textiles', 'Chemicals'],
        districts: [
          { name: 'Automotive district (Torino)', description: 'Automotive, components, industrial design' },
          { name: 'Langhe-Roero-Monferrato wine district', description: 'DOCG wines, UNESCO-listed gastronomic heritage' },
          { name: 'Biella textile district', description: 'Premium wools, high-end fabrics' },
          { name: 'Valenza jewelry district', description: 'Luxury jewelry, international goldsmithing' },
        ],
      },
      liguria: {
        tagline: 'Gateway to the Mediterranean: ports, shipbuilding and maritime technology.',
        industries: ['Shipbuilding', 'Port logistics', 'Maritime technology', 'Floriculture', 'Coastal tourism'],
        districts: [
          { name: 'Shipbuilding district (La Spezia, Sestri)', description: 'Luxury yachts, naval vessels, repairs' },
          { name: 'Genova tech hub (Erzelli)', description: 'ICT, big data, technology research' },
          { name: 'Floriculture district (Sanremo, Imperia)', description: 'Floriculture, ornamental plants, EU export' },
        ],
      },
      lombardia: {
        tagline: "Italy's economic engine, financial and industrial capital of the country.",
        industries: ['Finance and banking services', 'Fashion and design', 'Advanced mechanics', 'Pharmaceuticals', 'Chemicals', 'ICT and digital', 'Automotive', 'Textiles'],
        districts: [
          { name: 'Brianza district (Monza)', description: 'Furniture, interior design, woodworking' },
          { name: 'Como textile district', description: 'Silk, premium fabrics, luxury fashion' },
          { name: 'Vigevano leather district', description: 'Footwear, leather goods, artisanal manufacturing' },
          { name: 'Lecco mechanical district', description: 'Precision mechanics, steel industry' },
          { name: 'Milano-Pavia pharma-chemical district', description: 'Pharmaceuticals, biotech, fine chemistry' },
        ],
      },
      'trentino-alto-adige': {
        tagline: 'Bilingualism, autonomy, excellence in alpine tourism and agri-food supply chains.',
        industries: ['Mountain agri-food', 'Alpine tourism', 'Renewable energy', 'Wood and furniture', 'Wine production'],
        districts: [
          { name: 'Apple district (Val di Non, Val Venosta)', description: 'DOP apples, European leader in production' },
          { name: 'Alto Adige wine district', description: 'Premium white wines, Pinot Grigio' },
          { name: 'Wood district (Val Pusteria, Val di Fiemme)', description: 'Structural timber, furniture, sustainable building' },
        ],
      },
      veneto: {
        tagline: 'Land of industrial districts and exports, where artisan tradition meets Industry 4.0.',
        industries: ['Fashion and textiles', 'Footwear', 'Furniture and interior design', 'Eyewear', 'Wine production', 'Mechanical engineering', 'Jewelry', 'Port logistics'],
        districts: [
          { name: 'Riviera del Brenta district', description: 'Luxury footwear, high-end leather goods' },
          { name: 'Belluno eyewear district', description: 'Eyewear, world leader in the sector' },
          { name: 'Treviso furniture district', description: 'Furniture, interior design, woodworking' },
          { name: 'Verona-Treviso wine district', description: 'DOC and DOCG wines, Prosecco, Amarone' },
          { name: 'Vicenza goldsmithing district', description: 'Jewelry, gold and precious metals processing' },
        ],
      },
      'friuli-venezia-giulia': {
        tagline: 'Crossroads between Central Europe and the Mediterranean: hub for logistics and shipbuilding.',
        industries: ['Shipbuilding', 'Port logistics', 'Furniture and interior design', 'Cutlery', 'Wine production'],
        districts: [
          { name: 'Shipbuilding district (Monfalcone - Fincantieri)', description: 'Cruise ships, world leader' },
          { name: 'Furniture district (Manzano, Pordenone)', description: 'Chairs, furniture, interior design' },
          { name: 'Cutlery district (Maniago)', description: 'Knives, blades, steel craftsmanship' },
        ],
      },
      'emilia-romagna': {
        tagline: 'A powerhouse of Italian industry, innovation, and food excellence.',
        industries: ['Automotive and Motor Valley', 'Industrial machinery', 'Food & beverage', 'Packaging', 'Ceramics', 'Biomedical and pharmaceuticals', 'Fashion and textiles', 'ICT and innovation'],
        districts: [
          { name: 'Motor Valley (Modena, Bologna, Parma)', description: 'Automotive, supercars, components' },
          { name: 'Packaging Valley (Bologna)', description: 'Packaging machinery and automation' },
          { name: 'Food Valley (Parma)', description: 'Food production, DOP excellence' },
          { name: 'Ceramic district (Sassuolo, Modena, Reggio Emilia)', description: 'Premium ceramics and surfaces' },
          { name: 'Biomedical district (Bologna, Mirandola)', description: 'Healthcare, life sciences, medical devices' },
        ],
      },
      toscana: {
        tagline: 'Made in Italy excellence: fashion, leather goods, jewelry, and world-class tourism.',
        industries: ['Fashion and leather goods', 'Jewelry', 'Marble and stone', 'Wine production', 'Cultural tourism', 'Nautical', 'Pharmaceuticals', 'Textiles'],
        districts: [
          { name: 'Leather goods district (Firenze, Scandicci)', description: 'Luxury leather goods, home to major maisons' },
          { name: 'Prato textile district', description: 'Textiles, raw material recycling, fashion' },
          { name: 'Arezzo goldsmithing district', description: 'Jewelry, gold processing' },
          { name: 'Carrara marble district', description: 'Marble, stone industry, unique worldwide' },
          { name: 'Viareggio nautical district', description: 'Shipbuilding, luxury yachts' },
        ],
      },
      marche: {
        tagline: 'Region of districts: footwear, mechanics, furniture, and nautical.',
        industries: ['Footwear', 'Furniture and interior design', 'Machine tools', 'Nautical', 'Agri-food'],
        districts: [
          { name: 'Footwear district (Fermo, Macerata)', description: 'High-end footwear, leather processing' },
          { name: 'Furniture district (Pesaro-Urbino)', description: 'Kitchen furniture, interior design' },
          { name: 'Machine tools district (Ancona)', description: 'Precision mechanics, automation' },
        ],
      },
      umbria: {
        tagline: 'The green heart of Italy: agri-food, artistic ceramics, and cashmere.',
        industries: ['Cashmere and textiles', 'Artistic ceramics', 'Agri-food (olive oil, wine)', 'Steel', 'Cultural tourism'],
        districts: [
          { name: 'Cashmere district (Solomeo - Brunello Cucinelli)', description: 'Luxury cashmere, international brands' },
          { name: 'Artistic ceramics district (Deruta, Gualdo Tadino)', description: 'Artisanal ceramics, centuries-old tradition' },
          { name: 'Agri-food district (extra virgin olive oil DOP)', description: 'Olive oil, truffles, DOC wines' },
        ],
      },
      lazio: {
        tagline: "Italy's political and administrative heart: hub for services, research, and aerospace industry.",
        industries: ['Public administration and services', 'Aerospace', 'Audiovisual and cinema', 'Pharmaceuticals', 'Tourism', 'ICT', 'Research and development', 'Renewable energy'],
        districts: [
          { name: 'Aerospace district (Roma)', description: 'Aerospace, defense, satellites' },
          { name: 'Audiovisual district (Cinecittà)', description: 'Cinema, audiovisual production, post-production' },
          { name: 'Pomezia-Latina pharma hub', description: 'Pharmaceuticals, biotech, clinical research' },
          { name: 'Green chemistry district (Frosinone)', description: 'Chemistry, packaging, sustainable materials' },
        ],
      },
      abruzzo: {
        tagline: 'Between sea and Apennines: automotive, pharmaceuticals, and nature-based tourism.',
        industries: ['Automotive', 'Pharmaceuticals', 'Agri-food', 'Nature-based tourism'],
        districts: [
          { name: 'Automotive hub (Val di Sangro - Sevel)', description: 'Stellantis plant, commercial vehicles' },
          { name: 'Pharma hub (L\'Aquila, Pescara)', description: 'Pharmaceuticals, biotech, clinical research' },
          { name: 'Agri-food district (Montepulciano d\'Abruzzo)', description: 'DOC wines, olive oil, artisanal pasta' },
        ],
      },
      molise: {
        tagline: 'The smallest region in the South: agri-food, artisanal pasta, and tradition.',
        industries: ['Agri-food', 'Artisanal pasta', 'Traditional agriculture', 'Local crafts'],
        districts: [
          { name: 'Pasta district (Campobasso, La Molisana)', description: 'Durum wheat pasta, regional tradition' },
          { name: 'Agri-food district (caciocavallo, truffle)', description: 'Typical cheeses, Molise white truffle' },
        ],
      },
      campania: {
        tagline: 'Hub of the South: agri-food, aerospace, fashion, and one of the most important port supply chains in the Mediterranean.',
        industries: ['Agri-food', 'Aerospace', 'Shipbuilding', 'Fashion', 'Canning (tomato)', 'Leather goods', 'Tourism', 'Port logistics'],
        districts: [
          { name: 'Aerospace district (Pomigliano, Capua)', description: 'Aeronautics, components, research' },
          { name: 'Tomato district (Salerno, Napoli)', description: 'Canned tomatoes, San Marzano DOP, agri-food export' },
          { name: 'Leather goods district (Solofra)', description: 'Leather goods, tanning, leather processing' },
          { name: 'Goldsmithing district (Torre del Greco)', description: 'Coral, cameos, traditional jewelry' },
        ],
      },
      puglia: {
        tagline: 'The heel of Italy: agri-food, energy, ICT in Bari, and international tourism.',
        industries: ['Agri-food (olive oil, wine)', 'Upholstered furniture', 'Aerospace', 'Renewable energy', 'Tourism'],
        districts: [
          { name: 'Sofa district (Murgia, Altamura)', description: 'Upholstered furniture, European leader' },
          { name: 'Agri-food district (extra virgin olive oil DOP)', description: "Olive oil, Italy's top producer" },
          { name: 'Aerospace hub (Grottaglie, Brindisi)', description: 'Aeronautics, Boeing 787 components' },
        ],
      },
      basilicata: {
        tagline: 'Between two coasts: extraction, automotive, and cultural tourism (Matera).',
        industries: ['Automotive', 'Oil extraction', 'Agri-food', 'Cultural tourism'],
        districts: [
          { name: 'Automotive hub (Melfi - Stellantis)', description: 'Stellantis plant, vehicle production' },
          { name: "Extraction district (Val d'Agri)", description: 'Oil, largest onshore field in the EU' },
          { name: 'Matera cultural hub', description: 'UNESCO heritage, audiovisual, cultural tourism' },
        ],
      },
      calabria: {
        tagline: 'Tip of the boot: agriculture, coastal tourism, Port of Gioia Tauro.',
        industries: ['Agri-food', 'Port logistics', 'Coastal tourism', 'Bergamot and citrus'],
        districts: [
          { name: 'Bergamot district (Reggio Calabria)', description: 'Bergamot essential oil, worldwide exclusive' },
          { name: 'Gioia Tauro logistics hub', description: 'Largest container port in the central Mediterranean' },
          { name: 'Agri-food district (Tropea red onion IGP)', description: 'Red onion, citrus, chili pepper' },
        ],
      },
      sicilia: {
        tagline: 'Mediterranean crossroads: agri-food, energy, ICT, and quality tourism.',
        industries: ['Agri-food', 'Energy (petrochemicals)', 'ICT', 'Cultural tourism', 'Shipbuilding'],
        districts: [
          { name: 'Agri-food district (Pachino tomato IGP, citrus)', description: 'Fruit and vegetables, citrus, Etna DOC wines' },
          { name: 'Petrochemical hub (Siracusa, Gela)', description: 'Refining, industrial chemistry' },
          { name: 'Etna Valley tech hub (Catania)', description: 'Microelectronics, STMicroelectronics' },
        ],
      },
      sardegna: {
        tagline: 'Island of traditions: agro-pastoral, premium tourism, renewable energy.',
        industries: ['Renewable energy', 'Premium tourism', 'Agro-pastoral (cheeses)', 'Petrochemicals', 'ICT'],
        districts: [
          { name: 'Pecorino Sardo DOP district', description: 'Sheep cheeses, international export' },
          { name: 'Costa Smeralda tourism hub', description: 'Luxury tourism, premium nautical' },
          { name: 'Petrochemical hub (Sarroch, Porto Torres)', description: 'Refining, green chemistry' },
        ],
      },
    },
  },

  comparison: {
    eyebrow: 'Compared to alternatives',
    heading: 'Compare how MINERVA helps companies to connect with compatible partners.',
    capability: 'Capability',
    traditional: 'Traditional Business Discovery',
    none: 'None',
    rows: [
      { capability: 'Verified company identity', minerva: 'Camera di Commercio', traditional: 'Self-reported or manually verified' },
      { capability: 'Cultural-fit signal', minerva: '47 dimensions', traditional: null },
      { capability: 'Time to first qualified match', minerva: '~72 h', traditional: 'Weeks or months', mono: true },
      { capability: 'Cost transparency', minerva: '€0 – €39 / mo', traditional: 'Variable and unpredictable', mono: true },
      { capability: 'Signal-to-noise', minerva: 'Ranked list of qualified matches', traditional: 'Search and outreach based' },
      { capability: 'GDPR posture', minerva: 'EU-resident by design', traditional: 'Depends on provider' },
    ],
  },

  testimonials: {
    eyebrow: 'From Italian founders',
    heading: 'Trusted by ambitious Italian companies',
    description:
      'Connect with verified businesses, discover qualified opportunities, and build partnerships that create long-term value.',
    listLabel: 'Testimonials',
    ratingLabel: 'Rating 5 out of 5',
    stats: [
      { value: 200, suffix: '+', label: ['Verified', 'companies'] },
      { value: 47, suffix: '', label: ['Compatibility', 'dimensions'] },
      { value: 92, suffix: '%', label: ['Match', 'satisfaction rate'] },
    ],
    items: [
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
    ],
  },

  pricing: {
    eyebrow: 'Plans and pricing',
    perMonth: '/ month',
    plans: [
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
    ],
  },

  faq: {
    heading: 'Frequently asked questions',
    description: 'Answers to the most common questions Italian PMI have about Minerva.',
    moreQuestions: 'Have more questions?',
    contactUs: 'Contact us',
    columns: [
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
    ],
  },

  footer: {
    description:
      'B2B matchmaking for Italian PMI. Cultural compatibility on 47 dimensions, verified through Camera di Commercio.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'How it works', href: '#how' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Methodology', href: '#trust' },
          { label: 'Request a demo', href: '#cta' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
          { label: 'Press', href: '#' },
          { label: 'Careers', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Terms', href: '#' },
          { label: 'Privacy', href: '#' },
          { label: 'Cookie policy', href: '#' },
          { label: 'GDPR contact', href: '#' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'FAQ', href: '#faq' },
          { label: 'Status', href: '#' },
          { label: 'Changelog', href: '#' },
          { label: 'Security', href: '#' },
        ],
      },
    ],
    copyright: '© 2026 Minerva SRL. All rights reserved.',
    tagline: 'Built in Milano · Made in Italy',
  },
};
