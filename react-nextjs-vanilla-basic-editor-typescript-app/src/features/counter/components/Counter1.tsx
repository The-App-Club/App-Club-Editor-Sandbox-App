import NiceButton from '@/features/counter/components/NiceButton'
import { counterState } from '@/features/counter/stores/counter'
import { useRecoilImmerState } from '@/libs/useRecoilImmerState'

const Counter1 = () => {
  const { activeState, setState } = useRecoilImmerState(counterState)
  return (
    <div className='flex justify-center items-center flex-col gap-6 shadow-bebop p-4 rounded-xl'>
      <p className='text-2xl font-bold font-inter'>
        Count: {activeState.count}
      </p>
      <NiceButton
        labelName='Reset'
        type='button'
        onClick={() => {
          setState((prevState) => {
            return {
              count: 0,
            }
          })
        }}
      />
      <NiceButton
        labelName='+'
        type='button'
        onClick={() => {
          setState((prevState) => {
            return {
              count: prevState.count + 1,
            }
          })
        }}
      />
      <NiceButton
        labelName='-'
        type='button'
        onClick={() => {
          setState((prevState) => {
            return {
              count: prevState.count - 1,
            }
          })
        }}
      />
    </div>
  )
}

export default Counter1
