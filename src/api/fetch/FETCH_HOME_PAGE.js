import { axiosAPI } from 'api/axios'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'

const FETCH_HOME_PAGE = {
  axiosInstance: axiosAPI,
  request: {
    url: 'main-page'
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)
      const {
        title,
        text,
        images,
        advantages,
        cards,
        ...otherData
      } = parsedData

      return {
        bannerItems: _.map(images, img => ({
          title,
          text,
          img: getImgName(img)
        })),
        advantages: _.map(advantages, item => ({
          ...item,
          img: getImgName(item.img)
        })),
        cards: _.map(cards, item => ({
          ...item,
          img: getImgName(item.img)
        })),
        ...otherData
      }
    }
  }
}
export default FETCH_HOME_PAGE
