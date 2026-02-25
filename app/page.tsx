import type { Metadata } from "next";
import Link from "next/link";
import { appliances } from "@/lib/appliances";
import StructuredData, {
  buildFAQSchema,
  buildWebAppSchema,
} from "@/components/SEO/StructuredData";

export const metadata: Metadata = {
  title:
    "Garantie légale en panne ? Mail de réclamation gratuit en 30 secondes | Repair Copilot",
  description:
    "Votre appareil est en panne ? Vérifiez gratuitement si votre garantie légale de conformité (2 ans) est encore active et générez un mail de réclamation professionnel avec les articles de loi. Sans inscription.",
  alternates: {
    canonical: "https://repair-copilot-app.vercel.app",
  },
};

const homeFAQ = [
  {
    question: "Qu'est-ce que la garantie légale de conformité ?",
    answer:
      "La garantie légale de conformité est une protection prévue par le Code de la consommation français (articles L217-3 et suivants). Elle oblige le vendeur à réparer ou remplacer tout produit présentant un défaut de conformité dans les 24 mois suivant l'achat, sans frais pour le consommateur.",
  },
  {
    question: "Dois-je contacter le fabricant ou le vendeur ?",
    answer:
      "La garantie légale de conformité s'exerce auprès du vendeur, pas du fabricant. C'est le magasin ou le site où vous avez acheté le produit qui est votre interlocuteur légal.",
  },
  {
    question:
      "J'ai perdu ma facture, puis-je quand même faire valoir la garantie ?",
    answer:
      "Oui. Vous pouvez utiliser un relevé bancaire, une confirmation de commande par email, un ticket de caisse ou tout autre document prouvant l'achat.",
  },
  {
    question: "La garantie couvre-t-elle les achats en ligne ?",
    answer:
      "Oui, la garantie légale de conformité s'applique de la même manière pour les achats en magasin et en ligne. Les sites e-commerce (Amazon, Cdiscount, Fnac, etc.) sont soumis aux mêmes obligations.",
  },
  {
    question: "Que faire si le vendeur refuse de réparer ?",
    answer:
      "Vous pouvez envoyer un courrier recommandé, saisir le médiateur de la consommation, contacter une association de consommateurs (UFC-Que Choisir, CLCV), ou saisir le tribunal compétent.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section — orienté résultat */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge confiance */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span>✅</span>
            <span>100% gratuit · Sans inscription · Basé sur le Code de la consommation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] leading-tight mb-6">
            Appareil en panne ?
            <br />
            <span className="text-[var(--color-primary)]">
              Obtenez un mail de réclamation gratuit en 30 secondes
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-light)] max-w-2xl mx-auto mb-4 leading-relaxed">
            La loi vous protège <strong>2 ans</strong> après l&apos;achat. Le vendeur
            doit réparer ou remplacer sans frais.
          </p>
          <p className="text-base text-[var(--color-text-light)] max-w-xl mx-auto mb-8">
            Ne rachetez pas inutilement. Vérifiez vos droits et envoyez un mail
            professionnel avec les bons articles de loi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generateur"
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white text-lg font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              🔧 Générer mon mail de réclamation
            </Link>
            <Link
              href="/guide"
              className="bg-white hover:bg-gray-50 text-[var(--color-primary)] text-lg font-semibold px-8 py-4 rounded-xl transition-colors border-2 border-[var(--color-primary)]"
            >
              📖 Consulter les guides
            </Link>
          </div>

          {/* Social proof */}
          <p className="mt-6 text-sm text-[var(--color-text-light)]">
            Fonctionne pour tous les appareils : électroménager, TV, smartphone, PC...
          </p>
        </div>
      </section>

      {/* Proposition de valeur */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-text)] mb-4">
            Pourquoi utiliser Repair Copilot ?
          </h2>
          <p className="text-center text-[var(--color-text-light)] mb-12 max-w-2xl mx-auto">
            La plupart des consommateurs ignorent qu&apos;ils sont protégés. Nous simplifions
            tout le processus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                Vos droits expliqués simplement
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                La garantie légale de conformité vous protège <strong>2 ans</strong> après
                l&apos;achat. Le vendeur doit réparer ou remplacer sans frais.
                On vous explique tout, article par article.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                Mail professionnel en 30 secondes
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                Un mail personnalisé avec les articles de loi exacts, prêt à
                copier et envoyer. Choisissez le ton : poli, standard ou ferme.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                Gratuit, sans inscription
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                Aucun compte, aucun paiement, aucune donnée collectée.
                Vos informations restent dans votre navigateur. Rien n&apos;est
                envoyé à nos serveurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche — 3 étapes */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-text)] mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Étape 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                Décrivez votre panne
              </h3>
              <p className="text-[var(--color-text-light)]">
                Appareil, marque, date d&apos;achat, magasin et description du
                problème. 30 secondes max.
              </p>
              {/* Connecteur */}
              <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-[var(--color-border)]" />
            </div>
            {/* Étape 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                Vérifiez votre garantie
              </h3>
              <p className="text-[var(--color-text-light)]">
                On calcule automatiquement si la garantie légale de 2 ans est
                encore active et on vous explique vos droits.
              </p>
              <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-[var(--color-border)]" />
            </div>
            {/* Étape 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                Copiez et envoyez
              </h3>
              <p className="text-[var(--color-text-light)]">
                Un mail professionnel avec les articles de loi est généré.
                Copiez-le ou ouvrez-le dans votre messagerie.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/generateur"
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white text-lg font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Commencer maintenant →
            </Link>
          </div>
        </div>
      </section>

      {/* Appareils couverts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-text)] mb-4">
            Guides par appareil
          </h2>
          <p className="text-center text-[var(--color-text-light)] mb-12 max-w-2xl mx-auto">
            Consultez nos guides dédiés pour comprendre vos droits selon votre
            type d&apos;appareil en panne.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {appliances.map((appliance) => (
              <Link
                key={appliance.slug}
                href={`/guide/${appliance.slug}`}
                className="flex flex-col items-center p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary-light)] hover:shadow-md transition-all"
              >
                <span className="text-3xl mb-2">{appliance.icon}</span>
                <span className="text-sm font-medium text-[var(--color-text)] text-center">
                  {appliance.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ pour SEO */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-text)] mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {homeFAQ.map((item) => (
              <details
                key={item.question}
                className="bg-white rounded-xl border border-[var(--color-border)] p-6 group"
              >
                <summary className="font-semibold text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                  {item.question}
                  <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform ml-4 flex-shrink-0">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Votre appareil est en panne ?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Ne perdez plus de temps ni d&apos;argent. Vérifiez vos droits et
            agissez maintenant.
          </p>
          <Link
            href="/generateur"
            className="bg-white hover:bg-gray-100 text-[var(--color-primary)] text-lg font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg inline-block"
          >
            🔧 Générer mon mail gratuitement
          </Link>
        </div>
      </section>

      {/* Structured Data via composants Server */}
      <StructuredData type="WebApplication" data={buildWebAppSchema()} />
      <StructuredData type="FAQPage" data={buildFAQSchema(homeFAQ)} />
    </>
  );
}
