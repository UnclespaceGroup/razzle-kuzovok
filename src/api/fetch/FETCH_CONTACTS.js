import { axiosAPI } from 'api/axios'

const FETCH_CONTACTS = {
  axiosInstance: axiosAPI,
  request: {
    url: 'contacts'
  },
  requestFunctions: {
    transformResponse: data => {
      return JSON.parse(data)
    }
  }
}
export default FETCH_CONTACTS
