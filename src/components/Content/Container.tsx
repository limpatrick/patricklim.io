import * as React from 'react';

import { ContainerStyles, containerStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

interface ContainerProps {}

const Container: React.SFC<ContainerProps & WithStyles<ContainerStyles>> = ({ classes, children }) => (
  <div className={classes.container}>{children}</div>
);

export default withStyles(containerStyles)(Container);
