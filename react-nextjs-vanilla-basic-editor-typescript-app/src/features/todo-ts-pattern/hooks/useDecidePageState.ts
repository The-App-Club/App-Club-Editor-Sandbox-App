import { useCallback, useMemo } from 'react'

import { TodosData } from '@/features/todo/types/todo'
import { ErrorData } from '@/types/error'

type Pattern = 'loading' | 'success' | 'error'

const useDecidePageState = () => {
  const decidePageState = useCallback(
    (data: TodosData, error: ErrorData): Pattern => {
      if (error) {
        return 'error'
      }
      if (!data) {
        return 'loading'
      }
      return 'success'
    },
    []
  )
  return useMemo(() => {
    return { decidePageState }
  }, [decidePageState])
}

export default useDecidePageState
