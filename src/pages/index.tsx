import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Contact from '~/components/contact';
import Intro from '~/components/intro';
import SEO from '~/components/seo';
import SkillSet from '~/components/skill-set';
import { formatArrayMessage } from '~/helpers/intl';

const IndexPage = () => {
  const { formatMessage, messages } = useIntl();

  return (
    <>
      <SEO keywords={formatArrayMessage('metadata.keywords', messages, formatMessage)} path="/" />
      <Intro />
      <SkillSet />
      <Contact />
    </>
  );
};

export default IndexPage;
