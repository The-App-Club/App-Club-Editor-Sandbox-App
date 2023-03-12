import Axios from 'axios'

import { env } from '@/config/env'
import { BackendResponseData } from '@/types/response'

export const axios = Axios.create({
  baseURL: env.NEXT_PUBLIC_FRONTEND_BASE_URL,
  timeout: env.NEXT_PUBLIC_AXIOS_FETCH_TIMEOUT,
})

const clampError = (error: any): BackendResponseData => {
  if (error.response) {
    return error.response.data
  }
  return { message: error.message }
}

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const niceError = {
      ...error,
      response: {
        ...error.response,
        data: clampError(error),
      },
    }
    return Promise.reject(niceError)
  }
)

axios.interceptors.request.use(async (request) => {
  // const accessToken = getAccessToken();
  // const accessToken = `Cowboy Bebop`
  // request.headers['X-Request-ID'] = accessToken
  return request
})
