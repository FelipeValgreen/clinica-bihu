# 🚀 Guía de Despliegue - Clínica Bihu

## 📋 Pasos para Desplegar en Vercel

### 1. Crear Repositorio en GitHub

Si GitHub CLI no está autenticado, ejecuta:
```bash
gh auth login
```

Luego crea el repositorio:
```bash
gh repo create clinica-bihu --public --source=. --remote=origin --push
```

O manualmente:
1. Ve a https://github.com/new
2. Nombre: `clinica-bihu`
3. Descripción: "Sitio web de Clínica Bihu - Bienestar Humanizado"
4. Público o Privado (según prefieras)
5. NO inicialices con README (ya tenemos uno)
6. Crea el repositorio
7. Sigue las instrucciones para conectar tu repositorio local

### 2. Push del Código a GitHub

```bash
git remote add origin https://github.com/TU_USUARIO/clinica-bihu.git
git push -u origin main
```

### 3. Desplegar en Vercel

#### Opción A: Desde el Dashboard de Vercel (Recomendado)

1. **Ve a Vercel:**
   - https://vercel.com
   - Inicia sesión con tu cuenta (puedes usar GitHub)

2. **Importa el Proyecto:**
   - Click en "Add New..." → "Project"
   - Selecciona el repositorio `clinica-bihu`
   - Vercel detectará automáticamente Next.js

3. **Configuración del Proyecto:**
   - **Framework Preset:** Next.js (detectado automáticamente)
   - **Root Directory:** `./` (raíz)
   - **Build Command:** `npm run build` (automático)
   - **Output Directory:** `.next` (automático)
   - **Install Command:** `npm install` (automático)

4. **Variables de Entorno:**
   Agrega estas variables en la configuración del proyecto:
   ```
   NEXT_PUBLIC_SITE_URL=https://www.clinicabihu.cl
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_META_PIXEL=XXXXXXXXXX
   NEXT_PUBLIC_KOMMO_WIDGET_ID=XXXXXXXXXX
   NEXT_PUBLIC_KOMMO_WIDGET_HASH=XXXXXXXXXX
   ```

5. **Deploy:**
   - Click en "Deploy"
   - Espera a que termine el build
   - Tu sitio estará disponible en `https://clinica-bihu.vercel.app`

#### Opción B: Desde la CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Para producción
vercel --prod
```

### 4. Configurar Dominio Personalizado (Opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio: `www.clinicabihu.cl`
4. Sigue las instrucciones para configurar DNS

### 5. Configurar Deploy Automático

Una vez conectado GitHub con Vercel:
- ✅ Cada push a `main` desplegará automáticamente
- ✅ Pull requests crearán preview deployments
- ✅ Puedes configurar branches específicos en Settings → Git

## 🔧 Configuración Post-Deploy

### Verificar Variables de Entorno

Asegúrate de que todas las variables estén configuradas:
- `NEXT_PUBLIC_SITE_URL` - URL de producción
- `NEXT_PUBLIC_GA4_ID` - Google Analytics 4
- `NEXT_PUBLIC_META_PIXEL` - Meta Pixel
- `NEXT_PUBLIC_KOMMO_WIDGET_ID` - Kommo CRM
- `NEXT_PUBLIC_KOMMO_WIDGET_HASH` - Kommo CRM Hash

### Verificar Build

Después del primer deploy, verifica:
- ✅ El sitio carga correctamente
- ✅ Los formularios funcionan
- ✅ Analytics está configurado
- ✅ Las imágenes cargan
- ✅ El sitemap está accesible (`/sitemap.xml`)

## 📊 Monitoreo

### Vercel Analytics
- Ve a tu proyecto en Vercel
- Analytics → Activa Vercel Analytics (opcional)

### Google Search Console
1. Ve a https://search.google.com/search-console
2. Agrega la propiedad `https://www.clinicabihu.cl`
3. Verifica la propiedad (Vercel puede hacerlo automáticamente)
4. Envía el sitemap: `https://www.clinicabihu.cl/sitemap.xml`

## 🐛 Troubleshooting

### Build Fails
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs en Vercel Dashboard
- Asegúrate de que `node_modules` esté en `.gitignore`

### Variables de Entorno No Funcionan
- Verifica que empiecen con `NEXT_PUBLIC_` para variables del cliente
- Reinicia el deployment después de agregar variables
- Verifica que no haya espacios en los valores

### Imágenes No Cargan
- Verifica que las rutas en `public/` sean correctas
- Asegúrate de usar rutas relativas (`/image.jpg` no `./image.jpg`)

## 🔄 Actualizaciones Futuras

Para actualizar el sitio:
```bash
# Hacer cambios
git add .
git commit -m "Descripción de cambios"
git push origin main
```

Vercel desplegará automáticamente.

## 📞 Soporte

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub:** https://github.com/TU_USUARIO/clinica-bihu

---

**¡Listo! Tu sitio está desplegado y funcionando.** 🎉

