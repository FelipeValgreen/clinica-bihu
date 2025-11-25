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
  title: "Consulta Psiquiátrica en Santiago - Clínica Bihu",
  description:
    "Consulta psiquiátrica especializada en Santiago. Evaluación, diagnóstico y tratamiento de trastornos mentales con enfoque humanizado y familiar.",
  keywords:
    "consulta psiquiátrica Santiago, psiquiatra Chile, evaluación psiquiátrica, tratamiento salud mental, psiquiatría adulto",
  canonical: "/psiquiatria",
})

export default function PsiquiatriaPage() {
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
                Consulta Psiquiátrica Especializada
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
                Evaluación, diagnóstico y tratamiento integral de trastornos mentales con enfoque humanizado y familiar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8 py-3">
                  <a
                    href={`https://wa.me/${clinicData.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar consulta psiquiátrica"
                  >
                    🩺 Agendar consulta
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Conoce nuestro enfoque psiquiátrico</h2>
                <p className="text-lg text-gray-600">Descubre cómo trabajamos para tu bienestar mental</p>
              </div>
              <VideoThumbnail 
                title="Consulta Psiquiátrica Especializada - Clínica Bihu"
                description="Conoce nuestro enfoque integral en psiquiatría. Evaluación, diagnóstico y tratamiento personalizado para tu bienestar mental."
                duration="8:45"
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
                    ¿Qué incluye la consulta psiquiátrica?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#023B6A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Evaluación integral</h3>
                        <p className="text-gray-600">Historia clínica completa y evaluación del estado mental</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#023B6A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Diagnóstico preciso</h3>
                        <p className="text-gray-600">Identificación de trastornos y plan de tratamiento personalizado</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#023B6A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Tratamiento farmacológico</h3>
                        <p className="text-gray-600">Prescripción y seguimiento de medicamentos cuando sea necesario</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#023B6A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Seguimiento continuo</h3>
                        <p className="text-gray-600">Control y ajuste del tratamiento según la evolución</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de la consulta</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duración:</span>
                      <span className="font-semibold">60 minutos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Modalidad:</span>
                      <span className="font-semibold">Presencial</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Precio:</span>
                      <span className="font-semibold text-[#023B6A]">${preciosData.consultas.psiquiatria.toLocaleString()}</span>
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
                    ¿Cuándo debo consultar a un psiquiatra?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Debes consultar cuando experimentes síntomas como cambios persistentes en el estado de ánimo, 
                    ansiedad excesiva, problemas de sueño, dificultades de concentración, o cuando estos síntomas 
                    interfieran con tu vida diaria.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    ¿Necesito derivación médica?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    No necesariamente. Puedes consultar directamente, aunque si tienes derivación de otro profesional 
                    de la salud, es recomendable traerla para tener un contexto más completo de tu situación.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    ¿Qué debo llevar a la consulta?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Trae tu cédula de identidad, carnet de salud (si tienes), lista de medicamentos actuales, 
                    y cualquier informe médico previo que consideres relevante.
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas una consulta psiquiátrica?</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Nuestros psiquiatras están disponibles para brindarte la atención especializada que necesitas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                      <a
                        href={`https://wa.me/${clinicData.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar consulta
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Solicita tu consulta</h3>
                  <LeadForm source="psiquiatria" />
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
