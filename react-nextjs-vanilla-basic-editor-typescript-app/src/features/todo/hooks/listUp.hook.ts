import { useQuery } from '@tanstack/react-query'

import { factory } from '@/features/todo/factory'
import { TodosData } from '@/features/todo/types/todo'
import { TODO_KEY } from '@/features/todo/types/todo'
import { ErrorData } from '@/types/error'

const todoRepository = factory.todoFactory()
const useListUpTodoHook = () => {
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
  return { data, error, refetch }
}

export default useListUpTodoHook
