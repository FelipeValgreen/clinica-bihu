import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTADrawer from "@/components/cta-drawer"
import WhatsAppFloat from "@/components/whatsapp-float"
import VSLPlayer from "@/components/vsl-player"
import VideoThumbnail from "@/components/video-thumbnail"
import Checklist from "@/components/checklist"
import Timeline from "@/components/timeline"
import LeadForm from "@/components/lead-form"
import TrustBadges from "@/components/trust-badges"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { generateSEO, generateJSONLD } from "@/lib/seo"
import clinicData from "@/data/clinic.json"
import serviciosData from "@/data/servicios.json"
import preciosData from "@/data/precios.json"
import faqData from "@/data/faq.json"

export const metadata: Metadata = generateSEO({
  title: "Terapia Psicológica en Santiago - Clínica Bihu",
  description:
    "Terapia psicológica especializada en Santiago. Psicólogos clínicos para terapia individual, familiar y grupal con enfoque humanizado.",
  keywords:
    "terapia psicológica Santiago, psicólogo Chile, psicoterapia, terapia individual, terapia familiar, salud mental",
  canonical: "/psicologia",
})

export default function PsicologiaPage() {
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
                Terapia Psicológica Especializada
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
                Psicólogos clínicos especializados en terapia individual, familiar y grupal con enfoque humanizado y familiar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8 py-3">
                  <a
                    href={`https://wa.me/${clinicData.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar terapia psicológica"
                  >
                    🧠 Agendar terapia
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

        {/* Video Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Terapia psicológica que transforma vidas</h2>
                <p className="text-lg text-gray-600">Descubre nuestro enfoque humanizado en psicología</p>
              </div>
              <VideoThumbnail 
                title="Terapia Psicológica Especializada - Clínica Bihu"
                description="Conoce nuestro enfoque terapéutico integral. Psicólogos especializados en terapia individual, familiar y grupal."
                duration="6:20"
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
                    ¿Qué incluye la terapia psicológica?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Evaluación psicológica</h3>
                        <p className="text-gray-600">Análisis completo de tu situación emocional y mental</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Terapia individual</h3>
                        <p className="text-gray-600">Sesiones personalizadas para trabajar tus necesidades específicas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Terapia familiar</h3>
                        <p className="text-gray-600">Incluimos a la familia en el proceso terapéutico</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Técnicas especializadas</h3>
                        <p className="text-gray-600">CBT, terapia humanista y otras metodologías probadas</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de la terapia</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duración:</span>
                      <span className="font-semibold">50 minutos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Modalidad:</span>
                      <span className="font-semibold">Presencial</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Precio:</span>
                      <span className="font-semibold text-[#E91E63]">${preciosData.consultas.psicologia.toLocaleString()}</span>
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

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Preguntas Frecuentes
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    ¿Cuándo debo buscar terapia psicológica?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Busca terapia cuando experimentes dificultades emocionales persistentes, problemas de relación, 
                    ansiedad, depresión, o cuando sientas que necesitas apoyo para manejar situaciones de vida.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    ¿Cuántas sesiones necesito?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    El número de sesiones varía según cada persona y situación. Generalmente se recomienda un mínimo 
                    de 8-12 sesiones para ver resultados significativos, pero esto se evalúa individualmente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    ¿La terapia es confidencial?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Sí, la terapia psicológica es completamente confidencial. Solo se puede romper el secreto 
                    profesional en casos muy específicos de riesgo para la vida.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#023B6A] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas apoyo psicológico?</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Nuestros psicólogos están disponibles para acompañarte en tu proceso de bienestar emocional.
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
                  <LeadForm source="psicologia" />
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
