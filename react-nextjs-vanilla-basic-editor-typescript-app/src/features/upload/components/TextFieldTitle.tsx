import { FC } from 'react'

import clsx from 'clsx'
import { useController, UseControllerProps } from 'react-hook-form'

import { UploadForm } from '@/features/upload/stores/uploadForm'

import type { Simplify } from 'type-fest'

type Props = Simplify<
  UseControllerProps<UploadForm> & {
    labelName: string
    placeholder: string
    type: 'number' | 'text'
  }
>

const TextFieldTitle: FC<Props> = ({
  labelName = 'タイトル',
  placeholder = '4月のスナップショットたち',
  type,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
}) => {
  const {
    field,
    formState: { defaultValues },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })
  return (
    <div className='mb-6'>
      <label
        htmlFor={name}
        className='mb-2 block text-lg font-medium text-gray-600 dark:text-white'
      >
        {labelName}
      </label>
      {/* @ts-ignore */}
      <input
        type={type}
        id={name}
        className={clsx(
          `block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg font-bold`,
          `focus:outline-none focus:ring-1`,
          `focus:border-blue-500 focus:ring-blue-500`,
          `focus-visible:border-blue-500 focus-visible:ring-blue-500`,
          `dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`,
          !!error &&
            clsx(
              `focus:border-red-500 focus:ring-red-500`,
              `focus-visible:border-red-500 focus-visible:ring-red-500`,
              `dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-red-500 `
            )
        )}
        placeholder={placeholder}
        required
        {...field}
      />
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
    </div>
  )
}

export default TextFieldTitle
