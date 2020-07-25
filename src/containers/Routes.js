import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageHome from 'containers/PageHome/PageHome';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PageHome} />
  </Switch>
);

export default Routes;
