import { lazy } from 'react'

import { NextPage } from 'next'

const Counter = lazy(
  () => import('@/features/counter-ts-pattern/components/Counter')
)

const CounterTsPatternPage: NextPage = () => {
  return <Counter />
}

export default CounterTsPatternPage
