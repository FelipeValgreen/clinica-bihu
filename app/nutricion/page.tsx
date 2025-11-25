import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTADrawer from "@/components/cta-drawer"
import WhatsAppFloat from "@/components/whatsapp-float"
import LeadForm from "@/components/lead-form"
import TrustBadges from "@/components/trust-badges"
import { Button } from "@/components/ui/button"
import { generateSEO, generateJSONLD } from "@/lib/seo"
import clinicData from "@/data/clinic.json"
import preciosData from "@/data/precios.json"

export const metadata: Metadata = generateSEO({
  title: "Nutrición en Santiago - Clínica Bihu",
  description:
    "Nutrición especializada en salud mental. Alimentación saludable para complementar el tratamiento psiquiátrico y psicológico.",
  keywords:
    "nutrición Santiago, nutricionista salud mental, alimentación saludable, dieta equilibrada, Chile",
  canonical: "/nutricion",
})

export default function NutricionPage() {
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
                Nutrición Especializada
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
                Nutrición especializada en salud mental para complementar tu tratamiento y mejorar tu bienestar integral.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8 py-3">
                  <a
                    href={`https://wa.me/${clinicData.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar consulta nutricional"
                  >
                    🥗 Agendar consulta
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

        {/* Service Details */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    ¿Qué incluye la consulta nutricional?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Evaluación nutricional</h3>
                        <p className="text-gray-600">Análisis completo de hábitos alimentarios y estado nutricional</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Plan alimentario personalizado</h3>
                        <p className="text-gray-600">Diseño de menús adaptados a tus necesidades y tratamiento</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Educación nutricional</h3>
                        <p className="text-gray-600">Orientación sobre alimentación saludable y su impacto en la salud mental</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Seguimiento continuo</h3>
                        <p className="text-gray-600">Control y ajuste del plan según la evolución del tratamiento</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de la consulta</h3>
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
                      <span className="font-semibold text-[#4CAF50]">${preciosData.consultas.nutricion.toLocaleString()}</span>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas orientación nutricional?</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Nuestros nutricionistas están disponibles para complementar tu tratamiento de salud mental.
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
                  <LeadForm source="nutricion" />
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
