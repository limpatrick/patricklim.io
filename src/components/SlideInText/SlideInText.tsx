import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { SlideInTextStyles } from './styles';

import { TypographyProps } from 'material-ui/Typography';

interface SlideInTextProps {
  children: string;
  className?: string;
  component?: React.ReactType;
  direction?: 'left' | 'right';
  variant?: TypographyProps['variant'];
}

const SlideInText: React.SFC<SlideInTextProps & WithStyles<SlideInTextStyles>> = ({
  children,
  classes,
  className,
  component,
  direction,
  variant,
}) => {
  const Component = component ? component : 'div';
  const variantClassName = variant ? classes[variant] : classes.body1;
  const componentClassName = className
    ? `${variantClassName} ${classes.container} ${className}`
    : `${variantClassName} ${classes.container}`;
  const directionClassName = direction === 'right' ? classes.slideInFromRight : classes.slideInFromLeft;

  return (
    <Component className={componentClassName}>
      <span className={directionClassName}>{children}</span>
    </Component>
  );
};

export default withStyles(styles)(SlideInText);
