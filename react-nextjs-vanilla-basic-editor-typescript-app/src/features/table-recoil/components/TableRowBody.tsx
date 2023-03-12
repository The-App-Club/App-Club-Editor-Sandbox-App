/** @jsxImportSource @emotion/react */
import { useCallback } from 'react'

import { css } from '@emotion/react'
import clsx from 'clsx'

import useRowNuts from '@/features/table-recoil/hooks/useRowNuts'

const TableRowBody = ({ rowId }: { rowId: string }) => {
  const { activeRowId, activeNuts, nuts } = useRowNuts(rowId)
  console.log(`[TableRowBody], rowId, activeRowId`, rowId, activeRowId)
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, activeRowId: string) => {
      console.log(rowId, activeRowId)
      nuts(e.currentTarget.valueAsNumber)
    },
    [nuts, rowId]
  )
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
        <input
          type='number'
          value={activeNuts?.get(rowId)?.x || 0}
          onChange={(e) => {
            handleChange(e, rowId)
          }}
        />
      </div>
      <div className='div2'>{activeNuts?.get(rowId)?.x2}</div>
    </div>
  )
}

export default TableRowBody
