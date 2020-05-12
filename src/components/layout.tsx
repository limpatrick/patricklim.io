/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import './layout.css';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SiteTitleQuery } from '../../generated/graphql-types';
import Header from './header';

export const query = graphql`
  query SiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  const { site } = useStaticQuery<SiteTitleQuery>(query);

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
