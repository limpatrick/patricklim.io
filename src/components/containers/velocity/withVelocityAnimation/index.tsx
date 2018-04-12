import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { WithVelocityAnimationStyles } from './styles';
import { handler } from '../withVelocityOnComplete';
import { omit } from 'lodash';
import withVelocity from '../withVelocity';

interface ExternalProps {}

interface WithVelocityAnimationInjectedProps {}

const withVelocityAnimation = <WrappedComponentProps extends {}>(
  WrappedComponent: React.ComponentType<WrappedComponentProps & WithVelocityAnimationInjectedProps>
) => {
  class WithVelocityAnimation extends React.Component<
    WrappedComponentProps & WithStyles<WithVelocityAnimationStyles> & ExternalProps
  > {
    render() {
      const { classes } = this.props;
      // typescript spread operator on generic object not allowed
      const rest = omit(this.props, ['classes', 'theme']);

      return (
        <div className={classes.container}>
          <WrappedComponent {...rest} />
        </div>
      );
    }
  }

  return withVelocity(handler.handleVelocityComplete)(withStyles(WithVelocityAnimationStyles)(WithVelocityAnimation));
};

export default withVelocityAnimation;
