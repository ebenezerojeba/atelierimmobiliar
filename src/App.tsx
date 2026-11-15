import { AnimatePresence, MotionConfig } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Route, Routes, useLocation } from 'react-router'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { PageTransition } from './components/layout/PageTransition'
import { useLenis } from './components/layout/SmoothScroll'
import Home from './pages/Home'
import PropertyPage from './pages/PropertyPage'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const lenis = useLenis()
  const { t } = useTranslation()

  const resetScroll = () => {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo(0, 0)
  }

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="eyebrow fixed top-3 left-3 z-[100] -translate-y-24 bg-ink px-5 py-3 text-ivory transition-transform focus:translate-y-0"
      >
        {t('nav.skip')}
      </a>
      <Navbar />
      <AnimatePresence mode="wait" initial={false} onExitComplete={resetScroll}>
        <PageTransition key={location.pathname}>
          <main id="main" tabIndex={-1} className="outline-none">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/proprietati/:id" element={<PropertyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </PageTransition>
      </AnimatePresence>
    </MotionConfig>
  )
}
