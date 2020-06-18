import Box from '@material-ui/core/Box';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import AboutMe from '~/components/about-me';
import Contact from '~/components/contact';
import Education from '~/components/education';
import Experience from '~/components/experience';
import Home from '~/components/home';
import Technologies from '~/components/technologies';
import { formatArrayMessage } from '~/helpers/intl';
import Layout from '~/layouts/layout';
import TopComponent from '~/layouts/top-component';

const IndexPage = () => {
  const { formatMessage, messages } = useIntl();

  return (
    <Layout keywords={formatArrayMessage('metadata.keywords', messages, formatMessage)} path="/">
      <TopComponent>
        <Home />
      </TopComponent>
      <Box component="section">
        <AboutMe />
        <Experience />
        <Technologies />
        <Education />
        <Contact />
      </Box>
    </Layout>
  );
};

export default IndexPage;
