import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Alert from 'components/Alert';
import EventDescription from 'components/EventDescription';
import Grid from 'material-ui/Grid';
import HorizontalTimeline from 'components/HorizontalTimeline';
import TagCloud from 'components/TagCloud';
import { TimelineStyles } from './styles';
import { isEqual } from 'lodash';
import { scrollbarsContentClass } from 'components/App/styles';
import withVelocityAnimation from 'components/containers/velocity/withVelocityAnimation';

interface TimelineProps {}

class Timeline extends React.Component<TimelineProps & WithStyles<TimelineStyles>> {
  shouldComponentUpdate(nextProps: TimelineProps & WithStyles<TimelineStyles>) {
    return !isEqual(nextProps, this.props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} className={classes.width}>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.minHeight}>
              <Grid item sm={12} md={6} className={classes.eventDescriptionContainer}>
                <EventDescription />
              </Grid>
              <Grid item sm={12} md={6}>
                <Grid container direction="column" justify="center" alignItems="stretch">
                  <Grid item xs={12} className={classes.tagCloudContainer}>
                    <TagCloud />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <HorizontalTimeline predefinedEventDistance={100} />
          </Grid>
        </Grid>
        <Alert
          autoHideDuration={8000}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          message="You can scroll to zoom in/out and select an event"
        />
      </div>
    );
  }
}

export default withVelocityAnimation({ className: scrollbarsContentClass })(withStyles(TimelineStyles)(Timeline));
