/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'

import Spacer from '@/components/ui/Spacer'
import NiceButton from '@/features/editor/components/NiceButton'
import useEditorControler from '@/features/editor/hooks/useEditorControler'
import EditorLayout from '@/features/editor/layouts/default'

const Editor = () => {
  const {
    disabled,
    buttonLabelName,
    editorText,
    handleKeyDown,
    handleInput,
    handlePublish,
  } = useEditorControler()

  return (
    <EditorLayout>
      <div className='bg-white top-0 sticky'>
        <NiceButton
          type='button'
          labelName={buttonLabelName}
          onClick={handlePublish}
          disabled={disabled}
        />
      </div>
      <Spacer />
      <div className='w-full flex items-start gap-4 px-4'>
        <form className='w-full'>
          <div className='w-full'>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              記事の内容をマークダウンで書けます。
              <a
                href='https://markdown-it.github.io/'
                referrerPolicy='no-referrer'
                rel='noreferrer'
                target={'_blank'}
                className={`hover:underline`}
              >
                こちらがマークダウンの参考リンクになります
              </a>
            </label>
            <Spacer />
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
          </div>
        </form>

        <ReactMarkdown
          // https://tailwindcss.com/docs/typography-plugin
          className={clsx(
            'p-2.5 bg-gray-50 rounded-lg border-gray-100 border-2',
            `prose lg:prose-slate prose-base`
          )}
          css={css`
            margin-top: calc(20px + 1rem);
            width: 100%;
            min-height: 40rem /* 640px */;

            // previewでのカスタムスタイリング
          `}
        >
          {editorText}
        </ReactMarkdown>
      </div>
    </EditorLayout>
  )
}

export default Editor
