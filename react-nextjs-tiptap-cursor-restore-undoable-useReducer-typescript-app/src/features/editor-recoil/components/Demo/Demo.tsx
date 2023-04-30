/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { EditorContent } from '@tiptap/react'

import { ShowMe } from '@/features/editor-recoil/components/ShowMe'
import { Toolbar } from '@/features/editor-recoil/components/Toolbar'
import useEditorContent from '@/features/editor-recoil/hooks/useEditorContent'

// https://www.nikkei.com/
const Demo = () => {
  const { editor } = useEditorContent()

  return (
    <main className='flex min-h-screen flex-col items-start p-6 sm:p-24'>
      <h2 className='font-merriweather text-xl font-bold'>Demo</h2>
      <div className='flex w-full items-start gap-4'>
        <div className='flex-[1]'>
          {editor && <Toolbar editor={editor} />}
          <div className='h-2 w-full' />
          <EditorContent
            editor={editor}
            css={css`
              font-family: 'Noto Sans JP', sans-serif;
              width: 100%;
              .ProseMirror {
                width: 100%;
                min-height: 10rem;
                padding: 1rem;
                border: 2px solid #e4e4e4;
                :hover {
                  border: 2px solid #c4c4c4;
                }
                :active,
                :focus,
                :focus-visible,
                :focus-within {
                  /* https://github.com/ueberdosis/tiptap/issues/526#issuecomment-556990611 */
                  outline: none;
                  border: 2px solid #4d65ec !important;
                }
              }
            `}
          />
        </div>
        <div className='flex-[1]'>
          <ShowMe />
        </div>
      </div>
    </main>
  )
}

export default Demo
