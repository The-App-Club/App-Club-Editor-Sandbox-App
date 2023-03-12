import { lazy } from 'react'

import { NextPage } from 'next'

const Todos = lazy(() => import('@/features/todo-ts-pattern/components/Todos'))

const TodosTsPatternPage: NextPage = () => {
  return <Todos />
}

export default TodosTsPatternPage
