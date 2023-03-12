import Spacer from '@/components/ui/Spacer'
import Loading from '@/features/todo-ts-pattern/components/Loading'
import NiceButton from '@/features/todo-ts-pattern/components/NiceButton'
import useListUpTodoHook from '@/features/todo-ts-pattern/hooks/listUp.hook'
import useFormatter from '@/features/todo-ts-pattern/hooks/useFormatter'
import TodoLayout from '@/features/todo-ts-pattern/layouts/default'
import { safeParseTodosData } from '@/features/todo-ts-pattern/types/todo'
import { TODO_KEY } from '@/features/todo-ts-pattern/types/todo'
import { queryClient } from '@/libs/queryClient'

const TodoList = () => {
  const { data, error, refetch } = useListUpTodoHook()
  const { neatLabelName } = useFormatter()

  if (!data) {
    return <Loading />
  }

  const neatData = safeParseTodosData(data)

  return (
    <TodoLayout>
      <NiceButton
        type='button'
        labelName={neatLabelName(neatData, error, 'Latest Refresh')}
        onClick={() => {
          queryClient.removeQueries([TODO_KEY])
          refetch()
        }}
      />
      <Spacer />
      <div className='flex items-center flex-col justify-center gap-4'>
        {neatData.map((item, index) => {
          return (
            <div key={index} className='shadow-bebop rounded-2xl p-4'>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
              <b>{`u${item.userId}`}</b>
              <span>{`#${item.id}`}</span>
            </div>
          )
        })}
      </div>
    </TodoLayout>
  )
}

export default TodoList
