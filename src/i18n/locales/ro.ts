/**
 * ROMANIAN — source language.
 * Every other dictionary is typed against this file, so a missing key
 * in any translation is a TypeScript error.
 */
const ro = {
  meta: {
    title: 'Proprietăți premium în România',
    description:
      'Proprietăți rezidențiale atent selectate, consultanță imobiliară discretă și un parcurs transparent, de la prima vizionare până la semnarea actelor.',
  },
  brand: {
    tagline: 'Imobiliare',
  },
  nav: {
    home: 'Acasă',
    about: 'Despre noi',
    properties: 'Proprietăți',
    services: 'Servicii',
    contact: 'Contact',
    enquire: 'Solicită o vizionare',
    skip: 'Sari la conținut',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
    primary: 'Navigație principală',
  },
  language: {
    label: 'Limba',
    choose: 'Alege limba',
  },
  hero: {
    eyebrow: 'Imobiliare premium · România',
    titleLine1: 'Acasă, acolo unde',
    titleLine2: 'începe orizontul.',
    subtitle:
      'Proprietăți rezidențiale atent selectate, consultanță discretă și un parcurs transparent — de la prima vizionare până la semnarea actelor.',
    ctaPrimary: 'Descoperă proprietățile',
    ctaSecondary: 'Programează o consultanță',
    scroll: 'Derulează',
    slides: ['Vedere la mare, la apus', 'Vedere panoramică la lac', 'Rezidențe la malul mării'],
    slideLabel: 'Imaginea {{current}} din {{total}}',
    goToSlide: 'Mergi la imaginea {{n}}',
  },
  manifesto: {
    label: 'Filosofia noastră',
    text: 'O casă bună se recunoaște înainte de a trece pragul: în lumină, în liniște și în orizontul pe care îl privești în fiecare dimineață.',
    signature: 'Echipa',
  },
  about: {
    label: 'Despre noi',
    title: 'O abordare personală a imobiliarelor de excepție',
    intro:
      'Suntem o agenție imobiliară dedicată proprietăților rezidențiale de calitate. Lucrăm cu un număr restrâns de clienți, pentru a oferi fiecăruia atenția, discreția și rigoarea pe care o decizie importantă le merită.',
    intro2:
      'Fie că vă căutați locuința potrivită, doriți să vindeți sau să investiți, vă însoțim cu recomandări oneste, informații clare și o negociere atentă la interesele dumneavoastră.',
    imageAlt: 'Dormitor elegant cu panouri din lemn, tapițerie turcoaz și candelabru de cristal',
    imageAlt2: 'Living luminos cu canapea din catifea verde și masă din marmură',
    missionTitle: 'Misiune',
    mission:
      'Să facem din fiecare tranzacție imobiliară o experiență sigură, transparentă și lipsită de griji, construită pe încredere și pe o cunoaștere temeinică a pieței.',
    visionTitle: 'Viziune',
    vision:
      'Să devenim partenerul de referință pentru clienții din România și din străinătate care caută proprietăți rezidențiale de calitate, cu un serviciu la standarde europene.',
    valuesTitle: 'Valorile noastre',
    values: [
      { title: 'Integritate', text: 'Recomandări oneste, chiar și atunci când răspunsul corect este „nu încă”.' },
      { title: 'Discreție', text: 'Informațiile și intențiile dumneavoastră rămân confidențiale, în fiecare etapă.' },
      { title: 'Rigoare', text: 'Verificăm documentele, analizăm prețurile și pregătim fiecare detaliu.' },
      { title: 'Angajament', text: 'Rămânem alături de dumneavoastră și după semnarea actelor.' },
    ],
    approachTitle: 'Cum lucrăm',
    approach: [
      { title: 'Ascultăm', text: 'Înțelegem stilul de viață, bugetul și obiectivele dumneavoastră.' },
      { title: 'Selectăm', text: 'Vă prezentăm doar proprietăți care corespund cu adevărat cerințelor.' },
      { title: 'Negociem', text: 'Susținem interesele dumneavoastră cu argumente și date de piață.' },
      { title: 'Însoțim', text: 'Coordonăm documentele, notarul și predarea, până la final.' },
    ],
  },
  properties: {
    label: 'Proprietăți',
    title: 'O selecție de locuințe cu personalitate',
    subtitle:
      'Fiecare proprietate este aleasă pentru lumină, amplasament și calitatea finisajelor. Descoperiți selecția curentă.',
    note: 'Detaliile afișate sunt exemplificative și vor fi actualizate cu ofertele reale.',
    featured: 'Recomandată',
    bedrooms: 'Dormitoare',
    bathrooms: 'Băi',
    area: 'Suprafață',
    price: 'Preț',
    view: 'Vezi proprietatea',
    bedroomsShort: '{{count}} dorm.',
    bathroomsShort: '{{count}} băi',
    items: {
      'rezidenta-apus': {
        name: 'Rezidența Apus',
        location: 'Litoral · Vedere la mare',
        type: 'Apartament',
        summary: 'Balcon generos orientat spre mare și apusuri spectaculoase, la câțiva pași de plajă.',
        description:
          'Un apartament luminos, cu balcon generos orientat direct spre mare. Spațiile de zi se deschid către orizont, iar apusurile devin parte din decor. Plaja și promenada se află la doar câțiva pași.',
      },
      'panorama-lac': {
        name: 'Panorama Lac',
        location: 'Malul lacului · Etaj superior',
        type: 'Penthouse',
        summary: 'Terase vitrate cu vedere panoramică asupra lacului, la un etaj superior.',
        description:
          'Situat la un etaj superior, acest penthouse oferă terase cu balustrade din sticlă și o vedere neîntreruptă asupra lacului. Liniștea apei și lumina naturală definesc fiecare încăpere.',
      },
      'apartament-smarald': {
        name: 'Apartament Smarald',
        location: 'Zonă rezidențială',
        type: 'Apartament',
        summary: 'Interior elegant, cu profile decorative, parchet din lemn masiv și finisaje atent alese.',
        description:
          'Un interior rafinat, cu profile decorative pe pereți, parchet din lemn masiv și corpuri de iluminat din cristal. Livingul generos se deschide spre o zonă de dining luminoasă.',
      },
      'malul-lacului': {
        name: 'Ansamblul Malul Lacului',
        location: 'Malul lacului · Zonă verde',
        type: 'Ansamblu rezidențial',
        summary: 'Locuințe contemporane într-un ansamblu cu deschidere spre lac și spații verzi.',
        description:
          'Un ansamblu rezidențial contemporan, cu acces facil către malul lacului și spațiile verzi din jur. Arhitectură sobră, terase pe acoperiș și apartamente cu vedere deschisă.',
      },
      'rezidente-tarm': {
        name: 'Rezidențele Țărm',
        location: 'Front de mare',
        type: 'Apartament',
        summary: 'Arhitectură contemporană cu linii ondulate, direct pe plajă.',
        description:
          'Clădiri cu arhitectură contemporană și linii ondulate, amplasate direct la malul mării. Balcoane generoase, plajă amenajată și o atmosferă de vacanță pe tot parcursul anului.',
      },
    },
  },
  detail: {
    back: 'Înapoi la proprietăți',
    overview: 'Descriere',
    keyFacts: 'Caracteristici',
    type: 'Tip proprietate',
    location: 'Locație',
    updated: 'Actualizat la {{date}}',
    reference: 'Referință',
    enquireTitle: 'Vă interesează această proprietate?',
    enquireText: 'Programați o vizionare sau solicitați informații suplimentare. Vă răspundem în cel mai scurt timp.',
    enquire: 'Solicită informații',
    next: 'Proprietatea următoare',
    notFoundTitle: 'Proprietatea nu a fost găsită',
    notFoundText: 'Este posibil ca această proprietate să nu mai fie disponibilă.',
    backHome: 'Înapoi la pagina principală',
  },
  interlude: {
    first: 'Lumină, spațiu și liniște — detaliile care transformă o proprietate într-un cămin.',
    second: 'Fiecare fereastră spune o poveste. Noi vă ajutăm să o alegeți pe a dumneavoastră.',
  },
  services: {
    label: 'Servicii',
    title: 'Expertiză completă, la fiecare pas',
    subtitle:
      'De la prima discuție până la predarea cheilor, coordonăm fiecare etapă cu atenție și profesionalism.',
    cta: 'Discutați cu un consultant',
    items: [
      {
        title: 'Vânzări imobiliare',
        text: 'Prezentare premium a proprietății, promovare țintită și negociere atentă pentru a obține cel mai bun preț.',
      },
      {
        title: 'Închirieri',
        text: 'Găsim chiriașii sau locuința potrivită, cu contracte clare și verificări atente pentru ambele părți.',
      },
      {
        title: 'Administrare proprietăți',
        text: 'Ne ocupăm de întreținere, chiriași și plăți, astfel încât investiția dumneavoastră să lucreze fără griji.',
      },
      {
        title: 'Consultanță pentru investiții',
        text: 'Analize de randament, studii de piață și recomandări pentru investiții imobiliare sustenabile.',
      },
      {
        title: 'Evaluare imobiliară',
        text: 'Estimări realiste ale valorii de piață, bazate pe tranzacții comparabile și pe caracteristicile proprietății.',
      },
      {
        title: 'Consultanță imobiliară',
        text: 'Îndrumare juridică și tehnică în colaborare cu parteneri de încredere, pentru decizii sigure.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Să vorbim despre următoarea dumneavoastră proprietate',
    subtitle:
      'Completați formularul și un consultant vă va contacta în cel mai scurt timp. Toate discuțiile sunt confidențiale.',
    phone: 'Telefon',
    email: 'E-mail',
    address: 'Adresă',
    hours: 'Program',
    follow: 'Urmăriți-ne',
    toBeCompleted: 'De completat',
    form: {
      name: 'Nume complet',
      email: 'Adresă de e-mail',
      phone: 'Număr de telefon',
      property: 'Proprietatea de interes',
      propertyNone: 'Interes general',
      message: 'Mesaj',
      consent: 'Sunt de acord cu prelucrarea datelor personale în scopul de a fi contactat(ă).',
      submit: 'Trimite mesajul',
      sending: 'Se trimite…',
      required: 'Câmpurile marcate cu * sunt obligatorii.',
      successTitle: 'Vă mulțumim!',
      successText: 'Mesajul a fost trimis. Un consultant vă va contacta în cel mai scurt timp.',
      sendAnother: 'Trimite un alt mesaj',
      errorTitle: 'Mesajul nu a putut fi trimis',
      errorText: 'A apărut o eroare. Vă rugăm să încercați din nou în câteva momente.',
    },
    errors: {
      name: 'Vă rugăm să introduceți numele complet.',
      email: 'Vă rugăm să introduceți o adresă de e-mail validă.',
      phone: 'Vă rugăm să introduceți un număr de telefon valid.',
      message: 'Mesajul trebuie să conțină cel puțin 10 caractere.',
      consent: 'Este necesar acordul dumneavoastră pentru a vă putea contacta.',
    },
  },
  footer: {
    description:
      'Agenție imobiliară dedicată proprietăților rezidențiale de calitate. Consultanță discretă, informații clare și un serviciu atent la fiecare detaliu.',
    navigation: 'Navigație',
    services: 'Servicii',
    contact: 'Contact',
    rights: 'Toate drepturile rezervate.',
    privacy: 'Politica de confidențialitate',
    terms: 'Termeni și condiții',
    backToTop: 'Înapoi sus',
  },
  notFound: {
    title: 'Pagina nu a fost găsită',
    text: 'Pagina căutată nu există sau a fost mutată.',
  },
}

export default ro
export type Dictionary = typeof ro
