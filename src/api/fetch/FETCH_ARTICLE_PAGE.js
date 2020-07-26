import { axiosAPI } from 'api/axios'
import { getImgName } from 'utils/getImgName'

const FETCH_ARTICLE_PAGE = {
  axiosInstance: axiosAPI,
  request: {
    url: 'article-page'
  },
  reducerKey: 'articlePage',
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)
      const { banner } = parsedData

      return {
        ...banner,
        img: getImgName(banner?.img)
      }
    }
  }
}
export default FETCH_ARTICLE_PAGE
