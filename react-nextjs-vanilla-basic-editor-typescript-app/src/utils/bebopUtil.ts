import { default as cuid } from 'cuid'
import { z } from 'zod'

import { env } from '@/config/env'
import { ErrorData } from '@/types/error'

const createId = () => {
  return cuid()
}

const isErrorData = (data: unknown) => {
  return z.custom<ErrorData>().safeParse(data).success
}

const isRandomError = () => {
  return env.NODE_ENV === 'development' && env.NEXT_PUBLIC_ENABLE_RANDOM_ERROR
}

const isDevelopment = () => {
  return env.NODE_ENV === 'development'
}

const isProduction = () => {
  return env.NODE_ENV === 'production'
}

export { createId, isErrorData, isRandomError, isDevelopment, isProduction }
