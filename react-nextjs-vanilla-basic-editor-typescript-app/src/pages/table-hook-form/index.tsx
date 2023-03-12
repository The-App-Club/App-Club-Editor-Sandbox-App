import { lazy } from 'react'

import { NextPage } from 'next'

const Table = lazy(() => import('@/features/table-hook-form/components/Table'))

const TableHookFormPage: NextPage = () => {
  return <Table />
}

export default TableHookFormPage
