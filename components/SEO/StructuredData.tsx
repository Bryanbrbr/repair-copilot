interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: "FAQPage" | "WebApplication" | "Article" | "BreadcrumbList";
  data: Record<string, unknown>;
}

/**
 * Composant Server pour injecter du JSON-LD proprement.
 * Utilisé pour FAQPage, WebApplication, Article, BreadcrumbList.
 */
export default function StructuredData({ type, data }: StructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * Helpers pour construire les structured data courantes.
 */
export function buildFAQSchema(items: FAQItem[]) {
  return {
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildWebAppSchema(overrides?: Record<string, unknown>) {
  return {
    name: "Repair Copilot",
    description:
      "Générateur gratuit de mail de réclamation pour faire valoir la garantie légale de conformité en France.",
    url: "https://repair-copilot-app.vercel.app",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    inLanguage: "fr",
    ...overrides,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(overrides: Record<string, unknown>) {
  return {
    publisher: {
      "@type": "Organization",
      name: "Repair Copilot",
      url: "https://repair-copilot-app.vercel.app",
    },
    inLanguage: "fr",
    ...overrides,
  };
}
