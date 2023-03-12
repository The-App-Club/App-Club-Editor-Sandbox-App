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
        <NextLink href={`/markdown`}>Markdown</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/editor`}>Editor</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/custom-event`}>Custom Event</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/todos-ts-pattern`}>Todos Ts Pattern</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/counter-ts-pattern`}>Counter Ts Pattern</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/table-hook-form`}>Table Hook Form</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/table-local-state`}>Table Local State</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/table-recoil`}>Table Recoil</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/upload`}>Upload</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink href={`/counter`}>Counter</NextLink>
      </div>
      <div className='flex justify-center items-center'>
        <NextLink
          href={`/search?term=${'つくねハンバーグの作り方'}&page=${0}&isHuman=${true}&isRecommended=${false}`}
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
