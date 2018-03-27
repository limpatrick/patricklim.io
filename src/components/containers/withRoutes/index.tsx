import * as React from 'react';

import routes, { Route } from 'src/routes';

interface ExternalProps {}

const withRoutes = <WrappedComponentProps extends {}>(
  WrappedComponent: React.ComponentType<WrappedComponentProps & WithRoutesInjectedProps>
) => {
  const WithRoutes: React.SFC<WrappedComponentProps & ExternalProps> = (props) => (
    <WrappedComponent routes={routes} {...props} />
  );

  return WithRoutes;
};

export interface WithRoutesInjectedProps {
  routes: Route[];
}

export default withRoutes;
