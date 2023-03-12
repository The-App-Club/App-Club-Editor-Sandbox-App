import { z } from 'zod'

export const ServerSideEnvSchema = z.object({
  NODE_ENV: z.string(),
})

export type ServerSideEnv = z.infer<typeof ServerSideEnvSchema>
