import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_ARTICLES from 'api/fetch/FETCH_ARTICLES'
import { useParams } from 'react-router'

const usePageArticleDetail = () => {
  const { slug } = useParams()
  const {
    response
  } = useRemoteData(FETCH_ARTICLES({ slug, isSingle: true }))

  return {
    ...response
  }
}
export default usePageArticleDetail
