// Configuración de Analytics para Clínica Bihu
export const analyticsConfig = {
  // Google Analytics 4
  ga4: {
    measurementId: process.env.NEXT_PUBLIC_GA4_ID,
    events: {
      // Eventos de conversión
      cta_click_hero: 'cta_click_hero',
      cta_whatsapp_click: 'cta_whatsapp_click',
      lead_form_submit: 'lead_form_submit',
      lead_form_start: 'lead_form_start',
      
      // Eventos de video
      vsl_play: 'vsl_play',
      vsl_25: 'vsl_25',
      vsl_50: 'vsl_50',
      vsl_75: 'vsl_75',
      vsl_100: 'vsl_100',
      
      // Eventos de navegación
      page_view: 'page_view',
      service_view: 'service_view',
      pricing_view: 'pricing_view',
    }
  },
  
  // Meta Pixel
  metaPixel: {
    pixelId: process.env.NEXT_PUBLIC_META_PIXEL,
    events: {
      // Eventos de conversión
      lead: 'Lead',
      contact: 'Contact',
      viewContent: 'ViewContent',
      initiateCheckout: 'InitiateCheckout',
      
      // Eventos personalizados
      hospitalizacion_interest: 'HospitalizacionInterest',
      servicio_consulta: 'ServicioConsulta',
      pricing_view: 'PricingView',
    }
  },
  
  // Kommo CRM
  kommo: {
    widgetId: process.env.NEXT_PUBLIC_KOMMO_WIDGET_ID,
    widgetHash: process.env.NEXT_PUBLIC_KOMMO_WIDGET_HASH,
    pipelines: {
      hospitalizacion: 'hospitalizacion',
      consultas: 'consultas',
      urgencias: 'urgencias',
      informacion: 'informacion',
    }
  }
}

// Función para tracking de eventos GA4
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Función para tracking de eventos Meta Pixel
export const trackMetaEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

// Función para tracking de conversiones
export const trackConversion = (conversionType: string, value?: number) => {
  // GA4
  trackEvent(analyticsConfig.ga4.events.lead_form_submit, {
    conversion_type: conversionType,
    value: value
  })
  
  // Meta Pixel
  trackMetaEvent(analyticsConfig.metaPixel.events.lead, {
    content_name: conversionType,
    value: value
  })
}

// Función para tracking de CTAs
export const trackCTA = (ctaType: string, location: string) => {
  trackEvent(analyticsConfig.ga4.events.cta_click_hero, {
    cta_type: ctaType,
    location: location
  })
  
  trackMetaEvent(analyticsConfig.metaPixel.events.contact, {
    content_name: ctaType,
    content_category: location
  })
}

// Función para tracking de video
export const trackVideoProgress = (progress: number, videoId: string) => {
  const eventName = `vsl_${progress}`
  trackEvent(eventName, {
    video_id: videoId,
    progress: progress
  })
}

// Función para tracking de precios
export const trackPricingView = (service: string, price: number) => {
  trackEvent(analyticsConfig.ga4.events.pricing_view, {
    service: service,
    price: price
  })
  
  trackMetaEvent(analyticsConfig.metaPixel.events.pricing_view, {
    content_name: service,
    value: price
  })
}
