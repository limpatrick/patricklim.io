import { useIntl } from 'gatsby-plugin-intl';
import { assoc, reduce } from 'ramda';
import { useCallback } from 'react';
import { LocaleCode, localeCodes } from '~/helpers/intl';
import useSiteMetadata from './use-site-metadata';

const useSiteURL = () => {
  const { siteURL } = useSiteMetadata();
  const { locale } = useIntl();

  const getUrl = useCallback((path: string, code: string = locale) => `${siteURL}/${code}${path}`, [
    locale,
    siteURL,
  ]);
  const getUrls = useCallback(
    (path: string) =>
      reduce(
        (acc, code) => assoc(code, getUrl(path, code), acc),
        { 'x-default': `${siteURL}${path}` } as Record<LocaleCode | 'x-default', string>,
        localeCodes
      ),
    [getUrl, siteURL]
  );

  return { siteURL, locale, getUrl, getUrls };
};

export default useSiteURL;
