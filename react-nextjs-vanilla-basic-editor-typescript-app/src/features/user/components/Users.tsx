/** @jsxImportSource @emotion/react */
import React from 'react'

import { css } from '@emotion/react'
import clsx from 'clsx'
import { ArrowClockwise } from 'phosphor-react'

import Loading from '@/components/ui/Loading'
import Spacer from '@/components/ui/Spacer'
import NiceButton from '@/features/user/components/NiceButton'
import ShowMe from '@/features/user/components/ShowMe'
import TableGridRow from '@/features/user/components/TableGridRow'
import TableGridRowHeader from '@/features/user/components/TableGridRowHeader'
import useListUpUserHook from '@/features/user/hooks/listUp.hook'
import useFormatter from '@/features/user/hooks/useFormatter'
import UserLayout from '@/features/user/layouts/default'
import { USER_KEY } from '@/features/user/types/user'
import { queryClient } from '@/libs/queryClient'

const Users = () => {
  const { neatLabelName } = useFormatter()

  const { data, error, refetch } = useListUpUserHook()

  if (error) {
    return (
      <UserLayout>
        <NiceButton
          type='button'
          labelName={neatLabelName(data, error)}
          onClick={() => {
            queryClient.removeQueries([USER_KEY])
            refetch()
          }}
        />
        <Spacer />
        <ShowMe data={error.response?.data} />
      </UserLayout>
    )
  }

  if (!data) {
    return (
      <UserLayout>
        <div
          css={css`
            box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
              rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
            padding: 10px;
          `}
          className={clsx(`rounded-lg`)}
        >
          <TableGridRowHeader />
          <Loading />
        </div>
      </UserLayout>
    )
  }

  const handleRefresh = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    queryClient.removeQueries([USER_KEY])
    refetch()
  }

  return (
    <UserLayout>
      <div
        css={css`
          box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
            rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
          padding: 10px;
        `}
        className={clsx(`rounded-lg`)}
      >
        <div
          tabIndex={0}
          className={clsx(
            `flex items-center justify-end hover:cursor-pointer`,
            `focus:outline-none focus:ring-2`,
            `focus:border-blue-700 focus:ring-blue-700`,
            `focus-visible:border-blue-700 focus-visible:ring-blue-700`
          )}
          onClick={handleRefresh}
        >
          <ArrowClockwise size={32} />
        </div>
        <TableGridRowHeader />
        {data.map((item, index) => {
          return <TableGridRow key={index} data={item} />
        })}
      </div>
    </UserLayout>
  )
}

export default Users
