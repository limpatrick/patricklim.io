import * as React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import withRoutes, { WithRoutesInjectedProps } from 'components/containers/withRoutes';

import AppContainer from 'components/App/AppContainer';

interface AppSwitchRoutesProps {}

const AppSwitchRoutes: React.SFC<AppSwitchRoutesProps & WithRoutesInjectedProps> = ({ routes }) => (
  <Switch>
    {routes.map(({ path, component }, key) => {
      const Component = component;

      return (
        <Route
          exact
          path={path}
          render={() => (
            <AppContainer>
              <Component />
            </AppContainer>
          )}
          key={key}
        />
      );
    })}
    <Redirect to="/" />
  </Switch>
);

export default withRoutes(AppSwitchRoutes);
