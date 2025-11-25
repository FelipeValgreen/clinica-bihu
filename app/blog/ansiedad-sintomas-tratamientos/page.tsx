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
  title: "Ansiedad: Síntomas, causas y tratamientos efectivos - Clínica Bihu",
  description:
    "Guía completa sobre la ansiedad: síntomas, causas, tipos y tratamientos efectivos. Información especializada por profesionales de la salud mental.",
  keywords: "ansiedad, síntomas ansiedad, tratamiento ansiedad, trastornos ansiedad, salud mental, Chile",
  canonical: "/blog/ansiedad-sintomas-tratamientos",
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
                    <BreadcrumbPage className="text-white">Ansiedad</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-center space-x-4 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white">Ansiedad</Badge>
                <span className="text-white/80">8 min de lectura</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Ansiedad: Síntomas, causas y tratamientos efectivos
              </h1>
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Psicóloga Carmen López</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>10 de enero, 2025</span>
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
                  La ansiedad es una de las condiciones de salud mental más comunes, afectando a millones de personas en todo el mundo. Comprender sus síntomas, causas y tratamientos es fundamental para buscar la ayuda adecuada.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">¿Qué es la ansiedad?</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <p className="text-blue-800">
                    La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés o peligro. Sin embargo, cuando se vuelve excesiva, persistente e interfiere con la vida diaria, se convierte en un trastorno que requiere atención profesional.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tipos de trastornos de ansiedad</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Trastorno de Ansiedad Generalizada (TAG)</h3>
                      <p className="text-gray-600 mb-4">Preocupación excesiva y persistente sobre diversos aspectos de la vida diaria.</p>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Preocupación constante</li>
                        <li>• Dificultad para controlar la preocupación</li>
                        <li>• Síntomas físicos persistentes</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Trastorno de Pánico</h3>
                      <p className="text-gray-600 mb-4">Ataques de pánico recurrentes e inesperados.</p>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Ataques de pánico súbitos</li>
                        <li>• Miedo a tener más ataques</li>
                        <li>• Evitación de situaciones</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Fobia Social</h3>
                      <p className="text-gray-600 mb-4">Miedo intenso a situaciones sociales o de rendimiento.</p>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Miedo al juicio de otros</li>
                        <li>• Evitación de situaciones sociales</li>
                        <li>• Síntomas físicos en situaciones sociales</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Trastorno Obsesivo-Compulsivo (TOC)</h3>
                      <p className="text-gray-600 mb-4">Pensamientos obsesivos y comportamientos compulsivos.</p>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Pensamientos intrusivos</li>
                        <li>• Comportamientos repetitivos</li>
                        <li>• Dificultad para controlar los pensamientos</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Síntomas de la ansiedad</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-red-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-red-600 text-xl">💓</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Síntomas físicos</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Palpitaciones</li>
                        <li>• Sudoración excesiva</li>
                        <li>• Temblores</li>
                        <li>• Dificultad para respirar</li>
                        <li>• Náuseas</li>
                        <li>• Mareos</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-yellow-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-yellow-600 text-xl">🧠</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Síntomas cognitivos</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Preocupación excesiva</li>
                        <li>• Pensamientos catastróficos</li>
                        <li>• Dificultad para concentrarse</li>
                        <li>• Miedo al futuro</li>
                        <li>• Sensación de peligro</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-blue-600 text-xl">😰</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Síntomas emocionales</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Nerviosismo</li>
                        <li>• Irritabilidad</li>
                        <li>• Sensación de tensión</li>
                        <li>• Miedo intenso</li>
                        <li>• Sensación de pérdida de control</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Causas de la ansiedad</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Factores que contribuyen al desarrollo de la ansiedad</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Factores biológicos</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Genética y herencia familiar</li>
                        <li>• Desequilibrios químicos en el cerebro</li>
                        <li>• Condiciones médicas</li>
                        <li>• Uso de sustancias</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Factores psicológicos</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Experiencias traumáticas</li>
                        <li>• Estrés crónico</li>
                        <li>• Patrones de pensamiento negativos</li>
                        <li>• Baja autoestima</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tratamientos efectivos</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Terapia psicológica</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>
                          <strong>Cognitivo-Conductual (TCC):</strong> Identifica y modifica patrones de pensamiento negativos.
                        </li>
                        <li>
                          <strong>Terapia de exposición:</strong> Enfrenta gradualmente las situaciones temidas.
                        </li>
                        <li>
                          <strong>Mindfulness:</strong> Técnicas de atención plena para manejar la ansiedad.
                        </li>
                        <li>
                          <strong>Relajación:</strong> Ejercicios de respiración y relajación muscular.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Tratamiento farmacológico</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>
                          <strong>Antidepresivos:</strong> Efectivos para la ansiedad a largo plazo.
                        </li>
                        <li>
                          <strong>Benzodiacepinas:</strong> Para alivio rápido de síntomas agudos.
                        </li>
                        <li>
                          <strong>Betabloqueadores:</strong> Para síntomas físicos de ansiedad.
                        </li>
                        <li>
                          <strong>Suplementos:</strong> Como la valeriana o la pasiflora.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Estrategias de autocuidado</h2>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Técnicas que puedes practicar en casa</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Técnicas de respiración</h4>
                      <ul className="space-y-2 text-green-800">
                        <li>• Respiración diafragmática</li>
                        <li>• Técnica 4-7-8</li>
                        <li>• Respiración cuadrada</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Ejercicio y bienestar</h4>
                      <ul className="space-y-2 text-green-800">
                        <li>• Ejercicio regular</li>
                        <li>• Sueño adecuado</li>
                        <li>• Alimentación balanceada</li>
                        <li>• Reducción de cafeína</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cuándo buscar ayuda profesional</h2>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Señales de que necesitas ayuda</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• La ansiedad interfiere con tu vida diaria</li>
                    <li>• Tienes ataques de pánico frecuentes</li>
                    <li>• Evitas situaciones por miedo</li>
                    <li>• Los síntomas duran más de 6 meses</li>
                    <li>• Tienes pensamientos de autolesión</li>
                    <li>• El autocuidado no es suficiente</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusión</h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  La ansiedad es una condición tratable. Con el apoyo adecuado, la mayoría de las personas pueden aprender a manejar sus síntomas y llevar una vida plena. No dudes en buscar ayuda profesional si sientes que la ansiedad está afectando tu calidad de vida.
                </p>

                <div className="bg-[#023B6A] text-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con la ansiedad?</h3>
                  <p className="text-white/90 mb-6">
                    Nuestros especialistas están disponibles para brindarte el apoyo que necesitas.
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

