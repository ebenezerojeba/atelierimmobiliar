import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import type { MouseEventHandler, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'dark' | 'light' | 'outline-light' | 'outline-dark'

const VARIANTS: Record<Variant, { base: string; sweep: string }> = {
  dark: { base: 'bg-ink text-ivory hover:text-ink', sweep: 'bg-bronze-light' },
  light: { base: 'bg-ivory text-ink hover:text-ink', sweep: 'bg-bronze-light' },
  'outline-light': { base: 'border border-ivory/45 text-ivory hover:text-ink', sweep: 'bg-ivory' },
  'outline-dark': { base: 'border border-ink/25 text-ink hover:text-ivory', sweep: 'bg-ink' },
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: boolean
  to?: string
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLElement>
  'aria-describedby'?: string
}

/**
 * Primary call-to-action. The background sweeps up on hover and the arrow
 * slides diagonally — a restrained, tactile interaction.
 */
export function Button({ children, variant = 'dark', className, icon = true, to, href, onClick, type = 'button', disabled, ...rest }: ButtonProps) {
  const v = VARIANTS[variant]
  const classes = cn(
    'group relative isolate inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden px-7 py-3.5 text-center',
    'text-[0.72rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 ease-luxe',
    'disabled:cursor-not-allowed disabled:opacity-60',
    v.base,
    className,
  )
  const inner = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 -z-10 translate-y-[101%] transition-transform duration-700 ease-luxe group-hover:translate-y-0 group-focus-visible:translate-y-0',
          v.sweep,
        )}
      />
      <span>{children}</span>
      {icon && (
        <span aria-hidden="true" className="relative h-3.5 w-3.5 overflow-hidden">
          <ArrowUpRight className="absolute inset-0 h-3.5 w-3.5 transition-transform duration-500 ease-luxe group-hover:translate-x-full group-hover:-translate-y-full" strokeWidth={1.75} />
          <ArrowUpRight className="absolute inset-0 h-3.5 w-3.5 -translate-x-full translate-y-full transition-transform duration-500 ease-luxe group-hover:translate-x-0 group-hover:translate-y-0" strokeWidth={1.75} />
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {inner}
    </button>
  )
}
