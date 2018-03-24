import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { SlideInTextStyles } from './styles';
import withMuiTypography, { WithMuiTypographyInjectedProps } from '../containers/withMuiTypography';

interface SlideInTextProps {
  children: string;
  direction?: 'left' | 'right';
}

const SlideInText: React.SFC<SlideInTextProps & WithStyles<SlideInTextStyles> & WithMuiTypographyInjectedProps> = ({
  children,
  classes,
  className,
  component,
  direction,
}) => {
  const Component = component;
  const componentClassName = `${className} ${classes.container}`;
  const directionClassName = direction === 'right' ? classes.slideInFromRight : classes.slideInFromLeft;

  return (
    <Component className={componentClassName}>
      <span className={directionClassName}>{children}</span>
    </Component>
  );
};

export default withMuiTypography(withStyles(styles)(SlideInText));
