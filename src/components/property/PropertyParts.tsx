import { motion } from 'motion/react'
import { ArrowUpRight, Bath, BedDouble, Maximize } from 'lucide-react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import type { Property } from '../../data/properties'
import { useFormat } from '../../i18n/format'
import { Picture } from '../ui/Picture'
import { ImageReveal } from '../motion/ImageReveal'
import { Parallax } from '../motion/Parallax'
import { cn } from '../../lib/cn'

export const propertyPath = (p: Property) => `/proprietati/${p.id}`

/** Image link with curtain reveal, parallax drift and a slow hover zoom. */
export function PropertyMedia({
  property,
  className,
  sizes,
  parallax = 40,
  delay,
}: {
  property: Property
  className?: string
  sizes: string
  parallax?: number
  delay?: number
}) {
  const { t } = useTranslation()
  const item = t(`properties.items.${property.id}`)
  return (
    <Link
      to={propertyPath(property)}
      className={cn('group relative block overflow-hidden', className)}
      aria-label={`${t('properties.view')}: ${item.name}`}
      tabIndex={-1}
    >
      <ImageReveal className="h-full w-full bg-sand" delay={delay}>
        <Parallax distance={parallax}>
          <div className="h-full w-full transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.06]">
            <Picture image={property.image} focus={property.focus} alt={`${item.name} — ${item.location}`} sizes={sizes} />
          </div>
        </Parallax>
      </ImageReveal>
      {/* Hover badge */}
      <span
        aria-hidden="true"
        className="absolute right-5 bottom-5 flex h-20 w-20 scale-75 items-center justify-center rounded-full bg-ivory/95 text-ink opacity-0 transition-all duration-700 ease-luxe group-hover:scale-100 group-hover:opacity-100"
      >
        <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
      </span>
    </Link>
  )
}

/** Bedrooms / bathrooms / area row. */
export function PropertySpecs({ property, className, light }: { property: Property; className?: string; light?: boolean }) {
  const { t } = useTranslation()
  const { number, area } = useFormat()
  const specs = [
    { icon: BedDouble, label: t('properties.bedrooms'), value: number(property.bedrooms) },
    { icon: Bath, label: t('properties.bathrooms'), value: number(property.bathrooms) },
    { icon: Maximize, label: t('properties.area'), value: area(property.area) },
  ]
  return (
    <dl className={cn('flex flex-wrap gap-x-7 gap-y-3', className)}>
      {specs.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center gap-2.5">
          <Icon aria-hidden="true" className={cn('h-4 w-4', light ? 'text-bronze-light' : 'text-bronze-deep')} strokeWidth={1.4} />
          <dt className="sr-only">{label}</dt>
          <dd className="text-[0.9rem] tabular-nums">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Name, meta, summary, specs, price and CTA. */
export function PropertyMeta({
  property,
  index,
  className,
  headingLevel: H = 'h3',
  size = 'md',
}: {
  property: Property
  index: number
  className?: string
  headingLevel?: 'h2' | 'h3'
  size?: 'md' | 'lg'
}) {
  const { t } = useTranslation()
  const { currency, pad } = useFormat()
  const item = t(`properties.items.${property.id}`)

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="flex items-center gap-4">
        <span className="text-[0.72rem] font-semibold tracking-[0.2em] text-bronze-deep tabular-nums">{pad(index)}</span>
        <span aria-hidden="true" className="h-px w-8 bg-ink/25" />
        <span className="eyebrow text-ash">{item.type}</span>
        {property.featured && (
          <span className="eyebrow border border-bronze/50 px-2.5 py-1 text-[0.6rem] text-bronze-deep">{t('properties.featured')}</span>
        )}
      </div>
      <H className={cn('heading mt-5', size === 'lg' ? 'text-[clamp(2.3rem,4vw,3.75rem)]' : 'text-[clamp(1.9rem,2.8vw,2.6rem)]')}>
        <Link to={propertyPath(property)} className="transition-colors duration-500 hover:text-bronze-deep">
          {item.name}
        </Link>
      </H>
      <p className="mt-2 text-[0.95rem] text-taupe">{item.location}</p>
      <p className="mt-5 max-w-md leading-relaxed text-ash">{item.summary}</p>
      <PropertySpecs property={property} className="mt-6 text-ink" />
      <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-ink/12 pt-6">
        <div>
          <p className="text-[0.68rem] tracking-[0.2em] text-taupe uppercase">{t('properties.price')}</p>
          <p className="mt-1 font-serif text-[1.9rem] leading-none font-light tabular-nums">{currency(property.price)}</p>
        </div>
        <Link
          to={propertyPath(property)}
          className="group/cta eyebrow inline-flex min-h-11 items-center gap-3 text-ink"
        >
          <span className="link-line">{t('properties.view')}</span>
          <span className="grid h-10 w-10 place-items-center border border-ink/20 transition-colors duration-500 group-hover/cta:border-ink group-hover/cta:bg-ink group-hover/cta:text-ivory">
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </Link>
      </div>
    </motion.div>
  )
}
