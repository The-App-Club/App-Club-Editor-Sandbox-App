/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        width: 100%;
        max-width: 30rem;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  )
}

export default SearchLayout
