import clsx from 'clsx'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  type: 'submit' | 'button'
  color?: 'primary' | 'secondary'
  disabled?: boolean
  children?: React.ReactNode
  labelName: string
}

const UnsubscribeButton = ({
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
        `w-full rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800`,
        `focus:outline-none focus:ring-1`,
        `focus:border-red-700 focus:ring-red-700`,
        `focus-visible:border-red-700 focus-visible:ring-red-700`,
        `dark:bg-red-300 dark:hover:bg-red-300 dark:focus:ring-red-300`,
        `disabled:bg-red-200`
      )}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      {labelName}
    </button>
  )
}

export default UnsubscribeButton
