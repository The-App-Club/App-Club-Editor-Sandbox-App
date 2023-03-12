/** @jsxImportSource @emotion/react */
import { useForm } from 'react-hook-form'

import TableRowContainer from '@/features/table-hook-form/components/TableRowContainer'
import TableLayout from '@/features/table-hook-form/layouts/default'

export type TableForm = {
  values: {
    seed: number
  }[]
}

const Table = () => {
  console.log(`[Table]`)

  const { control, handleSubmit } = useForm<TableForm>({
    defaultValues: {
      values: [
        {
          seed: 1,
        },
        {
          seed: 2,
        },
        {
          seed: 3,
        },
      ],
    },
  })

  const doSubmit = (data: TableForm) => {
    console.log(data)
  }

  return (
    <TableLayout>
      <form onSubmit={handleSubmit(doSubmit)}>
        <table>
          <thead>
            <tr>
              <th>x</th>
              <th>x * 2</th>
            </tr>
          </thead>
          <TableRowContainer control={control} />
        </table>
      </form>
    </TableLayout>
  )
}

export default Table
