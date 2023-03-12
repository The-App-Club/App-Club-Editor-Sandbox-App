import { useMemo } from 'react'

import { Chance } from 'chance'

const neat = (original: string) => {
  original = original.replace(
    'https://www.gravatar.com/avatar',
    'https://robohash.org'
  )
  return ({ size }: { size: number }) => {
    return original + `?set=set4&bgset=&size=${size}x${size}`
  }
}

const useAvator = ({ seed = 1 }: { seed: number }) => {
  return useMemo(() => {
    return {
      avator: neat(
        Chance(seed).avatar({
          protocol: 'https',
        })
      )({ size: 200 }),
    }
  }, [seed])
}

export default useAvator
