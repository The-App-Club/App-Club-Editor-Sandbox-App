import NextLink from 'next/link'

import Spacer from '@/components/ui/Spacer'
import Ping from '@/features/ping/components/Ping'

const Home = () => {
  return (
    <div className='py-12'>
      <h1 className='text-3xl font-bold underline flex justify-center items-center'>
        Hello world!
      </h1>
      <Spacer />
      <div className='flex justify-center items-center'>
        <NextLink
          href={`/search?term=${'つくねハンバーグの作り方'}&page=${1}&isHuman=${true}&isRecommended=${true}`}
        >
          Search
        </NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/users`}>Users</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/todos`}>Todos</NextLink>
      </div>
      <Spacer />
      <Ping />
    </div>
  )
}

export default Home
