import * as React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import withRoutes, { WithRoutesInjectedProps } from 'components/containers/withRoutes';

interface SwitchRoutesProps {
  componentContainer?: React.ComponentType;
}

const SwitchRoutes: React.SFC<SwitchRoutesProps & WithRoutesInjectedProps> = ({ routes, componentContainer }) => (
  <Switch>
    {routes.map(({ path, component }, key) => {
      const Component = component;

      return (
        <Route
          exact
          path={path}
          render={() => {
            if (componentContainer) {
              const Container = componentContainer;

              return (
                <Container>
                  <Component />
                </Container>
              );
            }

            return <Component />;
          }}
          key={key}
        />
      );
    })}
    <Redirect to="/" />
  </Switch>
);

export default withRoutes(SwitchRoutes);
