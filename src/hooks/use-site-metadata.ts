import { SiteMetadataQuery } from '@generated/graphql-types';
import { graphql, useStaticQuery } from 'gatsby';
import { LanguageCode } from '~/typings/global';

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        author
        email
        emailSubject
        languages
        siteName
        siteUrl
      }
    }
  }
`;

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadataQuery>(query);

  return siteMetadata as Omit<typeof siteMetadata, 'languages'> & { languages: LanguageCode[] };
};

export default useSiteMetadata;
