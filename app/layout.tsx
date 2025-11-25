import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Suspense } from "react"
import AnalyticsProvider from "@/components/analytics-provider"
import CookieConsent from "@/components/cookie-consent"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hospitalización Psiquiátrica Humanizada 24/7 en Santiago · Clínica Bihu",
  description:
    "Clínica Bihu ofrece hospitalización psiquiátrica en un entorno seguro, privado y con inclusión familiar. Contáctanos 24/7.",
  generator: "v0.app",
  keywords: "hospitalización psiquiátrica, clínica psiquiátrica Santiago, tratamiento mental, salud mental Chile",
  authors: [{ name: "Clínica Bihu" }],
  creator: "Clínica Bihu",
  publisher: "Mente y Salud SpA",
  robots: "index, follow",
  icons: {
    icon: "/isotipo-bihu.png",
    shortcut: "/isotipo-bihu.png",
    apple: "/isotipo-bihu.png",
  },
  openGraph: {
    title: "Hospitalización Psiquiátrica Humanizada 24/7 en Santiago · Clínica Bihu",
    description:
      "Clínica Bihu ofrece hospitalización psiquiátrica en un entorno seguro, privado y con inclusión familiar. Contáctanos 24/7.",
    type: "website",
    locale: "es_CL",
    siteName: "Clínica Bihu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitalización Psiquiátrica Humanizada 24/7 en Santiago · Clínica Bihu",
    description:
      "Clínica Bihu ofrece hospitalización psiquiátrica en un entorno seguro, privado y con inclusión familiar. Contáctanos 24/7.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Brittany+Signature&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics 4 - Loaded after consent */}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  
                  // Check consent before initializing
                  const consent = localStorage.getItem('cookie-consent');
                  if (consent === 'accepted') {
                    gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                      page_location: window.location.href,
                      page_title: document.title,
                      send_page_view: true
                    });
                  }
                  
                  // Listen for consent event
                  window.addEventListener('cookie-consent-accepted', function() {
                    gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                      page_location: window.location.href,
                      page_title: document.title,
                      send_page_view: true
                    });
                  });
                `,
              }}
            />
          </>
        )}

        {/* Meta Pixel - Loaded after consent */}
        {process.env.NEXT_PUBLIC_META_PIXEL && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  
                  // Check consent before initializing
                  const consent = localStorage.getItem('cookie-consent');
                  if (consent === 'accepted') {
                    fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL}');
                    fbq('track', 'PageView');
                  }
                  
                  // Listen for consent event
                  window.addEventListener('cookie-consent-accepted', function() {
                    if (!window.fbq._initialized) {
                      fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL}');
                      fbq('track', 'PageView');
                      window.fbq._initialized = true;
                    }
                  });
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* Kommo Chat Widget */}
        {process.env.NEXT_PUBLIC_KOMMO_WIDGET_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(a,m,o,c,r,m){a[m]={id:"${process.env.NEXT_PUBLIC_KOMMO_WIDGET_ID}",hash:"${process.env.NEXT_PUBLIC_KOMMO_WIDGET_HASH}",locale:"es",inline:false,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.kommo.com/js/button.js';d.head&&d.head.appendChild(s)})(window,0,'crmButton','crm_script');
              `,
            }}
          />
        )}
      </head>
      <body className="font-montserrat antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#023B6A] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Saltar al contenido principal
        </a>
        <AnalyticsProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster />
          <CookieConsent />
        </AnalyticsProvider>
      </body>
    </html>
  )
}
