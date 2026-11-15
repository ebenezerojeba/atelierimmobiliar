import type { Dictionary } from './ro'

const de: Dictionary = {
  meta: {
    title: 'Premium-Immobilien in Rumänien',
    description:
      'Sorgfältig ausgewählte Wohnimmobilien, diskrete Immobilienberatung und ein transparenter Ablauf – von der ersten Besichtigung bis zur Unterschrift.',
  },
  brand: {
    tagline: 'Immobilien',
  },
  nav: {
    home: 'Startseite',
    about: 'Über uns',
    properties: 'Immobilien',
    services: 'Leistungen',
    contact: 'Kontakt',
    enquire: 'Besichtigung anfragen',
    skip: 'Zum Inhalt springen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    primary: 'Hauptnavigation',
  },
  language: {
    label: 'Sprache',
    choose: 'Sprache wählen',
  },
  hero: {
    eyebrow: 'Premium-Immobilien · Rumänien',
    titleLine1: 'Zuhause, dort wo',
    titleLine2: 'der Horizont beginnt.',
    subtitle:
      'Sorgfältig ausgewählte Wohnimmobilien, diskrete Beratung und ein transparenter Ablauf – von der ersten Besichtigung bis zur Unterschrift.',
    ctaPrimary: 'Immobilien entdecken',
    ctaSecondary: 'Beratung vereinbaren',
    scroll: 'Scrollen',
    slides: ['Meerblick bei Sonnenuntergang', 'Panoramablick auf den See', 'Residenzen direkt am Meer'],
    slideLabel: 'Bild {{current}} von {{total}}',
    goToSlide: 'Zu Bild {{n}}',
  },
  manifesto: {
    label: 'Unsere Philosophie',
    text: 'Ein gutes Zuhause erkennt man, bevor man die Schwelle überschreitet: am Licht, an der Ruhe und am Horizont, den man jeden Morgen betrachtet.',
    signature: 'Das Team',
  },
  about: {
    label: 'Über uns',
    title: 'Ein persönlicher Zugang zu außergewöhnlichen Immobilien',
    intro:
      'Wir sind eine Immobilienagentur, die sich hochwertigen Wohnimmobilien widmet. Wir arbeiten mit einer begrenzten Zahl von Kunden, um jedem die Aufmerksamkeit, Diskretion und Sorgfalt zu bieten, die eine wichtige Entscheidung verdient.',
    intro2:
      'Ob Sie das passende Zuhause suchen, verkaufen oder investieren möchten – wir begleiten Sie mit ehrlicher Beratung, klaren Informationen und einer Verhandlung, die Ihre Interessen in den Mittelpunkt stellt.',
    imageAlt: 'Elegantes Schlafzimmer mit Holzlamellen, petrolfarbenen Polstern und Kristallleuchter',
    imageAlt2: 'Helles Wohnzimmer mit grünem Samtsofa und Marmortisch',
    missionTitle: 'Mission',
    mission:
      'Jede Immobilientransaktion zu einer sicheren, transparenten und sorgenfreien Erfahrung zu machen – auf der Grundlage von Vertrauen und fundierter Marktkenntnis.',
    visionTitle: 'Vision',
    vision:
      'Der bevorzugte Partner für Kunden aus Rumänien und dem Ausland zu werden, die hochwertige Wohnimmobilien suchen – mit einem Service nach europäischen Standards.',
    valuesTitle: 'Unsere Werte',
    values: [
      { title: 'Integrität', text: 'Ehrliche Empfehlungen – auch wenn die richtige Antwort „noch nicht“ lautet.' },
      { title: 'Diskretion', text: 'Ihre Informationen und Absichten bleiben in jeder Phase vertraulich.' },
      { title: 'Sorgfalt', text: 'Wir prüfen Unterlagen, analysieren Preise und bereiten jedes Detail vor.' },
      { title: 'Engagement', text: 'Wir bleiben auch nach der Vertragsunterzeichnung an Ihrer Seite.' },
    ],
    approachTitle: 'So arbeiten wir',
    approach: [
      { title: 'Zuhören', text: 'Wir verstehen Ihren Lebensstil, Ihr Budget und Ihre Ziele.' },
      { title: 'Auswählen', text: 'Wir zeigen Ihnen nur Immobilien, die wirklich zu Ihnen passen.' },
      { title: 'Verhandeln', text: 'Wir vertreten Ihre Interessen mit Argumenten und Marktdaten.' },
      { title: 'Begleiten', text: 'Wir koordinieren Unterlagen, Notar und Übergabe – bis zum Schluss.' },
    ],
  },
  properties: {
    label: 'Immobilien',
    title: 'Eine Auswahl an Wohnungen mit Charakter',
    subtitle:
      'Jede Immobilie wird nach Licht, Lage und Qualität der Ausstattung ausgewählt. Entdecken Sie die aktuelle Auswahl.',
    note: 'Die angezeigten Angaben dienen der Veranschaulichung und werden mit den tatsächlichen Angeboten aktualisiert.',
    featured: 'Empfehlung',
    bedrooms: 'Schlafzimmer',
    bathrooms: 'Badezimmer',
    area: 'Wohnfläche',
    price: 'Preis',
    view: 'Immobilie ansehen',
    bedroomsShort: '{{count}} Schlafz.',
    bathroomsShort: '{{count}} Bäder',
    items: {
      'rezidenta-apus': {
        name: 'Residenz Apus',
        location: 'Küste · Meerblick',
        type: 'Wohnung',
        summary: 'Großzügiger Balkon mit Blick aufs Meer und spektakulären Sonnenuntergängen, nur wenige Schritte vom Strand.',
        description:
          'Eine helle Wohnung mit großzügigem Balkon direkt zum Meer. Die Wohnräume öffnen sich zum Horizont, und die Sonnenuntergänge werden Teil der Einrichtung. Strand und Promenade liegen nur wenige Schritte entfernt.',
      },
      'panorama-lac': {
        name: 'Seepanorama',
        location: 'Seeufer · Obergeschoss',
        type: 'Penthouse',
        summary: 'Verglaste Terrassen mit Panoramablick über den See, in einem oberen Stockwerk.',
        description:
          'Dieses Penthouse in einem oberen Stockwerk bietet Terrassen mit Glasbrüstungen und einen unverbauten Blick über den See. Die Ruhe des Wassers und das natürliche Licht prägen jeden Raum.',
      },
      'apartament-smarald': {
        name: 'Wohnung Smaragd',
        location: 'Wohngebiet',
        type: 'Wohnung',
        summary: 'Elegantes Interieur mit Stuckprofilen, Massivholzparkett und sorgfältig gewählten Materialien.',
        description:
          'Ein raffiniertes Interieur mit dekorativen Wandprofilen, Massivholzparkett und Kristallleuchten. Das großzügige Wohnzimmer öffnet sich zu einem hellen Essbereich.',
      },
      'malul-lacului': {
        name: 'Residenzen am Seeufer',
        location: 'Seeufer · Grünlage',
        type: 'Wohnanlage',
        summary: 'Zeitgemäße Wohnungen in einer Anlage mit Blick auf den See und viel Grün.',
        description:
          'Eine zeitgemäße Wohnanlage mit bequemem Zugang zum Seeufer und den umliegenden Grünflächen. Schlichte Architektur, Dachterrassen und Wohnungen mit freiem Blick.',
      },
      'rezidente-tarm': {
        name: 'Residenzen am Ufer',
        location: 'Direkt am Meer',
        type: 'Wohnung',
        summary: 'Zeitgemäße Architektur mit geschwungenen Linien, direkt am Strand.',
        description:
          'Gebäude mit zeitgemäßer Architektur und geschwungenen Linien, direkt am Meer gelegen. Großzügige Balkone, ein gepflegter Strandbereich und das ganze Jahr über Urlaubsatmosphäre.',
      },
    },
  },
  detail: {
    back: 'Zurück zu den Immobilien',
    overview: 'Beschreibung',
    keyFacts: 'Eckdaten',
    type: 'Objektart',
    location: 'Lage',
    updated: 'Aktualisiert am {{date}}',
    reference: 'Referenz',
    enquireTitle: 'Interesse an dieser Immobilie?',
    enquireText: 'Vereinbaren Sie eine Besichtigung oder fordern Sie weitere Informationen an. Wir melden uns schnellstmöglich bei Ihnen.',
    enquire: 'Informationen anfordern',
    next: 'Nächste Immobilie',
    notFoundTitle: 'Immobilie nicht gefunden',
    notFoundText: 'Diese Immobilie ist möglicherweise nicht mehr verfügbar.',
    backHome: 'Zurück zur Startseite',
  },
  interlude: {
    first: 'Licht, Raum und Ruhe – die Details, die eine Immobilie zu einem Zuhause machen.',
    second: 'Jedes Fenster erzählt eine Geschichte. Wir helfen Ihnen, Ihre zu wählen.',
  },
  services: {
    label: 'Leistungen',
    title: 'Umfassende Expertise in jeder Phase',
    subtitle:
      'Vom ersten Gespräch bis zur Schlüsselübergabe koordinieren wir jeden Schritt mit Sorgfalt und Professionalität.',
    cta: 'Mit einem Berater sprechen',
    items: [
      {
        title: 'Immobilienverkauf',
        text: 'Hochwertige Präsentation, gezielte Vermarktung und sorgfältige Verhandlung für den bestmöglichen Preis.',
      },
      {
        title: 'Vermietung',
        text: 'Wir finden passende Mieter oder die richtige Wohnung – mit klaren Verträgen und sorgfältigen Prüfungen für beide Seiten.',
      },
      {
        title: 'Immobilienverwaltung',
        text: 'Wir kümmern uns um Instandhaltung, Mieter und Zahlungen, damit Ihre Investition sorgenfrei für Sie arbeitet.',
      },
      {
        title: 'Investmentberatung',
        text: 'Renditeanalysen, Marktstudien und Empfehlungen für nachhaltige Immobilieninvestitionen.',
      },
      {
        title: 'Immobilienbewertung',
        text: 'Realistische Marktwertschätzungen auf Basis vergleichbarer Transaktionen und der Merkmale der Immobilie.',
      },
      {
        title: 'Immobilienberatung',
        text: 'Rechtliche und technische Begleitung mit vertrauenswürdigen Partnern für sichere Entscheidungen.',
      },
    ],
  },
  contact: {
    label: 'Kontakt',
    title: 'Sprechen wir über Ihre nächste Immobilie',
    subtitle:
      'Füllen Sie das Formular aus und ein Berater meldet sich in Kürze bei Ihnen. Alle Gespräche sind vertraulich.',
    phone: 'Telefon',
    email: 'E-Mail',
    address: 'Adresse',
    hours: 'Öffnungszeiten',
    follow: 'Folgen Sie uns',
    toBeCompleted: 'Wird ergänzt',
    form: {
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      property: 'Gewünschte Immobilie',
      propertyNone: 'Allgemeine Anfrage',
      message: 'Nachricht',
      consent: 'Ich stimme der Verarbeitung meiner personenbezogenen Daten zum Zweck der Kontaktaufnahme zu.',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet…',
      required: 'Mit * gekennzeichnete Felder sind Pflichtfelder.',
      successTitle: 'Vielen Dank!',
      successText: 'Ihre Nachricht wurde gesendet. Ein Berater meldet sich in Kürze bei Ihnen.',
      sendAnother: 'Weitere Nachricht senden',
      errorTitle: 'Die Nachricht konnte nicht gesendet werden',
      errorText: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es in wenigen Augenblicken erneut.',
    },
    errors: {
      name: 'Bitte geben Sie Ihren vollständigen Namen ein.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      phone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
      message: 'Ihre Nachricht muss mindestens 10 Zeichen enthalten.',
      consent: 'Wir benötigen Ihre Zustimmung, um Sie kontaktieren zu können.',
    },
  },
  footer: {
    description:
      'Eine Immobilienagentur für hochwertige Wohnimmobilien. Diskrete Beratung, klare Informationen und Aufmerksamkeit für jedes Detail.',
    navigation: 'Navigation',
    services: 'Leistungen',
    contact: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
    privacy: 'Datenschutzerklärung',
    terms: 'Allgemeine Geschäftsbedingungen',
    backToTop: 'Nach oben',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
  },
}

export default de
