import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Picture } from '../ui/Picture'
import { Button } from '../ui/Button'
import { SectionLabel } from '../ui/SectionLabel'
import { Reveal } from '../motion/Reveal'
import { RevealText } from '../motion/RevealText'
import { useSectionNav } from '../../hooks/useSectionNav'
import { useFormat } from '../../i18n/format'
import type { ImageKey } from '../../lib/images'
import { EASE_LUXE, cn } from '../../lib/cn'

/** One photograph per service (same order as `services.items`). */
const SERVICE_IMAGES: Array<{ image: ImageKey; focus: string }> = [
  { image: 'beachfront', focus: '30% 65%' },
  { image: 'livingRoom', focus: '55% 55%' },
  { image: 'bedroom', focus: '50% 65%' },
  { image: 'lakesideResidences', focus: '50% 60%' },
  { image: 'lakeView', focus: '50% 50%' },
  { image: 'seaSunset', focus: '35% 50%' },
]

/**
 * Dark editorial list. Hovering or focusing a service swaps the framed
 * photograph beside it with a soft crossfade.
 */
export function Services() {
  const { t } = useTranslation()
  const { pad } = useFormat()
  const goTo = useSectionNav()
  const items = t('services.items')
  const [active, setActive] = useState(0)
  const current = SERVICE_IMAGES[active]

  return (
    <section id="servicii" aria-labelledby="services-title" className="relative bg-ink py-28 text-ivory sm:py-36 lg:py-44">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Sticky intro + image */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionLabel index="03" light>
                {t('services.label')}
              </SectionLabel>
            </Reveal>
            <RevealText as="h2" id="services-title" text={t('services.title')} className="heading mt-8 text-[clamp(2.4rem,4.6vw,4.25rem)]" />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-md text-[1.0625rem] leading-relaxed text-ivory/75">{t('services.subtitle')}</p>
            </Reveal>

            <Reveal delay={0.25} className="relative mt-12 hidden aspect-[5/4] overflow-hidden bg-graphite lg:block">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={current.image}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: EASE_LUXE }}
                >
                  <Picture image={current.image} focus={current.focus} alt={items[active]?.title ?? ''} sizes="40vw" />
                </motion.div>
              </AnimatePresence>
              <span className="absolute bottom-4 left-4 z-10 bg-ink/70 px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] tabular-nums backdrop-blur-sm">
                {pad(active + 1)} / {pad(items.length)}
              </span>
            </Reveal>

            <Reveal delay={0.3} className="mt-10">
              <Button
                href="/#contact"
                variant="light"
                onClick={(e) => {
                  e.preventDefault()
                  goTo('contact')
                }}
              >
                {t('services.cta')}
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Services list */}
        <ol className="border-t border-ivory/12 lg:col-span-6 lg:col-start-7">
          {items.map((service, i) => {
            const isActive = i === active
            return (
              <li key={service.title} className="border-b border-ivory/12">
                <Reveal y={20} delay={i * 0.05}>
                  <div
                    onMouseEnter={() => setActive(i)}
                    className="group relative grid grid-cols-[3rem_1fr] gap-x-4 py-9 sm:grid-cols-[4.5rem_1fr] sm:py-11"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute top-0 left-0 h-px bg-bronze-light transition-all duration-700 ease-luxe',
                        isActive ? 'w-full' : 'w-0',
                      )}
                    />
                    <span className={cn('pt-2 text-[0.72rem] font-semibold tracking-[0.2em] tabular-nums transition-colors duration-500', isActive ? 'text-bronze-light' : 'text-ivory/60')}>
                      {pad(i + 1)}
                    </span>
                    <div>
                      <h3
                        className={cn(
                          'font-serif text-[clamp(1.8rem,3vw,2.6rem)] leading-tight font-light transition-all duration-700 ease-luxe',
                          isActive ? 'translate-x-2 text-ivory' : 'text-ivory/70',
                        )}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={cn(
                          'mt-3 max-w-lg leading-relaxed transition-colors duration-500',
                          isActive ? 'text-ivory/85' : 'text-ivory/60',
                        )}
                      >
                        {service.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
