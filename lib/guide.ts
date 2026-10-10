/** Settings for the "How to sign up" guide (/[lang]/come-iscriversi). */

export const GUIDE_SLUG = 'come-iscriversi';

const APP_URL = 'https://app.minerva-app.website';

export const APP_LINKS = {
  signup: `${APP_URL}/signup`,
  login: `${APP_URL}/login`,
  /** Profile completion wizard; signed-out visitors land on login first. */
  completeProfile: `${APP_URL}/onboarding/complete`,
} as const;

/**
 * Explainer video for "company vs collaborator". Paste a YouTube, Vimeo or
 * direct .mp4/.webm URL here once it's produced; while empty the slot is hidden.
 */
export const SIGNUP_VIDEO_URL: string | undefined = undefined;
