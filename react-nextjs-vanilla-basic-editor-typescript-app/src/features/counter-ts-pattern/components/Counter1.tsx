import NiceButton from '@/features/counter-ts-pattern/components/NiceButton'
import useCounter from '@/features/counter-ts-pattern/hooks/useCounter'

const Counter1 = () => {
  const { count, dispatch } = useCounter()
  return (
    <div className='flex justify-center items-center flex-col gap-6 shadow-bebop p-4 rounded-xl'>
      <p className='text-2xl font-bold font-inter'>Count: {count}</p>
      <NiceButton
        labelName='Reset'
        type='button'
        onClick={() => dispatch('reset')}
      />
      <NiceButton
        labelName='+'
        type='button'
        onClick={() => dispatch('increment')}
      />
      <NiceButton
        labelName='-'
        type='button'
        onClick={() => dispatch('decrement')}
      />
    </div>
  )
}

export default Counter1
