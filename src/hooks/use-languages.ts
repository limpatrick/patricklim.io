import { navigate as GatsbyNavigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import { map } from 'ramda';
import { useCallback, useMemo } from 'react';
import { LS_GATSBY_INTL_LANGUAGE } from '~/constants';
import { getPath } from '~/helpers/intl';
import { upperFirst } from '~/helpers/ramda';
import useSiteMetadata from '~/hooks/use-site-metadata';
import { useConfigState } from '~/providers/config';
import { LanguageCode } from '~/typings/global';

const useLanguages = () => {
  const { languages: metadataLanguages } = useSiteMetadata();
  const { path } = useConfigState();
  const { formatMessage, locale } = useIntl();

  const languages = useMemo<[LanguageCode, string][]>(
    () =>
      map(
        code => [code, upperFirst(formatMessage({ id: `global.languages.${code}` }))],
        metadataLanguages
      ),
    [formatMessage, metadataLanguages]
  );
  const navigate = useCallback(
    (code: LanguageCode) => {
      localStorage.setItem(LS_GATSBY_INTL_LANGUAGE, code);

      GatsbyNavigate(getPath(code, path ?? '/'));
    },
    [path]
  );
  const isCurrentLanguage = useCallback((code: LanguageCode) => code === locale, [locale]);

  return { languages, navigate, isCurrentLanguage };
};

export default useLanguages;
