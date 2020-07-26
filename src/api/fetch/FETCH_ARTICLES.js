import { axiosAPI } from 'api/axios'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'
import { PAGE_ARTICLE } from 'constants/routes'

const FETCH_ARTICLES = ({ slug, isSingle } = {}) => ({
  axiosInstance: axiosAPI,
  request: {
    url: 'papers',
    params: {
      slug
    }
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)
      const items = _.map(parsedData, ({
        title,
        text,
        img,
        content,
        slug,
        ...other
      }) => ({
        banner: {
          ...other,
          title,
          text,
          img: getImgName(img),
          to: PAGE_ARTICLE + slug
        },
        content
      }))
      console.log(items)
      return isSingle
        ? items[0]
        : { items }
    }
  }
})
export default FETCH_ARTICLES
