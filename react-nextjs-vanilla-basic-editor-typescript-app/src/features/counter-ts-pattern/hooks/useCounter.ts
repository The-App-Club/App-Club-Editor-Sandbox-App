import { useCallback, useMemo } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { match } from 'ts-pattern'

import { counterState } from '@/features/counter-ts-pattern/stores/counter'

type Pattern = 'increment' | 'decrement' | 'reset'

const useCounter = () => {
  const activeCounter = useRecoilValue(counterState)
  const setCounter = useSetRecoilState(counterState)

  const { count } = useMemo(() => {
    return { ...activeCounter }
  }, [activeCounter])

  const increment = useCallback(() => {
    setCounter((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }, [setCounter])
  const decrement = useCallback(() => {
    setCounter((prevState) => {
      return {
        count: prevState.count - 1,
      }
    })
  }, [setCounter])
  const reset = useCallback(() => {
    setCounter((prevState) => {
      return {
        count: 0,
      }
    })
  }, [setCounter])

  const dispatch = useCallback(
    (pattern: Pattern) => {
      match(pattern)
        .with('increment', () => increment())
        .with('decrement', () => decrement())
        .with('reset', () => reset())
        .exhaustive()
    },
    [reset, decrement, increment]
  )

  return useMemo(() => {
    return { count, dispatch }
  }, [count, dispatch])
}

export default useCounter
