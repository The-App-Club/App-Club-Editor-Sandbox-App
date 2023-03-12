import { lazy } from 'react'

import { NextPage } from 'next'

const Counter = lazy(() => import('@/features/counter/components/Counter'))

const CounterPage: NextPage = () => {
  return <Counter />
}

export default CounterPage
