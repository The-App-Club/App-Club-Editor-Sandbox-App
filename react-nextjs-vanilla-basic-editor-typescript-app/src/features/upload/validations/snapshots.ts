import { Err, Ok, Result } from 'neverthrow'
import { z } from 'zod'

import { isNullOrUndefined } from '@/utils/typeUtil'

const SnapshotsSchema = z
  .custom<FileList>()
  .superRefine((value, ctx) => {
    // @ts-ignore
    const files: File[] = [...value]
    if (files.length === 0) {
      ctx.addIssue({
        code: 'custom',
        message: `必須入力です`,
        fatal: true,
      })
      return z.NEVER
    }
    const hasOverSizeFile = files.some(
      (file) => file.size / Math.pow(1024, 2) > 2
    )
    const hasOverSizeFileIndex = files.findIndex(
      (file) => file.size / Math.pow(1024, 2) > 2
    )
    if (hasOverSizeFile) {
      ctx.addIssue({
        code: 'custom',
        message: `ファイル上限サイズは2MBになります。`,
        path: [`snapshots.${hasOverSizeFileIndex}`],
        fatal: true,
      })
      return z.NEVER
    }
    const isSkip = files.every((file) => isNullOrUndefined(file.type))
    if (isSkip) {
      return z.NEVER
    }
    const hasNotAllowedFile = !files.every((file) => {
      console.log(`file.type`, file.type)
      return ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)
    })
    const hasNotAllowedFileIndex = files.findIndex((file) => {
      return !['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)
    })
    if (hasNotAllowedFile) {
      ctx.addIssue({
        code: 'custom',
        message: `現在対応している拡張子はpng,jpg,jpegになります。`,
        path: [`snapshots.${hasNotAllowedFileIndex}`],
        fatal: true,
      })
      return z.NEVER
    }
  })
  .transform((value: FileList) => {
    // @ts-ignore
    return [...value] as File[]
  })
  .nullish()

const validationSnapshots = (
  data: FileList | null
): Result<File[] | null | undefined, Error> => {
  if (isNullOrUndefined(data)) {
    return new Err(
      new Error('something went wrong...', {
        cause: '@@@',
      })
    )
  }
  const parsed = SnapshotsSchema.safeParse(data)
  if (!parsed.success) {
    return new Err(
      new Error(parsed.error.message, {
        cause: parsed.error,
      })
    )
  }
  return new Ok(parsed.data)
}

export { validationSnapshots, SnapshotsSchema }
