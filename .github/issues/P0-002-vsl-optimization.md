# [P0] VSL: Carga, foco y subtítulos

## Descripción
Video Sales Letter debe cargar rápidamente, tener subtítulos activos y no bloquear el LCP.

## Criterios de Aceptación
- [ ] VSL con lazy-load implementado
- [ ] Preview poster optimizado
- [ ] Botón play grande y visible
- [ ] Subtítulos .vtt incluidos
- [ ] Transcript accesible
- [ ] Auto-mute por defecto
- [ ] No bloquea LCP

## Métricas de Éxito
- **Objetivo:** LCP < 2.5s en móvil
- **Objetivo:** Abandono página con vídeo ≤ 35%
- **Herramienta:** Lighthouse, GA4 eventos de video

## Archivos Afectados
- [ ] `components/vsl-player.tsx`
- [ ] `public/psychiatric-hospitalization-video-thumbnail.jpg`
- [ ] `app/hospitalizacion-psiquiatrica/page.tsx`

## Implementación Sugerida
```tsx
// VSL Player optimizado
<VSLPlayer
  src="/videos/hospitalizacion-psiquiatrica.mp4"
  poster="/videos/thumbnail.jpg"
  subtitles="/videos/subtitles.vtt"
  lazy={true}
  autoMute={true}
  onPlay={() => gtag('event', 'vsl_play')}
/>
```

## Labels
`priority: critical`, `impact: performance`, `component: video`
