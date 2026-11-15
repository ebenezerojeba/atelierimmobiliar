import { ArrowUp } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo } from '../ui/Logo'
import { SocialLinks } from '../ui/SocialLinks'
import { LanguageSelector } from './LanguageSelector'
import { useScrollTo } from './SmoothScroll'
import { NAV_ITEMS, useSectionNav, type SectionId } from '../../hooks/useSectionNav'
import { useFormat } from '../../i18n/format'
import { site } from '../../config/site'
import { Reveal } from '../motion/Reveal'

export function Footer() {
  const { t } = useTranslation()
  const { year } = useFormat()
  const goTo = useSectionNav()
  const scrollTo = useScrollTo()
  const services = t('services.items')

  const onNav = (e: MouseEvent, id: SectionId) => {
    e.preventDefault()
    goTo(id)
  }

  const contactRows = [
    { label: t('contact.phone'), value: site.contact.phone, href: site.contact.phone ? `tel:${site.contact.phone.replace(/\s/g, '')}` : undefined },
    { label: t('contact.email'), value: site.contact.email, href: site.contact.email ? `mailto:${site.contact.email}` : undefined },
    { label: t('contact.address'), value: site.contact.address },
  ]

  return (
    <footer className="relative overflow-hidden bg-ink text-ivory/70">
      <div className="container-site pt-24 pb-10 lg:pt-32">
        {/* Oversized brand line */}
        <Reveal>
          <a href="/" onClick={(e) => onNav(e, 'acasa')} className="inline-block text-ivory" aria-label={t('nav.home')}>
            <Logo className="[&_svg]:h-10 [&_svg]:w-10" />
          </a>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-ivory/10 pt-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="max-w-sm text-[0.95rem] leading-relaxed">{t('footer.description')}</p>
            <SocialLinks className="mt-8 text-ivory/80" />
          </div>

          <nav aria-label={t('footer.navigation')} className="lg:col-span-2 lg:col-start-6">
            <h2 className="eyebrow mb-6 text-bronze-light">{t('footer.navigation')}</h2>
            <ul className="space-y-3 text-[0.95rem]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`/#${item.id}`} onClick={(e) => onNav(e, item.id)} className="link-line transition-colors duration-500 hover:text-ivory">
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow mb-6 text-bronze-light">{t('footer.services')}</h2>
            <ul className="space-y-3 text-[0.95rem]">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="/#servicii" onClick={(e) => onNav(e, 'servicii')} className="link-line transition-colors duration-500 hover:text-ivory">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow mb-6 text-bronze-light">{t('footer.contact')}</h2>
            <dl className="space-y-4 text-[0.95rem]">
              {contactRows.map((row) => (
                <div key={row.label}>
                  <dt className="text-[0.7rem] tracking-[0.18em] text-ivory/45 uppercase">{row.label}</dt>
                  <dd className="mt-1">
                    {row.value ? (
                      row.href ? (
                        <a href={row.href} className="link-line hover:text-ivory">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )
                    ) : (
                      <span className="text-ivory/45 italic">{t('contact.toBeCompleted')}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-ivory/10 pt-8 text-[0.8rem] md:flex-row md:items-center md:justify-between">
          <p>
            © {year()} {site.brandName}. {t('footer.rights')}
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {/* PLACEHOLDER — link to your legal pages */}
            <a href="#" className="link-line hover:text-ivory">
              {t('footer.privacy')}
            </a>
            <a href="#" className="link-line hover:text-ivory">
              {t('footer.terms')}
            </a>
            <LanguageSelector dropUp className="text-ivory" />
            <button
              type="button"
              onClick={() => scrollTo(0)}
              className="group flex min-h-11 items-center gap-3 text-ivory"
            >
              <span className="eyebrow">{t('footer.backToTop')}</span>
              <span className="grid h-10 w-10 place-items-center border border-ivory/25 transition-colors duration-500 group-hover:border-ivory">
                <ArrowUp aria-hidden="true" className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
