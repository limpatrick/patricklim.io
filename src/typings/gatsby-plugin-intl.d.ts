import { IntlConfig } from 'gatsby-plugin-intl';

declare module 'gatsby-plugin-intl' {
  export type IntlProps = {
    defaultLanguage: string;
    language: string;
    languages: string[];
    messages: IntlConfig['messages'];
    originalPath: string;
    redirect: boolean;
    routed: boolean;
  };
}
