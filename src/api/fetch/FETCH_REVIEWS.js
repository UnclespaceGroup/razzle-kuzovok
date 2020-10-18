import { axiosAPI } from 'api/axios'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'

const FETCH_REVIEWS = () => {
  return {
    axiosInstance: axiosAPI,
    request: {
      url: 'works'
    },
    requestFunctions: {
      transformResponse: data => {
        const parsedData = JSON.parse(data)

        return _.map(parsedData, ({
          img,
          title,
          car: {
            title: carName,
            text
          } = {},
          ...item
        }) => ({
          ...item,
          title: `${carName} - ${title}`,
          img: getImgName(img)
        }))
      }
    }
  }
}

export default FETCH_REVIEWS
