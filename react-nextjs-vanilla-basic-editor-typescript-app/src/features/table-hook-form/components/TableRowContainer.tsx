import { Control, useController, useFieldArray } from 'react-hook-form'

import { TableForm } from './Table'

const TableRowContainer = ({ control }: { control: Control<TableForm> }) => {
  const { fields } = useFieldArray({ control, name: 'values' })
  return (
    <tbody>
      {fields.map((field, index) => (
        <TableRow key={field.id} control={control} index={index} />
      ))}
    </tbody>
  )
}

const TableRow = ({
  control,
  index,
}: {
  control: Control<TableForm>
  index: number
}) => {
  const { field } = useController({
    name: `values.${index}.seed`,
    control,
  })
  return (
    <tr>
      <td>
        {/* @ts-ignore */}
        <input type='number' {...field} />
      </td>
      <td>{field.value * 2}</td>
    </tr>
  )
}

export default TableRowContainer
