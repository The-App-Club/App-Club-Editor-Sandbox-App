import { z } from 'zod'

import { TodoSchema } from '@/features/todo/domains/todo'

const TodosSchema = TodoSchema.array()
const TodoDataSchema = TodoSchema.nullish()
const TodoPartialSchema = TodoSchema.deepPartial()
const TodosPartialSchema = TodoSchema.deepPartial().array()
const TodosDataSchema = TodoSchema.nullish().array().nullish()
const TodoPartialDataSchema = TodoSchema.deepPartial().nullish()
const TodosPartialDataSchema = TodoSchema.deepPartial().array().nullish()

export type Todo = z.infer<typeof TodoSchema>
export type Todos = z.infer<typeof TodosSchema>
export type TodoPartial = z.infer<typeof TodoPartialSchema>
export type TodosPartial = z.infer<typeof TodosPartialSchema>
export type TodoData = z.infer<typeof TodoDataSchema>
export type TodosData = z.infer<typeof TodosDataSchema>
export type TodoPartialData = z.infer<typeof TodoPartialDataSchema>
export type TodosPartialData = z.infer<typeof TodosPartialDataSchema>
export const TODO_KEY = 'todo'

const safeParseTodosData = (data: unknown) => {
  // https://stackoverflow.com/a/73994446/15972569
  const dataArr = z.array(z.unknown()).parse(data)
  return dataArr
    .map((datum) => {
      const parsed = TodoPartialDataSchema.safeParse(datum)
      return parsed.success ? parsed.data : null
    })
    .filter((x: TodoPartialData): x is Todo => x !== null)
}

export { safeParseTodosData }
