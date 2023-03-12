import { lazy } from 'react'

import { NextPage } from 'next'

const Table = lazy(() => import('@/features/table-recoil/components/Table'))

const TableRecoilPage: NextPage = () => {
  return <Table />
}

export default TableRecoilPage
