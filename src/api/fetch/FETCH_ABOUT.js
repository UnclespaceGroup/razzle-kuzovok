import { axiosAPI } from 'api/axios'

const FETCH_ABOUT = {
  axiosInstance: axiosAPI,
  request: {
    url: 'about'
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)

      return {
        ...parsedData
      }
    }
  }
}
export default FETCH_ABOUT
