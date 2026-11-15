import type { ImageKey } from '../lib/images'

/**
 * PROPERTY DATA — ILLUSTRATIVE PLACEHOLDERS
 * ---------------------------------------------------------------
 * Prices, rooms, surfaces and dates below are example values only.
 * Replace them with real listing data. Translatable text (name,
 * location, type, descriptions) lives in src/i18n/locales/*.ts
 * under `properties.items.<id>`.
 */
export type PropertyId =
  | 'rezidenta-apus'
  | 'panorama-lac'
  | 'apartament-smarald'
  | 'malul-lacului'
  | 'rezidente-tarm'

export type Property = {
  id: PropertyId
  reference: string
  image: ImageKey
  /** CSS object-position for the best crop */
  focus: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  updated: string
  featured?: boolean
}

export const properties: Property[] = [
  {
    id: 'rezidenta-apus',
    reference: 'REF-001',
    image: 'seaSunset',
    focus: '55% 50%',
    price: 385000,
    bedrooms: 2,
    bathrooms: 2,
    area: 98,
    updated: '2026-11-01',
    featured: true,
  },
  {
    id: 'panorama-lac',
    reference: 'REF-002',
    image: 'lakeView',
    focus: '50% 50%',
    price: 540000,
    bedrooms: 3,
    bathrooms: 2,
    area: 146,
    updated: '2026-10-24',
  },
  {
    id: 'apartament-smarald',
    reference: 'REF-003',
    image: 'livingRoom',
    focus: '50% 60%',
    price: 295000,
    bedrooms: 2,
    bathrooms: 1,
    area: 84,
    updated: '2026-10-18',
  },
  {
    id: 'malul-lacului',
    reference: 'REF-004',
    image: 'lakesideResidences',
    focus: '50% 62%',
    price: 210000,
    bedrooms: 2,
    bathrooms: 1,
    area: 72,
    updated: '2026-10-10',
  },
  {
    id: 'rezidente-tarm',
    reference: 'REF-005',
    image: 'beachfront',
    focus: '40% 62%',
    price: 320000,
    bedrooms: 2,
    bathrooms: 2,
    area: 89,
    updated: '2026-09-28',
  },
]

export const getProperty = (id: string | undefined) => properties.find((p) => p.id === id)
