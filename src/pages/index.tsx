import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Home from '~/components/home';
import SEO from '~/components/seo';
import { formatArrayMessage } from '~/helpers/intl';

const IndexPage = () => {
  const { formatMessage, messages } = useIntl();

  return (
    <>
      <SEO keywords={formatArrayMessage('metadata.keywords', messages, formatMessage)} path="/" />
      <Home />
    </>
  );
};

export default IndexPage;
