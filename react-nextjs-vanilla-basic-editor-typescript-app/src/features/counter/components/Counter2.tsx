import { counterState } from '@/features/counter/stores/counter'
import { useRecoilImmerState } from '@/libs/useRecoilImmerState'

const Counter2 = () => {
  const { activeState } = useRecoilImmerState(counterState)
  return (
    <div className='flex justify-center items-center flex-col gap-6 shadow-bebop p-4 rounded-xl'>
      <p className='text-2xl font-bold font-inter'>
        Count: {activeState.count}
      </p>
    </div>
  )
}

export default Counter2
