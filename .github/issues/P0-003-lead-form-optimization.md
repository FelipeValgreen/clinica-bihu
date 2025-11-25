# [P0] Formularios (LeadForm) - Optimización

## Descripción
Formularios deben tener campos mínimos, validación clara y enrutado correcto a Kommo.

## Criterios de Aceptación
- [ ] Campos mínimos: nombre, teléfono, motivo
- [ ] Validación clara y feedback amable
- [ ] Mensaje de éxito: "Te contactamos en minutos"
- [ ] Checkbox de consentimiento obligatorio
- [ ] Enrutado a Kommo con etiqueta de campaña (UTM)
- [ ] Campos con source y service

## Métricas de Éxito
- **Objetivo:** Error rate < 3%
- **Objetivo:** Leads llegan a Kommo con source y service
- **Herramienta:** Kommo CRM, GA4 evento `lead_form_submit`

## Archivos Afectados
- [ ] `components/lead-form.tsx`
- [ ] `app/api/lead/route.ts`
- [ ] `lib/kommo-integration.ts` (nuevo)

## Implementación Sugerida
```tsx
// Lead Form optimizado
const LeadForm = ({ source, service }) => {
  const [consent, setConsent] = useState(false);
  
  const handleSubmit = async (data) => {
    await fetch('/api/lead', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        source,
        service,
        utm_source: getUTMSource(),
        consent: consent
      })
    });
  };
};
```

## Labels
`priority: critical`, `impact: conversion`, `component: forms`
