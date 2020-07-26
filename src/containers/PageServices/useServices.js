import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_SERVICES from 'api/fetch/FETCH_SERVICES'
import _ from 'lodash'
import React from 'react'
import { PAGE_SERVICES } from 'constants/routes'
import FETCH_WORK_PAGE from 'api/fetch/FETCH_WORK_PAGE'

const useServices = () => {
  const {
    response: {
      items
    } = {}
  } = useRemoteData(FETCH_SERVICES())

  const {
    response: bannerData
  } = useRemoteData(FETCH_WORK_PAGE)

  const helmetData = {
    title: 'Каталог услуг | Станция кузовного ремонта Кузовок',
    description: `
Станция предлагаем огромный спектр услуг по кузовному ремонту и кузовной обработке автомобиля,
такие как ${_.map(items, item => item.title).join(', ')}
    `
  }

  const _cards = React.useMemo(() =>
    _.map(items, ({ banner, isMain, slug }) => console.log(slug) || ({
      ...banner,
      isMain,
      to: PAGE_SERVICES + slug
    })),
  [items])

  const cards = React.useMemo(() =>
    _.filter(_cards, ({ isMain }) => !isMain)
  , [_cards])

  const mainCards = React.useMemo(() =>
    _.filter(_cards, ({ isMain }) => isMain),
  [_cards])

  return {
    helmetData,
    mainCards,
    bannerData,
    cards
  }
}
export default useServices
