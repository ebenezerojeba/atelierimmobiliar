import { motion } from 'motion/react'
import type { ElementType } from 'react'
import { EASE_LUXE, cn } from '../../lib/cn'

type RevealTextProps = {
  text: string
  id?: string
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
  onMount?: boolean
}

/**
 * Word-by-word masked text reveal. Screen readers get the plain sentence;
 * the animated words are aria-hidden. Keyed by text so it replays on
 * language change.
 */
export function RevealText({ text, id, as: Tag = 'h2', className, delay = 0, stagger = 0.055, onMount }: RevealTextProps) {
  const words = text.split(' ')
  const trigger = onMount
    ? { animate: 'show' }
    : { whileInView: 'show', viewport: { once: true, margin: '0px 0px -8% 0px' } }

  return (
    <Tag id={id} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        key={text}
        aria-hidden="true"
        className="block"
        initial="hidden"
        {...trigger}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span className={cn('inline-block overflow-hidden align-bottom', 'pt-[0.06em] pb-[0.14em] -mt-[0.06em] -mb-[0.14em]')}>
              <motion.span
                className="inline-block will-change-transform"
                variants={{
                  hidden: { y: '115%' },
                  show: { y: '0%', transition: { duration: 1.15, ease: EASE_LUXE } },
                }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? ' ' : null}
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
