import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { LanguageSelector } from './LanguageSelector'
import { MobileMenu } from './MobileMenu'
import { NAV_ITEMS, useActiveSection, useSectionNav, type SectionId } from '../../hooks/useSectionNav'
import { EASE_LUXE, cn } from '../../lib/cn'

/**
 * Transparent over the hero; turns into a solid ivory bar once the visitor
 * scrolls. Hides while scrolling down, reappears on scroll up.
 */
export function Navbar() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const goTo = useSectionNav()
  const active = useActiveSection(pathname === '/')
  const { scrollY } = useScroll()
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  // Section requested from the mobile menu — scrolled to once the menu has closed
  const pendingRef = useRef<SectionId | null>(null)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setSolid(y > 60)
    setHidden(y > 480 && y > prev + 2)
    if (y < prev - 2) setHidden(false)
  })

  // Reset state between routes
  useEffect(() => {
    setMenuOpen(false)
    setHidden(false)
  }, [pathname])

  const onNav = (e: MouseEvent, id: SectionId) => {
    e.preventDefault()
    if (menuOpen) {
      pendingRef.current = id
      setMenuOpen(false)
      return
    }
    goTo(id)
  }

  const onMenuClosed = () => {
    const id = pendingRef.current
    pendingRef.current = null
    if (id) requestAnimationFrame(() => goTo(id))
  }

  const light = !solid && !menuOpen

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden && !menuOpen ? '-100%' : 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_LUXE }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-700 ease-luxe',
          menuOpen
            ? 'border-b border-transparent text-ivory'
            : solid
              ? 'border-b border-ink/8 bg-ivory/88 text-ink backdrop-blur-xl backdrop-saturate-150'
              : 'border-b border-transparent text-ivory',
        )}
      >
        {/* Soft top shade keeps light text legible over bright photography */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/45 to-transparent transition-opacity duration-700',
            light ? 'opacity-100' : 'opacity-0',
          )}
        />
        <nav aria-label={t('nav.primary')} className="container-site flex h-20 items-center justify-between gap-6 lg:h-24">
          <a href="/" onClick={(e) => onNav(e, 'acasa')} className="relative z-10 shrink-0" aria-label={t('nav.home')}>
            <Logo />
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  onClick={(e) => onNav(e, item.id)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className="link-line text-[0.78rem] font-medium tracking-[0.08em] whitespace-nowrap"
                >
                  {t(`nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex items-center gap-2 sm:gap-4">
            <LanguageSelector />
            <div className="hidden xl:block">
              <Button
                href="/#contact"
                onClick={(e) => onNav(e, 'contact')}
                variant={light ? 'outline-light' : 'dark'}
                className="!min-h-11 !px-5"
              >
                {t('nav.enquire')}
              </Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              className="relative grid h-11 w-11 place-items-center lg:hidden"
            >
              <span className="relative block h-3 w-7">
                <span
                  className={cn(
                    'absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-luxe',
                    menuOpen ? 'top-1/2 rotate-45' : 'top-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 h-px bg-current transition-all duration-500 ease-luxe',
                    menuOpen ? 'top-1/2 w-full -rotate-45' : 'top-full w-2/3',
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence onExitComplete={onMenuClosed}>
        {menuOpen && (
          <MobileMenu
            active={active}
            onNavigate={onNav}
            onClose={() => {
              setMenuOpen(false)
              toggleRef.current?.focus()
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
