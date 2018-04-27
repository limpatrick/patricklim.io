import * as React from 'react';

import routes, { Route } from 'src/routes';

interface ExternalProps {}

const withRoutes = <P extends {}>(
  WrappedComponent: React.ComponentType<P & WithRoutesInjectedProps>
) => {
  const WithRoutes: React.SFC<P & ExternalProps> = (props) => (
    <WrappedComponent routes={routes} {...props} />
  );

  return WithRoutes;
};

export interface WithRoutesInjectedProps {
  routes: Route[];
}

export default withRoutes;
