import { LanguageCode } from '~/typings/global';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const LANGUAGES = process.env.LANGUAGES!.split(',') as LanguageCode[];
// eslint-disable-next-line prefer-destructuring
export const SITE_URL = process.env.SITE_URL as string;
export const BACK_TOP_ANCHOR_ID = 'back-to-top-anchor';
export const SKILL_SET_ID = 'skill-set-section';
