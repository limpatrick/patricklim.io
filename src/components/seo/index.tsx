import { SeoQuery } from '@generated/graphql-types';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import { map, toPairs } from 'ramda';
import React from 'react';
import { Helmet } from 'react-helmet';
import { getLocaleCodes } from '~/helpers/intl';
import useSiteMetadata from '~/hooks/use-site-metadata';
import useSiteURL from '~/hooks/use-site-url';
import { LanguageCode } from '~/typings/global';
import SchemaOrg from './schema-org';

export const query = graphql`
  query Seo {
    file(relativePath: { eq: "screenshot.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 1200) {
          src
        }
      }
    }
  }
`;

type Props = {
  description?: string;
  keywords?: string[];
  path: string;
  title?: string;
};

const SEO = ({ description, keywords, path, title }: Props) => {
  const {
    file: {
      childImageSharp: {
        fixed: { src: imageSrc },
      },
    },
  } = useStaticQuery<SeoQuery>(query);
  const { locale, formatMessage } = useIntl();
  const { getUrl, getUrls, siteUrl } = useSiteURL();
  const { author, siteName } = useSiteMetadata();

  const imageUrl = `${siteUrl}${imageSrc}`;
  const localeCodes = getLocaleCodes(locale as LanguageCode);
  const metaTitle = title ?? formatMessage({ id: 'home.pageTitle' });
  const metaDescription = description || formatMessage({ id: 'metadata.description' });
  const keywordsList = keywords ? keywords.join(', ') : '';
  const canonicalUrl = getUrl(path);
  const alternateUrls = getUrls(path);

  return (
    <>
      <Helmet>
        <html lang={locale} />

        {/* General tags */}
        <title>{metaTitle}</title>
        <meta name="author" content={author} />
        <meta name="description" content={metaDescription} />
        <meta name="image" content={imageUrl} />
        <link rel="canonical" href={canonicalUrl} />
        {map(
          ([code, url]) => (
            <link key={code} rel="alternate" hrefLang={code} href={url} />
          ),
          toPairs(alternateUrls)
        )}
        {keywords ? <meta property="keywords" content={keywordsList} /> : null}

        {/* OpenGraph tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:locale" content={localeCodes.current} />
        {map(
          alternate => (
            <meta key={alternate} property="og:locale:alternate" content={alternate} />
          ),
          localeCodes.alternates
        )}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>
      <SchemaOrg
        alternateName={author}
        description={metaDescription}
        image={imageUrl}
        keywords={keywordsList}
        name={siteName}
        url={siteUrl}
      />
    </>
  );
};

export default SEO;
