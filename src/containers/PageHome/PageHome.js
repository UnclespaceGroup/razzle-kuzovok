import React from 'react'
import css from './pageHome.module.scss'
import { useRemoteData } from '@aic/react-remote-data-provider'
import SliderBanner from 'components/SliderBanner/SliderBanner'
import FETCH_HOME_PAGE from 'api/fetch/FETCH_HOME_PAGE'
import AdvantagesRow from 'components/AdvantagesRow/AdvantagesRow'
import SectionMainCards from 'components/SectionMainCards/SectionMainCards'
import useDevice from 'hooks/useDevice'

function PageHome() {
  const {
    response: {
      bannerItems,
      advantages,
      cards
    } = {}
  } = useRemoteData(FETCH_HOME_PAGE)
  const { currentDevice } = useDevice()

  return (
    <div className={css[currentDevice]}>
      <SliderBanner items={bannerItems} className={css.banner} />
      <AdvantagesRow items={advantages} className={css.advantages} />
      <SectionMainCards cards={cards} />
    </div>
  )
}

export default PageHome
