import { motion } from 'motion/react'
import { useEffect, useRef, type MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES, getLanguage } from '../../i18n/languages'
import { Flag } from '../ui/Flag'
import { SocialLinks } from '../ui/SocialLinks'
import { useLenis } from './SmoothScroll'
import { NAV_ITEMS, type SectionId } from '../../hooks/useSectionNav'
import { EASE_CURTAIN, EASE_LUXE, cn } from '../../lib/cn'

type Props = {
  active: SectionId | null
  onNavigate: (e: MouseEvent, id: SectionId) => void
  onClose: () => void
}

/** Full-screen menu for tablets and phones. */
export function MobileMenu({ active, onNavigate, onClose }: Props) {
  const { t, i18n } = useTranslation()
  const current = getLanguage(i18n.resolvedLanguage)
  const lenis = useLenis()
  const panelRef = useRef<HTMLDivElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose
  const pad = (n: number) => String(n).padStart(2, '0')

  // Lock scroll, close on Escape, keep focus inside the panel.
  useEffect(() => {
    lenis?.stop()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current()
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>('a[href], button')
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      lenis?.start()
    }
  }, [lenis])

  return (
    <motion.div
      id="mobile-menu"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={t('nav.primary')}
      initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)', transition: { duration: 0.7, ease: EASE_CURTAIN, delay: 0.1 } }}
      transition={{ duration: 0.85, ease: EASE_CURTAIN }}
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink pt-24 text-ivory lg:hidden"
    >
      <nav className="container-site flex flex-1 flex-col justify-between gap-12 pb-10">
        <ul className="mt-6 space-y-1">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id} className="overflow-hidden">
              <motion.a
                href={`/#${item.id}`}
                onClick={(e) => onNavigate(e, item.id)}
                aria-current={active === item.id ? 'true' : undefined}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%', transition: { duration: 0.4 } }}
                transition={{ duration: 0.9, ease: EASE_LUXE, delay: 0.25 + i * 0.07 }}
                className="group flex items-baseline gap-5 py-2"
              >
                <span className="w-6 text-[0.7rem] font-semibold tracking-[0.2em] text-bronze-light tabular-nums">{pad(i + 1)}</span>
                <span
                  className={cn(
                    'heading text-[2.6rem] transition-colors duration-500 sm:text-6xl',
                    active === item.id ? 'text-bronze-light' : 'text-ivory group-hover:text-bronze-light',
                  )}
                >
                  {t(`nav.${item.key}`)}
                </span>
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.8, ease: EASE_LUXE, delay: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="eyebrow mb-4 text-ivory/70">{t('language.label')}</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label={t('language.choose')}>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  lang={lang.code}
                  aria-pressed={lang.code === current.code}
                  aria-label={lang.name}
                  onClick={() => void i18n.changeLanguage(lang.code)}
                  className={cn(
                    'flex min-h-11 items-center gap-2 border px-3.5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-500',
                    lang.code === current.code ? 'border-bronze-light bg-ivory/5 text-ivory' : 'border-ivory/15 text-ivory/70 hover:border-ivory/40',
                  )}
                >
                  <Flag code={lang.code} />
                  {lang.code}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-ivory/10 pt-8">
            <a
              href="/#contact"
              onClick={(e) => onNavigate(e, 'contact')}
              className="eyebrow link-line text-ivory"
            >
              {t('nav.enquire')}
            </a>
            <SocialLinks className="text-ivory/80" />
          </div>
        </motion.div>
      </nav>
    </motion.div>
  )
}
