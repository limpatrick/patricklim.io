import * as React from 'react';

import withVelocity, { WithVelocityInjectedProps } from '../withVelocity';

import { Animation } from 'velocity-react';
import { handler } from '../withVelocityOnComplete';

interface ExternalProps extends WithVelocityInjectedProps {}

interface WithVelocityAnimationInjectedProps {}

interface WithVelocityAnimationOptions {
  animation?: Animation;
  className?: string;
}

const withVelocityAnimation = ({
  animation = 'transition.shrinkIn',
  className,
}: WithVelocityAnimationOptions) => <P extends {}>(
  WrappedComponent: React.ComponentType<P & WithVelocityAnimationInjectedProps>
) => {
  const WithVelocityAnimation: React.SFC<P & ExternalProps> = (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );

  return withVelocity({
    animation,
    handleVelocityComplete: handler.handleVelocityComplete,
    delay: 500,
    duration: 750,
  })(WithVelocityAnimation);
};

export default withVelocityAnimation;
