import { useQuery } from '@tanstack/react-query'

import { factory } from '@/features/user/factory'
import { UsersData } from '@/features/user/types/user'
import { USER_KEY } from '@/features/user/types/user'
import { ErrorData } from '@/types/error'

const userRepository = factory.userFactory()
const useListUpUserHook = () => {
  // https://stackoverflow.com/a/63113066/15972569
  const { data, error, refetch } = useQuery<UsersData, ErrorData>(
    [USER_KEY],
    async () => {
      const result = await userRepository.listUp()
      if (result.isErr()) {
        return Promise.reject(result.error)
      }
      return result.value
    },
    {
      onSuccess: function (data) {},
      onError: function (error) {},
      onSettled: function (data, error) {},
    }
  )
  return { data, error, refetch }
}

export default useListUpUserHook
