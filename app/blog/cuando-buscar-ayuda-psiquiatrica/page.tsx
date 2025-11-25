import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { generateSEO } from "@/lib/seo"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"

export const metadata: Metadata = generateSEO({
  title: "¿Cuándo buscar ayuda psiquiátrica? Señales importantes - Clínica Bihu",
  description:
    "Descubre las señales importantes que indican cuándo es momento de buscar ayuda profesional para tu salud mental. Guía completa por especialistas.",
  keywords: "ayuda psiquiátrica, señales salud mental, cuándo buscar psiquiatra, crisis mental, Chile",
  canonical: "/blog/cuando-buscar-ayuda-psiquiatrica",
})

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#023B6A] to-[#034a7a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb className="mb-6">
                <BreadcrumbList className="text-white/80">
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/" className="hover:text-white">Inicio</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/60" />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/blog" className="hover:text-white">Blog</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/60" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-white">Ayuda Psiquiátrica</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-center space-x-4 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white">Salud Mental</Badge>
                <span className="text-white/80">5 min de lectura</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                ¿Cuándo buscar ayuda psiquiátrica? Señales importantes
              </h1>
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Dr. Mario Sánchez</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>15 de enero, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Reconocer cuándo necesitamos ayuda profesional para nuestra salud mental es el primer paso hacia el bienestar. En este artículo, te ayudamos a identificar las señales importantes que indican que es momento de buscar apoyo psiquiátrico.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Señales emocionales y conductuales</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Cambios en el estado de ánimo</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Tristeza persistente por más de 2 semanas</li>
                        <li>• Irritabilidad constante</li>
                        <li>• Ansiedad excesiva</li>
                        <li>• Cambios drásticos de humor</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Alteraciones del sueño</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Insomnio persistente</li>
                        <li>• Dormir en exceso</li>
                        <li>• Pesadillas recurrentes</li>
                        <li>• Despertar temprano sin poder volver a dormir</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Señales físicas importantes</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Síntomas físicos relacionados con la salud mental</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Dolores de cabeza frecuentes sin causa médica aparente</li>
                    <li>• Problemas digestivos persistentes</li>
                    <li>• Fatiga crónica</li>
                    <li>• Dolores musculares sin explicación</li>
                    <li>• Cambios en el apetito (aumento o disminución significativa)</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Señales de crisis que requieren atención inmediata</h2>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">⚠️ Atención inmediata requerida</h3>
                  <p className="text-red-800 mb-4">
                    Si experimentas alguno de estos síntomas, busca ayuda profesional inmediatamente:
                  </p>
                  <ul className="space-y-2 text-red-800">
                    <li>• Pensamientos de autolesión o suicidio</li>
                    <li>• Alucinaciones o delirios</li>
                    <li>• Incapacidad para realizar actividades básicas</li>
                    <li>• Aislamiento social extremo</li>
                    <li>• Abuso de sustancias</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">¿Cómo buscar ayuda profesional?</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#023B6A] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">📞</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Línea de emergencia</h3>
                      <p className="text-gray-600 text-sm">600 360 7777 - Salud Responde</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#023B6A] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">🏥</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Consulta especializada</h3>
                      <p className="text-gray-600 text-sm">Psiquiatra o psicólogo</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#023B6A] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">👨‍⚕️</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Médico general</h3>
                      <p className="text-gray-600 text-sm">Primera evaluación</p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Mitos sobre la salud mental</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Desmitificando creencias erróneas</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">❌ "Buscar ayuda es signo de debilidad"</p>
                      <p className="text-gray-600">✅ Buscar ayuda es un acto de valentía y autocuidado.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">❌ "Los problemas mentales se resuelven solos"</p>
                      <p className="text-gray-600">✅ La salud mental requiere atención profesional, igual que la salud física.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">❌ "Solo los 'locos' van al psiquiatra"</p>
                      <p className="text-gray-600">✅ Cualquier persona puede beneficiarse de la atención psiquiátrica.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusión</h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Reconocer las señales de que necesitamos ayuda profesional es el primer paso hacia el bienestar mental. No hay que esperar a que los síntomas empeoren. La atención temprana puede prevenir crisis y mejorar significativamente la calidad de vida.
                </p>

                <div className="bg-[#023B6A] text-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda profesional?</h3>
                  <p className="text-white/90 mb-6">
                    En Clínica Bihu estamos disponibles 24/7 para brindarte la atención que necesitas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/56920108958"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                    >
                      Consultar por WhatsApp
                    </a>
                    <a
                      href="/contacto"
                      className="border-2 border-white text-white hover:bg-white hover:text-[#023B6A] px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                    >
                      Más información
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
