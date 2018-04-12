import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import { HomeStyles } from './styles';
import Typography from 'material-ui/Typography';
import withVelocityAnimation from 'components/containers/velocity/withVelocityAnimation';

interface HomeProps {}

const Home: React.SFC<HomeProps & WithStyles<HomeStyles>> = ({ classes }) => (
  <Grid className={classes.container} container direction="row" justify="center" alignItems="center">
    <Grid item xs={12}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography className={classes.text} component="h1" variant="display3">
            Patrick Lim
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} variant="headline" component="h2">
            Front end developer.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default withVelocityAnimation(withStyles(HomeStyles)(Home));
