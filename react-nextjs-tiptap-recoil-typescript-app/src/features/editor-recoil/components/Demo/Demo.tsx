/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { EditorContent } from '@tiptap/react'
import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

import { ShowMe } from '@/features/editor-recoil/components/ShowMe'
import { Spacer } from '@/features/editor-recoil/components/Spacer'
import { Toolbar } from '@/features/editor-recoil/components/Toolbar'
import useEditorContent from '@/features/editor-recoil/hooks/useEditorContent'
import { DemoForm } from '@/features/editor-recoil/stores/demoForm'

// https://www.nikkei.com/
const Demo = () => {
  const useFormMethods = useForm<DemoForm>({
    defaultValues: {
      content: undefined,
    },
  })
  const { handleSubmit, setValue } = useFormMethods
  const { editor } = useEditorContent(setValue)

  const doSubmit = (data: DemoForm) => {
    Swal.fire({
      title: 'Cool!',
      text: 'Thank you for stay',
      icon: 'info',
      confirmButtonText: `${JSON.stringify(data)}`,
    })
  }

  return (
    <FormProvider {...useFormMethods}>
      <main className='flex min-h-screen flex-col items-start p-6 sm:p-24'>
        <div className='flex w-full items-start gap-4'>
          <form onSubmit={handleSubmit(doSubmit)}>
            <div className='flex-[1]'>
              <div>
                <h2 className='font-merriweather text-xl font-bold'>Demo</h2>
                <button
                  type='submit'
                  className={clsx(
                    `w-full rounded-lg px-5 py-2.5 text-white`,
                    `bg-blue-500 hover:bg-blue-700 disabled:bg-blue-200`,
                    `active:border-blue-400 active:ring-blue-400`,
                    `outline-none focus:outline-none focus:ring-2`,
                    `focus:border-blue-600 focus:ring-blue-600`,
                    `focus-within:border-blue-600 focus-within:ring-blue-600`,
                    `focus-visible:border-blue-600 focus-visible:ring-blue-600`
                  )}
                >
                  Submit
                </button>
              </div>
              {editor && <Toolbar editor={editor} />}
              <Spacer />
              <EditorContent
                editor={editor}
                css={css`
                  font-family: 'Noto Sans JP', sans-serif;
                  width: 100%;

                  .ProseMirror {
                    > * + * {
                      margin-top: 0.75em;
                    }

                    p.is-editor-empty:first-child::before {
                      color: #adb5bd;
                      content: attr(data-placeholder);
                      float: left;
                      height: 0;
                      pointer-events: none;
                    }

                    ul[data-type='taskList'] {
                      list-style: none;
                      padding: 0;

                      p {
                        margin: 0;
                      }

                      li.nice-task-item {
                        display: flex;

                        > label {
                          margin: 0;
                          flex: 0 0 auto;
                          margin-right: 0.5rem;
                          user-select: none;
                        }

                        > div {
                          margin: 0;
                          flex: 1 1 auto; // magic
                        }
                      }
                    }

                    code.nice-code {
                      ::before,
                      ::after {
                        content: '';
                      }
                      background-color: #e3e3e3;
                      color: #000000;
                      font-size: 0.9rem;
                      padding: 0.25rem;
                      box-decoration-break: clone;
                    }

                    width: 100%;
                    min-height: 10rem;
                    max-height: calc(100vh - 6rem * 3);
                    overflow: hidden;
                    overflow-y: auto;
                    padding: 1rem;
                    border: 2px solid #e4e4e4;
                    :hover {
                      border: 2px solid #c4c4c4;
                    }
                    :active,
                    :focus,
                    :focus-visible,
                    :focus-within {
                      outline: none; // https://github.com/ueberdosis/tiptap/issues/526#issuecomment-556990611
                      border: 2px solid #4d65ec !important;
                    }
                  }
                `}
              />
            </div>
          </form>
          <div className='flex-[1]'>
            <ShowMe />
          </div>
        </div>
      </main>
    </FormProvider>
  )
}

export default Demo
