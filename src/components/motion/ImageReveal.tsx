import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE_CURTAIN, EASE_LUXE, cn } from '../../lib/cn'

type Direction = 'up' | 'down' | 'left' | 'right'

const HIDDEN: Record<Direction, string> = {
  up: 'inset(100% 0% 0% 0%)',
  down: 'inset(0% 0% 100% 0%)',
  left: 'inset(0% 0% 0% 100%)',
  right: 'inset(0% 100% 0% 0%)',
}

/** Curtain-style clip-path reveal with a gentle scale-down of the image inside. */
export function ImageReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
}) {
  const reduce = useReducedMotion()
  const viewport = { once: true, margin: '0px 0px -12% 0px' }

  if (reduce) return <div className={cn('relative overflow-hidden', className)}>{children}</div>

  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      initial={{ clipPath: HIDDEN[direction] }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={viewport}
      transition={{ duration: 1.4, ease: EASE_CURTAIN, delay }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.22 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 2, ease: EASE_LUXE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
