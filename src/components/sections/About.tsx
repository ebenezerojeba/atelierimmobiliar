import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Picture } from '../ui/Picture'
import { SectionLabel } from '../ui/SectionLabel'
import { ImageReveal } from '../motion/ImageReveal'
import { Parallax } from '../motion/Parallax'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'
import { RevealText } from '../motion/RevealText'
import { useFormat } from '../../i18n/format'

export function About() {
  const { t } = useTranslation()
  const { pad } = useFormat()
  const values = t('about.values')
  const approach = t('about.approach')

  return (
    <section id="despre" aria-labelledby="about-title" className="relative bg-ivory pt-8 pb-28 sm:pb-36 lg:pt-12 lg:pb-44">
      {/* Intro: portrait photograph + story */}
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="relative lg:col-span-5">
          <ImageReveal className="aspect-[4/5] w-full bg-sand lg:sticky lg:top-28">
            <Parallax distance={50}>
              <Picture image="bedroom" alt={t('about.imageAlt')} focus="50% 60%" sizes="(min-width: 1024px) 40vw, 100vw" />
            </Parallax>
          </ImageReveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
          <Reveal>
            <SectionLabel index="01">{t('about.label')}</SectionLabel>
          </Reveal>
          <RevealText
            as="h2"
            id="about-title"
            text={t('about.title')}
            className="heading mt-8 text-[clamp(2.3rem,4.6vw,4.25rem)]"
          />
          <Reveal delay={0.15} className="mt-10 space-y-6">
            <p className="lede">{t('about.intro')}</p>
            <p className="lede">{t('about.intro2')}</p>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-ink/12 pt-12 sm:grid-cols-2 sm:gap-12">
            <Reveal>
              <h3 className="eyebrow text-bronze-deep">{t('about.missionTitle')}</h3>
              <p className="mt-4 font-serif text-[1.45rem] leading-snug font-light text-ink">{t('about.mission')}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="eyebrow text-bronze-deep">{t('about.visionTitle')}</h3>
              <p className="mt-4 font-serif text-[1.45rem] leading-snug font-light text-ink">{t('about.vision')}</p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container-site mt-28 sm:mt-36">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <RevealText as="h3" text={t('about.valuesTitle')} className="heading text-[clamp(2rem,3.6vw,3.25rem)]" />
        </div>
        <RevealGroup className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <RevealItem
              key={value.title}
              className="group border-t border-ink/15 pt-8 pb-10"
            >
              <span className="text-[0.72rem] font-semibold tracking-[0.2em] text-bronze-deep tabular-nums">{pad(i + 1)}</span>
              <h4 className="mt-6 font-serif text-[2rem] font-light transition-transform duration-700 ease-luxe group-hover:translate-x-1">{value.title}</h4>
              <p className="mt-3 max-w-xs leading-relaxed text-ash">{value.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Approach — timeline that draws itself on scroll */}
      <Approach title={t('about.approachTitle')} steps={approach} />
    </section>
  )
}

function Approach({ title, steps }: { title: string; steps: Array<{ title: string; text: string }> }) {
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 60%'] })
  const scaleX = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1])
  const { pad } = useFormat()

  return (
    <div className="container-site mt-28 sm:mt-36">
      <div className="bg-sand/60 px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
        <RevealText as="h3" text={title} className="heading text-[clamp(2rem,3.6vw,3.25rem)]" />
        <ol ref={ref} className="relative mt-14 grid gap-12 md:grid-cols-4 md:gap-8">
          <div aria-hidden="true" className="absolute top-[7px] left-0 hidden h-px w-full bg-ink/12 md:block">
            <motion.div style={{ scaleX }} className="h-full origin-left bg-bronze" />
          </div>
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.12}>
                <span aria-hidden="true" className="relative z-10 block h-[15px] w-[15px] rounded-full border border-bronze bg-ivory" />
                <span className="mt-6 block text-[0.72rem] font-semibold tracking-[0.2em] text-bronze-deep tabular-nums">{pad(i + 1)}</span>
                <h4 className="mt-2 font-serif text-[1.75rem] font-light">{step.title}</h4>
                <p className="mt-2 leading-relaxed text-ash">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
