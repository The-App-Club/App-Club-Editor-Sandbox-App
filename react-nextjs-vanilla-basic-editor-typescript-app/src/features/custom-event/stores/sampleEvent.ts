import { atom } from 'recoil'
import { z } from 'zod'

import { AudienceMode } from '@/features/custom-event/types/audienceModet'
import { MessageData } from '@/features/custom-event/types/message'

const SampleEventDataSchema = z
  .object({
    message: z.custom<MessageData>(),
    audienceMode: z.custom<AudienceMode>(),
  })
  .nullish()

type SampleEventData = z.infer<typeof SampleEventDataSchema>

const sampleEventState = atom<SampleEventData>({
  key: 'sampleEvent',
  default: {
    message: null,
    audienceMode: 'unsubscribed',
  },
})

export { sampleEventState }
