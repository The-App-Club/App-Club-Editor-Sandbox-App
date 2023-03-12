import { AxiosResponse } from 'axios'
import { Result, ResultAsync } from 'neverthrow'

import { UserFactory } from '@/features/user/factory'
import { UsersData } from '@/features/user/types/user'
import { axios } from '@/libs/axios'
import { ErrorData } from '@/types/error'

async function requestToBFF(): Promise<UsersData> {
  const response: AxiosResponse<UsersData, ErrorData> = await axios.get(
    '/api/users'
  )
  const { data } = response
  return data
}

export class UserRepository implements UserFactory {
  // https://speakerdeck.com/naoya/typescript-niyoru-graphql-batukuendokai-fa-75b3dab7-90a8-4169-a4dc-d1e7410b9dbd?slide=73
  async listUp(): Promise<Result<UsersData, ErrorData>> {
    return ResultAsync.fromPromise<UsersData, ErrorData>(
      requestToBFF(),
      (e) => {
        return e as ErrorData
      }
    ).map((v) => v)
  }
}
