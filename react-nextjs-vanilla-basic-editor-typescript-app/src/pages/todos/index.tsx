import { lazy } from 'react'

import { NextPage } from 'next'

const Todos = lazy(() => import('@/features/todo/components/Todos'))

const TodosPage: NextPage = () => {
  return <Todos />
}

export default TodosPage
