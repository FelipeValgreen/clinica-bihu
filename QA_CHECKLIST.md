# 🔍 QA Checklist - Clínica Bihu

## 📋 Checklist General de Calidad

### ✅ P0 - Críticos (Deben estar 100% completos)

#### 1. Mensaje y propuesta de valor en Above the Fold
- [ ] **Título incluye beneficio directo**
- [ ] **Subtítulo especifica audiencia objetivo**
- [ ] **CTA dual visible (WhatsApp + Agendar)**
- [ ] **Sellos de confianza (24/7, familiar, seguro)**
- [ ] **Mensaje claro en móvil sin scroll**
- [ ] **CTR a CTA ≥ 12% en hero** (medido con GA4)

#### 2. VSL: Carga, foco y subtítulos
- [ ] **VSL con lazy-load implementado**
- [ ] **Preview poster optimizado**
- [ ] **Botón play grande y visible**
- [ ] **Subtítulos .vtt incluidos**
- [ ] **Transcript accesible**
- [ ] **Auto-mute por defecto**
- [ ] **LCP < 2.5s en móvil**
- [ ] **Abandono página con vídeo ≤ 35%**

#### 3. Formularios (LeadForm)
- [ ] **Campos mínimos: nombre, teléfono, motivo**
- [ ] **Validación clara y feedback amable**
- [ ] **Mensaje de éxito: "Te contactamos en minutos"**
- [ ] **Checkbox de consentimiento obligatorio**
- [ ] **Enrutado a Kommo con UTM**
- [ ] **Error rate < 3%**
- [ ] **Leads llegan a Kommo con source y service**

#### 4. CTAs permanentes y claros
- [ ] **Botón WhatsApp flotante en todo el sitio**
- [ ] **CTADrawer visible al 50-60% del scroll**
- [ ] **Microcopy accionable: "Habla ahora", "Agenda orientación"**
- [ ] **CTAs visibles en móvil sin scroll**
- [ ] **Clicks WhatsApp/100 sesiones ≥ 8 en páginas de servicio**

#### 5. Transparencia de precios / reembolso
- [ ] **Página "Costos y Convenios" creada**
- [ ] **Módulos cortos de precios en cada landing**
- [ ] **Tabla simple de precios**
- [ ] **Nota: "con boleta reembolsas en tu seguro"**
- [ ] **Rebote en "Costos" < 40%**
- [ ] **Clics a WhatsApp ≥ 10% desde página de costos**

#### 6. Cumplimiento legal y sensible
- [ ] **Aviso de privacidad (Ley 19.628, Chile)**
- [ ] **Banner de consentimiento (cookies/analytics)**
- [ ] **Link a política de privacidad accesible**
- [ ] **Disclaimer clínico: "no reemplaza evaluación médica"**
- [ ] **Copy anti-promesas absolutas**

---

### ⚠️ P1 - Importantes (Deben estar 90% completos)

#### 7. Arquitectura y navegación
- [ ] **Menú claro por servicios + Nosotros + Costos + FAQ + Contacto**
- [ ] **Navegación sticky**
- [ ] **Focos visibles**
- [ ] **Breadcrumbs en blog**
- [ ] **Tiempo a primer clic (TTC) < 7s**

#### 8. Copy por etapa de conciencia
- [ ] **Hook → Problema → Agitación → Solución → Autoridad → Oferta → CTA**
- [ ] **Microbeneficios añadidos**
- [ ] **"Qué incluye / no incluye"**
- [ ] **Scroll depth ≥ 60% en landings**

#### 9. SEO técnico
- [ ] **Title/Description únicos**
- [ ] **H1 único por página**
- [ ] **OG tags completos**
- [ ] **Sitemap/robots.txt**
- [ ] **Canonical URLs**
- [ ] **Schema.org: MedicalClinic, FAQPage, VideoObject**
- [ ] **Core Web Vitals "Good" en Search Console**

#### 10. Imágenes y media
- [ ] **Pesos < 180 KB por imagen**
- [ ] **Formatos modernos (WebP, AVIF)**
- [ ] **Alt descriptivo humano**
- [ ] **Srcset implementado**
- [ ] **Lazy loading**
- [ ] **Total page weight < 1.5 MB**

