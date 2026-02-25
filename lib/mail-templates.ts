import { formatDateFR } from "./warranty-calculator";

export type MailTone = "poli" | "standard" | "ferme";

export interface MailFormData {
  applianceType: string;
  brand: string;
  purchaseDate: string;
  store: string;
  problemDescription: string;
  hasReceipt: boolean;
  customerName: string;
  tone: MailTone;
}

export interface GeneratedMail {
  subject: string;
  body: string;
  type: "reclamation" | "relance";
}

export const toneLabels: Record<MailTone, { label: string; description: string }> = {
  poli: {
    label: "Poli",
    description: "Ton courtois et diplomate. Idéal pour un premier contact.",
  },
  standard: {
    label: "Standard",
    description: "Ton professionnel et direct. Cite les articles de loi.",
  },
  ferme: {
    label: "Ferme",
    description: "Ton assertif avec mention de recours. Pour les cas urgents.",
  },
};

/**
 * Génère un mail de réclamation avec le ton choisi.
 */
export function generateReclamationMail(data: MailFormData): GeneratedMail {
  const purchaseDate = new Date(data.purchaseDate);
  const formattedDate = formatDateFR(purchaseDate);
  const storeType = getStoreType(data.store);

  const subject = `Réclamation au titre de la garantie légale de conformité — ${data.applianceType} ${data.brand}`;

  let body: string;

  switch (data.tone) {
    case "poli":
      body = `Madame, Monsieur,

Je me permets de vous contacter au sujet d'un ${data.applianceType.toLowerCase()} de marque ${data.brand} que j'ai acheté dans votre ${storeType} le ${formattedDate}.

Malheureusement, cet appareil présente depuis peu le dysfonctionnement suivant :
${data.problemDescription}

Ce problème est apparu dans le cadre d'une utilisation tout à fait normale de l'appareil.

Je me permets de vous rappeler que, selon les articles L217-3 et suivants du Code de la consommation, le vendeur est tenu de délivrer un bien conforme au contrat. Les défauts apparaissant dans les 24 mois suivant l'achat sont présumés exister dès la délivrance (article L217-7).

Aussi, je vous serais reconnaissant(e) de bien vouloir organiser la réparation ou, si cela n'est pas possible, le remplacement de cet appareil, conformément à l'article L217-8 du Code de la consommation.

${data.hasReceipt ? "Je tiens la facture d'achat à votre disposition." : "Je suis en mesure de justifier de la date d'achat par tout moyen (relevé bancaire, confirmation de commande, etc.)."}

En vous remerciant par avance pour votre diligence, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

${data.customerName}`;
      break;

    case "ferme":
      body = `Madame, Monsieur,

Par la présente, je vous informe que le ${data.applianceType.toLowerCase()} de marque ${data.brand}, acheté dans votre ${storeType} le ${formattedDate}, présente un défaut de conformité.

Le dysfonctionnement constaté est le suivant :
${data.problemDescription}

Ce défaut est apparu dans le cadre d'une utilisation normale et rend l'appareil impropre à l'usage auquel il est destiné.

Je vous rappelle vos obligations légales au titre de la garantie légale de conformité :
— Article L217-3 : le vendeur délivre un bien conforme et répond des défauts de conformité.
— Article L217-7 : les défauts apparaissant dans les 24 mois sont présumés exister dès la délivrance. La charge de la preuve est inversée : c'est à vous de prouver le contraire.
— Article L217-8 : le consommateur choisit entre réparation et remplacement.
— Article L217-10 : la mise en conformité doit intervenir sous 30 jours maximum.
— Article L217-11 : sans aucun frais pour le consommateur (pièces, main d'œuvre, déplacement, port).

En conséquence, je vous mets en demeure de procéder à la réparation ou au remplacement de cet appareil dans un délai de 30 jours à compter de la réception de ce courrier.

À défaut, je me réserve le droit de :
— Saisir le médiateur de la consommation de votre secteur.
— Contacter une association de défense des consommateurs (UFC-Que Choisir, CLCV).
— Demander une réduction du prix ou la résolution du contrat conformément à l'article L217-12.
— Engager toute procédure judiciaire utile.

${data.hasReceipt ? "La facture d'achat est à votre disposition sur simple demande." : "Je dispose de justificatifs de la date d'achat (relevé bancaire, confirmation de commande)."}

Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

${data.customerName}`;
      break;

    default: // standard
      body = `Madame, Monsieur,

Je me permets de vous contacter au sujet d'un ${data.applianceType.toLowerCase()} de marque ${data.brand} que j'ai acheté dans votre ${storeType} le ${formattedDate}.

Depuis peu, cet appareil présente le dysfonctionnement suivant :
${data.problemDescription}

Ce défaut est apparu dans le cadre d'une utilisation normale de l'appareil.

Or, conformément aux articles L217-3 et suivants du Code de la consommation, le vendeur est tenu de délivrer un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance du bien.

Par ailleurs, l'article L217-7 du même code dispose que les défauts de conformité qui apparaissent dans un délai de vingt-quatre mois à compter de la délivrance du bien sont, sauf preuve contraire, présumés exister au moment de la délivrance.

En conséquence, je vous demande de bien vouloir procéder, à votre convenance, soit à la réparation, soit au remplacement de cet appareil, conformément à l'article L217-8 du Code de la consommation.

Je vous rappelle que cette mise en conformité doit être effectuée sans aucun frais à ma charge (article L217-11) et dans un délai raisonnable n'excédant pas trente jours (article L217-10).

${data.hasReceipt ? "Je tiens à votre disposition la facture d'achat correspondante." : "Je suis en mesure de justifier de la date d'achat par tout moyen (relevé bancaire, confirmation de commande, etc.)."}

Dans l'attente de votre réponse, que j'espère rapide, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

${data.customerName}`;
      break;
  }

  return { subject, body, type: "reclamation" };
}

