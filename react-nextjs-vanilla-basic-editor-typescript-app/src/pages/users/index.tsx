import { lazy } from 'react'

import { NextPage } from 'next'

const Users = lazy(() => import('@/features/user/components/Users'))

const UsersPage: NextPage = () => {
  return <Users />
}

export default UsersPage
