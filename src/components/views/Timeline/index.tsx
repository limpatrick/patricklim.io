import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import EventDescription from 'components/EventDescription';
import Grid from 'material-ui/Grid';
import HorizontalTimeline from 'components/HorizontalTimeline';
import TagCloud from 'components/TagCloud';
import { TimelineStyles } from './styles';
import withVelocityAnimation from 'components/containers/velocity/withVelocityAnimation';

interface TimelineProps {}

class Timeline extends React.Component<TimelineProps & WithStyles<TimelineStyles>> {
  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} className={classes.topContainer}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.topContainerWrapper}>
            <Grid item sm={12} md={6} className={classes.eventDescriptionContainer}>
              <EventDescription />
            </Grid>
            <Grid item sm={12} md={6}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                  <TagCloud />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <HorizontalTimeline />
        </Grid>
      </Grid>
    );
  }
}

export default withVelocityAnimation(withStyles(TimelineStyles)(Timeline));
