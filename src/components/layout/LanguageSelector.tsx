import { AnimatePresence, motion } from 'motion/react'
import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES, getLanguage, type LanguageCode } from '../../i18n/languages'
import { Flag } from '../ui/Flag'
import { EASE_LUXE, cn } from '../../lib/cn'

type Props = {
  /** Open upwards (e.g. in the footer) */
  dropUp?: boolean
  className?: string
}

/**
 * Accessible language dropdown (listbox pattern): flag + code in the trigger,
 * flag + code + native name in the menu. Full keyboard support.
 */
export function LanguageSelector({ dropUp, className }: Props) {
  const { i18n, t } = useTranslation()
  const current = getLanguage(i18n.resolvedLanguage)
  const [open, setOpen] = useState(false)
  const [focusIndex, setFocusIndex] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<Array<HTMLLIElement | null>>([])
  const listId = useId()

  const openMenu = () => {
    setFocusIndex(LANGUAGES.findIndex((l) => l.code === current.code))
    setOpen(true)
  }

  const close = (returnFocus = true) => {
    setOpen(false)
    if (returnFocus) buttonRef.current?.focus()
  }

  const select = (code: LanguageCode) => {
    if (code !== current.code) void i18n.changeLanguage(code)
    close()
  }

  // Move DOM focus to the highlighted option
  useEffect(() => {
    if (open) optionRefs.current[focusIndex]?.focus()
  }, [open, focusIndex])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    return () => document.removeEventListener('pointerdown', onPointer)
  }, [open])

  const onButtonKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      openMenu()
    }
  }

  const onListKey = (e: KeyboardEvent) => {
    const last = LANGUAGES.length - 1
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusIndex((i) => (i >= last ? 0 : i + 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusIndex((i) => (i <= 0 ? last : i - 1))
        break
      case 'Home':
        e.preventDefault()
        setFocusIndex(0)
        break
      case 'End':
        e.preventDefault()
        setFocusIndex(last)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        select(LANGUAGES[focusIndex].code)
        break
      case 'Escape':
        e.preventDefault()
        close()
        break
      case 'Tab':
        close(false)
        break
    }
  }

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={`${t('language.label')}: ${current.name}`}
        onClick={() => (open ? close() : openMenu())}
        onKeyDown={onButtonKey}
        className="group flex min-h-11 items-center gap-2.5 px-2 text-[0.75rem] font-semibold tracking-[0.16em] uppercase"
      >
        <Flag code={current.code} />
        <span>{current.code}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn('h-3.5 w-3.5 opacity-70 transition-transform duration-500 ease-luxe', open && 'rotate-180')}
          strokeWidth={1.75}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            aria-label={t('language.choose')}
            aria-activedescendant={`${listId}-${LANGUAGES[focusIndex].code}`}
            onKeyDown={onListKey}
            initial={{ opacity: 0, y: dropUp ? 8 : -8, clipPath: dropUp ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0% 0)' }}
            exit={{ opacity: 0, y: dropUp ? 6 : -6, transition: { duration: 0.2 } }}
            transition={{ duration: 0.45, ease: EASE_LUXE }}
            className={cn(
              'absolute right-0 z-50 w-56 border border-ink/10 bg-paper py-2 text-ink shadow-[0_24px_60px_-20px_rgba(28,26,23,0.35)]',
              dropUp ? 'bottom-full mb-3' : 'top-full mt-3',
            )}
          >
            <li aria-hidden="true" className="eyebrow px-5 pt-2 pb-3 text-[0.6rem] text-taupe" role="presentation">
              {t('language.choose')}
            </li>
            {LANGUAGES.map((lang, i) => {
              const selected = lang.code === current.code
              return (
                <li
                  key={lang.code}
                  id={`${listId}-${lang.code}`}
                  ref={(el) => {
                    optionRefs.current[i] = el
                  }}
                  role="option"
                  aria-selected={selected}
                  lang={lang.code}
                  tabIndex={i === focusIndex ? 0 : -1}
                  onClick={() => select(lang.code)}
                  onMouseEnter={() => setFocusIndex(i)}
                  className={cn(
                    'flex min-h-11 cursor-pointer items-center gap-3.5 px-5 py-2.5 text-sm outline-none transition-colors duration-300',
                    i === focusIndex && 'bg-sand/70',
                  )}
                >
                  <Flag code={lang.code} />
                  <span className="w-7 text-[0.72rem] font-bold tracking-[0.14em] uppercase">{lang.code}</span>
                  <span className="flex-1 text-ash">{lang.name}</span>
                  {selected && <Check aria-hidden="true" className="h-4 w-4 text-bronze-deep" strokeWidth={1.75} />}
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
