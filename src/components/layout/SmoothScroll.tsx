import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext<Lenis | null>(null)

/**
 * Inertial smooth scrolling (Lenis). Disabled automatically for visitors
 * who prefer reduced motion — they get native scrolling.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: true,
    })
    setLenis(instance)
    return () => {
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

export const useLenis = () => useContext(LenisContext)

/** Scroll to a section id, an element or a pixel offset — smooth when possible. */
export function useScrollTo() {
  const lenis = useLenis()
  return useCallback(
    (target: string | number | HTMLElement, opts: { immediate?: boolean } = {}) => {
      const el =
        typeof target === 'string' ? document.getElementById(target.replace(/^#/, '')) : target
      if (el === null) return
      if (lenis) {
        lenis.scrollTo(el, { immediate: opts.immediate, duration: 1.6, offset: 0 })
        return
      }
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const behavior: ScrollBehavior = opts.immediate || reduce ? 'auto' : 'smooth'
      if (typeof el === 'number') window.scrollTo({ top: el, behavior })
      else el.scrollIntoView({ behavior, block: 'start' })
    },
    [lenis],
  )
}
