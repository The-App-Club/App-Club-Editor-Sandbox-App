import { AxiosError } from 'axios'
import { Chance } from 'chance'
import { NextApiRequest, NextApiResponse } from 'next'

import { BackendResponseData } from '@/types/response'

export type ErrorData =
  | AxiosError<unknown, BackendResponseData>
  | null
  | undefined

const dispatchMaintenanceError = (res: NextApiResponse) => {
  res.status(503).json({
    message: 'メンテナンス中です',
  } as BackendResponseData)
}

const dispatchInvalidArgumentError = () => {
  const isError = Chance().integer({ min: 0, max: 1 })
  if (isError) {
    throw new AxiosError(
      'Invalid Argument',
      'XXX',
      {},
      {},
      {
        status: 422,
        data: { message: '無効な引数です', statusCode: 422 },
        config: {},
        headers: {},
        statusText: 'Something went wrong...',
      }
    )
  }
}

const dispatchCustomServerSideError = () => {
  const isError = Chance().integer({ min: 0, max: 1 })
  if (isError) {
    throw new AxiosError(
      'Axios Cowboy Bebop',
      'XXX',
      {},
      {},
      {
        status: 999,
        data: { message: 'カーボーイビバップ', statusCode: 999 },
        config: {},
        headers: {},
        statusText: 'Something went wrong...',
      }
    )
  }
}

const dispatchServerSideError = (
  req: NextApiRequest,
  res: NextApiResponse,
  error: any
) => {
  console.log(error)
  res.status(Number(error.response?.status)).json(error.response?.data)
}

export {
  dispatchServerSideError,
  dispatchCustomServerSideError,
  dispatchInvalidArgumentError,
  dispatchMaintenanceError,
}
