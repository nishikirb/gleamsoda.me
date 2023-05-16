import clsx from 'clsx'

export function Prose({ children, className }: React.ComponentProps<'div'>) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  )
}
