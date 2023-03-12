import { useQuery } from '@tanstack/react-query'

import { factory } from '@/features/ping/factory'
import { ServerSideEnvData } from '@/features/ping/types/serverSideEnv'
import { SERVER_SIDE_ENV_KEY } from '@/features/ping/types/serverSideEnv'
import { ErrorData } from '@/types/error'

const pingRepository = factory.pingFactory()
const usePingHook = () => {
  // https://stackoverflow.com/a/63113066/15972569
  const { data, error, refetch } = useQuery<ServerSideEnvData, ErrorData>(
    [SERVER_SIDE_ENV_KEY],
    async () => {
      const result = await pingRepository.ping()
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

export default usePingHook
