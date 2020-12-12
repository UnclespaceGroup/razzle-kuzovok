import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_ABOUT from 'api/fetch/FETCH_ABOUT'

const useAboutPhotos = () => {
  const {
    response: {
      content
    } = {}
  } = useRemoteData(FETCH_ABOUT, [])

  return {
    content
  }
}
export default useAboutPhotos
