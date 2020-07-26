import { axiosAPI } from 'api/axios'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'

const FETCH_SERVICES = ({ slug, isSingle } = {}) => ({
  axiosInstance: axiosAPI,
  request: {
    url: 'services',
    params: {
      slug
    }
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)

      const items = _.map(parsedData, ({
        banner: {
          title,
          text,
          img
        },
        isMain,
        content,
        ...other
      }) => ({
        banner: {
          title,
          text,
          img: getImgName(img)
        },
        isMain,
        content,
        ...other
      }))

      return isSingle
        ? items[0]
        : {
          items
        }
    }
  }
})
export default FETCH_SERVICES
