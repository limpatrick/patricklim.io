import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import withVelocity, { WithVelocityInjectedProps } from 'components/containers/withVelocity';

import Grid from 'material-ui/Grid';
import HorizontalTimeline from 'components/HorizontalTimeline';
import TagCloud from 'components/TagCloud';
import { TimelineStyles } from './styles';

interface TimelineProps {}

const Timeline: React.SFC<TimelineProps & WithVelocityInjectedProps & WithStyles<TimelineStyles>> = ({
  classes,
  onVelocityComplete,
}) => (
  <Grid container direction="column" justify="center" alignItems="center">
    <Grid item xs={12} className={classes.canvasContainer}>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.canvasWrapper}>
        <Grid item xs={12}>
          <TagCloud />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <HorizontalTimeline onVelocityComplete={onVelocityComplete} />
    </Grid>
  </Grid>
);

export default withVelocity(withStyles(TimelineStyles)(Timeline));
