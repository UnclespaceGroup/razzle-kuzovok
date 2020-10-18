import { useRemoteData } from '@aic/react-remote-data-provider'
import { useParams } from 'react-router'
import FETCH_CARS_DETAIL from 'api/fetch/FETCH_CARS_DETAIL'

const usePageCarDetail = () => {
  const { slug } = useParams()
  const {
    response: {
      banner: {
        title,
        text
      } = {},
      banner,
      content,
      works
    } = {}
  } = useRemoteData(FETCH_CARS_DETAIL({ slug }))
  console.log(works)
  const meta = {
    title: `Кузовок - ${title || ''} ${text?.toLowerCase() || 'обслуживание автомобиля'}`
  }

  return {
    content,
    banner,
    works,
    meta
  }
}
export default usePageCarDetail
