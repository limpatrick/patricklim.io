import { IntlConfig, IntlFormatters } from 'gatsby-plugin-intl';
import { filter, keys, map, omit, pipe, test, values } from 'ramda';
import { LanguageCode } from '~/typings/global';

export type CodeMap = Record<LanguageCode, string>;
export const codesMap: CodeMap = {
  fr: 'fr_FR',
  en: 'en_US',
};

export const localeCodes = keys(codesMap);

export const getPath = (locale: string, to: string) => `/${locale}${to}`;

export const getAlternateLocaleCodes = (code: LanguageCode): string[] =>
  pipe(omit([code]), values)(codesMap);

export const getLocaleCodes = (code: LanguageCode) => ({
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
