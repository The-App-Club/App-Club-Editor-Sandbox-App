import { JsonArray, JsonObject, JsonValue } from 'type-fest'
import { z } from 'zod'

const isString = (data: unknown): data is string => {
  return z.string().safeParse(data).success
}

const isNullOrUndefined = (data: unknown): data is null | undefined => {
  return data === null || data === undefined
}

const isJSONData = (data: unknown): data is JsonValue => {
  return z.custom<JsonObject | JsonArray | JsonValue>().safeParse(data).success
}

export { isString, isNullOrUndefined, isJSONData }
