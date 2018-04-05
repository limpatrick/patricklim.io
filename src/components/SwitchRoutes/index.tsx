import * as React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import withRoutes, { WithRoutesInjectedProps } from 'components/containers/withRoutes';

interface SwitchRoutesProps {}

const SwitchRoutes: React.SFC<SwitchRoutesProps & WithRoutesInjectedProps> = ({ routes }) => (
  <Switch>
    {routes.map(({ path, component }, key) => {
      const Component = component;

      return <Route exact path={path} component={Component} key={key} />;
    })}
    <Redirect to="/" />
  </Switch>
);

export default withRoutes(SwitchRoutes);
