import { axiosAPI } from 'api/axios'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'
import { getDate } from 'utils/getNameByValue'

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
          created_at: date,
          ...item
        }) => ({
          ...item,
          title: `${carName} - ${title}`,
          img: getImgName(img),
          date: getDate(date)
        }))
      }
    }
  }
}

export default FETCH_REVIEWS
