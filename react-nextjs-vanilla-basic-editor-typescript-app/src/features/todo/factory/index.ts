import { Result } from 'neverthrow'

import { TodoRepository } from '@/features/todo/repository'
import { TodosData } from '@/features/todo/types/todo'
import { ErrorData } from '@/types/error'

export interface TodoFactory {
  listUp(): Promise<Result<TodosData, ErrorData>>
}

export const factory = {
  todoFactory: (): TodoFactory => {
    return new TodoRepository()
  },
}
