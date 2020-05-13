import React from 'react';
import Layout from '~/components/layout';
import SEO from '~/components/seo';
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </Layout>
);

export default IndexPage;
