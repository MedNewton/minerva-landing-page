// Auto-extracted from the original single-file landing (legacy/index.html).
// Locale-independent regional data for the interactive Italy map section;
// taglines, industries and districts live in the i18n dictionaries (lib/i18n).

import type { RegionSlug } from './italy-map-paths';

export interface RegionBase {
  name: string;
  tier: 1 | 2;
  stats: {
    companies: string;
    employed: string;
    gdpShare: string;
    exports2023: string;
  };
}

export const DEFAULT_REGION: RegionSlug = 'emilia-romagna';

export const REGION_BASE: Record<RegionSlug, RegionBase> = {
  'valle-d-aosta': {
    name: "Valle d'Aosta",
    tier: 2,
    stats: { companies: '13,000+', employed: '55,000+', gdpShare: '0.3%', exports2023: '€1.0B' },
  },
  piemonte: {
    name: 'Piemonte',
    tier: 1,
    stats: { companies: '390,000+', employed: '1.7M+', gdpShare: '7.7%', exports2023: '€56B' },
  },
  liguria: {
    name: 'Liguria',
    tier: 2,
    stats: { companies: '138,000+', employed: '590,000+', gdpShare: '2.7%', exports2023: '€9.5B' },
  },
  lombardia: {
    name: 'Lombardia',
    tier: 1,
    stats: { companies: '830,000+', employed: '4.5M+', gdpShare: '22.1%', exports2023: '€152B' },
  },
  'trentino-alto-adige': {
    name: 'Trentino-Alto Adige',
    tier: 2,
    stats: { companies: '100,000+', employed: '490,000+', gdpShare: '2.6%', exports2023: '€10.5B' },
  },
  veneto: {
    name: 'Veneto',
    tier: 1,
    stats: { companies: '475,000+', employed: '2.2M+', gdpShare: '9.4%', exports2023: '€85B' },
  },
  'friuli-venezia-giulia': {
    name: 'Friuli-Venezia Giulia',
    tier: 2,
    stats: { companies: '100,000+', employed: '510,000+', gdpShare: '2.4%', exports2023: '€18.5B' },
  },
  'emilia-romagna': {
    name: 'Emilia-Romagna',
    tier: 1,
    stats: { companies: '447,000+', employed: '2.0M+', gdpShare: '9.1%', exports2023: '€90B' },
  },
  toscana: {
    name: 'Toscana',
    tier: 1,
    stats: { companies: '365,000+', employed: '1.6M+', gdpShare: '6.7%', exports2023: '€48B' },
  },
  marche: {
    name: 'Marche',
    tier: 2,
    stats: { companies: '165,000+', employed: '640,000+', gdpShare: '2.4%', exports2023: '€13.5B' },
  },
  umbria: {
    name: 'Umbria',
    tier: 2,
    stats: { companies: '90,000+', employed: '340,000+', gdpShare: '1.3%', exports2023: '€4.5B' },
  },
  lazio: {
    name: 'Lazio',
    tier: 1,
    stats: { companies: '510,000+', employed: '2.4M+', gdpShare: '11.0%', exports2023: '€33B' },
  },
  abruzzo: {
    name: 'Abruzzo',
    tier: 2,
    stats: { companies: '145,000+', employed: '490,000+', gdpShare: '1.8%', exports2023: '€9.2B' },
  },
  molise: {
    name: 'Molise',
    tier: 2,
    stats: { companies: '32,000+', employed: '100,000+', gdpShare: '0.4%', exports2023: '€0.7B' },
  },
  campania: {
    name: 'Campania',
    tier: 1,
    stats: { companies: '455,000+', employed: '1.6M+', gdpShare: '6.4%', exports2023: '€16B' },
  },
  puglia: {
    name: 'Puglia',
    tier: 2,
    stats: { companies: '335,000+', employed: '1.2M+', gdpShare: '4.2%', exports2023: '€11.0B' },
  },
  basilicata: {
    name: 'Basilicata',
    tier: 2,
    stats: { companies: '50,000+', employed: '180,000+', gdpShare: '0.7%', exports2023: '€2.8B' },
  },
  calabria: {
    name: 'Calabria',
    tier: 2,
    stats: { companies: '165,000+', employed: '540,000+', gdpShare: '1.7%', exports2023: '€0.5B' },
  },
  sicilia: {
    name: 'Sicilia',
    tier: 2,
    stats: { companies: '385,000+', employed: '1.3M+', gdpShare: '5.0%', exports2023: '€11.5B' },
  },
  sardegna: {
    name: 'Sardegna',
    tier: 2,
    stats: { companies: '150,000+', employed: '540,000+', gdpShare: '2.1%', exports2023: '€5.8B' },
  },
};
