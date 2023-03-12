/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const EditorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        width: 100%;
        max-width: 60rem;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  )
}

export default EditorLayout
