import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import withVelocityOnComplete, {
  WithVelocityOnCompleteInjectedProps,
  handler,
} from 'components/containers/velocity/withVelocityOnComplete';

import Alert from 'components/Alert';
import EventDescription from 'components/EventDescription';
import Grid from 'material-ui/Grid';
import HorizontalTimeline from 'components/HorizontalTimeline';
import TagCloud from 'components/TagCloud';
import { TimelineStyles } from './styles';
import { isEqual } from 'lodash';
import withVelocityAnimation from 'components/containers/velocity/withVelocityAnimation';

interface TimelineProps {}

interface TimelineState {
  showAlerts: boolean;
}

class Timeline extends React.Component<
  TimelineProps & WithStyles<TimelineStyles> & WithVelocityOnCompleteInjectedProps,
  TimelineState
> {
  constructor(props: TimelineProps & WithStyles<TimelineStyles> & WithVelocityOnCompleteInjectedProps) {
    super(props);

    this.state = { showAlerts: false };

    const { onVelocityComplete } = this.props;

    onVelocityComplete(this.showAlerts);
  }

  private showAlerts = () => {
    this.setState({
      showAlerts: true,
    });
  }

  componentWillUnmount() {
    handler.removeCallback(this.showAlerts);
  }

  shouldComponentUpdate(
    nextProps: TimelineProps & WithStyles<TimelineStyles> & WithVelocityOnCompleteInjectedProps,
    nextState: TimelineState
  ) {
    return !isEqual(nextState, this.state);
  }

  render() {
    const { classes } = this.props;
    const { showAlerts } = this.state;

    return (
      <div>
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
        <Alert
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          message="You can scroll to zoom in/out and select an event"
          open={showAlerts}
        />
      </div>
    );
  }
}

export default withVelocityAnimation(withVelocityOnComplete(withStyles(TimelineStyles)(Timeline)));
