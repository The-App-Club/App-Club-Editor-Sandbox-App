import { AxiosResponse } from 'axios'

import { axios } from '@/libs/axios'
import {
  dispatchCustomServerSideError,
  dispatchInvalidArgumentError,
} from '@/types/error'
import { isRandomError } from '@/utils/bebopUtil'

const requestToOutside = async <T, E>({
  requestURL,
}: {
  requestURL: string
}): Promise<T> => {
  if (isRandomError()) {
    dispatchCustomServerSideError()
  }
  if (isRandomError()) {
    dispatchInvalidArgumentError()
  }
  const response: AxiosResponse<T, E> = await axios.get(requestURL, {
    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
  })
  const { data } = response
  return data
}

export { requestToOutside }
