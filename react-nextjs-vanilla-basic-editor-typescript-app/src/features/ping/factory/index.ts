import { Result } from 'neverthrow'

import { ServerSideEnvRepository } from '@/features/ping/repository'
import { ServerSideEnvData } from '@/features/ping/types/serverSideEnv'
import { ErrorData } from '@/types/error'

export interface ServerSideEnvFactory {
  ping(): Promise<Result<ServerSideEnvData, ErrorData>>
}

export const factory = {
  pingFactory: (): ServerSideEnvFactory => {
    return new ServerSideEnvRepository()
  },
}
