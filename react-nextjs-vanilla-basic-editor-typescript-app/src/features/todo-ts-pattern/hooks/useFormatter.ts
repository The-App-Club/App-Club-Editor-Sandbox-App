import { useCallback, useMemo } from 'react'

import { TodosData } from '@/features/todo/types/todo'
import { ErrorData } from '@/types/error'

const useFormatter = () => {
  const neatLabelName = useCallback(
    (data: TodosData, error: ErrorData, labelName?: string) => {
      labelName = labelName || 'Refetch'
      if (error) {
        return labelName
      }
      if (!data) {
        return 'Loading...'
      }
      return labelName
    },
    []
  )

  return useMemo(() => {
    return {
      neatLabelName,
    }
  }, [neatLabelName])
}

export default useFormatter
