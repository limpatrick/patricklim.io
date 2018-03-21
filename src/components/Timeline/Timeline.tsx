import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import styles from './styles';

interface TimelineProps {}

class Timeline extends React.Component<TimelineProps & WithStyles<keyof typeof styles>> {
  render() {
    return (
      <div>
        <Button variant="raised">Timeline component</Button>
      </div>
    );
  }
}

export default withStyles(styles)(Timeline);
