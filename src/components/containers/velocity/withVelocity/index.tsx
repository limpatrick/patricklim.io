import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { AnimationState } from 'src/redux/reducers/animation';
import Hidden from 'material-ui/Hidden';
import { StoreState } from 'src/redux/reducers';
import { VelocityComponent } from 'velocity-react';
import { WithVelocityStyles } from './styles';
import { connect } from 'react-redux';
import { omit } from 'lodash';

interface ExternalProps {
  animation: AnimationState;
}

interface WithVelocityInjectedProps {}

const withVelocity = (handleVelocityComplete: () => void) => <WrappedComponentProps extends {}>(
  WrappedComponent: React.ComponentType<WrappedComponentProps & WithVelocityInjectedProps>
) => {
  const mapStateToProps = (state: StoreState) => ({
    animation: state.animation,
  });

  class WithVelocity extends React.Component<WrappedComponentProps & WithStyles<WithVelocityStyles> & ExternalProps> {
    static DELAY = 500;
    static DURATION = 1000;

    render() {
      const { animation, classes } = this.props;
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

  return connect<ExternalProps>(mapStateToProps)(withStyles(WithVelocityStyles)(WithVelocity));
};

export default withVelocity;
