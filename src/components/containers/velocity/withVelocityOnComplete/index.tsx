import * as React from 'react';

import velocityOnCompleteHandler from './handler';

interface ExternalProps {}

export interface WithVelocityOnCompleteInjectedProps {
  onVelocityComplete: (callback: () => void) => void;
}

const withVelocityOnComplete = <WrappedComponentProps extends {}>(
  WrappedComponent: React.ComponentType<WrappedComponentProps & WithVelocityOnCompleteInjectedProps>
) => {
  class WithVelocityOnComplete extends React.Component<WrappedComponentProps & ExternalProps> {
    handleVelocityOnComplete = (callback: () => void) => {
      velocityOnCompleteHandler.registerCallback(callback);
    }

    render() {
      return <WrappedComponent onVelocityComplete={this.handleVelocityOnComplete} {...this.props} />;
    }
  }

  return WithVelocityOnComplete;
};

export const handler = velocityOnCompleteHandler;

export default withVelocityOnComplete;
