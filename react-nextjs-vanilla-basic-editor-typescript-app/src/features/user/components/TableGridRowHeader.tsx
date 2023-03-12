/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import clsx from 'clsx'

const TableGridRowHeader = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 50% 30% 20%;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 16px 24px;

        .div1 {
          grid-area: 1 / 1 / 2 / 2;
        }
        .div2 {
          grid-area: 1 / 2 / 2 / 3;
        }
        .div3 {
          grid-area: 1 / 3 / 2 / 4;
        }
      `}
      className={clsx(`font-bold text-xl`)}
    >
      <div className='div1'>{`Id`}</div>
      <div className='div2'>{`Name`}</div>
      <div className='div3'>{`Age`}</div>
    </div>
  )
}

export default TableGridRowHeader
