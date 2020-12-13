import React from 'react'
import css from './pageHome.module.scss'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_HOME_PAGE from 'api/fetch/FETCH_HOME_PAGE'
import AdvantagesRow from 'components/AdvantagesRow/AdvantagesRow'
import SectionMainCards from 'components/SectionMainCards/SectionMainCards'
import useDevice from 'hooks/useDevice'
import HelmetComponent from 'components/HelmetComponent/ContainerHelmet'
import Banner from 'components/Banner/Banner'

function PageHome () {
  const {
    response: {
      advantages,
      cards,
      meta,
      ...banner
    } = {}
  } = useRemoteData(FETCH_HOME_PAGE, [])
  const { currentDevice } = useDevice()

  return (
    <div className={css[currentDevice]}>
      <HelmetComponent {...meta} />
      <div className={css.banner}>
        <Banner {...banner} />
      </div>
      <AdvantagesRow items={advantages} className={css.advantages} />
      <SectionMainCards cards={cards} />
    </div>
  )
}

export default PageHome
