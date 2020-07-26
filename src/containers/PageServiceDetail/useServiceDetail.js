import { useParams } from 'react-router'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_SERVICES from 'api/fetch/FETCH_SERVICES'

const useServiceDetail = () => {
  const params = useParams()
  const { slug } = params

  const {
    response: {
      banner
    } = {}
  } = useRemoteData(FETCH_SERVICES({ slug, isSingle: true }))

  const helmetData = {
    title: `${banner?.title || 'Услуга'} | Станция кузовного ремонта Кузовок`,
    description: banner?.text
  }

  return {
    helmetData,
    banner
  }
}

export default useServiceDetail
