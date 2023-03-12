import { sliceHead, tidy } from '@tidyjs/tidy'
import { ResultAsync } from 'neverthrow'
import nextConnect from 'next-connect'

import { safeParseTodosData, TodosData } from '@/features/todo/types/todo'
import { requestToOutside } from '@/libs/fetcher'
import { dispatchServerSideError, ErrorData } from '@/types/error'

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = nextConnect<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    // https://zenn.dev/sutamac/articles/27246dfe1b5a8e#api-client-1
    // https://github.com/axios/axios/issues/5346#issuecomment-1340241163
    ResultAsync.fromPromise(
      requestToOutside<TodosData, ErrorData>({
        requestURL: `https://jsonplaceholder.typicode.com/posts`,
      }),
      (error) => error as ErrorData
    ).match(
      (data) => {
        const neatData = safeParseTodosData(data)
        res.status(200).json(tidy(neatData, sliceHead(3)))
        return data
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
