import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE_LUXE } from '../../lib/cn'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  /** Animate on mount instead of when scrolled into view */
  onMount?: boolean
}

/** Fade + rise entrance. Transforms are skipped for reduced-motion users (MotionConfig). */
export function Reveal({ children, className, delay = 0, y = 28, duration = 1.1, onMount }: RevealProps) {
  const target = { opacity: 1, y: 0 }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(onMount
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: '0px 0px -10% 0px' } })}
      transition={{ duration, ease: EASE_LUXE, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Container that staggers its <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className, y = 24 }: { children: ReactNode; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE_LUXE } },
      }}
    >
      {children}
    </motion.div>
  )
}
