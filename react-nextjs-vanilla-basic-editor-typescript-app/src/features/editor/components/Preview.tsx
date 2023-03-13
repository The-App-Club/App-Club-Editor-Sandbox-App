/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'
import { CodeComponent } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import useEditorControler from '@/features/editor/hooks/useEditorControler'
// https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
const customCode: CodeComponent = ({ inline, className, children }) => {
  const style = a11yDark
  const match = /language-(\w+)(:?.+)?/.exec(className || '')
  const lang = match && match[1] ? match[1] : ''
  const name = match && match[2] ? match[2].slice(1) : ''
  return !inline && match ? (
    <>
      {name && <span className='bg-stone-200 py-1 px-2 text-xs'>{name}</span>}
      <SyntaxHighlighter
        style={style}
        language={lang}
        PreTag='div'
        className='md-codeblock'
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </>
  ) : (
    <code className='rounded-md bg-stone-200 text-red-600'>{children}</code>
  )
}

const Preview = () => {
  const { editorText } = useEditorControler()
  return (
    <ReactMarkdown
      // https://tailwindcss.com/docs/typography-plugin
      className={clsx(
        'p-2.5 bg-gray-50 rounded-lg border-gray-100 border-2',
        `prose lg:prose-slate prose-base`,
        `w-full max-w-full`
      )}
      components={{
        code: customCode,
      }}
      css={css`
        width: 100%;
        min-height: 40rem /* 640px */;

        // previewでのカスタムスタイリング
      `}
    >
      {editorText}
    </ReactMarkdown>
  )
}

export default Preview
