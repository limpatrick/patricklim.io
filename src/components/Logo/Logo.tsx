import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { LogoStyles } from './styles';

import Grow from 'material-ui/transitions/Grow';

interface LogoProps {
  className?: string;
}

const Logo: React.SFC<LogoProps & WithStyles<LogoStyles>> = ({ classes, className }) => {
  const logoClassName = className ? `${classes.logo} ${className}` : classes.logo;

  return (
    <Grow in timeout={3000}>
      <div className={logoClassName}>
        <span className={classes.letter}>P</span>
        <span className={classes.letter}>L</span>
      </div>
    </Grow>
  );
};

export default withStyles(styles)(Logo);
