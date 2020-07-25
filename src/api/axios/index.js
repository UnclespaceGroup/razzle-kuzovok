import axios from 'axios'

export const axiosAPI = axios.create({
  baseURL: process.env.RAZZLE_API_URL,
  withCredentials: false
})