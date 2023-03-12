import { lazy } from 'react'

import { NextPage } from 'next'

const Table = lazy(
  () => import('@/features/table-local-state/components/Table')
)

const TableLocalStatePage: NextPage = () => {
  return <Table />
}

export default TableLocalStatePage
