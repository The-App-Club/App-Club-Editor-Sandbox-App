import clsx from 'clsx'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  type: 'submit' | 'button'
  color?: 'primary' | 'secondary'
  disabled?: boolean
  children?: React.ReactNode
  labelName: string
}

const SendButton = ({
  type,
  color,
  disabled,
  onClick,
  style,
  children,
  labelName = 'Do',
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        `font-inter`,
        `w-full rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800`,
        `focus:outline-none focus:ring-1`,
        `focus:border-green-700 focus:ring-green-700`,
        `focus-visible:border-green-700 focus-visible:ring-green-700`,
        `dark:bg-green-300 dark:hover:bg-green-300 dark:focus:ring-green-300`,
        `disabled:bg-green-200`
      )}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      {labelName}
    </button>
  )
}

export default SendButton
