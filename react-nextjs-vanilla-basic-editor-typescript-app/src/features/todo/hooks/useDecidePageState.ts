import { useCallback, useMemo } from 'react'

import { TodosData } from '@/features/todo/types/todo'
import { ErrorData } from '@/types/error'

type PageState = 'success' | 'loading' | 'partial-error' | 'error'

const useDecidePageState = () => {
  const decidePageState = useCallback(
    (data: TodosData, error: ErrorData): PageState => {
      if (error) {
        // if (1) {
        //   return 'partial-error'
        // }
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
