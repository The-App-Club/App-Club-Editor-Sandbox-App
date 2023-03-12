import { atom } from 'recoil'
import { z } from 'zod'

import { SnapshotsSchema } from '@/features/upload/validations/snapshots'

export const UploadFormSchema = z.object({
  title: z.string().min(1, '必須入力です').nullable(),
  snapshots: SnapshotsSchema,
})

export type UploadForm = z.infer<typeof UploadFormSchema>

const uploadFormState = atom<UploadForm>({
  key: 'upload',
  default: {
    title: null,
    snapshots: null,
  },
})

export { uploadFormState }
