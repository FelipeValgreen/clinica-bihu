# [P0] Cumplimiento legal y sensible (salud mental)

## Descripción
Aviso de privacidad, consentimiento de cookies y disclaimer clínico para cumplir con regulaciones chilenas.

## Criterios de Aceptación
- [ ] Aviso de privacidad (Ley 19.628, Chile)
- [ ] Banner de consentimiento (cookies/analytics)
- [ ] Link a política de privacidad accesible
- [ ] Disclaimer clínico: "no reemplaza evaluación médica"
- [ ] Copy anti-promesas absolutas
- [ ] Consentimiento específico para datos de salud

## Métricas de Éxito
- **Objetivo:** Políticas accesibles desde footer y formularios
- **Objetivo:** Cumplimiento legal 100%
- **Herramienta:** Auditoría legal, Lighthouse

## Archivos Afectados
- [ ] `app/politica-de-privacidad/page.tsx` (nuevo)
- [ ] `components/cookie-banner.tsx` (nuevo)
- [ ] `components/footer.tsx`
- [ ] `components/lead-form.tsx`
- [ ] `app/layout.tsx`

## Implementación Sugerida
```tsx
// Cookie Banner
<CookieBanner>
  <p>Usamos cookies para mejorar tu experiencia</p>
  <Button onClick={acceptCookies}>Aceptar</Button>
</CookieBanner>

// Disclaimer clínico
<div className="bg-yellow-50 p-4 rounded">
  <p className="text-sm">
    Esta información no reemplaza la evaluación médica profesional
  </p>
</div>
```

## Labels
`priority: critical`, `impact: compliance`, `component: legal`
