/** @jsxImportSource @emotion/react */
import { useState } from 'react'

import { css } from '@emotion/react'
import clsx from 'clsx'
import { Confetti, Copy } from 'phosphor-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Loading from '@/components/ui/Loading'

type ClipCopyType = Partial<{
  value: string
  copied: boolean
}>

const ShowMe = ({ data }: { data: unknown }) => {
  const [state, setState] = useState<ClipCopyType>({
    value: '',
    copied: false,
  })

  if (!data) {
    return <Loading />
  }

  const handleCopy = () => {
    setState({ copied: true })
    setTimeout(() => {
      setState({ copied: false })
    }, 200)
  }

  return (
    <div className='shadow-bebop rounded-lg'>
      <CopyToClipboard text={JSON.stringify(data, null, 2)} onCopy={handleCopy}>
        <div className={`flex justify-end items-center hover:cursor-pointer`}>
          {state.copied ? <Confetti size={32} /> : <Copy size={32} />}
        </div>
      </CopyToClipboard>
      <pre
        className={clsx(
          `flex items-center justify-center px-8 pb-8 rounded-lg`
        )}
      >
        <code
          css={css`
            font-family: 'Noto Sans JP';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: #24223d;
          `}
        >
          {JSON.stringify(data, null, 2)}
        </code>
      </pre>
    </div>
  )
}

export default ShowMe
