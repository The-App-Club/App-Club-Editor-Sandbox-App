import clsx from 'clsx'
import {
  Control,
  useController,
  useFieldArray,
  UseFormClearErrors,
} from 'react-hook-form'
import { Simplify } from 'type-fest'

import Spacer from '@/components/ui/Spacer'
import DeleteButton from '@/features/upload/components/DeleteButton'
import { UploadForm } from '@/features/upload/stores/uploadForm'
import { validationSnapshots } from '@/features/upload/validations/snapshots'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  type: 'submit' | 'button'
  color?: 'primary' | 'secondary'
  disabled?: boolean
  children?: React.ReactNode
  labelName: string
}

type NeatProps = Simplify<
  Props & {
    control: Control<UploadForm>
    clearErrors: UseFormClearErrors<UploadForm>
  }
>

const UploadButton = ({
  type,
  color,
  disabled,
  onClick,
  style,
  children,
  onChange,
  labelName = 'Do',
  control,
  clearErrors,
  ...props
}: NeatProps) => {
  const {
    fieldState: { error },
  } = useController({
    control, // control props comes from useForm (optional: if you are using FormContext)
    // @ts-ignore
    name: 'snapshots', // unique name for your Field Array
  })
  const { fields, append, remove, update } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    // @ts-ignore
    name: 'snapshots', // unique name for your Field Array
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    clearErrors('snapshots')
    const result = validationSnapshots(e.target.files)
    if (result.isErr()) {
      console.log(result.error)
      return
    }
    result.value?.forEach((file, index) => {
      append({ file })
    })
  }

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.stopPropagation()
    remove(index)
  }

  return (
    <div>
      <button
        className={clsx(
          `font-noto`,
          `w-full rounded-lg bg-blue-700 text-sm font-medium text-white hover:bg-blue-800`,
          `focus:outline-none focus:ring-1`,
          `focus:border-blue-700 focus:ring-blue-700`,
          `focus-visible:border-blue-700 focus-visible:ring-blue-700`,
          `dark:bg-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-300`,
          `disabled:bg-blue-200`
        )}
        {...props}
      >
        <label
          htmlFor='file-upload'
          className='hover:cursor-pointer px-5 py-2.5 inline-block w-full'
        >
          {labelName}
        </label>
        <input
          type='file'
          id='file-upload'
          hidden
          multiple
          onChange={handleChange}
          accept={'image/*'}
        />
      </button>
      <Spacer />
      {!!error && (
        <p
          className={clsx(
            `font-noto`,
            `mt-1`,
            `text-red-700 text-sm font-bold`
          )}
        >
          {error.message}
        </p>
      )}
      <div className='flex flex-col justify-center gap-4'>
        {(fields as { id: string; file: File }[]).map((item, index) => {
          return (
            <div key={item.id} className='shadow-bebop p-4 rounded-xl'>
              <div className='flex items-center justify-end'>
                <DeleteButton
                  type='button'
                  labelName='削除する'
                  onClick={(e) => handleDelete(e, index)}
                />
              </div>
              <picture>
                <source
                  srcSet={URL.createObjectURL(item.file)}
                  type={item.file.type}
                />
                <img
                  src={URL.createObjectURL(item.file)}
                  className='max-w-[12rem] rounded border bg-white p-4 dark:border-blue-700 dark:bg-blue-800'
                  alt={item.file.name}
                />
              </picture>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UploadButton
