import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_ARTICLES from 'api/fetch/FETCH_ARTICLES'
import FETCH_ARTICLE_PAGE from 'api/fetch/FETCH_ARTICLE_PAGE'
import { useMemo } from 'react'
import _ from 'lodash'

const usePageArticle = () => {
  const {
    response: {
      items: responseItems
    } = {}
  } = useRemoteData(FETCH_ARTICLES(), [])

  const items = useMemo(() =>
    _.map(responseItems, ({ banner }) => banner),
  [responseItems]
  )
  const {
    response: banner
  } = useRemoteData(FETCH_ARTICLE_PAGE)
  console.log(responseItems)
  const helmetData = {
    title: 'Список полезных статей по ремонту автомобиля',
    description: 'Различные статьи на автомобильную тематику.'
  }

  return {
    helmetData,
    banner,
    items
  }
}
export default usePageArticle
