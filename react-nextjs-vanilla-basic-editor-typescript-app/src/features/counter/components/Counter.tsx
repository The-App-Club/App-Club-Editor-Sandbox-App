import Spacer from '@/components/ui/Spacer'
import Counter1 from '@/features/counter/components/Counter1'
import Counter2 from '@/features/counter/components/Counter2'
import CounterLayout from '@/features/counter/layouts/default'

const Counter = () => {
  return (
    <CounterLayout>
      <h1 className='text-3xl font-bold underline flex justify-center items-center'>
        Hello world Counter!
      </h1>
      <Spacer />
      <Counter1 />
      <Spacer />
      <Counter2 />
    </CounterLayout>
  )
}

export default Counter
