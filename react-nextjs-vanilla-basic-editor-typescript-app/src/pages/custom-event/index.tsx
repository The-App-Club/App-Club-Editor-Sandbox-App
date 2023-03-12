import { lazy } from 'react'

import { NextPage } from 'next'

const CustomEvent = lazy(
  () => import('@/features/custom-event/components/CustomEvent')
)

const CustomEventPage: NextPage = () => {
  return <CustomEvent />
}

export default CustomEventPage
