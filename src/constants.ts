import { LanguageCode } from '~/typings/global';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const LANGUAGES = process.env.LANGUAGES!.split(',') as LanguageCode[];
export const BACK_TOP_ANCHOR_ID = 'back-to-top-anchor';
export const SKILL_SET_ID = 'skill-set-section';
