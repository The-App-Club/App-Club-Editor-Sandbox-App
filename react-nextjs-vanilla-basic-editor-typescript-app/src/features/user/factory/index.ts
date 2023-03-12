import { Result } from 'neverthrow'

import { UserRepository } from '@/features/user/repository'
import { UsersData } from '@/features/user/types/user'
import { ErrorData } from '@/types/error'

export interface UserFactory {
  listUp(): Promise<Result<UsersData, ErrorData>>
}

export const factory = {
  userFactory: (): UserFactory => {
    return new UserRepository()
  },
}
