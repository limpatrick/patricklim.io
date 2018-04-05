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

const withVelocity = <WrappedComponentProps extends {}>(
  WrappedComponent: React.ComponentType<WrappedComponentProps & WithVelocityInjectedProps>
) => {
  const mapStateToProps = (state: StoreState) => ({
    animation: state.animation,
  });

  class WithVelocity extends React.Component<WrappedComponentProps & WithStyles<WithVelocityStyles> & ExternalProps> {
    constructor(props: WrappedComponentProps & WithStyles<WithVelocityStyles> & ExternalProps) {
      super(props);

      this.complete = new Promise((resolve) => {
        this.resolve = resolve;
      });
    }

    private complete: Promise<void>;
    private resolve: () => void;

    handleVelocityComplete = () => this.resolve();

    handleVelocityCompleteCallback = (callback: () => void) => this.complete.then(callback);

    render() {
      const { animation, classes } = this.props;
      // typescript spread operator on generic object not allowed
      const rest = omit(this.props, ['animation', 'classes', 'theme']);

      return (
        <VelocityComponent
          animation={animation}
          duration={1000}
          delay={500}
          runOnMount
          complete={this.handleVelocityComplete}>
          <Hidden className={classes.hidden} xsUp implementation="css">
            <div className={classes.container}>
              <WrappedComponent onVelocityComplete={this.handleVelocityCompleteCallback} {...rest} />
            </div>
          </Hidden>
        </VelocityComponent>
      );
    }
  }

  return connect<ExternalProps>(mapStateToProps)(withStyles(WithVelocityStyles)(WithVelocity));
};

export interface WithVelocityInjectedProps {
  onVelocityComplete: (callback: () => void) => Promise<void>;
}

export default withVelocity;
