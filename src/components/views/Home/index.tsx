import * as React from 'react';

import { IoCodeWorking, IoEmail } from 'react-icons/lib/io';
import { WithStyles, withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { HomeStyles } from './styles';
import Link from 'components/Link';
import { NavLink } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import withVelocityAnimation from 'components/containers/velocity/withVelocityAnimation';

interface HomeProps {}

class Home extends React.Component<HomeProps & WithStyles<HomeStyles>> {
  getTimelineNavLink: React.SFC = (props) => <NavLink to={'/timeline'} {...props} />;

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography className={classes.bold} component="h1" variant="display3" align="center">
                Patrick Lim
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.light} variant="headline" component="h2">
                Front end <span className={classes.highlight}>developer</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid className={classes.marginTop} container direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="body1" component="div" align="center">
                    Have a look at{' '}
                    <Button variant="raised" color="default" size="small" component={this.getTimelineNavLink}>
                      <IoCodeWorking className={classes.icon} />
                      Timeline
                    </Button>{' '}
                    to know more about me.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" component="div" align="center">
                    <Button
                      variant="raised"
                      color="default"
                      size="small"
                      component={(props) => <Link href="mailto:contact@patricklim.fr" {...props} />}>
                      <IoEmail className={classes.icon} />
                      contact@patricklim.fr
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withVelocityAnimation()(withStyles(HomeStyles)(Home));
