import { z } from 'zod'

import { UserSchema } from '@/features/user/domains/user'

const UsersSchema = UserSchema.array()
const UserDataSchema = UserSchema.nullish()
const UserPartialSchema = UserSchema.deepPartial()
const UsersPartialSchema = UserSchema.deepPartial().array()
const UsersDataSchema = UserSchema.nullish().array().nullish()
const UserPartialDataSchema = UserSchema.deepPartial().nullish()
const UsersPartialDataSchema = UserSchema.deepPartial().array().nullish()

export type User = z.infer<typeof UserSchema>
export type Users = z.infer<typeof UsersSchema>
export type UserPartial = z.infer<typeof UserPartialSchema>
export type UsersPartial = z.infer<typeof UsersPartialSchema>
export type UserData = z.infer<typeof UserDataSchema>
export type UsersData = z.infer<typeof UsersDataSchema>
export type UserPartialData = z.infer<typeof UserPartialDataSchema>
export type UsersPartialData = z.infer<typeof UsersPartialDataSchema>
export const USER_KEY = 'user'

const safeParseUsersData = (data: unknown) => {
  // https://stackoverflow.com/a/73994446/15972569
  const dataArr = z.array(z.unknown()).parse(data)
  return dataArr
    .map((datum) => {
      const parsed = UserPartialDataSchema.safeParse(datum)
      return parsed.success ? parsed.data : null
    })
    .filter((x: UserPartialData): x is User => x !== null)
}

export { safeParseUsersData }
