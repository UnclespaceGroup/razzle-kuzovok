import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageHome from 'containers/PageHome/PageHome'
import { PAGE_SERVICES, PAGE_SERVICES_DETAIL } from 'constants/routes'
import PageServices from 'containers/PageServices/PageServices'
import PageServiceDetail from 'containers/PageServiceDetail/PageServiceDetail'
import Page404 from 'containers/Page404/Page404'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={PageHome} />
    <Route exact path={PAGE_SERVICES} component={PageServices} />
    <Route exact path={PAGE_SERVICES_DETAIL} component={PageServiceDetail} />
    <Route path='*' component={Page404} />
  </Switch>
)

export default Routes
