import { IntlConfig } from 'gatsby-plugin-intl';

export type IntlProps = {
  language: string;
  languages: string[];
  messages: IntlConfig['messages'];
  routed: boolean;
  originalPath: string;
  redirect: boolean;
  defaultLanguage: string;
};
