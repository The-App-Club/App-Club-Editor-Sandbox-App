import { AxiosResponse } from 'axios'
import { Result, ResultAsync } from 'neverthrow'

import { ServerSideEnvFactory } from '@/features/ping/factory'
import { ServerSideEnvData } from '@/features/ping/types/serverSideEnv'
import { axios } from '@/libs/axios'
import { ErrorData } from '@/types/error'

async function requestToBFF(): Promise<ServerSideEnvData> {
  const response: AxiosResponse<ServerSideEnvData, ErrorData> = await axios.get(
    '/api/ping'
  )
  const { data } = response
  return data
}

export class ServerSideEnvRepository implements ServerSideEnvFactory {
  async ping(): Promise<Result<ServerSideEnvData, ErrorData>> {
    return ResultAsync.fromPromise<ServerSideEnvData, ErrorData>(
      requestToBFF(),
      (e) => {
        return e as ErrorData
      }
    ).map((v) => v)
  }
}
