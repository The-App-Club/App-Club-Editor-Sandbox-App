import clsx from 'clsx'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  type: 'submit' | 'button'
  color?: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
  children?: React.ReactNode
  labelName: string
}

const NiceButton = ({
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
        `w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800`,
        `focus:outline-none focus:ring-1`,
        `focus:border-blue-700 focus:ring-blue-700`,
        `focus-visible:border-blue-700 focus-visible:ring-blue-700`,
        `dark:bg-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-300`,
        `disabled:bg-blue-200`
      )}
      onClick={onClick}
      {...props}
    >
      {labelName}
    </button>
  )
}

export default NiceButton
