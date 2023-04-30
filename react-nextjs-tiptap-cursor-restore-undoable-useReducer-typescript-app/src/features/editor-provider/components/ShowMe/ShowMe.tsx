/** @jsxImportSource @emotion/react */
import { useState } from 'react'

import { css } from '@emotion/react'
import clsx from 'clsx'
import { Confetti, Copy } from 'phosphor-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import useTipTapEditor from '@/features/editor-provider/hooks/useEditorReducer'

type ClipCopyType = Partial<{
  value: string
  copied: boolean
}>

const ShowMe = () => {
  const {
    operationState: {
      present: { editor },
    },
  } = useTipTapEditor()

  const [state, setState] = useState<ClipCopyType>({
    value: '',
    copied: false,
  })

  const handleCopy = () => {
    setState({ copied: true })
    setTimeout(() => {
      setState({ copied: false })
    }, 200)
  }

  const value = JSON.stringify(editor?.getJSON(), null, 2)

  return (
    <div className='w-full rounded-lg shadow-bebop'>
      <CopyToClipboard text={value} onCopy={handleCopy}>
        <div className={`flex items-center justify-end hover:cursor-pointer`}>
          {state.copied ? <Confetti size={32} /> : <Copy size={32} />}
        </div>
      </CopyToClipboard>
      <pre className={clsx(`flex rounded-lg px-8 pb-8`)}>
        <code
          css={css`
            white-space: pre-wrap;
            font-family: 'Noto Sans JP';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: #24223d;
          `}
        >
          {value}
        </code>
      </pre>
    </div>
  )
}

export default ShowMe
