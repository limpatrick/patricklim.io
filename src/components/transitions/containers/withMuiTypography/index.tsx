import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { WithMuiTypographyStyles } from './styles';

import { TypographyProps } from 'material-ui/Typography';
import { omit } from 'lodash';

interface ExternalProps {
  className?: string;
  component?: React.ReactType;
  variant?: TypographyProps['variant'];
}

const withMuiTypography = <WrappedComponentProps extends {}>(
  WrappedComponent: React.ComponentType<WrappedComponentProps & WithMuiTypographyInjectedProps>
) => {
  const WithMuiTypography: React.SFC<WrappedComponentProps & ExternalProps & WithStyles<WithMuiTypographyStyles>> = (
    props
  ) => {
    const { children, classes, className, component, variant } = props;
    // typescript spread operator on generic object not allowed
    const rest = omit(props, ['children', 'classes', 'className', 'component', 'variant']);

    const componentToUse = component ? component : 'div';
    const variantClassName = variant ? classes[variant] : classes.body1;
    const componentClassName = className ? `${variantClassName} ${className}` : `${variantClassName}`;

    const injectedProps = {
      className: componentClassName,
      component: componentToUse,
    };

    return (
      <WrappedComponent {...injectedProps} {...rest}>
        {children}
      </WrappedComponent>
    );
  };

  return withStyles(styles)(WithMuiTypography);
};

export interface WithMuiTypographyInjectedProps {
  className: string;
  component: React.ReactType;
}

export default withMuiTypography;
