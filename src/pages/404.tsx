import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import NotFound from '~/components/not-found';
import Layout from '~/layouts/layout';
import TopComponent from '~/layouts/top-component';

const NotFoundPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Layout title={formatMessage({ id: 'not-found.pageTitle' })} path="/404">
      <TopComponent>
        <NotFound />
      </TopComponent>
    </Layout>
  );
};

export default NotFoundPage;
