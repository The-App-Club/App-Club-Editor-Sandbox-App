import ShowMe from '@/features/custom-event/components/ShowMe'
import useSampleEvent from '@/features/custom-event/hooks/useSampleEvent'

const SubscribeEvent = () => {
  const { message } = useSampleEvent()
  return <ShowMe data={message} />
}

export default SubscribeEvent
