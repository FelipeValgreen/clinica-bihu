# [P0] Transparencia de precios / reembolso

## Descripción
Debe existir página de Costos y Convenios con información clara sobre precios y reembolsos.

## Criterios de Aceptación
- [ ] Página "Costos y Convenios" creada
- [ ] Módulos cortos de precios en cada landing
- [ ] Tabla simple de precios
- [ ] Nota: "con boleta reembolsas en tu seguro; no convenios directos"
- [ ] CTA a WhatsApp para dudas de precios

## Métricas de Éxito
- **Objetivo:** Rebote en "Costos" < 40%
- **Objetivo:** Clics a WhatsApp ≥ 10% desde página de costos
- **Herramienta:** GA4, Search Console

## Archivos Afectados
- [ ] `app/costos-y-convenios/page.tsx` (nuevo)
- [ ] `data/precios.json`
- [ ] `components/pricing-cards.tsx`
- [ ] `app/page.tsx` (módulo precios)

## Implementación Sugerida
```tsx
// Página de costos
export default function CostosPage() {
  return (
    <div>
      <h1>Costos y Convenios</h1>
      <PricingTable />
      <div className="bg-blue-50 p-4 rounded">
        <p>Con boleta puedes solicitar reembolso en tu seguro</p>
        <p>No tenemos convenios directos con Isapres</p>
      </div>
    </div>
  );
}
```

## Labels
`priority: critical`, `impact: conversion`, `page: costos`
