import type { Dictionary } from './ro'

const fr: Dictionary = {
  meta: {
    title: 'Propriétés d’exception en Roumanie',
    description:
      'Des propriétés résidentielles soigneusement sélectionnées, un conseil immobilier discret et un accompagnement transparent, de la première visite à la signature.',
  },
  brand: {
    tagline: 'Immobilier',
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    properties: 'Propriétés',
    services: 'Services',
    contact: 'Contact',
    enquire: 'Demander une visite',
    skip: 'Aller au contenu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    primary: 'Navigation principale',
  },
  language: {
    label: 'Langue',
    choose: 'Choisir la langue',
  },
  hero: {
    eyebrow: 'Immobilier de prestige · Roumanie',
    titleLine1: 'Chez soi, là où',
    titleLine2: 'commence l’horizon.',
    subtitle:
      'Des propriétés résidentielles soigneusement sélectionnées, un conseil discret et un accompagnement transparent — de la première visite à la signature.',
    ctaPrimary: 'Découvrir les propriétés',
    ctaSecondary: 'Prendre rendez-vous',
    scroll: 'Défiler',
    slides: ['Vue mer au coucher du soleil', 'Vue panoramique sur le lac', 'Résidences en bord de mer'],
    slideLabel: 'Image {{current}} sur {{total}}',
    goToSlide: 'Aller à l’image {{n}}',
  },
  manifesto: {
    label: 'Notre philosophie',
    text: 'Une belle maison se reconnaît avant même d’en franchir le seuil : à sa lumière, à son calme et à l’horizon que l’on contemple chaque matin.',
    signature: 'L’équipe',
  },
  about: {
    label: 'À propos',
    title: 'Une approche personnelle de l’immobilier d’exception',
    intro:
      'Nous sommes une agence immobilière dédiée aux propriétés résidentielles de qualité. Nous travaillons avec un nombre restreint de clients afin d’offrir à chacun l’attention, la discrétion et la rigueur qu’une décision importante mérite.',
    intro2:
      'Que vous cherchiez le bien idéal, souhaitiez vendre ou investir, nous vous accompagnons avec des conseils honnêtes, des informations claires et une négociation attentive à vos intérêts.',
    imageAlt: 'Chambre élégante avec panneaux en bois, tissu bleu canard et lustre en cristal',
    imageAlt2: 'Salon lumineux avec canapé en velours vert et table en marbre',
    missionTitle: 'Mission',
    mission:
      'Faire de chaque transaction immobilière une expérience sûre, transparente et sereine, fondée sur la confiance et une connaissance approfondie du marché.',
    visionTitle: 'Vision',
    vision:
      'Devenir le partenaire de référence des clients, en Roumanie comme à l’étranger, à la recherche de propriétés résidentielles de qualité, avec un service aux standards européens.',
    valuesTitle: 'Nos valeurs',
    values: [
      { title: 'Intégrité', text: 'Des recommandations honnêtes, même lorsque la bonne réponse est « pas encore ».' },
      { title: 'Discrétion', text: 'Vos informations et vos intentions restent confidentielles, à chaque étape.' },
      { title: 'Rigueur', text: 'Nous vérifions les documents, analysons les prix et préparons chaque détail.' },
      { title: 'Engagement', text: 'Nous restons à vos côtés bien après la signature.' },
    ],
    approachTitle: 'Notre méthode',
    approach: [
      { title: 'Écouter', text: 'Comprendre votre mode de vie, votre budget et vos objectifs.' },
      { title: 'Sélectionner', text: 'Ne vous présenter que des biens qui répondent vraiment à vos attentes.' },
      { title: 'Négocier', text: 'Défendre vos intérêts avec des arguments et des données de marché.' },
      { title: 'Accompagner', text: 'Coordonner documents, notaire et remise des clés, jusqu’au bout.' },
    ],
  },
  properties: {
    label: 'Propriétés',
    title: 'Une sélection de demeures de caractère',
    subtitle:
      'Chaque propriété est choisie pour sa lumière, son emplacement et la qualité de ses finitions. Découvrez la sélection actuelle.',
    note: 'Les informations affichées sont données à titre indicatif et seront mises à jour avec les offres réelles.',
    featured: 'Coup de cœur',
    bedrooms: 'Chambres',
    bathrooms: 'Salles de bains',
    area: 'Surface',
    price: 'Prix',
    view: 'Voir la propriété',
    bedroomsShort: '{{count}} ch.',
    bathroomsShort: '{{count}} sdb',
    items: {
      'rezidenta-apus': {
        name: 'Résidence Apus',
        location: 'Littoral · Vue mer',
        type: 'Appartement',
        summary: 'Un large balcon face à la mer et des couchers de soleil spectaculaires, à deux pas de la plage.',
        description:
          'Un appartement lumineux doté d’un large balcon donnant directement sur la mer. Les pièces de vie s’ouvrent sur l’horizon et les couchers de soleil font partie du décor. La plage et la promenade sont à quelques pas.',
      },
      'panorama-lac': {
        name: 'Panorama Lac',
        location: 'Bord du lac · Étage élevé',
        type: 'Penthouse',
        summary: 'Des terrasses vitrées offrant une vue panoramique sur le lac, à un étage élevé.',
        description:
          'Situé à un étage élevé, ce penthouse offre des terrasses aux garde-corps en verre et une vue imprenable sur le lac. Le calme de l’eau et la lumière naturelle définissent chaque pièce.',
      },
      'apartament-smarald': {
        name: 'Appartement Émeraude',
        location: 'Quartier résidentiel',
        type: 'Appartement',
        summary: 'Un intérieur élégant avec moulures décoratives, parquet massif et finitions soignées.',
        description:
          'Un intérieur raffiné, avec moulures murales, parquet en bois massif et luminaires en cristal. Le vaste séjour s’ouvre sur un espace repas lumineux.',
      },
      'malul-lacului': {
        name: 'Résidences du Lac',
        location: 'Bord du lac · Espace vert',
        type: 'Programme résidentiel',
        summary: 'Des logements contemporains dans un ensemble ouvert sur le lac et la nature.',
        description:
          'Un ensemble résidentiel contemporain offrant un accès facile aux rives du lac et aux espaces verts environnants. Architecture sobre, toits-terrasses et appartements aux vues dégagées.',
      },
      'rezidente-tarm': {
        name: 'Résidences du Rivage',
        location: 'Front de mer',
        type: 'Appartement',
        summary: 'Une architecture contemporaine aux lignes ondulées, directement sur la plage.',
        description:
          'Des bâtiments à l’architecture contemporaine et aux lignes ondulées, situés directement en bord de mer. Balcons généreux, plage aménagée et une atmosphère de vacances toute l’année.',
      },
    },
  },
  detail: {
    back: 'Retour aux propriétés',
    overview: 'Description',
    keyFacts: 'Caractéristiques',
    type: 'Type de bien',
    location: 'Emplacement',
    updated: 'Mis à jour le {{date}}',
    reference: 'Référence',
    enquireTitle: 'Cette propriété vous intéresse ?',
    enquireText: 'Planifiez une visite ou demandez des informations complémentaires. Nous vous répondrons dans les plus brefs délais.',
    enquire: 'Demander des informations',
    next: 'Propriété suivante',
    notFoundTitle: 'Propriété introuvable',
    notFoundText: 'Cette propriété n’est peut-être plus disponible.',
    backHome: 'Retour à l’accueil',
  },
  interlude: {
    first: 'Lumière, espace et sérénité — les détails qui transforment une propriété en foyer.',
    second: 'Chaque fenêtre raconte une histoire. Nous vous aidons à choisir la vôtre.',
  },
  services: {
    label: 'Services',
    title: 'Une expertise complète, à chaque étape',
    subtitle:
      'De la première conversation à la remise des clés, nous coordonnons chaque étape avec soin et professionnalisme.',
    cta: 'Parler à un conseiller',
    items: [
      {
        title: 'Vente immobilière',
        text: 'Une présentation haut de gamme, une promotion ciblée et une négociation attentive pour obtenir le meilleur prix.',
      },
      {
        title: 'Location',
        text: 'Nous trouvons les bons locataires ou le bon logement, avec des contrats clairs et des vérifications rigoureuses.',
      },
      {
        title: 'Gestion locative',
        text: 'Entretien, locataires et paiements : nous nous occupons de tout pour que votre investissement travaille sereinement.',
      },
      {
        title: 'Conseil en investissement',
        text: 'Analyses de rendement, études de marché et recommandations pour des investissements immobiliers durables.',
      },
      {
        title: 'Estimation immobilière',
        text: 'Des estimations réalistes de la valeur de marché, fondées sur des transactions comparables et les atouts du bien.',
      },
      {
        title: 'Conseil immobilier',
        text: 'Un accompagnement juridique et technique avec des partenaires de confiance, pour des décisions sûres.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Parlons de votre prochaine propriété',
    subtitle:
      'Remplissez le formulaire et un conseiller vous contactera rapidement. Tous les échanges sont confidentiels.',
    phone: 'Téléphone',
    email: 'E-mail',
    address: 'Adresse',
    hours: 'Horaires',
    follow: 'Suivez-nous',
    toBeCompleted: 'À compléter',
    form: {
      name: 'Nom complet',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      property: 'Propriété concernée',
      propertyNone: 'Demande générale',
      message: 'Message',
      consent: 'J’accepte le traitement de mes données personnelles afin d’être recontacté(e).',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours…',
      required: 'Les champs marqués d’un * sont obligatoires.',
      successTitle: 'Merci !',
      successText: 'Votre message a bien été envoyé. Un conseiller vous contactera rapidement.',
      sendAnother: 'Envoyer un autre message',
      errorTitle: 'Le message n’a pas pu être envoyé',
      errorText: 'Une erreur est survenue. Veuillez réessayer dans quelques instants.',
    },
    errors: {
      name: 'Veuillez indiquer votre nom complet.',
      email: 'Veuillez saisir une adresse e-mail valide.',
      phone: 'Veuillez saisir un numéro de téléphone valide.',
      message: 'Votre message doit contenir au moins 10 caractères.',
      consent: 'Votre accord est nécessaire pour que nous puissions vous contacter.',
    },
  },
  footer: {
    description:
      'Agence immobilière dédiée aux propriétés résidentielles de qualité. Un conseil discret, des informations claires et une attention portée à chaque détail.',
    navigation: 'Navigation',
    services: 'Services',
    contact: 'Contact',
    rights: 'Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    backToTop: 'Retour en haut',
  },
  notFound: {
    title: 'Page introuvable',
    text: 'La page recherchée n’existe pas ou a été déplacée.',
  },
}

export default fr
