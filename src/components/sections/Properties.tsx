import { Info } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { properties } from '../../data/properties'
import { PropertyMedia, PropertyMeta } from '../property/PropertyParts'
import { SectionLabel } from '../ui/SectionLabel'
import { Reveal } from '../motion/Reveal'
import { RevealText } from '../motion/RevealText'

/**
 * Editorial, asymmetric showcase: a dominant featured listing, an offset
 * pair, a cinematic panorama and a final split composition.
 */
export function Properties() {
  const { t } = useTranslation()
  const [featured, second, third, fourth, fifth] = properties

  return (
    <section id="proprietati" aria-labelledby="properties-title" className="bg-paper py-28 sm:py-36 lg:py-44">
      <div className="container-site">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="02">{t('properties.label')}</SectionLabel>
            </Reveal>
            <RevealText as="h2" id="properties-title" text={t('properties.title')} className="heading mt-8 text-[clamp(2.4rem,5vw,4.75rem)]" />
          </div>
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="lede">{t('properties.subtitle')}</p>
            <p className="mt-5 flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-taupe">
              <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
              {t('properties.note')}
            </p>
          </Reveal>
        </div>

        {/* 01 — Featured: wide image + side copy */}
        <article className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:items-end lg:gap-8">
          <PropertyMedia property={featured} className="aspect-[4/3] lg:col-span-8 lg:aspect-[16/11]" sizes="(min-width: 1024px) 64vw, 100vw" parallax={60} />
          <PropertyMeta property={featured} index={1} size="lg" className="lg:col-span-4 lg:pb-4" />
        </article>

        {/* 02 + 03 — Offset pair */}
        <div className="mt-28 grid gap-20 md:grid-cols-12 md:gap-8 lg:mt-40">
          <article className="md:col-span-5">
            <PropertyMedia property={second} className="aspect-[4/5]" sizes="(min-width: 768px) 40vw, 100vw" />
            <PropertyMeta property={second} index={2} className="mt-10" />
          </article>
          <article className="md:col-span-6 md:col-start-7 md:mt-48">
            <PropertyMedia property={third} className="aspect-[4/3]" sizes="(min-width: 768px) 50vw, 100vw" delay={0.1} />
            <PropertyMeta property={third} index={3} className="mt-10" />
          </article>
        </div>

        {/* 04 — Panorama with overlapping copy card */}
        <article className="relative mt-28 lg:mt-44">
          <PropertyMedia property={fourth} className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]" sizes="100vw" parallax={70} />
          <div className="relative -mt-16 mr-4 bg-paper p-7 sm:-mt-24 sm:mr-auto sm:max-w-xl sm:p-10 lg:absolute lg:right-auto lg:-bottom-20 lg:left-12 lg:mt-0">
            <PropertyMeta property={fourth} index={4} />
          </div>
        </article>

        {/* 05 — Split: copy left, image right */}
        <article className="mt-28 grid gap-10 lg:mt-56 lg:grid-cols-12 lg:items-center lg:gap-8">
          <PropertyMeta property={fifth} index={5} className="order-2 lg:order-1 lg:col-span-4" />
          <PropertyMedia property={fifth} className="order-1 aspect-[4/3] lg:order-2 lg:col-span-7 lg:col-start-6 lg:aspect-[3/2]" sizes="(min-width: 1024px) 58vw, 100vw" />
        </article>
      </div>
    </section>
  )
}
