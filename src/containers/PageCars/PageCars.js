// packages
import React from 'react'
import useDevice from 'hooks/useDevice'
import css from './pageCars.module.scss'
import Banner from 'components/Banner/Banner'
import usePageCars from 'containers/PageCars/usePageCars'
import Tabs from 'components/Tabs/Tabs'
import RowCards from 'components/RowCards/RowCards'
import CardCar from 'components/CardCar/CardCar'
import HelmetComponent from 'components/HelmetComponent/ContainerHelmet'

const PageCars = () => {
  const { currentDevice } = useDevice()
  const { items, banner, meta } = usePageCars()

  return (
    <div className={css[currentDevice]}>
      <HelmetComponent {...meta} />
      <Banner {...banner} />
      <Tabs className={css.tabs} />
      <RowCards items={items}>
        <CardCar />
      </RowCards>
    </div>
  )
}
export default React.memo(PageCars)
