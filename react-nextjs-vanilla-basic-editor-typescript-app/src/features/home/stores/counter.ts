import { atom } from 'recoil'

type Counter = {
  count: number
}

const counterState = atom<Counter>({
  key: 'counter',
  default: {
    count: 0,
  },
})

export { counterState }
