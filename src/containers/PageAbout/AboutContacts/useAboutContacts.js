import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CONTACTS from 'api/fetch/FETCH_CONTACTS'

const useAboutContacts = () => {
  const {
    response
  } = useRemoteData(FETCH_CONTACTS)

  return {
    ...response
  }
}

export default useAboutContacts
