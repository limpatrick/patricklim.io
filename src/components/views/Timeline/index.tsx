import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import HorizontalTimeline from 'components/HorizontalTimeline';
import styles from './styles';

interface TimelineProps {}

class Timeline extends React.Component<TimelineProps & WithStyles<keyof typeof styles>> {
  render() {
    return <HorizontalTimeline />;
  }
}

export default withStyles(styles)(Timeline);
