import React from 'react'
import useAbout from 'containers/PageAbout/useAbout'
import { Route, Switch } from 'react-router'
import {
  PAGE_ABOUT,
  PAGE_ABOUT_MAP,
  PAGE_ABOUT_PHOTOS
} from 'constants/routes'
import HelmetComponent from 'components/HelmetComponent/ContainerHelmet'
import AboutContacts from 'containers/PageAbout/AboutContacts/AboutContacts'
import AboutPhotos from 'containers/PageAbout/AboutPhotos/AboutPhotos'
import Tabs from 'components/Tabs/Tabs'
import Banner from 'components/Banner/Banner'
import AboutMap from 'containers/PageAbout/AboutMap/AboutMap'

const PageAbout = () => {
  const { banner, items: itemsTabs, helmetData } = useAbout()
  return (
    <>
      <HelmetComponent {...helmetData} />
      <Banner {...banner} />
      <Tabs items={itemsTabs} />
      <Switch>
        <Route
          exact
          path={PAGE_ABOUT}
          render={() => <AboutContacts />}
        />
        <Route
          exact
          path={PAGE_ABOUT_PHOTOS}
          render={() => <AboutPhotos />}
        />
        <Route
          exact
          path={PAGE_ABOUT_MAP}
          render={() => <AboutMap />}
        />
      </Switch>
    </>
  )
}

export default React.memo(PageAbout)
