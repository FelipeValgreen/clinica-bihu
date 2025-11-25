import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.jpg",
  noIndex = false,
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.clinicabihu.cl"
  const fullTitle = title.includes("Clínica Bihu") ? title : `${title} | Clínica Bihu`

  return {
    title: fullTitle,
    description,
    keywords: keywords || "clínica psiquiátrica, salud mental, hospitalización psiquiátrica, Santiago, Chile",
    authors: [{ name: "Clínica Bihu" }],
    creator: "Clínica Bihu",
    publisher: "Mente y Salud SpA",
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    canonical: canonical ? `${siteUrl}${canonical}` : undefined,
    alternates: {
      canonical: canonical ? `${siteUrl}${canonical}` : undefined,
    },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "es_CL",
      url: canonical ? `${siteUrl}${canonical}` : siteUrl,
      siteName: "Clínica Bihu",
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}${ogImage}`],
    },
  }
}

export function generateJSONLD(type: "MedicalClinic" | "FAQPage" | "WebPage", data: any) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  }

  switch (type) {
    case "MedicalClinic":
      return {
        ...baseData,
        name: "Clínica Bihu",
        description: "Clínica especializada en salud mental con hospitalización psiquiátrica humanizada",
        url: "https://www.clinicabihu.cl",
        telephone: "+56 32 328 3068",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Chopin 3157",
          addressLocality: "San Joaquín",
          addressRegion: "Región Metropolitana",
          addressCountry: "CL",
        },
        medicalSpecialty: ["Psychiatry", "Psychology", "Mental Health"],
        availableService: [
          {
            "@type": "MedicalService",
            name: "Hospitalización Psiquiátrica",
            description: "Hospitalización psiquiátrica 24/7 con inclusión familiar",
          },
          {
            "@type": "MedicalService",
            name: "Consulta Psiquiátrica",
            description: "Consultas psiquiátricas presenciales y online",
          },
          {
            "@type": "MedicalService",
            name: "Psicoterapia",
            description: "Terapia psicológica individual, pareja y familiar",
          },
        ],
        ...data,
      }

    case "FAQPage":
      return {
        ...baseData,
        mainEntity: data.faqs?.map((faq: any) => ({
          "@type": "Question",
          name: faq.pregunta,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.respuesta,
          },
        })),
      }

    case "WebPage":
      return {
        ...baseData,
        name: data.title,
        description: data.description,
        url: data.url,
        ...data,
      }

    default:
      return baseData
  }
}
