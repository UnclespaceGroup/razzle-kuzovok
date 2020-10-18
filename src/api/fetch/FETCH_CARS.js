import { axiosAPI } from 'api/axios'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'
import { PAGE_CARS } from 'constants/routes'

const FETCH_CARS = ({ slug } = {}) => ({
  axiosInstance: axiosAPI,
  request: {
    url: 'cars',
    params: {
      slug
    }
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)
      const items = _.map(parsedData, ({
        title,
        slug,
        text,
        content,
        img,
        ...other
      }) => ({
        title,
        text,
        content,
        to: PAGE_CARS + slug,
        img: getImgName(img),
        ...other
      }))

      return items
    }
  }
})
export default FETCH_CARS
