import { AxiosResponse } from 'axios'
import { Result, ResultAsync } from 'neverthrow'

import { TodoFactory } from '@/features/todo/factory'
import { TodosData } from '@/features/todo/types/todo'
import { axios } from '@/libs/axios'
import { ErrorData } from '@/types/error'

async function requestToBFF({
  requestURL,
}: {
  requestURL: string
}): Promise<TodosData> {
  const response: AxiosResponse<TodosData, ErrorData> = await axios.get(
    requestURL
  )
  const { data } = response
  return data
}

export class TodoRepository implements TodoFactory {
  async listUp(): Promise<Result<TodosData, ErrorData>> {
    return ResultAsync.fromPromise<TodosData, ErrorData>(
      requestToBFF({
        requestURL: `/api/todos`,
      }),
      (e) => {
        return e as ErrorData
      }
    ).map((v) => v)
  }
}
