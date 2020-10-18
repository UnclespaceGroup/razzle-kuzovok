import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_SERVICES from 'api/fetch/FETCH_SERVICES'
import _ from 'lodash'
import React from 'react'
import { PAGE_SERVICES } from 'constants/routes'
import FETCH_SERVICES_PAGE from 'api/fetch/FETCH_SERVICES_PAGE'

const useServices = () => {
  const {
    response: {
      items
    } = {}
  } = useRemoteData(FETCH_SERVICES())

  const {
    response: {
      banner,
      meta
    } = {}
  } = useRemoteData(FETCH_SERVICES_PAGE)

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
    meta,
    mainCards,
    banner,
    cards
  }
}
export default useServices
