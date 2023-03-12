/** @jsxImportSource @emotion/react */
import Spacer from '@/components/ui/Spacer'
import TableRowBody from '@/features/table-recoil/components/TableRowBody'
import TableRowHeader from '@/features/table-recoil/components/TableRowHeader'
import TableLayout from '@/features/table-recoil/layouts/default'

const Table = () => {
  console.log(`[Table]`)
  return (
    <TableLayout>
      <div className='px-2 pt-2 pb-6 shadow-bebop rounded-xl'>
        <TableRowHeader />
        <Spacer />
        <TableRowBody rowId={'aaa'} />
        <TableRowBody rowId={'bbb'} />
      </div>
    </TableLayout>
  )
}

export default Table
