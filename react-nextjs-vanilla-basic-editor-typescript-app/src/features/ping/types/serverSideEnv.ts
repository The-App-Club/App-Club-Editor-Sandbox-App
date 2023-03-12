import { z } from 'zod'

import { ServerSideEnvSchema } from '@/features/ping/domains/serverSideEnv'

const ServerSideEnvDataSchema = ServerSideEnvSchema.nullish()

export type ServerSideEnvData = z.infer<typeof ServerSideEnvDataSchema>
export const SERVER_SIDE_ENV_KEY = 'serverSideEnv'
