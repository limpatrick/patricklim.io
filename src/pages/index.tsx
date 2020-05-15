import React from 'react';
import SEO from '~/components/seo';
import SkillSet from '~/components/skill-set';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  intro: { border: '1px solid', minHeight: 'calc(100vh - 64px)' },
  skillSet: { border: '1px solid', minHeight: '100vh' },
  title: {
    fontFamily: '"Varela", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '0.56rem',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subtitle: {
    color: '#94a4ba',
    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '0.06rem',
    textAlign: 'center',
  },
});

const IndexPage = () => {
  const classes = useStyles();

  return (
    <>
      <SEO title="home" />
      <Grid
        className={classes.intro}
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item>
          <Typography className={classes.title} variant="h1" gutterBottom>
            patrick lim
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subtitle} variant="subtitle1" component="p" gutterBottom>
            full stack developer
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid className={classes.skillSet} container justify="center" alignItems="center">
          <SkillSet />
        </Grid>
      </Container>
    </>
  );
};

export default IndexPage;
