import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Intro from '~/components/intro';
import SEO from '~/components/seo';
import { formatArrayMessage } from '~/helpers/intl';

const IndexPage = () => {
  const { formatMessage, messages } = useIntl();

  return (
    <>
      <SEO keywords={formatArrayMessage('metadata.keywords', messages, formatMessage)} path="/" />
      <Intro />
    </>
  );
};

export default IndexPage;
