import { z } from 'zod'

export const SearchQueryParamsSchema = z
  .object({
    term: z.coerce.string().optional(),
    page: z.coerce.number().optional(),
    isHuman: z.custom<Boolean | String>().optional(),
    isRecommended: z.custom<Boolean | String>().optional(),
    // isHuman: z.coerce.boolean().optional(),
    // isRecommended: z.coerce.boolean().optional(),
  })
  .transform((value, ctx) => {
    return {
      ...value,
      isHuman: value.isHuman === 'true' ? true : false,
      isRecommended: value.isRecommended === 'true' ? true : false,
    }
  })
