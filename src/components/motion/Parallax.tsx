import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

/**
 * Moves its content vertically as the element crosses the viewport.
 * The content is over-sized by `distance` px top and bottom so no edges show.
 */
export function Parallax({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode
  className?: string
  distance?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-distance, distance])

  return (
    <div ref={ref} className={cn('relative h-full w-full overflow-hidden', className)}>
      <motion.div
        className="absolute inset-x-0 will-change-transform"
        style={{ y, top: -distance, bottom: -distance }}
      >
        {children}
      </motion.div>
    </div>
  )
}
