import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ro from './locales/ro'
import en from './locales/en'
import fr from './locales/fr'
import de from './locales/de'
import it from './locales/it'
import { DEFAULT_LANGUAGE, LANGUAGES, STORAGE_KEY, getLanguage } from './languages'
import { site } from '../config/site'

export const resources = {
  ro: { translation: ro },
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: LANGUAGES.map((l) => l.code),
    load: 'languageOnly',
    // Romanian is the default: only an explicit, saved choice overrides it.
    // We deliberately do not auto-detect from the browser language.
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
    returnObjects: true,
  })

function syncDocument(code: string) {
  const lang = getLanguage(code)
  const t = i18n.getFixedT(lang.code)
  const title = `${site.brandName} — ${t('meta.title')}`
  document.documentElement.lang = lang.code
  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang.ogLocale)
}

syncDocument(i18n.resolvedLanguage ?? DEFAULT_LANGUAGE)
i18n.on('languageChanged', syncDocument)

export default i18n
