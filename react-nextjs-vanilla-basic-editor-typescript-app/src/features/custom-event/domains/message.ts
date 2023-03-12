import { z } from 'zod'

const MessageSchema = z.object({
  body: z.string(),
  from: z.string(),
})

export { MessageSchema }
