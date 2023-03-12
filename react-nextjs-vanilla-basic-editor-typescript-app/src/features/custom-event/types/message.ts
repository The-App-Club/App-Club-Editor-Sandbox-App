import { z } from 'zod'

import { MessageSchema } from '@/features/custom-event/domains/message'

const MessageDataSchema = MessageSchema.nullish()

export type Message = z.infer<typeof MessageSchema>
export type MessageData = z.infer<typeof MessageDataSchema>
