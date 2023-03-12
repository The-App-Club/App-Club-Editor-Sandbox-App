import { useCallback, useMemo } from 'react'

import { UsersData } from '@/features/user/types/user'
import { ErrorData } from '@/types/error'

const useFormatter = () => {
  const neatLabelName = useCallback(
    (data: UsersData, error: ErrorData, labelName?: string) => {
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
