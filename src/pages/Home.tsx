import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import { Hero } from '../components/sections/Hero'
import { Manifesto } from '../components/sections/Manifesto'
import { About } from '../components/sections/About'
import { Interlude } from '../components/sections/Interlude'
import { Properties } from '../components/sections/Properties'
import { Services } from '../components/sections/Services'
import { Contact } from '../components/sections/Contact'
import { useScrollTo } from '../components/layout/SmoothScroll'
import { SECTIONS, type NavState, type SectionId } from '../hooks/useSectionNav'

export default function Home() {
  const { t } = useTranslation()
  const location = useLocation()
  const scrollTo = useScrollTo()

  // Arriving from another page (or a /#section link): jump to the requested section.
  useEffect(() => {
    const fromState = (location.state as NavState | null)?.section
    const fromHash = location.hash.replace('#', '') as SectionId
    const target = fromState ?? (SECTIONS.includes(fromHash) ? fromHash : undefined)
    if (!target || target === 'acasa') return
    const id = window.setTimeout(() => scrollTo(target, { immediate: !fromState }), fromState ? 350 : 50)
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key])

  return (
    <>
      <Hero />
      <Manifesto />
      <About />
      <Interlude image="livingRoom" focus="50% 55%" alt={t('about.imageAlt2')} quote={t('interlude.first')} />
      <Properties />
      <Interlude image="lakeView" focus="50% 50%" alt={t('hero.slides')[1]} quote={t('interlude.second')} />
      <Services />
      <Contact />
    </>
  )
}
