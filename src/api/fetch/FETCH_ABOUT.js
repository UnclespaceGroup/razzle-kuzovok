import { axiosAPI } from 'api/axios'
import { getImgName } from 'utils/getImgName'

const FETCH_ABOUT = {
  axiosInstance: axiosAPI,
  request: {
    url: 'about'
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)

      const { banner, content } = parsedData

      return {
        banner: {
          ...banner,
          img: getImgName(banner?.img)
        },
        content
      }
    }
  }
}
export default FETCH_ABOUT
