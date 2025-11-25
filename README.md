# Clínica Bihu - Bienestar Humanizado

Sitio web de Clínica Bihu, especializada en salud mental y hospitalización psiquiátrica humanizada en Santiago, Chile.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Componentes accesibles** (WCAG AA)
- **SEO optimizado** con meta tags y sitemap
- **Analytics** con GA4 y Meta Pixel
- **Formularios** con validación y tracking
- **Responsive design** móvil-first

## 📋 Requisitos

- Node.js 18+ 
- npm, yarn o pnpm

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🔧 Variables de Entorno

Crea un archivo `.env.local` con:

```env
NEXT_PUBLIC_SITE_URL=https://www.clinicabihu.cl
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL=XXXXXXXXXX
NEXT_PUBLIC_KOMMO_WIDGET_ID=XXXXXXXXXX
NEXT_PUBLIC_KOMMO_WIDGET_HASH=XXXXXXXXXX
```

## 📁 Estructura del Proyecto

```
├── app/                    # Páginas y rutas (App Router)
├── components/             # Componentes React
│   ├── ui/                # Componentes UI reutilizables
│   └── ...                # Componentes específicos
├── data/                  # Datos JSON (servicios, testimonios, etc.)
├── lib/                   # Utilidades y helpers
├── public/                # Archivos estáticos
└── styles/               # Estilos globales
```

## 🚀 Despliegue en Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel.

1. Conecta tu repositorio de GitHub a Vercel
2. Configura las variables de entorno en el dashboard de Vercel
3. El despliegue se realizará automáticamente

## 📊 Testing

```bash
# Tests de accesibilidad
npm run test:a11y

# Tests de performance
npm run test:performance

# Tests de SEO
npm run test:seo

# Lighthouse CI
npm run lighthouse
```

## 📝 Licencia

Privado - Clínica Bihu

## 👥 Equipo

Desarrollado para Clínica Bihu - Bienestar Humanizado

