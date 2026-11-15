import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { getLanguage } from './languages'

/** Locale-aware number, currency, area and date formatting. */
export function useFormat() {
  const { i18n } = useTranslation()
  const locale = getLanguage(i18n.resolvedLanguage).locale

  return useMemo(() => {
    const currencyFmt = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    })
    const numberFmt = new Intl.NumberFormat(locale)
    const dateFmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    const yearFmt = new Intl.DateTimeFormat(locale, { year: 'numeric' })

    return {
      locale,
      currency: (value: number) => currencyFmt.format(value),
      number: (value: number) => numberFmt.format(value),
      area: (value: number) => `${numberFmt.format(value)} m²`,
      date: (iso: string) => dateFmt.format(new Date(`${iso}T12:00:00`)),
      year: (d: Date = new Date()) => yearFmt.format(d),
      pad: (n: number) => String(n).padStart(2, '0'),
    }
  }, [locale])
}
