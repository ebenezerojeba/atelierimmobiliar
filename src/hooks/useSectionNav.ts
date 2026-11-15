import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useScrollTo } from '../components/layout/SmoothScroll'
import type { PropertyId } from '../data/properties'

export const SECTIONS = ['acasa', 'despre', 'proprietati', 'servicii', 'contact'] as const
export type SectionId = (typeof SECTIONS)[number]

export const NAV_ITEMS: Array<{ id: SectionId; key: 'home' | 'about' | 'properties' | 'services' | 'contact' }> = [
  { id: 'acasa', key: 'home' },
  { id: 'despre', key: 'about' },
  { id: 'proprietati', key: 'properties' },
  { id: 'servicii', key: 'services' },
  { id: 'contact', key: 'contact' },
]

export type NavState = { section?: SectionId; property?: PropertyId }

/**
 * Navigate to a home-page section from anywhere. On the home page it
 * scrolls smoothly; on other pages it routes home first, then scrolls.
 */
export function useSectionNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const scrollTo = useScrollTo()

  return useCallback(
    (section: SectionId, extra: Omit<NavState, 'section'> = {}) => {
      if (pathname === '/') {
        if (extra.property) navigate('/', { replace: true, state: { ...extra } satisfies NavState })
        scrollTo(section === 'acasa' ? 0 : section)
      } else {
        navigate('/', { state: { section, ...extra } satisfies NavState })
      }
    },
    [pathname, navigate, scrollTo],
  )
}

/** Tracks which home-page section is currently in the middle of the viewport. */
export function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    if (!enabled) {
      setActive(null)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    // Sections mount after the route transition, so look them up on the next frame.
    const raf = requestAnimationFrame(() => {
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    })
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [enabled])

  return active
}
