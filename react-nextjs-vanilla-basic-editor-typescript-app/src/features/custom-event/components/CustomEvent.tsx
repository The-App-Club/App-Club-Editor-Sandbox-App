import React from 'react'

import { Chance } from 'chance'
import { ArrowDown } from 'phosphor-react'

import Spacer from '@/components/ui/Spacer'
import RecieveButton from '@/features/custom-event/components/RecieveButton'
import SendButton from '@/features/custom-event/components/SendButton'
import SubscribeEvent from '@/features/custom-event/components/SubscribeEvent'
import UnsubscribeButton from '@/features/custom-event/components/UnsubscribeButton'
import useSampleEvent from '@/features/custom-event/hooks/useSampleEvent'
import CustomEventLayout from '@/features/custom-event/layouts/default'

const CustomEvent = () => {
  const { sendTik, recieveTik, unsubscribe, audienceMode } = useSampleEvent()

  const handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    sendTik(Chance().word())
  }

  return (
    <CustomEventLayout>
      <div className='font-inter text-2xl font-bold border-2 p-6 flex items-center justify-center'>
        {audienceMode}
      </div>
      <Spacer />
      <div className='flex flex-col gap-6'>
        <RecieveButton
          onClick={recieveTik}
          labelName={'Recieve'}
          type={'button'}
          disabled={audienceMode === 'subscribed'}
        />
        <div className='flex items-center justify-center'>
          <ArrowDown size={32} />
        </div>
        <SendButton
          onClick={handleSend}
          labelName={'Send Message'}
          type={'button'}
          disabled={audienceMode === 'unsubscribed'}
        />
        <div className='flex items-center justify-center'>
          <ArrowDown size={32} />
        </div>
        <UnsubscribeButton
          onClick={unsubscribe}
          labelName={'Unsubscribe'}
          type='button'
          disabled={audienceMode === 'unsubscribed'}
        />
      </div>
      <Spacer />
      <SubscribeEvent />
    </CustomEventLayout>
  )
}

export default CustomEvent
