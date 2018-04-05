import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import withVelocity, { WithVelocityInjectedProps } from 'components/containers/withVelocity';

import Button from 'material-ui/Button';
import styles from './styles';

interface ContactProps {}

class Contact extends React.Component<ContactProps & WithStyles<keyof typeof styles> & WithVelocityInjectedProps> {
  render() {
    return (
      <div>
        <Button variant="raised">Contact component</Button>
      </div>
    );
  }
}

export default withVelocity(withStyles(styles)(Contact));
