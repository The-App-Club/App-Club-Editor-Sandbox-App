/** @jsxImportSource @emotion/react */
import { useEffect } from 'react'

import { css } from '@emotion/react'
import clsx from 'clsx'

import useEditorControler from '@/features/editor/hooks/useEditorControler'

const MarkdownEditor = () => {
  const { handleKeyDown, handleInput, mode } = useEditorControler()

  useEffect(() => {
    if (mode === 'edit') {
      // @ts-ignore
      document.querySelector('#message')?.focus()
    }
  }, [mode])
  return (
    <form className='w-full'>
      <div
        contentEditable
        id='message'
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className={clsx(
          `font-noto`,
          `w-full min-h-[40rem]`,
          `block p-2.5 text-gray-900 bg-gray-50 rounded-lg border-gray-100 border-2`,
          `focus:border-blue-500`,
          `dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
        )}
        css={css`
          &,
          & > * {
            /* https://tailwindcss.com/docs/font-size */
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */
          }
        `}
        placeholder='Write your thoughts here...'
      />
    </form>
  )
}

export default MarkdownEditor
