import { useTranslation } from 'react-i18next'
import { site } from '../../config/site'
import { cn } from '../../lib/cn'

/**
 * PLACEHOLDER LOGO — a typographic wordmark built from `site.brandName`.
 * Replace with your logo file (e.g. <img src="/logo.svg" />) when available.
 */
export function Logo({ className }: { className?: string }) {
  const { t } = useTranslation()
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect x="0.75" y="0.75" width="38.5" height="38.5" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />
        <path d="M10 29 20 12l10 17" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14.5 29h11" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.35rem] font-normal tracking-[0.01em]">{site.brandName}</span>
        <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.42em] uppercase opacity-70">{t('brand.tagline')}</span>
      </span>
    </span>
  )
}
