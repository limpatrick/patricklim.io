import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import styles from './styles';

interface ContactProps {}

class Contact extends React.Component<ContactProps & WithStyles<keyof typeof styles>> {
  render() {
    return (
      <div>
        <Button variant="raised">Contact component</Button>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
