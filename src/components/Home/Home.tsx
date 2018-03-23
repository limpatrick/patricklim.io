import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { HomeStyles } from './styles';

import Grid from 'material-ui/Grid';
import Logo from 'components/Logo/Logo';
import Typography from 'material-ui/Typography';

interface HomeProps {}

class Home extends React.Component<HomeProps & WithStyles<HomeStyles>> {
  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Grid container direction="column" justify="center" alignItems="stretch">
            <Grid item xs={12}>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                  <Logo className={classes.logo} />
                </Grid>
                <Grid className={classes.divider} item />
                <Grid item>
                  <Typography className={classes.typography} variant="display3" component="h1" align="center">
                    Patrick Lim
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.typography} variant="headline" component="h2" align="center">
                Front end developer.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
