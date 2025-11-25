# 🔍 Guía de QA para Clínica Bihu

## 📋 Cómo usar este sistema de QA

### 1. **Issues de GitHub**
- Cada issue tiene un template específico (P0, P1, P2)
- Incluye criterios de aceptación claros
- Métricas de éxito definidas
- Archivos afectados listados

### 2. **Checklist de QA**
- Usar `QA_CHECKLIST.md` para marcar progreso
- Cada item debe estar 100% completo antes de producción
- Documentar quién completó cada tarea

### 3. **Automatización**
- GitHub Actions ejecuta pruebas automáticas
- Lighthouse CI para performance
- Tests de accesibilidad y SEO

## 🚀 Flujo de Trabajo

### Desarrollo
1. **Crear issue** usando templates P0/P1/P2
2. **Asignar** a desarrollador correspondiente
3. **Implementar** siguiendo criterios de aceptación
4. **Marcar** en checklist de QA

### Testing
1. **Ejecutar** `npm run test:a11y`
2. **Ejecutar** `npm run test:performance`
3. **Ejecutar** `npm run test:seo`
4. **Verificar** checklist manual

### Deploy
1. **Todos los P0** deben estar 100% completos
2. **P1** al 90% mínimo
3. **P2** al 80% mínimo
4. **Lighthouse** score ≥ 90 en todas las categorías

## 📊 Métricas Clave

| Categoría | Métrica | Objetivo | Herramienta |
|-----------|---------|----------|-------------|
| Performance | LCP | < 2.5s | Lighthouse |
| Performance | CLS | < 0.1 | Lighthouse |
| Performance | INP | < 200ms | Lighthouse |
| Accessibility | Score | ≥ 95 | Lighthouse |
| SEO | Score | ≥ 90 | Lighthouse |
| Conversion | CTR Hero | ≥ 12% | GA4 |
| Conversion | Form Error | < 3% | Kommo |

## 🧪 Pruebas Manuales

### Flujos Críticos
- [ ] Ver VSL → clic WhatsApp → abrir chat
- [ ] Completar formulario → lead en Kommo
- [ ] Ver precios → clic WhatsApp

### Dispositivos
- [ ] Móvil (iPhone 12, Android)
- [ ] Tablet (iPad, Android)
- [ ] Desktop (Chrome, Firefox, Safari)

### Navegadores
- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (última versión)
- [ ] Edge (última versión)

## 🔧 Herramientas de Desarrollo

### Instalación
```bash
npm install
npm run dev
```

### Testing
```bash
# Accesibilidad
npm run test:a11y

# Performance
npm run test:performance

# SEO
npm run test:seo

# Lighthouse
npm run lighthouse
```

### Linting
```bash
npm run lint
```

## 📝 Documentación

### Archivos Importantes
- `QA_CHECKLIST.md` - Checklist principal
- `.github/issues/` - Templates de issues
- `.github/workflows/` - Automatización
- `__tests__/` - Tests automatizados

### Configuración
- `.lighthouserc.json` - Configuración Lighthouse
- `package.json` - Scripts de testing
- `jest.config.js` - Configuración Jest

## 🎯 Roadmap de A/B Tests

### Mes 1
- [ ] Hero title: "Hospitalización 24/7…" vs "En crisis, actuamos hoy…"
- [ ] CTA texto: "Hablar ahora" vs "Recibir orientación"
- [ ] VSL: portada con persona vs instalaciones
- [ ] Precios: módulo resumido vs link "Ver precios"

### Mes 2
- [ ] Testimonios: texto vs video
- [ ] Formularios: campos mínimos vs completos
- [ ] Colores: azul vs verde en CTAs

## 📞 Contacto del Equipo

- **Desarrollador Frontend:** [Nombre]
- **Diseñador UX/UI:** [Nombre]
- **SEO Specialist:** [Nombre]
- **QA Tester:** [Nombre]

## 🔄 Proceso de Revisión

1. **Desarrollador** completa implementación
2. **QA Tester** ejecuta checklist
3. **SEO Specialist** verifica métricas
4. **Diseñador** aprueba visual
5. **Product Owner** aprueba para producción

## 📈 Reportes

### Semanal
- Progreso en checklist
- Issues completados
- Métricas de performance

### Mensual
- Análisis de conversión
- Optimizaciones implementadas
- Roadmap de mejoras

---

**Última actualización:** [Fecha]
**Versión:** 1.0.0
**Estado:** En desarrollo
