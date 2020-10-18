import { axiosAPI } from 'api/axios'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'
import { PAGE_CARS } from 'constants/routes'
import { getDate } from 'utils/getNameByValue'

const FETCH_CARS_DETAIL = ({ slug } = {}) => ({
  axiosInstance: axiosAPI,
  disabled: !slug,
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
        works
      }) => ({
        banner: {
          title,
          text,
          img: getImgName(img)
        },
        content,
        to: PAGE_CARS + slug,
        works: _.map(works, item => ({
          ...item,
          date: getDate(item.created_at)
        }))
      }))

      return items[0]
    }
  }
})
export default FETCH_CARS_DETAIL
