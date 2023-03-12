import Spacer from '@/components/ui/Spacer'
import NiceButton from '@/features/ping/components/NiceButton'
import ShowMe from '@/features/ping/components/ShowMe'
import usePingHook from '@/features/ping/hooks/ping.hook'
import useFormatter from '@/features/ping/hooks/useFormatter'
import PingLayout from '@/features/ping/layouts/default'
import { SERVER_SIDE_ENV_KEY } from '@/features/ping/types/serverSideEnv'
import { queryClient } from '@/libs/queryClient'

const Ping = () => {
  const { neatLabelName } = useFormatter()
  const { data, error, refetch } = usePingHook()

  if (error) {
    return (
      <PingLayout>
        <NiceButton
          type='button'
          labelName={neatLabelName(data, error)}
          onClick={() => {
            queryClient.removeQueries([SERVER_SIDE_ENV_KEY])
            refetch()
          }}
        />
        <Spacer />
        <ShowMe data={error.response?.data} />
      </PingLayout>
    )
  }

  return (
    <PingLayout>
      <NiceButton
        type='button'
        labelName={neatLabelName(data, error, 'Latest Refresh')}
        onClick={() => {
          queryClient.removeQueries([SERVER_SIDE_ENV_KEY])
          refetch()
        }}
      />
      <Spacer />
      <ShowMe data={data} />
    </PingLayout>
  )
}

export default Ping
