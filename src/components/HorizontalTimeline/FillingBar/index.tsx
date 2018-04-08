import * as React from 'react';

import { StyleRules, WithStyles, withStyles } from 'material-ui/styles';

import { FillingBarStyles } from './styles';
import { LinearProgress } from 'material-ui/Progress';
import { omit } from 'lodash';

interface FillingBarProps {
  value: number;
}

const FillingBar: React.SFC<FillingBarProps & WithStyles<FillingBarStyles>> = ({ classes, value }) => (
  <div className={classes.container}>
    <LinearProgress classes={omit(classes, 'container')} variant="determinate" value={value} />
  </div>
);

export default withStyles(FillingBarStyles as StyleRules<FillingBarStyles>)(FillingBar);
