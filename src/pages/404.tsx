import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import NotFound from '~/components/not-found';
import SEO from '~/components/seo';
import TopComponent from '~/layouts/top-component';

const NotFoundPage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO title={formatMessage({ id: 'not-found.pageTitle' })} path="/404" />
      <TopComponent>
        <NotFound />
      </TopComponent>
    </>
  );
};

export default NotFoundPage;
