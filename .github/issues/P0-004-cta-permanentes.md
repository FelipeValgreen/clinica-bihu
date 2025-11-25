# [P0] CTAs permanentes y claros

## Descripción
Botones WhatsApp flotantes y CTADrawer deben estar visibles en todo el sitio con microcopy accionable.

## Criterios de Aceptación
- [ ] Botón WhatsApp flotante en todo el sitio
- [ ] CTADrawer visible al 50-60% del scroll en servicios
- [ ] Microcopy accionable: "Habla ahora", "Agenda orientación"
- [ ] CTAs visibles en móvil sin scroll
- [ ] Enlaces directos a WhatsApp con número correcto

## Métricas de Éxito
- **Objetivo:** Clicks WhatsApp/100 sesiones ≥ 8 en páginas de servicio
- **Herramienta:** GA4 evento `cta_whatsapp_click`

## Archivos Afectados
- [ ] `components/whatsapp-float.tsx`
- [ ] `components/cta-drawer.tsx`
- [ ] `data/clinic.json` (número WhatsApp)

## Implementación Sugerida
```tsx
// WhatsApp Float optimizado
<WhatsAppFloat 
  phone={clinicData.whatsapp}
  message="Hola, necesito información sobre hospitalización psiquiátrica"
  position="bottom-right"
  visible={true}
/>

// CTA Drawer con microcopy claro
<CTADrawer>
  <Button>Habla ahora por WhatsApp</Button>
  <Button variant="outline">Agenda orientación</Button>
</CTADrawer>
```

## Labels
`priority: critical`, `impact: conversion`, `component: cta`
