import type { Dictionary } from '../types';

export const it: Dictionary = {
  meta: {
    title: 'Minerva — Trova partner italiani che condividono il tuo modo di lavorare',
    description:
      'Matchmaking B2B per le PMI italiane su 47 dimensioni di cultura operativa. Verifica tramite Camera di Commercio. GDPR by design.',
  },

  header: {
    nav: [
      { label: 'Prodotto', href: '#scroll-features' },
      { label: 'Prezzi', href: '#pricing' },
      { label: 'Fiducia', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
    signIn: 'Accedi',
    toggleTheme: 'Cambia tema',
    languageLabel: 'Lingua',
  },

  hero: {
    eyebrow: 'Per le PMI italiane · Verificate tramite Camera di Commercio',
    titleLine1: 'Match intelligenti.',
    titleLine2: 'Partnership più solide.',
    description:
      'MINERVA connette le aziende sulla base della compatibilità reale tra valori, competenze e obiettivi di crescita. Scopri opportunità che non troveresti da solo.',
    ctaPrimary: 'Esplora la piattaforma',
    ctaSecondary: 'Scopri i piani',
  },

  cards: {
    supplier: {
      title: 'In crescita ogni giorno',
      description: 'Più aziende. Più opportunità. Match migliori.',
      chips: ['Assicurazioni', 'Banche', 'IT', 'Automotive', 'Elettronica', 'Chimica', 'HORECA', 'Consulenza', 'Logistica'],
      axisY: 'Livello di crescita',
      axisX: 'N. di partnership',
    },
    client: {
      badge: 'Match cliente',
      scoreLabel: ['Punteggio di', 'compatibilità'],
      verified: 'Verificata · Camera di Commercio',
      match: {
        ticket: '#MIN-04821',
        score: 87,
        verifiedOn: '21 mag 2026',
        companies: [
          { logo: '/assets/icons/lavazza.svg', name: 'Lavazza', meta: 'Caffè e bevande · Torino' },
          { logo: '/assets/icons/sacmi.svg', name: 'SACMI', meta: 'Macchine per il packaging · Imola' },
        ],
        dimensions: [
          { label: 'Cultura operativa', value: 82 },
          { label: 'Velocità decisionale', value: 91 },
          { label: 'Propensione al rischio', value: 74 },
          { label: 'Maturità della governance', value: 88 },
          { label: 'Stile di comunicazione', value: 85 },
        ],
      },
    },
    partner: {
      title: 'Oltre 100 settori.',
      description: 'Opportunità di collaborazione illimitate.',
      tiles: [
        { icon: '/assets/icons/clients.svg', title: 'Clienti', subtitle: 'Trova nuovi clienti' },
        { icon: '/assets/icons/suppliers.svg', title: 'Fornitori', subtitle: 'Trova fornitori affidabili' },
        { icon: '/assets/icons/partners.svg', title: 'Partner', subtitle: 'Partnership strategiche' },
        { icon: '/assets/icons/collaborators.svg', title: 'Collaboratori', subtitle: 'Trova talenti e collaboratori' },
        { icon: '/assets/icons/ma-operation.svg', title: 'Operazioni M&A', subtitle: "Comprare o vendere un'azienda" },
      ],
    },
  },

  stats: {
    eyebrow: 'MINERVA in numeri',
    heading: "Costruiamo relazioni d'affari significative.",
    description:
      'MINERVA aiuta le aziende a trovare clienti, fornitori, partner strategici e opportunità di collaborazione grazie al matching intelligente di compatibilità.',
    evaluatedStrong: 'Ogni match viene valutato',
    evaluatedRest: ' su 47 dimensioni aziendali e verificato tramite dati societari affidabili.',
    rated: 'valutato 4,8/5',
    cards: {
      network: { label: 'Rete verificata', caption: 'Aziende italiane verificate' },
      matching: { label: 'Matching intelligente', caption: 'Dimensioni di compatibilità' },
      success: { label: 'Successo dei match', caption: 'Aziende abbinate entro le prime due settimane' },
    },
  },

  scrollFeatures: {
    slides: [
      {
        heading: 'Trova aziende in linea con il tuo modo di fare impresa.',
        intro:
          'MINERVA aiuta le aziende a individuare clienti, fornitori e partner strategici compatibili analizzando caratteristiche organizzative, obiettivi di business e allineamento operativo.',
        statement: 'Capisci non solo chi è compatibile — ma perché.',
        bullets: [
          'Analisi di compatibilità su 47 dimensioni',
          'Spiegazione chiara dietro ogni match',
          'Raccomandazioni perfezionate continuamente',
        ],
      },
      {
        heading: 'Aziende verificate. Connessioni affidabili.',
        statement:
          'Connettiti con fiducia, sapendo di interagire con organizzazioni legittime e decision-maker verificati.',
        bullets: [
          'Verifica tramite i registri ufficiali delle imprese italiane',
          'Conformità al GDPR e alle normative locali',
          'Rappresentanti aziendali autorizzati identificati',
        ],
      },
      {
        heading: "Una reputazione costruita su relazioni d'affari reali.",
        statement:
          'Ogni recensione è legata a una relazione commerciale verificata e contribuisce a un quadro trasparente di come le aziende lavorano insieme.',
        bullets: [
          'Reputazione basata su collaborazioni completate',
          'Feedback verificati da partner commerciali reali',
          'Valutazione multidimensionale oltre le stelle',
        ],
      },
    ],
    progressLabel: 'Avanzamento della sezione',
    stepLabel: 'Passaggio {n} di {total}',
    stackCompanies: [
      { title: 'Barilla', subtitle: 'Produzione alimentare · Parma', logo: '/assets/icons/barilla.svg' },
      { title: 'Brembo', subtitle: 'Componenti automotive · Bergamo', logo: '/assets/icons/brembo.svg' },
      { title: 'Reply', subtitle: 'Consulenza tecnologica · Torino', logo: '/assets/icons/reply.svg' },
      { title: "De'Longhi", subtitle: 'Elettrodomestici · Treviso', logo: '/assets/icons/delonghi.svg' },
      { title: 'IMA Group', subtitle: 'Packaging · Bologna', logo: '/assets/icons/ima.svg' },
    ],
    counterLabel: 'Candidate al matching',
    verificationCards: [
      { title: "Registrazione d'impresa verificata", subtitle: 'Verificata il 15 mar 2026' },
      { title: 'Codice ATECO confermato', subtitle: '13.20.00 · Produzione tessile' },
      { title: 'Rappresentante autorizzato identificato', subtitle: 'Marco Rossi · CEO e fondatore' },
    ],
    reputation: {
      title: 'Reputazione',
      reviews: '12 recensioni da partner verificati',
      score: '4,6',
      categories: [
        { label: 'Affidabilità', score: '4,8', stars: 5 },
        { label: 'Allineamento valoriale', score: '4,7', stars: 5 },
        { label: 'Comunicazione', score: '4,5', stars: 4.5 },
        { label: 'Rispetto degli impegni', score: '4,4', stars: 5 },
      ],
      quote: "Partner affidabile, valori davvero allineati. Comunicazione chiara fin dall'inizio. Consigliato.",
    },
  },

  industries: {
    eyebrow: 'A chi si rivolge Minerva',
    heading: 'Pensata per il tessuto produttivo italiano',
    listLabel: 'Settori',
    cta: 'Trova i tuoi match',
    items: [
      {
        id: 'manufacturing',
        label: 'Manifattura',
        img: '/assets/images/industry-manufacturing.jpg',
        tags: ['Manifattura industriale', 'Ingegneria di precisione', 'Componenti automotive', 'Packaging', 'Lavorazione dei metalli', 'Produzione tessile', 'Macchinari e impianti', 'Fornitori industriali'],
        lead: 'Le aziende manifatturiere prosperano grazie a filiere solide e relazioni di fiducia.',
        body: 'MINERVA aiuta le aziende manifatturiere a individuare fornitori affidabili, partner produttivi, distributori e collaboratori industriali in linea con i loro standard operativi, le ambizioni di crescita e la cultura aziendale. Vai oltre la tua rete attuale e scopri opportunità in tutta Italia e in Europa.',
      },
      {
        id: 'technology',
        label: 'Tecnologia e software',
        img: '/assets/images/industry-technology.jpg',
        tags: ['Sviluppo software', 'SaaS', 'AI e machine learning', 'Cybersecurity', 'Servizi cloud', 'Consulenza IT', 'FinTech', 'Trasformazione digitale'],
        lead: 'Le aziende tecnologiche si muovono in fretta, ma le partnership che contano si costruiscono su qualcosa di più della sola innovazione.',
        body: 'MINERVA aiuta software house, agenzie digitali e provider tecnologici a connettersi con clienti, partner strategici, investitori e collaboratori che condividono obiettivi, stili decisionali e traiettorie di crescita simili.',
      },
      {
        id: 'food',
        label: 'Food & Beverage',
        img: '/assets/images/industry-food.jpg',
        tags: ['Produzione alimentare', 'Produzione di bevande', 'Agricoltura', 'Caffè e torrefazione', 'Prodotti lattiero-caseari', 'Vini e distillati', 'Packaging', 'Forniture Ho.Re.Ca.'],
        lead: 'Dai produttori locali ai marchi internazionali, nel food & beverage il successo dipende da relazioni di fiducia.',
        body: 'MINERVA aiuta le aziende a scoprire distributori, fornitori, partner della ristorazione, retailer e collaboratori produttivi in grado di portare i prodotti su nuovi mercati e rafforzare le attività esistenti.',
      },
      {
        id: 'professional',
        label: 'Servizi professionali',
        img: '/assets/images/industry-professional.jpg',
        tags: ['Consulenza', 'Servizi legali', 'Contabilità', 'Agenzie di marketing', 'Advisory aziendale', 'Risorse umane', 'Servizi finanziari', 'Formazione'],
        lead: 'Studi e società di servizi professionali crescono grazie a reputazione, competenza e alle giuste connessioni.',
        body: "MINERVA aiuta agenzie, consulenti e advisor a individuare organizzazioni che valorizzano le loro competenze, scoprendo al tempo stesso opportunità di partnership che ampliano l'offerta di servizi e creano nuovi canali di business.",
      },
      {
        id: 'health',
        label: 'Sanità e servizi medici',
        img: '/assets/images/industry-health.jpg',
        tags: ['Strutture sanitarie', 'Dispositivi medici', 'Cliniche', 'Diagnostica', 'Farmaceutica', 'Telemedicina', 'Servizi per il benessere', 'Tecnologie sanitarie'],
        lead: 'Le organizzazioni sanitarie operano in un contesto dove fiducia, conformità e competenza sono essenziali.',
        body: 'MINERVA aiuta cliniche, fornitori di servizi medici, innovatori della sanità e aziende life science a connettersi con partner, fornitori e organizzazioni che sostengono una crescita sostenibile e migliori risultati per i pazienti.',
      },
      {
        id: 'logistics',
        label: 'Logistica e trasporti',
        img: '/assets/images/industry-logistics.jpg',
        tags: ['Spedizioni e trasporto merci', 'Supply chain management', 'Magazzinaggio', 'Consegna ultimo miglio', 'Gestione flotte', 'Trasporti internazionali', 'Servizi doganali', 'Reti di distribuzione'],
        lead: 'Le aziende di logistica sono la spina dorsale del commercio moderno.',
        body: "MINERVA aiuta operatori del trasporto, provider logistici e specialisti della supply chain a scoprire partner affidabili, nuovi clienti, opportunità di distribuzione e alleanze strategiche che migliorano l'efficienza e sbloccano la crescita sui mercati regionali e internazionali.",
      },
    ],
  },

  map: {
    headingPrefix: 'Fare impresa in',
    statLabels: { companies: 'Aziende', employed: 'Occupati', gdpShare: 'del PIL', exports: 'Export 2023' },
    keySectors: 'Settori chiave',
    industrialDistricts: 'Distretti industriali',
    chooseRegion: 'Scegli la regione',
    tooltip: { companies: 'aziende', gdp: 'del PIL', details: 'Clicca per i dettagli', view: 'Clicca per vedere' },
    regions: {
      'valle-d-aosta': {
        tagline: 'Piccola regione autonoma: turismo alpino, energia idroelettrica, artigianato tradizionale.',
        industries: ['Turismo alpino', 'Energia idroelettrica', 'Artigianato tradizionale', 'Viticoltura di montagna'],
        districts: [
          { name: 'Distretto idroelettrico (Compagnia Valdostana delle Acque)', description: 'Energia idroelettrica, gestione dei bacini alpini' },
          { name: 'Polo turistico Cervinia-Courmayeur', description: "Turismo alpino d'alta gamma, sport invernali" },
        ],
      },
      piemonte: {
        tagline: "Culla dell'industria italiana: innovazione automotive, vini di fama mondiale e meccatronica.",
        industries: ['Automotive e componentistica', 'Aerospazio', 'Meccatronica', 'Produzione vinicola', 'Food & beverage', 'ICT e gaming', 'Tessile', 'Chimica'],
        districts: [
          { name: 'Distretto automotive (Torino)', description: 'Automotive, componentistica, design industriale' },
          { name: 'Distretto vinicolo Langhe-Roero-Monferrato', description: 'Vini DOCG, patrimonio enogastronomico UNESCO' },
          { name: 'Distretto tessile di Biella', description: 'Lane pregiate, tessuti di alta gamma' },
          { name: 'Distretto orafo di Valenza', description: 'Gioielleria di lusso, oreficeria internazionale' },
        ],
      },
      liguria: {
        tagline: 'Porta sul Mediterraneo: porti, cantieristica navale e tecnologie del mare.',
        industries: ['Cantieristica navale', 'Logistica portuale', 'Tecnologie del mare', 'Floricoltura', 'Turismo costiero'],
        districts: [
          { name: 'Distretto della cantieristica (La Spezia, Sestri)', description: 'Yacht di lusso, navi militari, riparazioni' },
          { name: 'Polo tecnologico di Genova (Erzelli)', description: 'ICT, big data, ricerca tecnologica' },
          { name: 'Distretto floricolo (Sanremo, Imperia)', description: 'Floricoltura, piante ornamentali, export UE' },
        ],
      },
      lombardia: {
        tagline: "Motore economico d'Italia, capitale finanziaria e industriale del Paese.",
        industries: ['Servizi finanziari e bancari', 'Moda e design', 'Meccanica avanzata', 'Farmaceutica', 'Chimica', 'ICT e digitale', 'Automotive', 'Tessile'],
        districts: [
          { name: 'Distretto della Brianza (Monza)', description: 'Mobili, interior design, lavorazione del legno' },
          { name: 'Distretto tessile di Como', description: 'Seta, tessuti pregiati, moda di lusso' },
          { name: 'Distretto della pelle di Vigevano', description: 'Calzature, pelletteria, manifattura artigianale' },
          { name: 'Distretto meccanico di Lecco', description: 'Meccanica di precisione, siderurgia' },
          { name: 'Distretto chimico-farmaceutico Milano-Pavia', description: 'Farmaceutica, biotech, chimica fine' },
        ],
      },
      'trentino-alto-adige': {
        tagline: 'Bilinguismo, autonomia, eccellenza nel turismo alpino e nelle filiere agroalimentari.',
        industries: ['Agroalimentare di montagna', 'Turismo alpino', 'Energie rinnovabili', 'Legno e arredo', 'Produzione vinicola'],
        districts: [
          { name: 'Distretto delle mele (Val di Non, Val Venosta)', description: 'Mele DOP, leader europeo nella produzione' },
          { name: "Distretto vinicolo dell'Alto Adige", description: 'Vini bianchi premium, Pinot Grigio' },
          { name: 'Distretto del legno (Val Pusteria, Val di Fiemme)', description: 'Legno strutturale, arredo, edilizia sostenibile' },
        ],
      },
      veneto: {
        tagline: "Terra di distretti industriali e di export, dove la tradizione artigiana incontra l'Industria 4.0.",
        industries: ['Moda e tessile', 'Calzature', 'Arredo e interior design', 'Occhialeria', 'Produzione vinicola', 'Meccanica', 'Gioielleria', 'Logistica portuale'],
        districts: [
          { name: 'Distretto della Riviera del Brenta', description: 'Calzature di lusso, pelletteria di alta gamma' },
          { name: "Distretto dell'occhialeria di Belluno", description: 'Occhialeria, leader mondiale del settore' },
          { name: 'Distretto del mobile di Treviso', description: 'Mobili, interior design, lavorazione del legno' },
          { name: 'Distretto vinicolo Verona-Treviso', description: 'Vini DOC e DOCG, Prosecco, Amarone' },
          { name: 'Distretto orafo di Vicenza', description: 'Gioielleria, lavorazione di oro e metalli preziosi' },
        ],
      },
      'friuli-venezia-giulia': {
        tagline: 'Crocevia tra Mitteleuropa e Mediterraneo: hub di logistica e cantieristica.',
        industries: ['Cantieristica navale', 'Logistica portuale', 'Arredo e interior design', 'Coltelleria', 'Produzione vinicola'],
        districts: [
          { name: 'Distretto della cantieristica (Monfalcone - Fincantieri)', description: 'Navi da crociera, leader mondiale' },
          { name: 'Distretto del mobile (Manzano, Pordenone)', description: 'Sedie, arredo, interior design' },
          { name: 'Distretto della coltelleria (Maniago)', description: "Coltelli, lame, artigianato dell'acciaio" },
        ],
      },
      'emilia-romagna': {
        tagline: "Una potenza dell'industria, dell'innovazione e dell'eccellenza alimentare italiana.",
        industries: ['Automotive e Motor Valley', 'Macchinari industriali', 'Food & beverage', 'Packaging', 'Ceramica', 'Biomedicale e farmaceutica', 'Moda e tessile', 'ICT e innovazione'],
        districts: [
          { name: 'Motor Valley (Modena, Bologna, Parma)', description: 'Automotive, supercar, componentistica' },
          { name: 'Packaging Valley (Bologna)', description: 'Macchine per il packaging e automazione' },
          { name: 'Food Valley (Parma)', description: 'Produzione alimentare, eccellenze DOP' },
          { name: 'Distretto ceramico (Sassuolo, Modena, Reggio Emilia)', description: 'Ceramiche e superfici di alta gamma' },
          { name: 'Distretto biomedicale (Bologna, Mirandola)', description: 'Sanità, life science, dispositivi medici' },
        ],
      },
      toscana: {
        tagline: 'Eccellenza del Made in Italy: moda, pelletteria, gioielleria e turismo di livello mondiale.',
        industries: ['Moda e pelletteria', 'Gioielleria', 'Marmo e lapideo', 'Produzione vinicola', 'Turismo culturale', 'Nautica', 'Farmaceutica', 'Tessile'],
        districts: [
          { name: 'Distretto della pelletteria (Firenze, Scandicci)', description: 'Pelletteria di lusso, sede delle grandi maison' },
          { name: 'Distretto tessile di Prato', description: 'Tessile, riciclo delle materie prime, moda' },
          { name: 'Distretto orafo di Arezzo', description: "Gioielleria, lavorazione dell'oro" },
          { name: 'Distretto del marmo di Carrara', description: 'Marmo, industria lapidea, unico al mondo' },
          { name: 'Distretto nautico di Viareggio', description: 'Cantieristica, yacht di lusso' },
        ],
      },
      marche: {
        tagline: 'Regione dei distretti: calzature, meccanica, mobile e nautica.',
        industries: ['Calzature', 'Arredo e interior design', 'Macchine utensili', 'Nautica', 'Agroalimentare'],
        districts: [
          { name: 'Distretto calzaturiero (Fermo, Macerata)', description: 'Calzature di alta gamma, lavorazione della pelle' },
          { name: 'Distretto del mobile (Pesaro-Urbino)', description: 'Cucine, interior design' },
          { name: 'Distretto delle macchine utensili (Ancona)', description: 'Meccanica di precisione, automazione' },
        ],
      },
      umbria: {
        tagline: "Il cuore verde d'Italia: agroalimentare, ceramica artistica e cashmere.",
        industries: ['Cashmere e tessile', 'Ceramica artistica', 'Agroalimentare (olio, vino)', 'Siderurgia', 'Turismo culturale'],
        districts: [
          { name: 'Distretto del cashmere (Solomeo - Brunello Cucinelli)', description: 'Cashmere di lusso, marchi internazionali' },
          { name: 'Distretto della ceramica artistica (Deruta, Gualdo Tadino)', description: 'Ceramica artigianale, tradizione secolare' },
          { name: 'Distretto agroalimentare (olio extravergine DOP)', description: 'Olio, tartufi, vini DOC' },
        ],
      },
      lazio: {
        tagline: "Cuore politico e amministrativo d'Italia: hub di servizi, ricerca e industria aerospaziale.",
        industries: ['Pubblica amministrazione e servizi', 'Aerospazio', 'Audiovisivo e cinema', 'Farmaceutica', 'Turismo', 'ICT', 'Ricerca e sviluppo', 'Energie rinnovabili'],
        districts: [
          { name: 'Distretto aerospaziale (Roma)', description: 'Aerospazio, difesa, satelliti' },
          { name: "Distretto dell'audiovisivo (Cinecittà)", description: 'Cinema, produzione audiovisiva, post-produzione' },
          { name: 'Polo farmaceutico Pomezia-Latina', description: 'Farmaceutica, biotech, ricerca clinica' },
          { name: 'Distretto della chimica verde (Frosinone)', description: 'Chimica, packaging, materiali sostenibili' },
        ],
      },
      abruzzo: {
        tagline: 'Tra mare e Appennini: automotive, farmaceutica e turismo naturalistico.',
        industries: ['Automotive', 'Farmaceutica', 'Agroalimentare', 'Turismo naturalistico'],
        districts: [
          { name: 'Polo automotive (Val di Sangro - Sevel)', description: 'Stabilimento Stellantis, veicoli commerciali' },
          { name: "Polo farmaceutico (L'Aquila, Pescara)", description: 'Farmaceutica, biotech, ricerca clinica' },
          { name: "Distretto agroalimentare (Montepulciano d'Abruzzo)", description: 'Vini DOC, olio, pasta artigianale' },
        ],
      },
      molise: {
        tagline: 'La più piccola regione del Sud: agroalimentare, pasta artigianale e tradizione.',
        industries: ['Agroalimentare', 'Pasta artigianale', 'Agricoltura tradizionale', 'Artigianato locale'],
        districts: [
          { name: 'Distretto della pasta (Campobasso, La Molisana)', description: 'Pasta di grano duro, tradizione regionale' },
          { name: 'Distretto agroalimentare (caciocavallo, tartufo)', description: 'Formaggi tipici, tartufo bianco del Molise' },
        ],
      },
      campania: {
        tagline: 'Hub del Mezzogiorno: agroalimentare, aerospazio, moda e una delle filiere portuali più importanti del Mediterraneo.',
        industries: ['Agroalimentare', 'Aerospazio', 'Cantieristica navale', 'Moda', 'Conserviero (pomodoro)', 'Pelletteria', 'Turismo', 'Logistica portuale'],
        districts: [
          { name: 'Distretto aerospaziale (Pomigliano, Capua)', description: 'Aeronautica, componentistica, ricerca' },
          { name: 'Distretto del pomodoro (Salerno, Napoli)', description: 'Conserve di pomodoro, San Marzano DOP, export agroalimentare' },
          { name: 'Distretto della pelletteria (Solofra)', description: 'Pelletteria, concia, lavorazione della pelle' },
          { name: 'Distretto orafo (Torre del Greco)', description: 'Corallo, cammei, gioielleria tradizionale' },
        ],
      },
      puglia: {
        tagline: "Il tacco d'Italia: agroalimentare, energia, ICT a Bari e turismo internazionale.",
        industries: ['Agroalimentare (olio, vino)', 'Mobili imbottiti', 'Aerospazio', 'Energie rinnovabili', 'Turismo'],
        districts: [
          { name: 'Distretto del divano (Murgia, Altamura)', description: 'Mobili imbottiti, leader europeo' },
          { name: 'Distretto agroalimentare (olio extravergine DOP)', description: "Olio d'oliva, primo produttore in Italia" },
          { name: 'Polo aerospaziale (Grottaglie, Brindisi)', description: 'Aeronautica, componenti del Boeing 787' },
        ],
      },
      basilicata: {
        tagline: 'Tra due coste: estrazione, automotive e turismo culturale (Matera).',
        industries: ['Automotive', 'Estrazione petrolifera', 'Agroalimentare', 'Turismo culturale'],
        districts: [
          { name: 'Polo automotive (Melfi - Stellantis)', description: 'Stabilimento Stellantis, produzione di veicoli' },
          { name: "Distretto estrattivo (Val d'Agri)", description: "Petrolio, il più grande giacimento onshore dell'UE" },
          { name: 'Polo culturale di Matera', description: 'Patrimonio UNESCO, audiovisivo, turismo culturale' },
        ],
      },
      calabria: {
        tagline: 'Punta dello stivale: agricoltura, turismo costiero, Porto di Gioia Tauro.',
        industries: ['Agroalimentare', 'Logistica portuale', 'Turismo costiero', 'Bergamotto e agrumi'],
        districts: [
          { name: 'Distretto del bergamotto (Reggio Calabria)', description: 'Olio essenziale di bergamotto, esclusiva mondiale' },
          { name: 'Polo logistico di Gioia Tauro', description: 'Il più grande porto container del Mediterraneo centrale' },
          { name: 'Distretto agroalimentare (cipolla rossa di Tropea IGP)', description: 'Cipolla rossa, agrumi, peperoncino' },
        ],
      },
      sicilia: {
        tagline: 'Crocevia del Mediterraneo: agroalimentare, energia, ICT e turismo di qualità.',
        industries: ['Agroalimentare', 'Energia (petrolchimico)', 'ICT', 'Turismo culturale', 'Cantieristica navale'],
        districts: [
          { name: 'Distretto agroalimentare (pomodoro di Pachino IGP, agrumi)', description: 'Ortofrutta, agrumi, vini Etna DOC' },
          { name: 'Polo petrolchimico (Siracusa, Gela)', description: 'Raffinazione, chimica industriale' },
          { name: 'Polo tecnologico Etna Valley (Catania)', description: 'Microelettronica, STMicroelectronics' },
        ],
      },
      sardegna: {
        tagline: 'Isola delle tradizioni: agropastorale, turismo premium, energie rinnovabili.',
        industries: ['Energie rinnovabili', 'Turismo premium', 'Agropastorale (formaggi)', 'Petrolchimico', 'ICT'],
        districts: [
          { name: 'Distretto del Pecorino Sardo DOP', description: 'Formaggi ovini, export internazionale' },
          { name: 'Polo turistico della Costa Smeralda', description: 'Turismo di lusso, nautica premium' },
          { name: 'Polo petrolchimico (Sarroch, Porto Torres)', description: 'Raffinazione, chimica verde' },
        ],
      },
    },
  },

  comparison: {
    eyebrow: 'Rispetto alle alternative',
    heading: 'Confronta come MINERVA aiuta le aziende a connettersi con partner compatibili.',
    capability: 'Funzionalità',
    traditional: 'Ricerca commerciale tradizionale',
    none: 'Assente',
    rows: [
      { capability: 'Identità aziendale verificata', minerva: 'Camera di Commercio', traditional: 'Autodichiarata o verificata manualmente' },
      { capability: 'Segnale di affinità culturale', minerva: '47 dimensioni', traditional: null },
      { capability: 'Tempo al primo match qualificato', minerva: '~72 h', traditional: 'Settimane o mesi', mono: true },
      { capability: 'Trasparenza dei costi', minerva: '€0 – €39 / mese', traditional: 'Variabili e imprevedibili', mono: true },
      { capability: 'Rapporto segnale/rumore', minerva: 'Lista ordinata di match qualificati', traditional: 'Basata su ricerca e contatti a freddo' },
      { capability: 'Approccio GDPR', minerva: 'Dati residenti in UE by design', traditional: 'Dipende dal fornitore' },
    ],
  },

  testimonials: {
    eyebrow: 'Da fondatori italiani',
    heading: 'La scelta delle aziende italiane più ambiziose',
    description:
      'Connettiti con aziende verificate, scopri opportunità qualificate e costruisci partnership che creano valore nel lungo periodo.',
    listLabel: 'Testimonianze',
    ratingLabel: 'Valutazione 5 su 5',
    stats: [
      { value: 200, suffix: '+', label: ['Aziende', 'verificate'] },
      { value: 47, suffix: '', label: ['Dimensioni di', 'compatibilità'] },
      { value: 92, suffix: '%', label: ['Soddisfazione', 'sui match'] },
    ],
    items: [
      {
        sector: 'Manifattura',
        quote:
          'In tre settimane abbiamo trovato cinque partner strategici per la nostra filiera produttiva. Aziende che condividono i nostri valori su sostenibilità e qualità artigianale. Niente contatti a freddo — solo conversazioni che avevano senso fin dal primo contatto.',
        name: 'Marco Rossi',
        role: 'CEO e fondatore',
        portrait: '/assets/portraits/marco-rossi.png',
      },
      {
        sector: 'Tecnologia',
        quote:
          'Abbiamo connesso Aurora Digital con tre clienti enterprise in meno di un mese. La piattaforma capisce davvero il contesto B2B italiano — codici ATECO, settori specifici, dimensioni aziendali. Uno strumento essenziale se stai crescendo nel mercato italiano.',
        name: 'Lorenzo Bianchi',
        role: 'Co-fondatore e CEO',
        portrait: '/assets/portraits/lorenzo-bianchi.png',
      },
      {
        sector: 'Food & Beverage',
        quote:
          'Per una piccola azienda familiare come la nostra, Minerva ha aperto contatti con distributori e ristoratori che non avremmo mai trovato alle fiere. Le recensioni anonime degli altri partner ci hanno aiutato a scegliere con chi lavorare.',
        name: 'Maria Esposito',
        role: 'Direttrice commerciale',
        portrait: '/assets/portraits/maria-esposito.png',
      },
    ],
  },

  pricing: {
    eyebrow: 'Piani e prezzi',
    perMonth: '/ mese',
    plans: [
      {
        id: 'free',
        name: 'FREE',
        icon: '/assets/icons/plan-free.svg',
        description: 'Perfetto per scoprire le aziende e capire il tuo potenziale di compatibilità.',
        price: '€0',
        cta: { label: 'Inizia', href: '#cta', variant: 'outline' },
        featuresTitle: 'Include:',
        features: [
          'Profilo aziendale verificato',
          "Nome dell'azienda e informazioni sul referente",
          'Settore e dettagli aziendali',
          "Valori e posizionamento dell'azienda",
          'Panoramica di compatibilità di base',
          'Indicatori di affinità con altre aziende',
          'Fino a 3 richieste di match al mese',
          'Accesso alle aziende italiane verificate',
        ],
        notes: [],
      },
      {
        id: 'smart',
        name: 'SMART',
        icon: '/assets/icons/plan-smart.svg',
        description: 'Ottieni piena visibilità su aziende, reputazione e compatibilità.',
        price: '€249',
        cta: { label: 'Scegli', href: '#cta', variant: 'solid' },
        featuresTitle: 'Tutto il piano Free, più:',
        features: [
          'Informazioni complete del profilo aziendale',
          'Analisi di compatibilità completa',
          'Punteggio di reputazione e valutazioni',
          'Recensioni anonime da partner verificati',
          'Storia e insight aziendali',
          'Esplorazione illimitata dei profili',
          'Raccomandazioni di match avanzate',
          'Analisi dettagliata della compatibilità',
        ],
        notes: [
          'Nota: i contatti diretti non sono inclusi.',
          'Nota: per le prime sottoscrizioni fino a dicembre 2027',
        ],
      },
      {
        id: 'premium',
        name: 'PREMIUM',
        icon: '/assets/icons/plan-premium.svg',
        description: "Trasforma i match qualificati in relazioni d'affari reali.",
        price: '€599',
        cta: { label: 'Scegli', href: '#cta', variant: 'solid' },
        featuresTitle: 'Tutto il piano Smart, più:',
        features: [
          'Messaggistica diretta',
          'Pianificazione di incontri e calendario condiviso',
          "Accesso all'email",
          'Accesso al numero di telefono (quando disponibile)',
          'Raccomandazioni di match prioritarie',
          'Richieste di match illimitate',
          'Comunicazione diretta con i decision-maker',
          'Accesso più rapido alle nuove opportunità',
        ],
        notes: ['Nota: per le prime sottoscrizioni valido per 24 mesi'],
      },
    ],
  },

  faq: {
    heading: 'Domande frequenti',
    description: 'Le risposte alle domande più comuni delle PMI italiane su Minerva.',
    moreQuestions: 'Hai altre domande?',
    contactUs: 'Contattaci',
    columns: [
      [
        {
          icon: '/assets/icons/faq-who-behind.svg',
          question: "Chi c'è dietro Minerva?",
          answer:
            "Minerva è una piattaforma italiana fondata nel 2024 da un team con una profonda esperienza nell'ecosistema delle PMI italiane. Lavoriamo a stretto contatto con la Camera di Commercio e le associazioni di categoria per garantire che la piattaforma rispetti le specificità del mercato italiano. Sede a Milano, con P.IVA verificabile pubblicamente.",
        },
        {
          icon: '/assets/icons/faq-results.svg',
          question: 'Quanto tempo serve per ottenere risultati?',
          answer:
            'Creare il profilo richiede circa 10 minuti. La verifica presso la Camera di Commercio è automatica e si completa entro 24 ore. I primi match arrivano entro 48 ore dalla verifica. La maggior parte delle aziende avvia la prima conversazione qualificata entro la prima settimana.',
        },
        {
          icon: '/assets/icons/faq-sector.svg',
          question: 'Il mio settore è coperto da Minerva?',
          answer:
            'Attualmente copriamo manifattura, tecnologia, food & beverage, servizi professionali, sanità e logistica. Ci espandiamo verso nuovi settori ogni mese. Se il tuo settore non è ancora coperto, puoi registrarti gratuitamente e sarai tra i primi a sapere quando lo aggiungeremo.',
        },
        {
          icon: '/assets/icons/faq-different.svg',
          question: 'In cosa è diverso da LinkedIn o da una fiera?',
          answer:
            'LinkedIn è ottimo per le carriere individuali; Minerva è costruita per le relazioni B2B tra aziende. Le fiere offrono presenza fisica ma a costi elevati e con contatti casuali. Minerva unisce la verifica di una fiera (aziende reali, decision-maker verificati) alla scalabilità del digitale (matching algoritmico, contatti continui, costi prevedibili).',
        },
      ],
      [
        {
          icon: '/assets/icons/faq-cost.svg',
          question: 'Quanto costa davvero Minerva?',
          answer:
            'Il piano Free è gratuito, per sempre. Ti permette di creare il profilo, vedere i match e inviare fino a 3 richieste al mese. Premium parte da 39 €/mese (con fatturazione annuale) e include match completi illimitati, recensioni e contatti diretti. Puoi disdire in qualsiasi momento, senza penali.',
        },
        {
          icon: '/assets/icons/faq-small.svg',
          question: 'Minerva è adatta anche alle piccole aziende?',
          answer:
            "Sì. Minerva è costruita appositamente per le PMI italiane — dalle microimprese (1-10 dipendenti) alle medie aziende (50-250 dipendenti). L'algoritmo tiene conto della dimensione aziendale nel matching, così una microimpresa non viene suggerita a una grande azienda (o viceversa) a meno che non ci sia una compatibilità reale.",
        },
        {
          icon: '/assets/icons/faq-data.svg',
          question: 'Chi vede i dati della mia azienda?',
          answer:
            'Solo le aziende con cui scegli attivamente di connetterti. Le informazioni di base del profilo (settore, dimensione, valori) sono visibili a tutte le aziende verificate, ma i dati sensibili (fatturato esatto, contatti, organigramma dettagliato) vengono condivisi solo dopo la tua autorizzazione esplicita, caso per caso.',
        },
      ],
    ],
  },

  footer: {
    description:
      'Matchmaking B2B per le PMI italiane. Compatibilità culturale su 47 dimensioni, verificata tramite Camera di Commercio.',
    columns: [
      {
        title: 'Prodotto',
        links: [
          { label: 'Come funziona', href: '#how' },
          { label: 'Prezzi', href: '#pricing' },
          { label: 'Metodologia', href: '#trust' },
          { label: 'Richiedi una demo', href: '#cta' },
        ],
      },
      {
        title: 'Azienda',
        links: [
          { label: 'Chi siamo', href: '#' },
          { label: 'Contatti', href: '#' },
          { label: 'Stampa', href: '#' },
          { label: 'Lavora con noi', href: '#' },
        ],
      },
      {
        title: 'Legale',
        links: [
          { label: 'Termini', href: '#' },
          { label: 'Privacy', href: '#' },
          { label: 'Cookie policy', href: '#' },
          { label: 'Contatto GDPR', href: '#' },
        ],
      },
      {
        title: 'Risorse',
        links: [
          { label: 'FAQ', href: '#faq' },
          { label: 'Stato del servizio', href: '#' },
          { label: 'Changelog', href: '#' },
          { label: 'Sicurezza', href: '#' },
        ],
      },
    ],
    copyright: '© 2026 Minerva SRL. Tutti i diritti riservati.',
    tagline: 'Costruito a Milano · Made in Italy',
  },
};
