import { axiosAPI } from 'api/axios'
import { getImgName } from 'utils/getImgName'

const FETCH_SERVICES_PAGE = {
  axiosInstance: axiosAPI,
  request: {
    url: 'services-page'
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)

      const {
        banner: {
          title,
          text,
          img
        },
        ...other
      } = parsedData

      return {
        banner: {
          title,
          text,
          img: getImgName(img)
        },
        ...other
      }
    }
  }
}
export default FETCH_SERVICES_PAGE
