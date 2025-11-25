import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTADrawer from "@/components/cta-drawer"
import WhatsAppFloat from "@/components/whatsapp-float"
import VSLEmbedPlayer from "@/components/vsl-embed-player"
import LeadForm from "@/components/lead-form"
import TrustBadges from "@/components/trust-badges"
import { Button } from "@/components/ui/button"
import { generateSEO, generateJSONLD } from "@/lib/seo"
import clinicData from "@/data/clinic.json"
import preciosData from "@/data/precios.json"

export const metadata: Metadata = generateSEO({
  title: "Terapia Ocupacional en Santiago - Clínica Bihu",
  description:
    "Terapia ocupacional especializada en salud mental. Rehabilitación funcional para mejorar la calidad de vida y autonomía.",
  keywords:
    "terapia ocupacional Santiago, rehabilitación funcional, salud mental, terapeuta ocupacional Chile, autonomía",
  canonical: "/terapia-ocupacional",
})

export default function TerapiaOcupacionalPage() {
  const jsonLD = generateJSONLD("MedicalClinic", {
    priceRange: "$$$",
    hasMap: "https://maps.google.com/?q=Chopin+3157,+San+Joaquín,+Santiago,+Chile",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />

      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#023B6A] to-[#034a7a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Terapia Ocupacional Especializada
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
                Rehabilitación funcional especializada para mejorar la autonomía y calidad de vida en salud mental.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8 py-3">
                  <a
                    href={`https://wa.me/${clinicData.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar terapia ocupacional"
                  >
                    🎯 Agendar terapia
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#023B6A] text-lg px-8 py-3 bg-transparent"
                >
                  <a href={`tel:${clinicData.telefono}`}>Llamar ahora</a>
                </Button>
              </div>

              <TrustBadges />
            </div>
          </div>
        </section>

        {/* VSL Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Conoce más sobre nuestra terapia ocupacional
                </h2>
                <p className="text-lg text-gray-600">
                  Video informativo sobre nuestro enfoque de rehabilitación
                </p>
              </div>
              <VSLEmbedPlayer
                embedUrl="https://drive.google.com/drive/folders/1p4bJn3IIryF5ycmN9lJ5zgxLToKfdC4A"
                thumbnail="/thumbnails/terapia-ocupacional.jpg"
                title="VSL Terapia Ocupacional – Clínica Bihu"
              />
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    ¿Qué incluye la terapia ocupacional?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Evaluación funcional</h3>
                        <p className="text-gray-600">Análisis de habilidades y limitaciones en actividades diarias</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Rehabilitación funcional</h3>
                        <p className="text-gray-600">Mejora de habilidades para la vida diaria y autonomía</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Actividades terapéuticas</h3>
                        <p className="text-gray-600">Talleres y actividades para mejorar el bienestar</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Integración social</h3>
                        <p className="text-gray-600">Preparación para la reinserción social y laboral</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de la terapia</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duración:</span>
                      <span className="font-semibold">45 minutos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Modalidad:</span>
                      <span className="font-semibold">Presencial</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Precio:</span>
                      <span className="font-semibold text-[#4CAF50]">${preciosData.consultas.kinesiologia.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Disponibilidad:</span>
                      <span className="font-semibold">Lunes a Viernes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#023B6A] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas terapia ocupacional?</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Nuestros terapeutas ocupacionales están disponibles para mejorar tu autonomía y calidad de vida.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                      <a
                        href={`https://wa.me/${clinicData.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar terapia
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-[#023B6A] bg-transparent"
                    >
                      <a href={`tel:${clinicData.telefono}`}>Llamar ahora</a>
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Solicita tu terapia</h3>
                  <LeadForm source="terapia_ocupacional" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CTADrawer />
      <WhatsAppFloat />
    </>
  )
}
