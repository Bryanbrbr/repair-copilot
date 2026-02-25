import type { Metadata } from "next";
import Link from "next/link";
import { appliances } from "@/lib/appliances";

export const metadata: Metadata = {
  title: "Guides par appareil — Vos droits de garantie",
  description:
    "Consultez nos guides dédiés pour comprendre vos droits de garantie selon votre type d'appareil en panne : lave-linge, réfrigérateur, TV, smartphone et plus.",
  keywords: [
    "guide garantie appareil",
    "garantie électroménager",
    "panne appareil droits",
    "garantie légale appareils",
  ],
};

export default function GuidesIndexPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Guides par appareil
          </h1>
          <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed">
            Sélectionnez votre type d&apos;appareil pour découvrir vos droits de
            garantie, les pannes courantes et les démarches à suivre.
          </p>
        </div>

        {/* Grille d'appareils */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appliances.map((appliance) => (
            <Link
              key={appliance.slug}
              href={`/guide/${appliance.slug}`}
              className="group bg-white rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary-light)] hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{appliance.icon}</span>
                <h2 className="text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {appliance.name}
                </h2>
              </div>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-4">
                Durée de vie moyenne : {appliance.averageLifespan}
              </p>
              <ul className="space-y-1 mb-4">
                {appliance.commonProblems.slice(0, 3).map((problem) => (
                  <li
                    key={problem.name}
                    className="text-sm text-[var(--color-text-light)] flex items-center gap-2"
                  >
                    <span className="text-[var(--color-primary)]">•</span>
                    {problem.name}
                  </li>
                ))}
              </ul>
              <span className="text-sm font-medium text-[var(--color-primary)] group-hover:underline">
                Voir le guide complet →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[var(--color-text-light)] mb-4">
            Votre appareil n&apos;est pas dans la liste ? Le générateur fonctionne
            pour tous les types d&apos;appareils.
          </p>
          <Link
            href="/generateur"
            className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl inline-block"
          >
            🔧 Générer mon mail de réclamation
          </Link>
        </div>
      </div>

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://repair-copilot-app.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Guides par appareil",
                item: "https://repair-copilot-app.vercel.app/guide",
              },
            ],
          }),
        }}
      />
    </section>
  );
}
