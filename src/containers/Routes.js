import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageHome from 'containers/PageHome/PageHome'
import { PAGE_SERVICES, PAGE_SERVICES_DETAIL } from 'constants/routes'
import PageServices from 'containers/PageServices/PageServices'
import PageServiceDetail from 'containers/PageServiceDetail/PageServiceDetail'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={PageHome} />
    <Route exact path={PAGE_SERVICES} component={PageServices} />
    <Route exact path={PAGE_SERVICES_DETAIL} component={PageServiceDetail} />
  </Switch>
)

export default Routes
