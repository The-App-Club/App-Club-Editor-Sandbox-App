import { useMemo } from 'react'

import { useQuery } from '@tanstack/react-query'

import { factory } from '@/features/todo-ts-pattern/factory'
import useDecidePageState from '@/features/todo-ts-pattern/hooks/useDecidePageState'
import { TodosData } from '@/features/todo-ts-pattern/types/todo'
import { TODO_KEY } from '@/features/todo-ts-pattern/types/todo'
import { ErrorData } from '@/types/error'

const todoRepository = factory.todoFactory()
const useListUpTodoHook = () => {
  const { decidePageState } = useDecidePageState()
  // https://stackoverflow.com/a/63113066/15972569
  const { data, error, refetch } = useQuery<TodosData, ErrorData>(
    [TODO_KEY],
    async () => {
      const result = await todoRepository.listUp()
      if (result.isErr()) {
        return Promise.reject(result.error)
      }
      return result.value
    },
    {
      onSuccess: function (data) {},
      onError: function (error) {},
      onSettled: function (data, error) {},
    }
  )

  const pattern = useMemo(() => {
    return decidePageState(data, error)
  }, [decidePageState, data, error])

  return useMemo(() => {
    return { pattern, data, error, refetch, decidePageState }
  }, [pattern, data, error, refetch, decidePageState])
}

export default useListUpTodoHook
