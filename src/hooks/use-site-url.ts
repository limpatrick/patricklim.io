import { useIntl } from 'gatsby-plugin-intl';
import { assoc, reduce } from 'ramda';
import { useCallback } from 'react';
import { SITE_URL } from '~/constants';
import { localeCodes } from '~/helpers/intl';
import { LanguageCode } from '~/typings/global';

const useSiteURL = () => {
  const { locale } = useIntl();

  const getUrl = useCallback(
    (path: string, code: string = locale) => `${SITE_URL}/${code}${path}`,
    [locale]
  );
  const getUrls = useCallback(
    (path: string) =>
      reduce(
        (acc, code) => assoc(code, getUrl(path, code), acc),
        { 'x-default': `${SITE_URL}${path}` } as Record<LanguageCode | 'x-default', string>,
        localeCodes
      ),
    [getUrl]
  );

  return { siteURL: SITE_URL, locale, getUrl, getUrls };
};

export default useSiteURL;
