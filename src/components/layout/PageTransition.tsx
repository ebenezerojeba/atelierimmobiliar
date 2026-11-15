import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE_CURTAIN } from '../../lib/cn'
import { site } from '../../config/site'

/**
 * Cinematic curtain between routes: an ink panel rises to cover the old page,
 * then lifts away to reveal the new one. Only plays on navigation, never on first load
 * (AnimatePresence initial={false} in App).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Exit: cover */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] origin-bottom bg-ink"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.75, ease: EASE_CURTAIN }}
      />
      {/* Enter: reveal */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] grid origin-top place-items-center bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.9, ease: EASE_CURTAIN, delay: 0.15 }}
      >
        <motion.span
          className="font-serif text-2xl font-light tracking-[0.04em] text-ivory/80"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {site.brandName}
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  )
}
