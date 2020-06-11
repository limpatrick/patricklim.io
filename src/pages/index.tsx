import Box from '@material-ui/core/Box';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import AboutMe from '~/components/about-me';
import Education from '~/components/education';
import Experience from '~/components/experience';
import Home from '~/components/home';
import SEO from '~/components/seo';
import Technologies from '~/components/technologies';
import TopComponent from '~/components/top-component';
import { formatArrayMessage } from '~/helpers/intl';

const IndexPage = () => {
  const { formatMessage, messages } = useIntl();

  return (
    <>
      <SEO keywords={formatArrayMessage('metadata.keywords', messages, formatMessage)} path="/" />
      <TopComponent>
        <Home />
      </TopComponent>
      <Box component="section">
        <AboutMe />
        <Experience />
        <Technologies />
        <Education />
      </Box>
    </>
  );
};

export default IndexPage;
