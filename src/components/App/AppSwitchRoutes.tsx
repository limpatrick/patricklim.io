import * as React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import AppContainer from 'components/App/AppContainer';
import routes from './routes';

interface AppSwitchRoutesProps {}

const AppSwitchRoutes: React.SFC<AppSwitchRoutesProps> = () => (
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

export default AppSwitchRoutes;