/**
 * Génère un mail de relance (toujours ferme).
 */
export function generateRelanceMail(data: MailFormData): GeneratedMail {
  const purchaseDate = new Date(data.purchaseDate);
  const formattedDate = formatDateFR(purchaseDate);

  const subject = `RELANCE — Réclamation garantie légale de conformité — ${data.applianceType} ${data.brand}`;

  const body = `Madame, Monsieur,

Je fais suite à mon précédent courrier concernant mon ${data.applianceType.toLowerCase()} de marque ${data.brand}, acheté dans votre ${getStoreType(data.store)} le ${formattedDate}, et qui présente un défaut de conformité.

À ce jour, je n'ai reçu aucune réponse de votre part malgré ma demande initiale.

Je vous rappelle mes droits au titre de la garantie légale de conformité (articles L217-3 et suivants du Code de la consommation) :
— Le vendeur est responsable des défauts de conformité (article L217-3).
— La réparation ou le remplacement doit intervenir dans un délai de 30 jours maximum (article L217-10).
— Cette mise en conformité doit être effectuée sans aucun frais (article L217-11).

À défaut de réponse de votre part sous 8 jours, je me verrai dans l'obligation de :
— Saisir le médiateur de la consommation compétent.
— Contacter une association de défense des consommateurs (UFC-Que Choisir, CLCV).
— Le cas échéant, engager une procédure judiciaire.

Conformément à l'article L217-12 du Code de la consommation, si la mise en conformité n'est pas effectuée, je suis en droit de demander une réduction du prix ou la résolution du contrat (remboursement).

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

${data.customerName}`;

  return { subject, body, type: "relance" };
}

/**
 * Détermine le type d'enseigne pour une formulation naturelle
 */
function getStoreType(store: string): string {
  const onlineStores = [
    "amazon", "cdiscount", "fnac", "darty", "boulanger",
    "ldlc", "rue du commerce", "rakuten", "back market", "ebay",
  ];

  const lowerStore = store.toLowerCase().trim();

  if (
    onlineStores.some((s) => lowerStore.includes(s)) ||
    lowerStore.includes(".fr") ||
    lowerStore.includes(".com") ||
    lowerStore.includes("en ligne")
  ) {
    return `enseigne (${store})`;
  }

  return `magasin ${store}`;
}

/**
 * Liste des types d'appareils pour le formulaire
 */
export const applianceTypes = [
  "Lave-linge",
  "Lave-vaisselle",
  "Réfrigérateur",
  "Congélateur",
  "Four",
  "Micro-ondes",
  "Sèche-linge",
  "Aspirateur",
  "Aspirateur robot",
  "Télévision",
  "Ordinateur portable",
  "Ordinateur de bureau",
  "Smartphone",
  "Tablette",
  "Machine à café",
  "Robot culinaire",
  "Climatiseur",
  "Imprimante",
  "Console de jeux",
  "Casque audio",
  "Enceinte connectée",
  "Montre connectée",
  "Autre",
];

/**
 * Pièces à joindre recommandées selon la situation
 */
export const recommendedAttachments = [
  { id: "facture", label: "Facture ou ticket de caisse", always: true },
  { id: "photos", label: "Photos du défaut / de la panne", always: true },
  { id: "releve", label: "Relevé bancaire (si pas de facture)", always: false },
  { id: "confirmation", label: "Confirmation de commande (achat en ligne)", always: false },
  { id: "echanges", label: "Captures d'écran des échanges précédents", always: false },
  { id: "garantie", label: "Certificat de garantie commerciale (si disponible)", always: false },
];
