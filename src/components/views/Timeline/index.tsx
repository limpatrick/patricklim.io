import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import HorizontalTimeline from 'components/HorizontalTimeline';
import TagCloud from 'components/TagCloud';
import { TimelineStyles } from './styles';
import Typography from 'material-ui/Typography';
import withVelocityAnimation from 'components/containers/velocity/withVelocityAnimation';

interface TimelineProps {}

class Timeline extends React.Component<TimelineProps & WithStyles<TimelineStyles>> {
  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Grid container direction="row" justify="center" alignItems="center" className={classes.canvasWrapper}>
            <Grid item sm={12} md={6} className={classes.leftSide}>
              <Typography variant="display1">Timeline</Typography>
              <Divider light />
              <br />
              <Typography variant="body2" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur iste, officiis exercitationem
                consequuntur facilis vel laborum odio et ipsam mollitia pariatur quod perferendis modi labore harum
                veniam at praesentium?
              </Typography>
              <Typography variant="body2" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, error dolorum. Distinctio, doloribus
                deleniti. Ut, molestiae. Ipsam animi, porro eos distinctio reiciendis corrupti doloremque blanditiis
                assumenda error! Voluptate, maxime non.
              </Typography>
            </Grid>
            <Grid item sm={12} md={6} className={classes.rightSide}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                  <TagCloud />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.timeline}>
          <HorizontalTimeline />
        </Grid>
      </Grid>
    );
  }
}

export default withVelocityAnimation(withStyles(TimelineStyles)(Timeline));
