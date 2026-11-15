import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowLeft, ArrowUpRight, Info } from 'lucide-react'
import { useRef, type MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'
import { getProperty, properties, type Property } from '../data/properties'
import { useFormat } from '../i18n/format'
import { useSectionNav } from '../hooks/useSectionNav'
import { Picture } from '../components/ui/Picture'
import { Button } from '../components/ui/Button'
import { PropertySpecs, propertyPath } from '../components/property/PropertyParts'
import { Reveal } from '../components/motion/Reveal'
import { RevealText } from '../components/motion/RevealText'
import { EASE_LUXE } from '../lib/cn'
import NotFound from './NotFound'

export default function PropertyPage() {
  const { id } = useParams()
  const property = getProperty(id)
  if (!property) return <NotFound property />
  return <PropertyView key={property.id} property={property} />
}

function PropertyView({ property }: { property: Property }) {
  const { t } = useTranslation()
  const { currency, number, area, date } = useFormat()
  const goTo = useSectionNav()
  const reduce = useReducedMotion()
  const item = t(`properties.items.${property.id}`)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '20%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.08])

  const idx = properties.findIndex((p) => p.id === property.id)
  const next = properties[(idx + 1) % properties.length]
  const nextItem = t(`properties.items.${next.id}`)

  const facts = [
    { label: t('detail.type'), value: item.type },
    { label: t('detail.location'), value: item.location },
    { label: t('properties.bedrooms'), value: number(property.bedrooms) },
    { label: t('properties.bathrooms'), value: number(property.bathrooms) },
    { label: t('properties.area'), value: area(property.area) },
    { label: t('detail.reference'), value: property.reference },
  ]

  const enquire = (e: MouseEvent) => {
    e.preventDefault()
    goTo('contact', { property: property.id })
  }

  return (
    <article>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[88svh] min-h-[560px] overflow-hidden bg-ink text-ivory">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <Picture image={property.image} focus={property.focus} alt={`${item.name} — ${item.location}`} priority sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/30" />
        <div className="relative z-10 flex h-full flex-col justify-end pb-14 sm:pb-20">
          <div className="container-site">
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: EASE_LUXE, delay: 0.5 }}>
              <Link to="/" state={{ section: 'proprietati' }} className="eyebrow group inline-flex min-h-11 items-center gap-3 text-ivory/80 hover:text-ivory">
                <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover:-translate-x-1" strokeWidth={1.5} />
                {t('detail.back')}
              </Link>
            </motion.div>
            <motion.p
              className="eyebrow mt-8 text-bronze-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {item.type} · {item.location}
            </motion.p>
            <RevealText as="h1" text={item.name} onMount delay={0.8} className="display mt-5 text-[clamp(2.8rem,8vw,7.5rem)]" />
            <motion.div
              className="mt-8 flex flex-wrap items-end gap-x-12 gap-y-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE_LUXE, delay: 1.2 }}
            >
              <p className="font-serif text-[2.2rem] leading-none font-light tabular-nums">{currency(property.price)}</p>
              <PropertySpecs property={property} light className="text-ivory/90" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-bronze-deep">{t('detail.overview')}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 font-serif text-[clamp(1.6rem,2.6vw,2.25rem)] leading-snug font-light text-ink">{item.summary}</p>
              <p className="lede mt-8 max-w-2xl">{item.description}</p>
              <p className="mt-10 text-[0.85rem] text-taupe">{t('detail.updated', { date: date(property.updated) })}</p>
              <p className="mt-4 flex items-start gap-2.5 text-[0.82rem] text-taupe">
                <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                {t('properties.note')}
              </p>
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15}>
              <h2 className="eyebrow text-bronze-deep">{t('detail.keyFacts')}</h2>
              <dl className="mt-6 border-t border-ink/12">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-6 border-b border-ink/12 py-4">
                    <dt className="text-[0.9rem] text-ash">{f.label}</dt>
                    <dd className="text-right text-[0.95rem] font-medium tabular-nums">{f.value}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-6 py-5">
                  <dt className="text-[0.9rem] text-ash">{t('properties.price')}</dt>
                  <dd className="font-serif text-[1.8rem] leading-none font-light tabular-nums">{currency(property.price)}</dd>
                </div>
              </dl>

              <div className="mt-8 bg-sand/70 p-8">
                <h3 className="heading text-[1.9rem]">{t('detail.enquireTitle')}</h3>
                <p className="mt-3 leading-relaxed text-ash">{t('detail.enquireText')}</p>
                <Button href="/#contact" onClick={enquire} className="mt-7 w-full">
                  {t('detail.enquire')}
                </Button>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Next property — full-bleed transition */}
      <Link to={propertyPath(next)} className="group relative block h-[70svh] min-h-[420px] overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 transition-transform duration-[1800ms] ease-luxe group-hover:scale-105">
          <Picture image={next.image} focus={next.focus} alt="" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-ink/50 transition-colors duration-700 group-hover:bg-ink/35" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="eyebrow text-bronze-light">{t('detail.next')}</p>
          <p className="display mt-6 text-[clamp(2.5rem,7vw,6.5rem)]">{nextItem.name}</p>
          <span className="mt-8 grid h-16 w-16 place-items-center rounded-full border border-ivory/40 transition-all duration-700 ease-luxe group-hover:scale-110 group-hover:bg-ivory group-hover:text-ink">
            <ArrowUpRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
          </span>
        </div>
      </Link>
    </article>
  )
}
