import { useCallback, useMemo } from 'react'

import { produce } from 'immer'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { RowNuts, rowNutsState } from '@/features/table-recoil/stores/nuts'
import { isNullOrUndefined } from '@/utils/typeUtil'

const useRowNuts = (rowId: string) => {
  const activeNuts = useRecoilValue(rowNutsState)
  const setNuts = useSetRecoilState(rowNutsState)

  const nuts = useCallback(
    (n: number) => {
      setNuts((prevState) => {
        if (isNullOrUndefined(prevState)) {
          const map: RowNuts = new Map()
          map.set(rowId, { x: n, x2: n * 2 })
          return map
        } else {
          const nextState = produce(prevState, (draftState) => {
            draftState.set(rowId, { x: n, x2: n * 2 })
          })
          return nextState
        }
      })
    },
    [setNuts, rowId]
  )

  return useMemo(() => {
    return {
      activeRowId: rowId,
      nuts,
      activeNuts,
      setNuts,
    }
  }, [rowId, nuts, activeNuts, setNuts])
}

export default useRowNuts
