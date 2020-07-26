import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageHome from 'containers/PageHome/PageHome'
import {
  PAGE_SERVICES,
  PAGE_SERVICES_DETAIL,
  PAGE_CARS,
  PAGE_CAR_DETAIL,
  PAGE_ABOUT,
  PAGE_ARTICLE, PAGE_ARTICLE_DETAIL
} from 'constants/routes'
import PageServices from 'containers/PageServices/PageServices'
import PageServiceDetail from 'containers/PageServiceDetail/PageServiceDetail'
import Page404 from 'containers/Page404/Page404'
import PageCars from 'containers/PageCars/PageCars'
import PageCarDetail from 'containers/PageCarDetail/PageCarDetail'
import PageAbout from 'containers/PageAbout/PageAbout'
import PageArticle from 'containers/PageArticle/PageArticle'
import PageArticleDetail from 'containers/PageArticleDetail/PageArticleDetail'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={PageHome} />
    <Route exact path={PAGE_SERVICES} component={PageServices} />
    <Route exact path={PAGE_SERVICES_DETAIL} component={PageServiceDetail} />
    <Route exact path={PAGE_CARS} component={PageCars} />
    <Route exact path={PAGE_CAR_DETAIL} component={PageCarDetail} />
    <Route path={PAGE_ABOUT} component={PageAbout} />
    <Route exact path={PAGE_ARTICLE} component={PageArticle} />
    <Route exact path={PAGE_ARTICLE_DETAIL} component={PageArticleDetail} />
    <Route path='*' component={Page404} />
  </Switch>
)

export default Routes
