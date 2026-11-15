import type { Dictionary } from './ro'

const it: Dictionary = {
  meta: {
    title: 'Immobili di pregio in Romania',
    description:
      'Immobili residenziali selezionati con cura, consulenza immobiliare discreta e un percorso trasparente, dalla prima visita alla firma.',
  },
  brand: {
    tagline: 'Immobiliare',
  },
  nav: {
    home: 'Home',
    about: 'Chi siamo',
    properties: 'Immobili',
    services: 'Servizi',
    contact: 'Contatti',
    enquire: 'Richiedi una visita',
    skip: 'Vai al contenuto',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    primary: 'Navigazione principale',
  },
  language: {
    label: 'Lingua',
    choose: 'Scegli la lingua',
  },
  hero: {
    eyebrow: 'Immobili di pregio · Romania',
    titleLine1: 'Casa, là dove',
    titleLine2: 'inizia l’orizzonte.',
    subtitle:
      'Immobili residenziali selezionati con cura, consulenza discreta e un percorso trasparente — dalla prima visita alla firma.',
    ctaPrimary: 'Scopri gli immobili',
    ctaSecondary: 'Prenota una consulenza',
    scroll: 'Scorri',
    slides: ['Vista mare al tramonto', 'Vista panoramica sul lago', 'Residenze fronte mare'],
    slideLabel: 'Immagine {{current}} di {{total}}',
    goToSlide: 'Vai all’immagine {{n}}',
  },
  manifesto: {
    label: 'La nostra filosofia',
    text: 'Una bella casa si riconosce prima ancora di varcarne la soglia: dalla luce, dal silenzio e dall’orizzonte che si contempla ogni mattina.',
    signature: 'Il team',
  },
  about: {
    label: 'Chi siamo',
    title: 'Un approccio personale agli immobili d’eccezione',
    intro:
      'Siamo un’agenzia immobiliare dedicata a immobili residenziali di qualità. Lavoriamo con un numero ristretto di clienti, per offrire a ciascuno l’attenzione, la discrezione e il rigore che una decisione importante merita.',
    intro2:
      'Che cerchiate la casa giusta, desideriate vendere o investire, vi accompagniamo con consigli onesti, informazioni chiare e una trattativa attenta ai vostri interessi.',
    imageAlt: 'Camera da letto elegante con pannelli in legno, imbottiti color ottanio e lampadario di cristallo',
    imageAlt2: 'Soggiorno luminoso con divano in velluto verde e tavolo in marmo',
    missionTitle: 'Missione',
    mission:
      'Rendere ogni transazione immobiliare un’esperienza sicura, trasparente e serena, fondata sulla fiducia e su una conoscenza approfondita del mercato.',
    visionTitle: 'Visione',
    vision:
      'Diventare il partner di riferimento per i clienti, in Romania e all’estero, alla ricerca di immobili residenziali di qualità, con un servizio di livello europeo.',
    valuesTitle: 'I nostri valori',
    values: [
      { title: 'Integrità', text: 'Consigli onesti, anche quando la risposta giusta è «non ancora».' },
      { title: 'Discrezione', text: 'Le vostre informazioni e intenzioni restano riservate in ogni fase.' },
      { title: 'Rigore', text: 'Verifichiamo i documenti, analizziamo i prezzi e curiamo ogni dettaglio.' },
      { title: 'Impegno', text: 'Restiamo al vostro fianco anche dopo la firma.' },
    ],
    approachTitle: 'Il nostro metodo',
    approach: [
      { title: 'Ascoltare', text: 'Comprendiamo il vostro stile di vita, il budget e gli obiettivi.' },
      { title: 'Selezionare', text: 'Vi presentiamo solo immobili davvero in linea con le vostre esigenze.' },
      { title: 'Negoziare', text: 'Tuteliamo i vostri interessi con argomenti e dati di mercato.' },
      { title: 'Accompagnare', text: 'Coordiniamo documenti, notaio e consegna, fino alla fine.' },
    ],
  },
  properties: {
    label: 'Immobili',
    title: 'Una selezione di case con personalità',
    subtitle:
      'Ogni immobile è scelto per la luce, la posizione e la qualità delle finiture. Scoprite la selezione attuale.',
    note: 'I dettagli mostrati sono indicativi e verranno aggiornati con le offerte reali.',
    featured: 'In evidenza',
    bedrooms: 'Camere',
    bathrooms: 'Bagni',
    area: 'Superficie',
    price: 'Prezzo',
    view: 'Vedi l’immobile',
    bedroomsShort: '{{count}} camere',
    bathroomsShort: '{{count}} bagni',
    items: {
      'rezidenta-apus': {
        name: 'Residenza Apus',
        location: 'Litorale · Vista mare',
        type: 'Appartamento',
        summary: 'Un ampio balcone affacciato sul mare e tramonti spettacolari, a pochi passi dalla spiaggia.',
        description:
          'Un appartamento luminoso con un ampio balcone affacciato direttamente sul mare. Gli spazi giorno si aprono verso l’orizzonte e i tramonti diventano parte dell’arredo. La spiaggia e il lungomare sono a pochi passi.',
      },
      'panorama-lac': {
        name: 'Panorama Lago',
        location: 'Sul lago · Piano alto',
        type: 'Attico',
        summary: 'Terrazze vetrate con vista panoramica sul lago, a un piano alto.',
        description:
          'Situato a un piano alto, questo attico offre terrazze con parapetti in vetro e una vista ininterrotta sul lago. La quiete dell’acqua e la luce naturale definiscono ogni ambiente.',
      },
      'apartament-smarald': {
        name: 'Appartamento Smeraldo',
        location: 'Zona residenziale',
        type: 'Appartamento',
        summary: 'Interni eleganti con cornici decorative, parquet in legno massello e finiture curate.',
        description:
          'Interni raffinati, con cornici decorative alle pareti, parquet in legno massello e lampadari di cristallo. L’ampio soggiorno si apre su una luminosa zona pranzo.',
      },
      'malul-lacului': {
        name: 'Residenze sul Lago',
        location: 'Sul lago · Area verde',
        type: 'Complesso residenziale',
        summary: 'Abitazioni contemporanee in un complesso aperto sul lago e sul verde.',
        description:
          'Un complesso residenziale contemporaneo con facile accesso alla riva del lago e agli spazi verdi circostanti. Architettura sobria, terrazze sul tetto e appartamenti con viste aperte.',
      },
      'rezidente-tarm': {
        name: 'Residenze sulla Riva',
        location: 'Fronte mare',
        type: 'Appartamento',
        summary: 'Architettura contemporanea dalle linee sinuose, direttamente sulla spiaggia.',
        description:
          'Edifici dall’architettura contemporanea e dalle linee sinuose, situati direttamente sul mare. Balconi generosi, spiaggia attrezzata e un’atmosfera di vacanza tutto l’anno.',
      },
    },
  },
  detail: {
    back: 'Torna agli immobili',
    overview: 'Descrizione',
    keyFacts: 'Caratteristiche',
    type: 'Tipologia',
    location: 'Posizione',
    updated: 'Aggiornato il {{date}}',
    reference: 'Riferimento',
    enquireTitle: 'Vi interessa questo immobile?',
    enquireText: 'Prenotate una visita o richiedete ulteriori informazioni. Vi risponderemo il prima possibile.',
    enquire: 'Richiedi informazioni',
    next: 'Immobile successivo',
    notFoundTitle: 'Immobile non trovato',
    notFoundText: 'Questo immobile potrebbe non essere più disponibile.',
    backHome: 'Torna alla home',
  },
  interlude: {
    first: 'Luce, spazio e quiete — i dettagli che trasformano un immobile in una casa.',
    second: 'Ogni finestra racconta una storia. Vi aiutiamo a scegliere la vostra.',
  },
  services: {
    label: 'Servizi',
    title: 'Competenza completa, in ogni fase',
    subtitle:
      'Dal primo colloquio alla consegna delle chiavi, coordiniamo ogni fase con cura e professionalità.',
    cta: 'Parla con un consulente',
    items: [
      {
        title: 'Compravendita',
        text: 'Presentazione di alto livello, promozione mirata e trattativa attenta per ottenere il miglior prezzo.',
      },
      {
        title: 'Locazioni',
        text: 'Troviamo gli inquilini o la casa giusta, con contratti chiari e verifiche accurate per entrambe le parti.',
      },
      {
        title: 'Gestione immobiliare',
        text: 'Ci occupiamo di manutenzione, inquilini e pagamenti, perché il vostro investimento renda senza pensieri.',
      },
      {
        title: 'Consulenza sugli investimenti',
        text: 'Analisi di rendimento, studi di mercato e raccomandazioni per investimenti immobiliari sostenibili.',
      },
      {
        title: 'Valutazione immobiliare',
        text: 'Stime realistiche del valore di mercato, basate su transazioni comparabili e sulle caratteristiche dell’immobile.',
      },
      {
        title: 'Consulenza immobiliare',
        text: 'Assistenza legale e tecnica con partner di fiducia, per decisioni sicure.',
      },
    ],
  },
  contact: {
    label: 'Contatti',
    title: 'Parliamo del vostro prossimo immobile',
    subtitle:
      'Compilate il modulo e un consulente vi contatterà al più presto. Tutte le conversazioni sono riservate.',
    phone: 'Telefono',
    email: 'E-mail',
    address: 'Indirizzo',
    hours: 'Orari',
    follow: 'Seguiteci',
    toBeCompleted: 'Da completare',
    form: {
      name: 'Nome e cognome',
      email: 'Indirizzo e-mail',
      phone: 'Numero di telefono',
      property: 'Immobile di interesse',
      propertyNone: 'Richiesta generale',
      message: 'Messaggio',
      consent: 'Acconsento al trattamento dei miei dati personali al fine di essere ricontattato/a.',
      submit: 'Invia il messaggio',
      sending: 'Invio in corso…',
      required: 'I campi contrassegnati da * sono obbligatori.',
      successTitle: 'Grazie!',
      successText: 'Il messaggio è stato inviato. Un consulente vi contatterà al più presto.',
      sendAnother: 'Invia un altro messaggio',
      errorTitle: 'Impossibile inviare il messaggio',
      errorText: 'Si è verificato un errore. Riprovate tra qualche istante.',
    },
    errors: {
      name: 'Inserite il vostro nome e cognome.',
      email: 'Inserite un indirizzo e-mail valido.',
      phone: 'Inserite un numero di telefono valido.',
      message: 'Il messaggio deve contenere almeno 10 caratteri.',
      consent: 'Il vostro consenso è necessario per potervi contattare.',
    },
  },
  footer: {
    description:
      'Agenzia immobiliare dedicata a immobili residenziali di qualità. Consulenza discreta, informazioni chiare e attenzione a ogni dettaglio.',
    navigation: 'Navigazione',
    services: 'Servizi',
    contact: 'Contatti',
    rights: 'Tutti i diritti riservati.',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini e condizioni',
    backToTop: 'Torna su',
  },
  notFound: {
    title: 'Pagina non trovata',
    text: 'La pagina cercata non esiste o è stata spostata.',
  },
}

export default it
