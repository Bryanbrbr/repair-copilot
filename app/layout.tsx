import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://repair-copilot-app.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "Repair Copilot — Mail de réclamation garantie gratuit en 30 secondes",
    template: "%s | Repair Copilot",
  },
  description:
    "Appareil en panne ? Vérifiez gratuitement votre garantie légale de conformité (2 ans) et générez un mail de réclamation professionnel avec les articles de loi. Sans inscription, sans frais.",
  keywords: [
    "garantie légale conformité",
    "réclamation garantie",
    "appareil en panne garantie",
    "lettre réclamation garantie",
    "mail garantie légale",
    "droit consommateur panne",
    "électroménager en panne que faire",
    "modèle courrier garantie",
    "garantie 2 ans",
    "article L217-3",
  ],
  authors: [{ name: "Repair Copilot" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Repair Copilot",
    title: "Repair Copilot — Mail de réclamation garantie gratuit",
    description:
      "Appareil en panne ? Générez un mail de réclamation professionnel gratuit avec les articles de loi en 30 secondes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
