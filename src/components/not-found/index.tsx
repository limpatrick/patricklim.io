import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import TopComponent from '~/components/top-component';
import { getPath } from '~/helpers/intl';
import Container from '~/layouts/container';
import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();
  const { formatMessage, locale } = useIntl();

  return (
    <TopComponent>
      <Container>
        <Grid
          className={classes.grid}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
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
          <Grid className={classes.buttonWrapper} item xs={12}>
            <Button
              aria-label={formatMessage({ id: 'global.title.back' })}
              href={getPath(locale, '/')}
              color="primary"
            >
              {formatMessage({ id: 'global.btn.back' })}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </TopComponent>
  );
};

export default NotFound;
