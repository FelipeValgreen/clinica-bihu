import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTADrawer from "@/components/cta-drawer"
import WhatsAppFloat from "@/components/whatsapp-float"
import TrustBadges from "@/components/trust-badges"
import LeadForm from "@/components/lead-form"
import ClinicGallery from "@/components/clinic-gallery"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollToFormButton from "@/components/scroll-to-form-button"
import Link from "next/link"
import { ArrowRight, Heart, Users, Shield, Clock } from "lucide-react"
import { generateSEO, generateJSONLD } from "@/lib/seo"
import { bihuColorClasses } from "@/lib/colors"
import clinicData from "@/data/clinic.json"
import serviciosData from "@/data/servicios.json"
import testimoniosData from "@/data/testimonios.json"

export const metadata: Metadata = generateSEO({
  title: "Clínica Bihu - Salud Mental Humanizada en Santiago",
  description:
    "Hospitalización psiquiátrica, consultas y terapias en un entorno seguro con apoyo familiar. Atención 24/7 en Santiago, Chile.",
  keywords: "clínica psiquiátrica Santiago, salud mental Chile, hospitalización psiquiátrica, psiquiatría, psicología",
  canonical: "/",
})

export default function HomePage() {
  const servicios = [
    {
      ...serviciosData.hospitalizacion,
      href: "/hospitalizacion-psiquiatrica",
      color: bihuColorClasses.bg.purple,
      icon: Shield,
    },
    {
      ...serviciosData.psiquiatria,
      href: "/psiquiatria",
      color: "bg-[#023B6A]",
      icon: Users,
    },
    {
      ...serviciosData.psicologia,
      href: "/psicologia",
      color: bihuColorClasses.bg.magenta,
      icon: Heart,
    },
    {
      ...serviciosData.kinesiologia,
      href: "/kinesiologia",
      color: bihuColorClasses.bg.green,
      icon: Clock,
    },
  ]

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
        <section className="bg-gradient-to-br from-[#023B6A] to-[#034a7a] text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance leading-tight">
                Cuando una crisis mental afecta a quien amas, lo más humano es pedir ayuda.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/95 text-pretty max-w-3xl mx-auto leading-relaxed">
                Hospitalización psiquiátrica 24/7 en Santiago, en un entorno seguro, con habitaciones privadas, terapias integrales y acompañamiento familiar.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white text-base md:text-lg px-6 md:px-8 py-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <a
                    href="https://wa.me/56920108958"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hablar con un especialista por WhatsApp"
                  >
                    Hablar con un especialista
                  </a>
                </Button>
                <ScrollToFormButton
                  targetId="contact-form-section"
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#023B6A] text-base md:text-lg px-6 md:px-8 py-3 bg-transparent shadow-lg hover:shadow-xl transition-all"
                >
                  Solicitar orientación
                </ScrollToFormButton>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm md:text-base">
                  <Clock className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span>Atención 24/7</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm md:text-base">
                  <Users className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span>Enfoque familiar</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm md:text-base">
                  <Shield className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span>Equipo multidisciplinario</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Atención integral con un equipo multidisciplinario especializado en salud mental
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicios.map((servicio, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${servicio.color} rounded-lg flex items-center justify-center mb-4`}
                      aria-hidden="true"
                    >
                      <servicio.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{servicio.titulo}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{servicio.descripcion}</p>
                    {index === 0 && (
                      <p className="text-xs text-[#023B6A] font-medium mb-3 italic">
                        Un entorno seguro donde tu familia también se trata.
                      </p>
                    )}
                    <Link
                      href={servicio.href}
                      className="inline-flex items-center text-[#023B6A] hover:text-[#034a7a] font-medium text-sm group-hover:underline focus:outline-none focus:ring-2 focus:ring-[#023B6A] focus:ring-offset-2 rounded"
                      aria-label={`Más información sobre ${servicio.titulo}`}
                    >
                      Más información
                      <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Filosofía: La <span className="font-brittany text-[#DE027B] text-5xl md:text-6xl">familia</span>{" "}
                también se trata
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Creemos que la recuperación es un proceso integral que involucra no solo al paciente, sino también a su
                entorno familiar. Por eso, incluimos a la familia en cada etapa del tratamiento.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#023B6A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enfoque Humanizado</h3>
                  <p className="text-gray-600">Tratamos a cada persona con dignidad, respeto y comprensión.</p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 ${bihuColorClasses.bg.purple} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Inclusión Familiar</h3>
                  <p className="text-gray-600">La familia es parte activa del proceso de recuperación.</p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 ${bihuColorClasses.bg.green} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Entorno Seguro</h3>
                  <p className="text-gray-600">Espacios diseñados para brindar confort y tranquilidad.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Gallery Section */}
        <ClinicGallery />

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Historias reales de familias que se atrevieron a pedir ayuda
              </h2>
              <p className="text-xl text-gray-600">Testimonios reales de personas que han confiado en nosotros</p>
            </div>

            <TestimonialsCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-form-section" className="py-20 bg-[#023B6A] text-white">
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
                      targetId="lead-form"
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-[#023B6A] bg-transparent shadow-lg hover:shadow-xl transition-all"
                    >
                      Solicitar orientación
                    </ScrollToFormButton>
                  </div>
                </div>

                <div id="lead-form" className="bg-white rounded-lg p-6" tabIndex={-1}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Solicita información</h3>
                  <LeadForm source="home_cta" />
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
