import * as React from 'react';

import velocityOnCompleteHandler from './handler';

interface ExternalProps {}

export interface WithVelocityOnCompleteInjectedProps {
  onVelocityComplete: (callback: () => void) => void;
}

const withVelocityOnComplete = <P extends {}>(
  WrappedComponent: React.ComponentType<P & WithVelocityOnCompleteInjectedProps>
) => {
  class WithVelocityOnComplete extends React.Component<P & ExternalProps> {
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
