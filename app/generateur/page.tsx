import type { Metadata } from "next";
import MailGeneratorForm from "@/components/MailGenerator/MailGeneratorForm";
import { WARRANTY_DISCLAIMER } from "@/lib/legal-references";

export const metadata: Metadata = {
  title: "Générateur de mail de réclamation garantie légale — Gratuit",
  description:
    "Générez gratuitement un mail de réclamation professionnel pour faire valoir votre garantie légale de conformité (2 ans). Articles de loi inclus, 3 tons disponibles, prêt à envoyer en 30 secondes.",
  keywords: [
    "générateur mail réclamation",
    "lettre réclamation garantie",
    "modèle courrier garantie",
    "mail garantie légale",
    "réclamation garantie conformité",
    "modèle lettre panne appareil",
  ],
  alternates: {
    canonical: "https://repair-copilot-app.vercel.app/generateur",
  },
};

export default function GenerateurPage() {
  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
              Générateur de mail de réclamation
            </h1>
            <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed">
              Remplissez le formulaire ci-dessous pour générer un mail de
              réclamation professionnel basé sur la{" "}
              <strong>garantie légale de conformité</strong> (articles L217-3 et
              suivants du Code de la consommation).
            </p>
          </div>

          {/* Formulaire */}
          <MailGeneratorForm />

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-text-light)] leading-relaxed">
              <strong>⚠️ Avertissement :</strong> {WARRANTY_DISCLAIMER}
            </p>
          </div>

          {/* Contenu SEO */}
          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                Pourquoi envoyer un mail de réclamation ?
              </h2>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
                Lorsqu&apos;un appareil tombe en panne dans les 2 ans suivant
                l&apos;achat, la loi française vous protège grâce à la garantie
                légale de conformité. Le vendeur est tenu de réparer ou remplacer
                le produit sans aucun frais pour vous.
              </p>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                Un mail de réclamation bien rédigé, citant les bons articles de
                loi, montre au vendeur que vous connaissez vos droits. Cela
                accélère considérablement le traitement de votre demande.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                Que dit la loi ?
              </h2>
              <ul className="space-y-3 text-[var(--color-text-light)]">
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)] font-bold flex-shrink-0">
                    →
                  </span>
                  <span>
                    <strong>Article L217-3 :</strong> Le vendeur délivre un bien
                    conforme et répond des défauts de conformité.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)] font-bold flex-shrink-0">
                    →
                  </span>
                  <span>
                    <strong>Article L217-7 :</strong> Les défauts apparaissant
                    dans les 24 mois sont présumés exister dès l&apos;achat.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)] font-bold flex-shrink-0">
                    →
                  </span>
                  <span>
                    <strong>Article L217-8 :</strong> Vous choisissez entre
                    réparation et remplacement.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)] font-bold flex-shrink-0">
                    →
                  </span>
                  <span>
                    <strong>Article L217-11 :</strong> La mise en conformité est
                    sans aucun frais pour le consommateur.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Générateur de mail de réclamation garantie",
            description:
              "Outil gratuit pour générer un mail de réclamation professionnel basé sur la garantie légale de conformité française.",
            url: "https://repair-copilot-app.vercel.app/generateur",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            inLanguage: "fr",
          }),
        }}
      />
    </>
  );
}
