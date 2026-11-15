/**
 * COMPANY INFORMATION — PLACEHOLDERS
 * ---------------------------------------------------------------
 * Nothing in this file is real company data. Replace every value
 * marked PLACEHOLDER with your actual details. Contact fields left
 * as `null` are displayed as "De completat" / "To be completed".
 */
export const site = {
  /** PLACEHOLDER — your company / brand name */
  brandName: 'Atelier Imobiliar',

  contact: {
    /** PLACEHOLDER — e.g. '+40 7xx xxx xxx' */
    phone: null as string | null,
    /** PLACEHOLDER — e.g. 'contact@yourdomain.ro' */
    email: null as string | null,
    /** PLACEHOLDER — street, city, county */
    address: null as string | null,
    /** PLACEHOLDER — e.g. 'Lun – Vin, 09:00 – 18:00' */
    hours: null as string | null,
  },

  /** PLACEHOLDER — set the URL for each network, or null to hide it */
  social: {
    instagram: '#' as string | null,
    facebook: '#' as string | null,
    linkedin: '#' as string | null,
  },
}

export type SocialNetwork = keyof typeof site.social
