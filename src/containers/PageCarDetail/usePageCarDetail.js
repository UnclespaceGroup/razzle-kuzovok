import { useRemoteData } from '@aic/react-remote-data-provider'
import { useParams } from 'react-router'
import FETCH_CARS_DETAIL from 'api/fetch/FETCH_CARS_DETAIL'

const usePageCarDetail = () => {
  const { slug } = useParams()
  const {
    response: {
      banner,
      content,
      works
    } = {}
  } = useRemoteData(FETCH_CARS_DETAIL({ slug }))

  return {
    content,
    banner,
    works
  }
}
export default usePageCarDetail
