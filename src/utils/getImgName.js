import { serverApi } from 'api/axios'

export const getImgName = (img) =>
  typeof img === 'object'
    ? serverApi + img?.url
    : img
