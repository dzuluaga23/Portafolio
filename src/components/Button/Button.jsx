import './Button.css'

/**
 * variant: 'primary' | 'secondary' | 'ghost'
 * as: 'a' | 'button'
 */
export default function Button({
  as = 'a',
  variant = 'primary',
  icon,
  children,
  disabled,
  className = '',
  ...rest
}) {
  const Tag = as
  const classes = `btn btn--${variant} ${disabled ? 'btn--disabled' : ''} ${className}`

  const content = (
    <>
      {icon && <span className="btn__icon" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </>
  )

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true">
        {content}
      </span>
    )
  }

  return (
    <Tag className={classes} {...rest}>
      {content}
    </Tag>
  )
}
