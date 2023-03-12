import { match } from 'ts-pattern'

import Error from '@/features/todo-ts-pattern/components/Error'
import Loading from '@/features/todo-ts-pattern/components/Loading'
import TodoList from '@/features/todo-ts-pattern/components/TodoList'
import useListUpTodoHook from '@/features/todo-ts-pattern/hooks/listUp.hook'

const Todo = () => {
  const { pattern } = useListUpTodoHook()
  const renderContent = () => {
    return match(pattern)
      .with('error', () => {
        return <Error />
      })
      .with('loading', () => {
        return <Loading />
      })
      .with('success', () => {
        return <TodoList />
      })
      .exhaustive()
  }

  return <>{renderContent()}</>
}

export default Todo
