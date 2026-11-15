import { useId } from 'react'
import type { LanguageCode } from '../../i18n/languages'
import { cn } from '../../lib/cn'

/** Crisp inline SVG flags (no emoji, no network requests). */
export function Flag({ code, className }: { code: LanguageCode; className?: string }) {
  const id = useId()
  const svgProps = {
    viewBox: code === 'en' ? '0 0 60 30' : '0 0 3 2',
    preserveAspectRatio: 'xMidYMid slice',
    className: 'h-full w-full',
    'aria-hidden': true,
    focusable: false,
  } as const

  let flag
  switch (code) {
    case 'ro':
      flag = (
        <svg {...svgProps}>
          <rect width="1" height="2" fill="#002B7F" />
          <rect x="1" width="1" height="2" fill="#FCD116" />
          <rect x="2" width="1" height="2" fill="#CE1126" />
        </svg>
      )
      break
    case 'fr':
      flag = (
        <svg {...svgProps}>
          <rect width="1" height="2" fill="#002654" />
          <rect x="1" width="1" height="2" fill="#FFFFFF" />
          <rect x="2" width="1" height="2" fill="#CE1126" />
        </svg>
      )
      break
    case 'it':
      flag = (
        <svg {...svgProps}>
          <rect width="1" height="2" fill="#009246" />
          <rect x="1" width="1" height="2" fill="#FFFFFF" />
          <rect x="2" width="1" height="2" fill="#CE2B37" />
        </svg>
      )
      break
    case 'de':
      flag = (
        <svg {...svgProps} viewBox="0 0 5 3">
          <rect width="5" height="1" fill="#000000" />
          <rect y="1" width="5" height="1" fill="#DD0000" />
          <rect y="2" width="5" height="1" fill="#FFCE00" />
        </svg>
      )
      break
    case 'en':
      flag = (
        <svg {...svgProps}>
          <clipPath id={`${id}s`}>
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <clipPath id={`${id}t`}>
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <g clipPath={`url(#${id}s)`}>
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id}t)`} stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      )
      break
  }

  return (
    <span className={cn('inline-block h-[14px] w-[21px] shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/10', className)}>
      {flag}
    </span>
  )
}
