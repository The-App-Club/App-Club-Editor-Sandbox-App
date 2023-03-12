import useCounter from '@/features/counter-ts-pattern/hooks/useCounter'

const Counter2 = () => {
  const { count } = useCounter()
  return (
    <div className='flex justify-center items-center flex-col gap-6 shadow-bebop p-4 rounded-xl'>
      <p className='text-2xl font-bold font-inter'>Count: {count}</p>
    </div>
  )
}

export default Counter2
