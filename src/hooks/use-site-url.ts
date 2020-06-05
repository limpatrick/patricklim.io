import { useIntl } from 'gatsby-plugin-intl';
import { assoc, reduce } from 'ramda';
import { useCallback } from 'react';
import { localeCodes } from '~/helpers/intl';
import { LanguageCode } from '~/typings/global';
import useSiteMetadata from './use-site-metadata';

const useSiteURL = () => {
  const { locale } = useIntl();
  const { siteUrl } = useSiteMetadata();

  const getUrl = useCallback((path: string, code: string = locale) => `${siteUrl}/${code}${path}`, [
    locale,
    siteUrl,
  ]);
  const getUrls = useCallback(
    (path: string) =>
      reduce(
        (acc, code) => assoc(code, getUrl(path, code), acc),
        { 'x-default': `${siteUrl}${path}` } as Record<LanguageCode | 'x-default', string>,
        localeCodes
      ),
    [getUrl, siteUrl]
  );

  return { siteUrl, locale, getUrl, getUrls };
};

export default useSiteURL;
