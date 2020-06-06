import { SiteMetadataQuery } from '@generated/graphql-types';
import { graphql, useStaticQuery } from 'gatsby';

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        author
        email
        emailSubject
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

  return siteMetadata;
};

export default useSiteMetadata;