import type { Metadata } from "next";
import type { ReactNode } from "react";
import { display, body } from "@/lib/fonts";
import { contact } from "@/data/contact";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(contact.siteUrl),
  title: {
    default: "Clínica Renata Amaral | Estética Avançada no Sacomã – SP",
    template: "%s | Clínica Renata Amaral",
  },
  description:
    "Tratamentos estéticos personalizados no Sacomã, em São Paulo. Conheça a Clínica Renata Amaral Estética Avançada e agende sua avaliação pelo WhatsApp.",
  keywords: [
    "Clínica de estética no Sacomã",
    "Estética avançada em São Paulo",
    "Depilação a laser no Sacomã",
    "Estética facial em São Paulo",
    "Massagem no Sacomã",
    "Clínica Renata Amaral",
    "Tratamentos estéticos em São Paulo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: contact.siteUrl,
    siteName: contact.legalName,
    title: "Clínica Renata Amaral | Estética Avançada no Sacomã – SP",
    description:
      "Tratamentos estéticos personalizados no Sacomã, em São Paulo. Agende sua avaliação pelo WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Renata Amaral | Estética Avançada no Sacomã – SP",
    description:
      "Tratamentos estéticos personalizados no Sacomã, em São Paulo. Agende sua avaliação pelo WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: contact.legalName,
  url: contact.siteUrl,
  telephone: `+${contact.whatsappE164}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressLine1,
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [contact.instagramUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: contact.googleRating,
    reviewCount: contact.googleReviewCount,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
