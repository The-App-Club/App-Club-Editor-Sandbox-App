import { useCallback, useMemo } from 'react'

import { ServerSideEnvData } from '@/features/ping/types/serverSideEnv'
import { ErrorData } from '@/types/error'

const useFormatter = () => {
  const neatLabelName = useCallback(
    (data: ServerSideEnvData, error: ErrorData, labelName?: string) => {
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
