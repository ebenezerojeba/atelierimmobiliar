/**
 * Supported languages. To add a language:
 *   1. create `locales/<code>.ts` typed as `Dictionary`
 *   2. register it in `i18n/index.ts` resources
 *   3. add an entry here (+ a flag in components/ui/Flag.tsx)
 */
export const LANGUAGES = [
  { code: 'ro', locale: 'ro-RO', name: 'Română', ogLocale: 'ro_RO' },
  { code: 'en', locale: 'en-GB', name: 'English', ogLocale: 'en_GB' },
  { code: 'fr', locale: 'fr-FR', name: 'Français', ogLocale: 'fr_FR' },
  { code: 'de', locale: 'de-DE', name: 'Deutsch', ogLocale: 'de_DE' },
  { code: 'it', locale: 'it-IT', name: 'Italiano', ogLocale: 'it_IT' },
] as const

export type LanguageCode = (typeof LANGUAGES)[number]['code']

export const DEFAULT_LANGUAGE: LanguageCode = 'ro'
export const STORAGE_KEY = 'site-language'

export function getLanguage(code: string | undefined) {
  return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0]
}
