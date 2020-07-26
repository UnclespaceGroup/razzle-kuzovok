import { axiosAPI } from 'api/axios'
import { getImgName } from 'utils/getImgName'

const FETCH_CARS_PAGE = {
  axiosInstance: axiosAPI,
  request: {
    url: 'cars-page'
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)

      const {
        banner: {
          title,
          text,
          img
        }
      } = parsedData

      return {
        title,
        text,
        img: getImgName(img)
      }
    }
  }
}
export default FETCH_CARS_PAGE
