import { atom } from 'recoil'
import { z } from 'zod'

export const NutsSchema = z.object({
  x: z.number(),
  x2: z.number(),
})

export const RowNutsSchema = z.map(z.string(), NutsSchema).nullish()

export type NutsSchema = z.infer<typeof NutsSchema>
export type RowNuts = z.infer<typeof RowNutsSchema>

const rowNutsState = atom<RowNuts>({
  key: 'rowNuts',
  default: null,
})

export { rowNutsState }
