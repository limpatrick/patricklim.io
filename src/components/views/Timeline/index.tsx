import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import HorizontalTimeline from 'components/HorizontalTimeline';
import TagCloud from 'components/TagCloud';
import { TimelineStyles } from './styles';
import withVelocityAnimation from 'components/containers/velocity/withVelocityAnimation';

interface TimelineProps {}

const Timeline: React.SFC<TimelineProps & WithStyles<TimelineStyles>> = ({ classes }) => (
  <Grid container direction="column" justify="center" alignItems="center">
    <Grid item xs={12} className={classes.canvasContainer}>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.canvasWrapper}>
        <Grid item xs={12}>
          <TagCloud />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <HorizontalTimeline />
    </Grid>
  </Grid>
);

export default withVelocityAnimation(withStyles(TimelineStyles)(Timeline));
