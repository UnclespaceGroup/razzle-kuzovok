// packages
import React from 'react'
import { useRemoteData } from '@aic/react-remote-data-provider'
import _ from 'lodash'
import FETCH_REVIEWS from 'api/fetch/FETCH_REVIEWS'
import Banner from 'components/Banner/Banner'
import FETCH_REVIEWS_PAGE from 'api/fetch/FETCH_REVIEWS_PAGE'
import CardReview from 'components/CardReview/CardReview'
import css from './pageReviews.module.scss'
import useDevice from 'hooks/useDevice'
import HelmetComponent from 'components/HelmetComponent/ContainerHelmet'

const PageReviews = () => {
  const {
    response: items
  } = useRemoteData(FETCH_REVIEWS(), [])

  const {
    response: {
      banner,
      meta
    } = {}
  } = useRemoteData(FETCH_REVIEWS_PAGE)

  const { currentDevice } = useDevice()

  return (
    <>
      <Banner {...banner} />
      <HelmetComponent {...meta} />
      <div className={css[currentDevice]}>
        {_.map(items, (item, key) => (
          <CardReview key={key} {...item} />
        ))}
      </div>
    </>
  )
}
export default React.memo(PageReviews)
