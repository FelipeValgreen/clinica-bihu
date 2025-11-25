// Analytics utility functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }

  // Meta Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters)
  }
}

export const trackPageView = (url: string) => {
  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA4_ID || "", {
      page_location: url,
    })
  }

  // Meta Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView")
  }
}

export const trackLead = (leadData: Record<string, any>) => {
  trackEvent("Lead", leadData)
  trackEvent("lead_form_submit", {
    event_category: "engagement",
    event_label: leadData.source || "unknown",
  })
}

export const trackWhatsAppClick = (source: string) => {
  trackEvent("Contact", { method: "whatsapp", source })
  trackEvent("cta_whatsapp_click", {
    event_category: "engagement",
    event_label: source,
  })
}

export const trackPhoneClick = (source: string) => {
  trackEvent("Contact", { method: "phone", source })
  trackEvent("cta_phone_click", {
    event_category: "engagement",
    event_label: source,
  })
}

export const trackFormStart = (formType: string) => {
  trackEvent("lead_form_start", {
    event_category: "engagement",
    event_label: formType,
  })
}

// Declare global types for analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
    dataLayer: any[]
  }
}
