import * as React from 'react';

import { Animation, VelocityComponent } from 'velocity-react';
import { WithStyles, withStyles } from 'material-ui/styles';

import Hidden from 'material-ui/Hidden';
import { WithVelocityStyles } from './styles';
import { omit } from 'lodash';

interface ExternalProps {}

interface WithVelocityInjectedProps {}

const withVelocity = (animation: Animation, handleVelocityComplete: () => void) => <WrappedComponentProps extends {}>(
  WrappedComponent: React.ComponentType<WrappedComponentProps & WithVelocityInjectedProps>
) => {
  class WithVelocity extends React.Component<WrappedComponentProps & WithStyles<WithVelocityStyles> & ExternalProps> {
    static DELAY = 500;
    static DURATION = 1000;

    render() {
      const { classes } = this.props;
      // typescript spread operator on generic object not allowed
      const rest = omit(this.props, ['animation', 'classes', 'theme']);

      return (
        <VelocityComponent
          animation={animation}
          duration={WithVelocity.DURATION}
          delay={WithVelocity.DELAY}
          runOnMount
          complete={handleVelocityComplete}>
          <Hidden className={classes.hidden} xsUp implementation="css">
            <WrappedComponent {...rest} />
          </Hidden>
        </VelocityComponent>
      );
    }
  }

  return withStyles(WithVelocityStyles)(WithVelocity);
};

export default withVelocity;
