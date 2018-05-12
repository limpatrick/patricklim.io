import * as React from 'react';

import { Animation, VelocityComponent } from 'velocity-react';

import Hidden from 'material-ui/Hidden';

interface ExternalProps {}

export interface WithVelocityInjectedProps {
  remount: () => void;
}

interface WithVelocityOptions {
  animation: Animation;
  handleVelocityComplete?: () => void;
  delay: number;
  duration: number;
}

const withVelocity = ({ animation, handleVelocityComplete, delay, duration }: WithVelocityOptions) => <P extends {}>(
  WrappedComponent: React.ComponentType<P & WithVelocityInjectedProps>
) => {
  interface WithVelocityState {
    render: boolean;
  }

  class WithVelocity extends React.Component<P & ExternalProps, WithVelocityState> {
    constructor(props: P & ExternalProps) {
      super(props);

      this.state = {
        render: true,
      };
    }

    remount = () => {
      this.setState({ render: false }, () => {
        this.setState({ render: true });
      });
    }

    render() {
      const { render } = this.state;

      if (!render) {
        return null;
      }

      return (
        <VelocityComponent
          animation={animation}
          duration={duration}
          delay={delay}
          runOnMount
          complete={handleVelocityComplete}>
          <Hidden xsUp implementation="css">
            <WrappedComponent {...this.props} remount={this.remount} />
          </Hidden>
        </VelocityComponent>
      );
    }
  }

  return WithVelocity;
};

export default withVelocity;
