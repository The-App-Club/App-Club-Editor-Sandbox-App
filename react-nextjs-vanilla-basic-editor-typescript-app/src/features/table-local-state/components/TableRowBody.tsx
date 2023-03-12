/** @jsxImportSource @emotion/react */
import { useState } from 'react'

import { css } from '@emotion/react'
import clsx from 'clsx'

const TableRowBody = ({ rowId }: { rowId: string }) => {
  const [value, setValue] = useState<number>(0)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevState) => {
      return Number(e.target.value)
    })
  }
  return (
    <div
      key={rowId}
      tabIndex={0}
      css={css`
        & {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          padding: 16px 24px;

          margin-bottom: 8px;

          &:last-child {
            margin-bottom: 0;
          }

          box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
            rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        }

        .div1 {
          grid-area: 1 / 1 / 2 / 2;
        }
        .div2 {
          grid-area: 1 / 2 / 2 / 3;
        }
      `}
      className={clsx(
        `rounded-lg hover:bg-slate-50 hover:cursor-pointer`,
        `focus:outline-none focus:ring-2`,
        `focus:border-blue-700 focus:ring-blue-700`,
        `focus-visible:border-blue-700 focus-visible:ring-blue-700`
      )}
    >
      <div className='div1'>
        <input type='number' value={value} onChange={handleChange} />
      </div>
      <div className='div2'>{value * 2}</div>
    </div>
  )
}

export default TableRowBody
