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
  title: "El papel de la familia en el tratamiento psiquiátrico - Clínica Bihu",
  description:
    "Descubre cómo la inclusión familiar mejora significativamente los resultados del tratamiento psiquiátrico. Guía para familias.",
  keywords: "familia tratamiento psiquiátrico, inclusión familiar, salud mental familiar, apoyo familiar, Chile",
  canonical: "/blog/familia-tratamiento-psiquiatrico",
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
                    <BreadcrumbPage className="text-white">Familia y Tratamiento</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-center space-x-4 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white">Tratamiento</Badge>
                <span className="text-white/80">7 min de lectura</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                El papel de la familia en el tratamiento psiquiátrico
              </h1>
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Equipo Clínica Bihu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>12 de enero, 2025</span>
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
                  La familia es un pilar fundamental en el proceso de recuperación de la salud mental. Su participación activa y consciente puede marcar la diferencia entre un tratamiento exitoso y uno que no logra los resultados esperados.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">¿Por qué es importante la inclusión familiar?</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Beneficios para el paciente</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Mayor adherencia al tratamiento</li>
                        <li>• Reducción del estigma</li>
                        <li>• Mejor comprensión de la condición</li>
                        <li>• Apoyo emocional constante</li>
                        <li>• Ambiente más seguro y estable</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Beneficios para la familia</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Mejor comprensión de la situación</li>
                        <li>• Herramientas para manejar crisis</li>
                        <li>• Reducción del estrés familiar</li>
                        <li>• Fortalecimiento de vínculos</li>
                        <li>• Prevención de recaídas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cómo participar activamente en el tratamiento</h2>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Estrategias de participación familiar</h3>
                  <div className="space-y-4 text-green-800">
                    <div>
                      <h4 className="font-semibold">1. Asistir a sesiones familiares</h4>
                      <p>Participar en las terapias familiares programadas por el equipo médico.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">2. Seguir las recomendaciones médicas</h4>
                      <p>Ayudar al paciente a cumplir con medicamentos y citas médicas.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">3. Crear un ambiente de apoyo</h4>
                      <p>Mantener un hogar estable, libre de conflictos y estresores.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">4. Comunicación abierta</h4>
                      <p>Mantener diálogo honesto y sin juicios con el paciente.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Señales de alerta que la familia debe conocer</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-orange-600 text-xl">⚠️</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Cambios de comportamiento</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Aislamiento social</li>
                        <li>• Cambios en el sueño</li>
                        <li>• Irritabilidad excesiva</li>
                        <li>• Pérdida de interés</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-red-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-red-600 text-xl">🚨</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Señales de crisis</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pensamientos suicidas</li>
                        <li>• Autolesiones</li>
                        <li>• Psicosis</li>
                        <li>• Abuso de sustancias</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-blue-600 text-xl">💊</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Adherencia al tratamiento</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Olvido de medicamentos</li>
                        <li>• Falta a citas</li>
                        <li>• Rechazo al tratamiento</li>
                        <li>• Efectos secundarios</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Comunicación efectiva con el paciente</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Técnicas de comunicación empática</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">✅ Hacer</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• Escuchar sin juzgar</li>
                        <li>• Validar sus emociones</li>
                        <li>• Preguntar cómo se siente</li>
                        <li>• Ofrecer apoyo incondicional</li>
                        <li>• Respetar su espacio</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">❌ Evitar</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• Minimizar sus sentimientos</li>
                        <li>• Dar consejos no solicitados</li>
                        <li>• Comparar con otros</li>
                        <li>• Presionar para "mejorar"</li>
                        <li>• Ignorar señales de crisis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cuidado del cuidador familiar</h2>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">El autocuidado es fundamental</h3>
                  <p className="text-purple-800 mb-4">
                    Los familiares también necesitan apoyo y cuidado para poder brindar el mejor apoyo al paciente:
                  </p>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Buscar apoyo psicológico para la familia</li>
                    <li>• Participar en grupos de apoyo</li>
                    <li>• Mantener sus propias actividades</li>
                    <li>• No descuidar su salud física</li>
                    <li>• Establecer límites saludables</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Recursos de apoyo para familias</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Líneas de ayuda</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Salud Responde:</strong> 600 360 7777</li>
                        <li><strong>Línea Libre:</strong> 1515</li>
                        <li><strong>Fono Mayor:</strong> 800 400 035</li>
                        <li><strong>Emergencias:</strong> 133</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Recursos comunitarios</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Grupos de apoyo familiar</li>
                        <li>• Talleres psicoeducativos</li>
                        <li>• Terapia familiar</li>
                        <li>• Programas de respiro</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusión</h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  La familia es un aliado fundamental en el proceso de recuperación de la salud mental. Su participación activa, informada y empática puede marcar la diferencia en el éxito del tratamiento. Recuerda que también necesitas cuidarte para poder cuidar mejor a tu ser querido.
                </p>

                <div className="bg-[#023B6A] text-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas orientación familiar?</h3>
                  <p className="text-white/90 mb-6">
                    En Clínica Bihu ofrecemos apoyo integral para toda la familia durante el proceso de tratamiento.
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
