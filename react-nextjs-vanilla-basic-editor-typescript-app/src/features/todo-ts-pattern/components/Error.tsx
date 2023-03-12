import Spacer from '@/components/ui/Spacer'
import NiceButton from '@/features/todo-ts-pattern/components/NiceButton'
import ShowMe from '@/features/todo-ts-pattern/components/ShowMe'
import useListUpTodoHook from '@/features/todo-ts-pattern/hooks/listUp.hook'
import useFormatter from '@/features/todo-ts-pattern/hooks/useFormatter'
import TodoLayout from '@/features/todo-ts-pattern/layouts/default'
import { TODO_KEY } from '@/features/todo-ts-pattern/types/todo'
import { queryClient } from '@/libs/queryClient'

const Error = () => {
  const { data, error, refetch } = useListUpTodoHook()
  const { neatLabelName } = useFormatter()
  return (
    <TodoLayout>
      <NiceButton
        type='button'
        labelName={neatLabelName(data, error)}
        onClick={() => {
          queryClient.removeQueries([TODO_KEY])
          refetch()
        }}
      />
      <Spacer />
      <ShowMe data={error?.response?.data} />
    </TodoLayout>
  )
}

export default Error
