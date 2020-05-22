import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Container from '~/layouts/container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();
  const { formatMessage } = useIntl();

  return (
    <Container>
      <Grid
        className={classes.grid}
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          <Typography component="h1" variant="h3" gutterBottom>
            {formatMessage({ id: 'not-found.title' })}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            {formatMessage({ id: 'not-found.subtitle' })}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button href="/" color="primary">
            {formatMessage({ id: 'not-found.back-btn' })}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
