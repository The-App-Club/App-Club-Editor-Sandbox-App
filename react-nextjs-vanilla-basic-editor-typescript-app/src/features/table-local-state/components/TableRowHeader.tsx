/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import clsx from 'clsx'

const TableRowHeader = () => {
  return (
    <div
      css={css`
        & {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }

        .div1 {
          grid-area: 1 / 1 / 2 / 2;
        }
        .div2 {
          grid-area: 1 / 2 / 2 / 3;
        }
      `}
      className={clsx(`font-bold text-xl`)}
    >
      <div className='div1'>X</div>
      <div className='div2'>X*2</div>
    </div>
  )
}

export default TableRowHeader