#### 11. Accesibilidad
- [ ] **Contrastes AA (azul #023B6A / blanco)**
- [ ] **Labels en formularios**
- [ ] **Aria-live en toasts**
- [ ] **Orden de tabulación lógico**
- [ ] **Foco claro al abrir modales**
- [ ] **Lighthouse A11y ≥ 95**

#### 12. Medición
- [ ] **GA4 + Meta Pixel configurados**
- [ ] **Eventos: view_content, cta_whatsapp_click, lead_form_submit**
- [ ] **Eventos VSL: vsl_play, vsl_25/50/75/100**
- [ ] **UTM atribuido a Kommo**
- [ ] **Cada lead con utm_source en Kommo**

---

### 🧩 P2 - Mejores Prácticas (Deben estar 80% completos)

#### 13. Prueba social
- [ ] **Testimonios con rol/edad y breve historia**
- [ ] **1 testimonio en vídeo por servicio (30–45s)**
- [ ] **Usuarios que consumen testimonio convierten +20%**

#### 14. Retargeting / remarketing
- [ ] **Píxel y audiencias: viewed page, video watchers, initiated lead**
- [ ] **Secuencias con creatividades por objeción**
- [ ] **CPA de retargeting ≤ 60% del CPA de prospecting**

#### 15. Blog/SEO info-intent
- [ ] **4–6 posts base (ansiedad, señales de hospitalización, guía familiar, nutrición & ánimo)**
- [ ] **CTA intermedio contextual**
- [ ] **Caja "¿Necesitas ayuda ahora?"**
- [ ] **Tráfico orgánico mensual creciente + leads asistidos**

#### 16. 404 / Estados vacíos
- [ ] **404 útil con CTA a servicios**
- [ ] **Estados "sin resultados" con rutas de ayuda**
- [ ] **Microcopy empático**

#### 17. Seguridad & confianza
- [ ] **HTTPS implementado**
- [ ] **Política de cookies**
- [ ] **Datos de contacto visibles**
- [ ] **Favicon configurado**
- [ ] **Schema Organization**

---

## 🧪 Pruebas de Aceptación

### Flujos Críticos
- [ ] **Ver VSL → clic WhatsApp → abrir chat**
- [ ] **Completar formulario → lead en Kommo con UTM + servicio**
- [ ] **Ver precios → clic WhatsApp**

### Performance
- [ ] **Core Web Vitals (móvil): LCP < 2.5s, CLS < 0.1, INP < 200ms**
- [ ] **Móvil primero: todos los CTAs visibles sin scroll en hero**

### Contenido Sensible
- [ ] **En Ads usa copy neutro**
- [ ] **En web puede ser clínico pero empático**
- [ ] **Navegación con teclado 100%**
- [ ] **Focus visible**
- [ ] **Alt en imágenes**

---

## 📊 Métricas de Éxito

| Métrica | Objetivo | Herramienta |
|---------|----------|-------------|
| CTR Hero CTA | ≥ 12% | GA4 |
| LCP Móvil | < 2.5s | Lighthouse |
| Error Rate Forms | < 3% | Kommo |
| WhatsApp Clicks/100 sesiones | ≥ 8 | GA4 |
| Rebote Costos | < 40% | GA4 |
| Scroll Depth Landings | ≥ 60% | GA4 |
| Lighthouse A11y | ≥ 95 | Lighthouse |

---

## 🎯 Roadmap de A/B Tests (primer mes)

- [ ] **Hero title**: "Hospitalización 24/7…" vs "En crisis, actuamos hoy…"
- [ ] **CTA texto**: "Hablar ahora" vs "Recibir orientación"
- [ ] **VSL**: portada con persona (humano) vs instalaciones (espacio)
- [ ] **Precios**: módulo resumido en la landing vs link "Ver precios"

---

## 📝 Notas del Equipo

### Completado por:
- [ ] **Desarrollador Frontend**
- [ ] **Diseñador UX/UI**
- [ ] **SEO Specialist**
- [ ] **QA Tester**

### Fecha de revisión:
- [ ] **Fecha:** ___________
- [ ] **Revisado por:** ___________
- [ ] **Aprobado para producción:** [ ] Sí [ ] No

### Comentarios adicionales:
```
[Espacio para comentarios del equipo]
```
