import { default as FallbackLoading } from '@/components/ui/Loading'
import TodoLayout from '@/features/todo-ts-pattern/layouts/default'

const Loading = () => {
  return (
    <TodoLayout>
      <FallbackLoading />
    </TodoLayout>
  )
}

export default Loading
