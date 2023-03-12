import { NextRouter, useRouter } from 'next/router'

import { Err, Ok, Result } from 'neverthrow'
import { z } from 'zod'

export const useTypedRouter = <T extends z.Schema>(
  schema: T
): Result<NextRouter, Error> => {
  const { query, ...router } = useRouter()
  const parsed = schema.safeParse(query)
  if (!parsed.success) {
    return new Err(
      new Error('Invalid query parameter...', {
        cause: parsed.error,
      })
    )
  }

  return new Ok({
    query: schema.parse(query) as z.infer<typeof schema>,
    ...router,
  })
}
