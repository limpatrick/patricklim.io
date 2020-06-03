import { IntlConfig, IntlFormatters } from 'gatsby-plugin-intl';
import { filter, keys, map, omit, pipe, test, values } from 'ramda';

export type LocaleCode = 'fr' | 'en';

export const codesMap: Record<LocaleCode, string> = {
  fr: 'fr_FR',
  en: 'en_US',
};

export const localeCodes = keys(codesMap);

export const getPath = (locale: string, to: string) => `/${locale}${to}`;

export const getAlternateLocaleCodes = (code: LocaleCode): string[] =>
  pipe(omit([code]), values)(codesMap);

export const getLocaleCodes = (code: LocaleCode) => ({
  alternates: getAlternateLocaleCodes(code),
  current: code === 'fr' ? codesMap.fr : codesMap.en,
});

export const getAllMessageKeys = (key: string, messages: IntlConfig['messages']) =>
  pipe(keys, filter(test(new RegExp(`^${key}\\.\\d+$`))))(messages);

export const formatArrayMessage = (
  key: string,
  messages: IntlConfig['messages'],
  formatMessage: IntlFormatters['formatMessage']
) => map(id => formatMessage({ id }), getAllMessageKeys(key, messages));
