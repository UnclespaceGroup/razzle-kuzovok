import { axiosAPI } from 'api/axios'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'
import { PAGE_CARS } from 'constants/routes'

const FETCH_CARS = {
  axiosInstance: axiosAPI,
  request: {
    url: 'cars'
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)
      const items = _.map(parsedData, ({
        title,
        slug,
        text,
        content,
        img
      }) => ({
        title,
        text,
        content,
        to: PAGE_CARS + slug,
        img: getImgName(img)
      }))

      return {
        items
      }
    }
  }
}
export default FETCH_CARS
