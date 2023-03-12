import { useCallback, useMemo } from 'react'

import { Draft, produce } from 'immer'
import { RecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

type DraftFunction<T> = (draft: Draft<T>) => void

export const useRecoilImmerState = <T>(state: RecoilState<T>) => {
  // https://github.com/immerjs/use-immer
  // https://prateeksurana.me/blog/simplify-immutable-data-structures-in-usereducer-with-immer/#:~:text=example%20that%20demonstrates%20how%20it%20works%20with%20TypeScript%3A
  // https://stackoverflow.com/a/73711545/15972569
  const activeState = useRecoilValue(state)
  const setActiveState = useSetRecoilState(state)

  const setState = useCallback(
    (valOrUpdater: T | DraftFunction<T>) => {
      return setActiveState(
        typeof valOrUpdater === 'function'
          ? produce(valOrUpdater as DraftFunction<T>)
          : (valOrUpdater as T)
      )
    },
    [setActiveState]
  )

  return useMemo(() => {
    return {
      activeState,
      setState,
    }
  }, [activeState, setState])
}
