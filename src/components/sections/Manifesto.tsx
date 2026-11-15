import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionLabel } from '../ui/SectionLabel'

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{' '}
    </motion.span>
  )
}

/** Statement section — each word lights up as it scrolls through the viewport. */
export function Manifesto() {
  const { t } = useTranslation()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const text = t('manifesto.text')
  const words = text.split(' ')

  return (
    <section aria-label={t('manifesto.label')} className="bg-ivory pt-28 pb-24 sm:pt-36 sm:pb-28 lg:pt-48 lg:pb-36">
      <div className="container-site">
        <div className="mx-auto max-w-5xl">
          <SectionLabel className="mb-10 justify-center">{t('manifesto.label')}</SectionLabel>
          <p ref={ref} className="heading text-center text-[clamp(1.9rem,4.4vw,3.9rem)] text-ink" key={text}>
            {reduce ? (
              text
            ) : (
              <>
                <span className="sr-only">{text}</span>
                <span aria-hidden="true">
                  {words.map((word, i) => {
                    const start = i / words.length
                    return (
                      <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
                        {word}
                      </Word>
                    )
                  })}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
