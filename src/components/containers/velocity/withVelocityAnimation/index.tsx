import * as React from 'react';

import { Animation } from 'velocity-react';
import { handler } from '../withVelocityOnComplete';
import { scrollbarsContentClass } from 'components/App/styles';
import withVelocity from '../withVelocity';

interface ExternalProps {}

interface WithVelocityAnimationInjectedProps {}

const withVelocityAnimation = (animation: Animation = 'transition.fadeIn') => <P extends {}>(
  WrappedComponent: React.ComponentType<P & WithVelocityAnimationInjectedProps>
) => {
  const WithVelocityAnimation: React.SFC<P & ExternalProps> = (props) => (
    <div className={scrollbarsContentClass}>
      <WrappedComponent {...props} />
    </div>
  );

  return withVelocity(animation, handler.handleVelocityComplete)(WithVelocityAnimation);
};

export default withVelocityAnimation;
