import React from 'react';
import Layout from '~/components/layout';
import SEO from '~/components/seo';
import SkillSet from '~/components/skill-set';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useTitleStyles = makeStyles({
  root: {
    fontFamily: '"Varela", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '0.56rem',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

const useSubtitleStyles = makeStyles({
  root: {
    color: '#94a4ba',
    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '0.06rem',
    textAlign: 'center',
  },
});

const IndexPage = () => {
  const titleClasses = useTitleStyles();
  const subtitleClasses = useSubtitleStyles();

  return (
    <Layout>
      <SEO title="home" />
      <Typography className={titleClasses.root} variant="h1" gutterBottom>
        patrick lim
      </Typography>
      <Typography className={subtitleClasses.root} variant="subtitle1" component="p" gutterBottom>
        full stack developer
      </Typography>
      <SkillSet />
    </Layout>
  );
};

export default IndexPage;
