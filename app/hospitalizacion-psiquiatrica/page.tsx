import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTADrawer from "@/components/cta-drawer"
import WhatsAppFloat from "@/components/whatsapp-float"
import VSLPlayer from "@/components/vsl-player"
import Checklist from "@/components/checklist"
import Timeline from "@/components/timeline"
import LeadForm from "@/components/lead-form"
import TrustBadges from "@/components/trust-badges"
import ScrollToFormButton from "@/components/scroll-to-form-button"
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
  title: "Hospitalización Psiquiátrica 24/7 en Santiago - Segura, Privada y Humanizada",
  description:
    "Hospitalización psiquiátrica con inclusión familiar en Santiago. Atención 24/7, habitación privada, equipo multidisciplinario. La familia también se trata.",
  keywords:
    "hospitalización psiquiátrica Santiago, clínica psiquiátrica, internación psiquiátrica, salud mental Chile, tratamiento psiquiátrico",
  canonical: "/hospitalizacion-psiquiatrica",
})

export default function HospitalizacionPage() {
  const timelineSteps = [
    {
      title: "Evaluación de ingreso",
      description:
        "Consulta inicial con psiquiatra para evaluar necesidades y crear plan de tratamiento personalizado.",
    },
    {
      title: "Asignación de habitación",
      description: "Habitación individual privada con todas las comodidades para tu bienestar y privacidad.",
    },
    {
      title: "Rutina terapéutica",
      description: "Programa diario con psiquiatría, psicología, kinesiología, terapia ocupacional y nutrición.",
    },
    {
      title: "Seguimiento familiar",
      description: "Evaluación a las 2 semanas post-alta con plan de continuidad y apoyo familiar.",
    },
  ]

  const jsonLD = generateJSONLD("MedicalClinic", {
    priceRange: "$$$",
    hasMap: "https://maps.google.com/?q=Chopin+3157,+San+Joaquín,+Santiago,+Chile",
  })

  const faqJsonLD = generateJSONLD("FAQPage", { faqs: faqData.hospitalizacion })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLD) }} />

      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#8E06DF] to-[#a020f0] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white mb-4">Atención 24/7</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Hospitalización Psiquiátrica 24/7 en Santiago — segura, privada y humanizada
                </h1>
                <p className="text-xl mb-8 text-white/90 text-pretty">
                  Atención integral con inclusión familiar y entorno de confort. La{" "}
                  <span className="font-brittany text-3xl">familia</span> también se trata.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                    <a
                      href={`https://wa.me/${clinicData.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contactar por WhatsApp para información sobre hospitalización"
                    >
                      Hablar por WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#8E06DF] bg-transparent"
                  >
                    <a href={`tel:${clinicData.telefono}`} aria-label="Llamar a Clínica Bihu">
                      Llamar ahora
                    </a>
                  </Button>
                </div>

                <TrustBadges />
              </div>

              <div>
                <VSLPlayer
                  videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generacio%CC%81n_de_Video_Sales_Letter_Psiquia%CC%81trico-6naHiZN8zShXHvr1TNxGBxPXxnp8jU.mp4"
                  title="Video informativo sobre hospitalización psiquiátrica en Clínica Bihu"
                  poster="/psychiatric-hospitalization-video-thumbnail.jpg"
                  subtitlesUrl="/videos/hospitalizacion-psiquiatrica-subtitles.vtt"
                  lazy={true}
                  autoMute={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20" aria-labelledby="included-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="included-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Transparencia en el servicio
                </h2>
                <p className="text-xl text-gray-600">Sabemos exactamente qué necesitas para tomar la mejor decisión</p>
              </div>

              <Checklist
                incluye={serviciosData.hospitalizacion.incluye}
                noIncluye={serviciosData.hospitalizacion.no_incluye}
              />

              {/* Nota empática sobre reembolso */}
              <div className="mt-8 bg-blue-50 border-l-4 border-[#023B6A] rounded-r-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-[#023B6A]">Sabemos que una hospitalización implica una inversión importante.</strong>{" "}
                  Te ayudamos a gestionar el reembolso con tu seguro de salud utilizando la boleta de la clínica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proceso de hospitalización</h2>
                <p className="text-xl text-gray-600">4 pasos simples para tu recuperación</p>
              </div>

              <Timeline steps={timelineSteps} />
            </div>
          </div>
        </section>

        {/* Family Differential */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestro diferencial: La{" "}
                <span className="font-brittany text-[#DE027B] text-5xl md:text-6xl">familia</span> también se trata
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Somos la única clínica en Santiago que incluye activamente a la familia en el proceso de recuperación.
                Creemos que sanar es un trabajo en equipo.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Sesiones familiares</h3>
                    <p className="text-gray-600">
                      Terapia grupal con la familia para fortalecer vínculos y comunicación.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Educación familiar</h3>
                    <p className="text-gray-600">Capacitación sobre el trastorno y cómo brindar apoyo efectivo.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Plan de continuidad</h3>
                    <p className="text-gray-600">Seguimiento post-alta con la familia para mantener la recuperación.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Transparencia en los costos y apoyo en tu reembolso
                </h2>
              </div>

              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                  El valor diario de hospitalización incluye el uso de instalaciones, alimentación, terapias y acompañamiento clínico. 
                  Con la boleta de Clínica Bihu puedes solicitar reembolso en tu Isapre, Fonasa o seguro complementario, según tu plan.
                </p>

                <div className="bg-white rounded-lg border p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Boleta válida para reembolso en tu seguro de salud.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Te orientamos paso a paso para enviar tu reembolso.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Opciones de pago flexibles según el tiempo de estadía.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Día cama hospitalización</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Con Isapre:</span>
                        <span className="font-semibold">${preciosData.hospitalizacion.precio_dia.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Con Fonasa:</span>
                        <span className="font-semibold">${preciosData.hospitalizacion.precio_dia.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Servicios adicionales</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Consulta de ingreso:</span>
                        <span className="font-semibold">${preciosData.consultas.psiquiatria.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cuidador (día):</span>
                        <span className="font-semibold">${preciosData.cuidador.precio_dia.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Video Transcript Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="transcript-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="transcript-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Transcript del video
                </h2>
                <p className="text-xl text-gray-600">
                  Lee el contenido del video informativo sobre hospitalización psiquiátrica
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Bienvenido a Clínica Bihu,</strong> tu centro de salud mental humanizada en Santiago, Chile.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Somos especialistas en hospitalización psiquiátrica con un enfoque único: <strong>la familia también se trata.</strong>
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Nuestro equipo multidisciplinario está disponible <strong>las 24 horas del día, los 7 días de la semana.</strong>
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Ofrecemos habitaciones privadas, espacios seguros y un entorno diseñado para tu recuperación.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Incluimos a tu familia en cada etapa del tratamiento, porque creemos que <strong>sanar es un trabajo en equipo.</strong>
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Si estás en crisis o necesitas ayuda inmediata, <strong>contáctanos ahora por WhatsApp.</strong> Estamos aquí para ti.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Preguntas frecuentes
                </h2>
                <p className="text-xl text-gray-600">Resolvemos tus dudas sobre la hospitalización</p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData.hospitalizacion.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold">{faq.pregunta}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.respuesta}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#8E06DF] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Tu familia no tiene que enfrentar esto sola
                  </h2>
                  <p className="text-xl text-white/95 mb-8 leading-relaxed">
                    Estamos disponibles 24/7 para orientarte y ayudarte a tomar la mejor decisión.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all">
                      <a
                        href="https://wa.me/56920108958"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Hablar con un especialista ahora por WhatsApp"
                      >
                        Hablar con un especialista ahora
                      </a>
                    </Button>
                    <ScrollToFormButton
                      targetId="hospitalizacion-form"
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-[#8E06DF] bg-transparent shadow-lg hover:shadow-xl transition-all"
                    >
                      Solicitar orientación
                    </ScrollToFormButton>
                  </div>
                </div>

                <div id="hospitalizacion-form" className="bg-white rounded-lg p-6" tabIndex={-1}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Solicita información</h3>
                  <LeadForm source="hospitalizacion_cta" />
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
