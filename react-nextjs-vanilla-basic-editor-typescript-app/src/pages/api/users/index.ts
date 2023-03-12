import { Result } from 'neverthrow'
import nextConnect from 'next-connect'

import { safeParseUsersData, UsersData } from '@/features/user/types/user'
import {
  dispatchCustomServerSideError,
  dispatchInvalidArgumentError,
  dispatchServerSideError,
  ErrorData,
} from '@/types/error'
import { isRandomError } from '@/utils/bebopUtil'

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = nextConnect<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    const mockError = <T>() =>
      Result.fromThrowable(
        (d: T) => {
          if (isRandomError()) {
            dispatchCustomServerSideError()
          }
          if (isRandomError()) {
            dispatchInvalidArgumentError()
          }
          return d
        },
        (e) => {
          return e as ErrorData
        }
      )
    const doThrowable = mockError<UsersData>()
    doThrowable([
      { id: 1, name: 'Spike', age: 29 },
      { id: 2, name: 'Fei', age: 30 },
      { id: 3, name: 'Edo', age: 13 },
      { id: 4, name: 'Jet', age: 43 },
    ]).match(
      (data) => {
        const neatData = safeParseUsersData(data)
        setTimeout(() => {
          res.status(200).json(neatData)
        }, 500)
        return neatData
      },
      // @ts-ignore
      (error) => {
        dispatchServerSideError(req, res, error)
        return error
      }
    )
  }
)

export default handler
