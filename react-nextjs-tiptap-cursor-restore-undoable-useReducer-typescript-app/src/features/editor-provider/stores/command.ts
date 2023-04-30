export type Levels = 1 | 2 | 3

export const classes: Record<Levels, string> = {
  1: 'text-3xl',
  2: 'text-2xl',
  3: 'text-xl',
}

export type Command = {
  name: string
  attributes?: Record<string, unknown>
}

export const commands: Command[] = [
  {
    name: 'heading',
    attributes: {
      level: 1,
    },
  },
  {
    name: 'heading',
    attributes: {
      level: 2,
    },
  },
  {
    name: 'heading',
    attributes: {
      level: 3,
    },
  },
]
