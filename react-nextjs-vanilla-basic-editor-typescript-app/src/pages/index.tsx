import { lazy } from 'react'

import { NextPage } from 'next'

const Home = lazy(() => import('@/features/home/components/Home'))

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage
