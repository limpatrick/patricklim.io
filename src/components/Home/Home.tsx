import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { HomeStyles } from './styles';

import CollapsibleText from 'components/transitions/CollapsibleText';
import Grid from 'material-ui/Grid';
import SlideInText from 'components/transitions/SlideInText';

interface HomeProps {}

class Home extends React.Component<HomeProps & WithStyles<HomeStyles>> {
  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
              <CollapsibleText className={classes.text} component="h1" variant="display3">
                Patrick Lim
              </CollapsibleText>
            </Grid>
            <Grid item xs={12}>
              <SlideInText className={classes.text} variant="headline" component="h2" direction="right">
                Front end developer.
              </SlideInText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
