import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { LogoStyles } from './styles';

interface LogoProps {
  className?: string;
}

const App: React.SFC<LogoProps & WithStyles<LogoStyles>> = ({ classes, className }) => {
  const logoClassName = className ? `${classes.logo} ${className}` : classes.logo;

  return (
    <div className={logoClassName}>
      <span className={classes.letter}>P</span>
      <span className={classes.letter}>L</span>
    </div>
  );
};

export default withStyles(styles)(App);
