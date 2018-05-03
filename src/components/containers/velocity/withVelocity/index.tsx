import * as React from 'react';

import { Animation, VelocityComponent } from 'velocity-react';

import Hidden from 'material-ui/Hidden';

interface ExternalProps {}

interface WithVelocityInjectedProps {}

const withVelocity = (
  animation: Animation,
  handleVelocityComplete: () => void,
  delay: number = 500,
  duration: number = 1000
) => <P extends {}>(WrappedComponent: React.ComponentType<P & WithVelocityInjectedProps>) => {
  const WithVelocity: React.SFC<P & ExternalProps> = (props) => (
    <VelocityComponent
      animation={animation}
      duration={duration}
      delay={delay}
      runOnMount
      complete={handleVelocityComplete}>
      <Hidden xsUp implementation="css">
        <WrappedComponent {...props} />
      </Hidden>
    </VelocityComponent>
  );

  return WithVelocity;
};

export default withVelocity;
