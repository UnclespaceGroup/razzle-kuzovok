import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CARS from 'api/fetch/FETCH_CARS'
import FETCH_CARS_PAGE from 'api/fetch/FETCH_CARS_PAGE'

const usePageCars = () => {
  const {
    response: items
  } = useRemoteData(FETCH_CARS(), [])

  const {
    response
  } = useRemoteData(FETCH_CARS_PAGE, [])

  return {
    items,
    ...response
  }
}
export default usePageCars
