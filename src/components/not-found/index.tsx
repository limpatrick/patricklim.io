import React from 'react';
import Layout from '~/components/layout';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        className={classes.grid}
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          <Typography component="h1" variant="h3" gutterBottom>
            NOT FOUND
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            You just hit a route that doesn&#39;t exist... the sadness.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button href="/" color="primary">
            Go back
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NotFound;
