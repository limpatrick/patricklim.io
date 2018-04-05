import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import withVelocity, { WithVelocityInjectedProps } from 'components/containers/withVelocity';

import HorizontalTimeline from 'components/HorizontalTimeline';
import styles from './styles';

interface TimelineProps {}

class Timeline extends React.Component<TimelineProps & WithStyles<keyof typeof styles> & WithVelocityInjectedProps> {
  render() {
    const { velocityComplete } = this.props;

    return <HorizontalTimeline velocityComplete={velocityComplete} />;
  }
}

export default withVelocity(withStyles(styles)(Timeline));
