/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        width: 100%;
        max-width: 30rem;
        margin: 6rem auto 0;
      `}
    >
      {children}
    </div>
  )
}

export default UserLayout
