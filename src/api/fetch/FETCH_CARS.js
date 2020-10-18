import { axiosAPI } from 'api/axios'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'
import { PAGE_CARS } from 'constants/routes'
import { getDate } from 'utils/getNameByValue'

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
      return _.map(parsedData, ({
        title,
        slug,
        text,
        content,
        img,
        created_at: date,
        ...other
      }) => ({
        title,
        text,
        content,
        to: PAGE_CARS + slug,
        img: getImgName(img),
        date: getDate(date),
        ...other
      }))
    }
  }
})
export default FETCH_CARS
