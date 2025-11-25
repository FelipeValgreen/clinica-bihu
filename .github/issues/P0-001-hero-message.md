# [P0] Mensaje y propuesta de valor en Above the Fold

## Descripción
Cada landing debe comunicar claramente *qué es*, *para quién* y *qué sigue* en los primeros 5 segundos.

## Criterios de Aceptación
- [ ] Título incluye beneficio directo
- [ ] Subtítulo especifica audiencia objetivo
- [ ] CTA dual visible (WhatsApp + Agendar)
- [ ] Sellos de confianza (24/7, familiar, seguro)
- [ ] Mensaje claro en móvil sin scroll

## Métricas de Éxito
- **Objetivo:** CTR a CTA ≥ 12% en hero
- **Herramienta:** GA4 evento `cta_click_hero`

## Archivos Afectados
- [ ] `app/page.tsx` (Hero section)
- [ ] `app/hospitalizacion-psiquiatrica/page.tsx`
- [ ] `app/servicios/page.tsx`
- [ ] `components/trust-badges.tsx`

## Implementación Sugerida
```tsx
// Hero section con mensaje claro
<h1 className="text-4xl md:text-6xl font-bold mb-6">
  Hospitalización Psiquiátrica 24/7 con Inclusión Familiar
</h1>
<p className="text-xl md:text-2xl mb-8">
  Para personas en crisis que necesitan un entorno seguro y profesional
</p>
```

## Labels
`priority: critical`, `impact: conversion`, `component: hero`
