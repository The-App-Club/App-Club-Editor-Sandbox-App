import { match } from 'ts-pattern'

import Loading from '@/components/ui/Loading'
import Spacer from '@/components/ui/Spacer'
import NiceButton from '@/features/todo/components/NiceButton'
import ShowMe from '@/features/todo/components/ShowMe'
import useListUpTodoHook from '@/features/todo/hooks/listUp.hook'
import useDecidePageState from '@/features/todo/hooks/useDecidePageState'
import useFormatter from '@/features/todo/hooks/useFormatter'
import TodoLayout from '@/features/todo/layouts/default'
import { safeParseTodosData, TODO_KEY } from '@/features/todo/types/todo'
import { queryClient } from '@/libs/queryClient'

const Todo = () => {
  const { neatLabelName } = useFormatter()
  const { data, error, refetch } = useListUpTodoHook()
  const { decidePageState } = useDecidePageState()

  const renderContent = () => {
    return match(decidePageState(data, error))
      .with('error', () => {
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
      })
      .with('loading', () => {
        return (
          <TodoLayout>
            <Loading />
          </TodoLayout>
        )
      })
      .with('success', () => {
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
      })
      .run()
  }

  return <>{renderContent()}</>
}

export default Todo
