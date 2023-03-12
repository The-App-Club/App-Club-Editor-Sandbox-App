/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

// import styles from '@/features/ping/styles/index.module.scss'

const PingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        width: 100%;
        max-width: 30rem;
        margin: 0 auto;
      `}
      // className={styles.ping}
    >
      {children}
    </div>
  )
}

export default PingLayout
