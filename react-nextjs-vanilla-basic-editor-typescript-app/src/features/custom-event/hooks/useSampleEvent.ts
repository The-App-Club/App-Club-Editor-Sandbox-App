import EventEmitter from 'events'

import { useCallback, useMemo } from 'react'

import { Chance } from 'chance'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import TypedEmitter from 'typed-emitter'

import { sampleEventState } from '@/features/custom-event/stores/sampleEvent'
import { MessageData } from '@/features/custom-event/types/message'

// https://github.com/andywer/typed-emitter
// Define your emitter's types like that:
// Key: Event name; Value: Listener function signature
type MessageEvents = {
  error: (error: Error) => void
  message: (data: MessageData) => void
}

const messageEmitter = new EventEmitter() as TypedEmitter<MessageEvents>
const useSampleEvent = () => {
  const activeSampleEvent = useRecoilValue(sampleEventState)
  const setActiveSampleEvent = useSetRecoilState(sampleEventState)

  const sendTik = useCallback((body: string = 'Hi there!') => {
    if (!messageEmitter.eventNames().includes('message')) {
      return
    }
    messageEmitter.emit('message', {
      body,
      from: Chance().email(),
    })
  }, [])

  const { message, audienceMode } = useMemo(() => {
    return { ...activeSampleEvent }
  }, [activeSampleEvent])

  const doSomething = useCallback(
    (message: MessageData) => {
      setActiveSampleEvent((prevState) => {
        return {
          ...prevState,
          message,
          audienceMode: 'subscribed',
        }
      })
    },
    [setActiveSampleEvent]
  )

  const recieveTik = useCallback(() => {
    if (messageEmitter.eventNames().includes('message')) {
      return
    }
    messageEmitter.on('message', doSomething)
    setActiveSampleEvent((prevState) => {
      return {
        ...prevState,
        message: null,
        audienceMode: 'subscribed',
      }
    })
  }, [doSomething, setActiveSampleEvent])

  const unsubscribe = useCallback(() => {
    messageEmitter.off('message', doSomething)
    messageEmitter.removeListener('message', doSomething)
    messageEmitter.removeAllListeners('message')
    setActiveSampleEvent((prevState) => {
      return {
        ...prevState,
        message: null,
        audienceMode: 'unsubscribed',
      }
    })
  }, [doSomething, setActiveSampleEvent])

  return useMemo(() => {
    return {
      message,
      sendTik,
      recieveTik,
      unsubscribe,
      audienceMode,
    }
  }, [sendTik, message, recieveTik, unsubscribe, audienceMode])
}

export default useSampleEvent
