import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Picture } from '../ui/Picture'
import { Button } from '../ui/Button'
import { RevealText } from '../motion/RevealText'
import { useSectionNav } from '../../hooks/useSectionNav'
import type { ImageKey } from '../../lib/images'
import { EASE_CURTAIN, EASE_LUXE, cn } from '../../lib/cn'

const SLIDES: Array<{ image: ImageKey; focus: string }> = [
  { image: 'seaSunset', focus: '50% 55%' },
  { image: 'lakeView', focus: '50% 50%' },
  { image: 'beachfront', focus: '42% 70%' },
]
const INTERVAL = 7000

/**
 * Full-screen cinematic hero: the photograph opens like a window on load,
 * slow Ken Burns crossfades between the supplied views, and the headline
 * rises line by line. Scrolling gently drifts the image and fades the copy.
 */
export function Hero() {
  const { t } = useTranslation()
  const goTo = useSectionNav()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const [index, setIndex] = useState(0)
  // How many times each slide has become active — restarts its Ken Burns
  // animation on activation without disturbing the slide that fades out.
  const [runs, setRuns] = useState<number[]>(() => SLIDES.map((_, i) => (i === 0 ? 1 : 0)))
  const [paused, setPaused] = useState(false)

  const go = (next: number) => {
    setIndex(next)
    setRuns((r) => r.map((v, i) => (i === next ? v + 1 : v)))
  }
  const captions = t('hero.slides')

  // Autoplay (paused while the tab is hidden or the user hovers the controls)
  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      if (!document.hidden) go((index + 1) % SLIDES.length)
    }, INTERVAL)
    return () => window.clearInterval(id)
  }, [paused, index])

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '-22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section
      id="acasa"
      ref={ref}
      aria-roledescription="carousel"
      aria-label={t('hero.eyebrow')}
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink text-ivory"
    >
      {/* Photography — opens from an inset window on first load */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { clipPath: 'inset(14% 10% 14% 10%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 1.8, ease: EASE_CURTAIN, delay: 0.1 }}
      >
        <motion.div className="absolute inset-0 will-change-transform" style={{ y: imageY }}>
          {SLIDES.map((slide, i) => (
            <motion.div
              key={slide.image}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
              transition={{ duration: 1.8, ease: EASE_LUXE }}
              aria-hidden={i !== index}
            >
              <div
                className={cn('h-full w-full', !reduce && 'animate-[kenburns_14s_ease-out_forwards]')}
                key={runs[i]}
              >
                <Picture
                  image={slide.image}
                  focus={slide.focus}
                  alt={captions[i]}
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Readability layers */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-ink/55 via-ink/10 to-transparent" />
      </motion.div>

      {/* Copy */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-end pb-28 sm:pb-32 lg:pb-36"
      >
        <div className="container-site">
          <motion.p
            className="eyebrow mb-7 flex items-center gap-4 text-bronze-light"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE_LUXE, delay: 0.9 }}
          >
            <span aria-hidden="true" className="h-px w-10 bg-current" />
            {t('hero.eyebrow')}
          </motion.p>

          <h1 className="display max-w-[15ch] text-[clamp(2.9rem,8.4vw,8.25rem)] text-ivory">
            <RevealText as="span" className="block" text={t('hero.titleLine1')} onMount delay={1.0} />
            <RevealText as="span" className="block italic text-ivory/95" text={t('hero.titleLine2')} onMount delay={1.25} />
          </h1>

          <div className="mt-9 flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            <motion.p
              key={t('hero.subtitle')}
              className="max-w-xl text-[1.0625rem] leading-relaxed text-ivory/85 sm:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE_LUXE, delay: 1.6 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE_LUXE, delay: 1.8 }}
            >
              <Button
                href="/#proprietati"
                variant="light"
                onClick={(e) => {
                  e.preventDefault()
                  goTo('proprietati')
                }}
              >
                {t('hero.ctaPrimary')}
              </Button>
              <Button
                href="/#contact"
                variant="outline-light"
                onClick={(e) => {
                  e.preventDefault()
                  goTo('contact')
                }}
              >
                {t('hero.ctaSecondary')}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Slide controls + scroll cue */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.1 }}
      >
        <div className="container-site flex items-center justify-between gap-6 border-t border-ivory/15 py-6">
          <div
            className="flex items-center gap-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <span className="text-[0.72rem] font-semibold tracking-[0.2em] tabular-nums" aria-live="polite" aria-atomic="true">
              <span className="sr-only">{t('hero.slideLabel', { current: index + 1, total: SLIDES.length })}</span>
              <span aria-hidden="true">
                {pad(index + 1)} <span className="text-ivory/60">/ {pad(SLIDES.length)}</span>
              </span>
            </span>
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={t('hero.goToSlide', { n: i + 1 })}
                  aria-current={i === index}
                  className="group relative flex h-11 w-10 items-center sm:w-14"
                >
                  <span className="relative block h-px w-full overflow-hidden bg-ivory/30">
                    {i === index && (
                      <motion.span
                        key={`${index}-${paused}`}
                        className="absolute inset-0 origin-left bg-ivory"
                        initial={{ scaleX: reduce || paused ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: reduce || paused ? 0 : INTERVAL / 1000, ease: 'linear' }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <p className="hidden text-[0.8rem] text-ivory/80 md:block">
              <motion.span key={`${index}-${captions[index]}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE_LUXE }} className="inline-block">
                {captions[index]}
              </motion.span>
            </p>
          </div>

          <a
            href="/#despre"
            onClick={(e) => {
              e.preventDefault()
              goTo('despre')
            }}
            className="group hidden items-center gap-4 sm:flex"
          >
            <span className="eyebrow text-ivory/80">{t('hero.scroll')}</span>
            <span aria-hidden="true" className="relative block h-10 w-px overflow-hidden bg-ivory/25">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2.2s_cubic-bezier(0.76,0,0.24,1)_infinite] bg-ivory" />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
