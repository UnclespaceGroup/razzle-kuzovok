import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CARS from 'api/fetch/FETCH_CARS'
import FETCH_SERVICES_PAGE from 'api/fetch/FETCH_SERVICES_PAGE'

const usePageCars = () => {
  const {
    response: {
      items
    } = {}
  } = useRemoteData(FETCH_CARS)

  const {
    response: banner
  } = useRemoteData(FETCH_SERVICES_PAGE)

  return {
    items,
    banner
  }
}
export default usePageCars
