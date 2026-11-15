import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Picture } from '../ui/Picture'
import type { ImageKey } from '../../lib/images'

type Props = {
  image: ImageKey
  alt: string
  quote: string
  focus?: string
}

/**
 * Full-screen photographic transition between major sections.
 * The image starts as a framed window and expands to full-bleed as the
 * visitor scrolls, while a single line of text surfaces over it.
 */
export function Interlude({ image, alt, quote, focus }: Props) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const insetY = useTransform(scrollYProgress, [0, 0.55], [16, 0])
  const insetX = useTransform(scrollYProgress, [0, 0.55], [22, 0])
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}%)`
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.25, 1])
  const quoteOpacity = useTransform(scrollYProgress, [0.4, 0.62], [0, 1])
  const quoteY = useTransform(scrollYProgress, [0.4, 0.7], [40, 0])
  const shade = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])

  if (reduce) {
    return (
      <section aria-label={quote} className="relative h-[80svh] overflow-hidden bg-ink">
        <Picture image={image} alt={alt} focus={focus} />
        <div className="absolute inset-0 grid place-items-center bg-ink/45 px-6">
          <p className="heading max-w-4xl text-center text-[clamp(1.9rem,4.2vw,3.75rem)] text-ivory italic">{quote}</p>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} aria-label={quote} className="relative h-[230svh] bg-ivory">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div style={{ clipPath }} className="absolute inset-0 will-change-[clip-path]">
          <motion.div style={{ scale }} className="h-full w-full will-change-transform">
            <Picture image={image} alt={alt} focus={focus} sizes="100vw" />
          </motion.div>
          <motion.div style={{ opacity: shade }} className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/35 to-ink/25" />
        </motion.div>
        <motion.div
          style={{ opacity: quoteOpacity, y: quoteY }}
          className="pointer-events-none absolute inset-0 grid place-items-center px-6"
        >
          <p className="heading max-w-4xl text-center text-[clamp(1.9rem,4.2vw,3.75rem)] text-ivory italic">{quote}</p>
        </motion.div>
      </div>
    </section>
  )
}
