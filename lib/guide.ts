/** Settings for the "How to sign up" guide (/[lang]/come-iscriversi). */

import type { Locale } from '@/lib/i18n/config';

export const GUIDE_SLUG = 'come-iscriversi';

const APP_URL = 'https://app.minerva-app.website';

export const APP_LINKS = {
  signup: `${APP_URL}/signup`,
  login: `${APP_URL}/login`,
  /** Profile completion wizard; signed-out visitors land on login first. */
  completeProfile: `${APP_URL}/onboarding/complete`,
} as const;

export interface GuideVideoSource {
  /** YouTube, Vimeo or direct .mp4/.webm URL. */
  url: string;
  /** Still shown before playback (direct files only). */
  poster?: string;
}

/**
 * Explainer video for "company vs collaborator", per locale. The current files
 * are rendered from an HTML motion piece (copy mirrors the guide); swap in a
 * YouTube/Vimeo URL or another file here. A locale without an entry hides the slot.
 */
export const SIGNUP_VIDEO: Partial<Record<Locale, GuideVideoSource>> = {
  it: { url: '/videos/come-iscriversi-it.mp4', poster: '/videos/come-iscriversi-it-poster.jpg' },
  en: { url: '/videos/come-iscriversi-en.mp4', poster: '/videos/come-iscriversi-en-poster.jpg' },
};
