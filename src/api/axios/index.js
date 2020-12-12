import axios from 'axios'

const localApi = 'http://localhost:1337'
const prodApi = 'http://cms.kuzovok11.ru/'

export const serverApi = process.env.RAZZLE_IS_LOCAL_API === 'true' ? localApi : prodApi

export const axiosAPI = axios.create({
  baseURL: serverApi,
  withCredentials: false
})
