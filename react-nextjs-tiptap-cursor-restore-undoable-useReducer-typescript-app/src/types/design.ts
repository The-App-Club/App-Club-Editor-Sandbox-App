import { match } from 'ts-pattern'

export type Color =
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'gray'
  | 'black'
  | null
  | undefined

export type System =
  | 'error'
  | 'info'
  | 'success'
  | 'warn'
  | 'skin'
  | 'default'
  | null
  | undefined

export type Tone =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950'

export const convertToSystemColor = (color: System) => {
  return match(color)
    .with('error', (): Color => 'red')
    .with('info', (): Color => 'blue')
    .with('success', (): Color => 'green')
    .with('warn', (): Color => 'yellow')
    .with('skin', (): Color => 'gray')
    .with('default', (): Color => 'black')
    .with(null, (): Color => 'black')
    .with(undefined, (): Color => 'black')
    .exhaustive()
}
