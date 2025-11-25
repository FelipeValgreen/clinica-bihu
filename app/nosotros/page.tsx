import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import CTADrawer from "@/components/cta-drawer"
import TrustBadges from "@/components/trust-badges"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generateSEO } from "@/lib/seo"
import clinicData from "@/data/clinic.json"

export const metadata: Metadata = generateSEO({
  title: "Nosotros - Clínica Bihu | Equipo Médico Especializado",
  description:
    "Conoce al equipo médico especializado de Clínica Bihu. Más de 15 años de experiencia en salud mental y psiquiatría en Santiago.",
  keywords: "equipo médico psiquiátrico, clínica salud mental Santiago, profesionales especializados",
  canonical: "/nosotros",
})

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nuestro Equipo Médico</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Profesionales especializados comprometidos con tu bienestar y el de tu familia
              </p>
              <TrustBadges />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Misión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Brindar atención integral en salud mental con los más altos estándares de calidad, humanización y
                    respeto, acompañando a nuestros pacientes y sus familias en el proceso de recuperación y bienestar
                    emocional.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Visión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser reconocidos como la clínica líder en salud mental en Colombia, destacándonos por la excelencia
                    en el cuidado, la innovación en tratamientos y el compromiso con la dignidad humana.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Equipo Especializado</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Contamos con profesionales altamente calificados en diferentes áreas de la salud mental
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Director Médico */}
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-[#023B6A] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">DB</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Dr. Bihu</h3>
                  <Badge variant="secondary" className="mb-3">
                    Director Médico
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Especialista en Psiquiatría con más de 15 años de experiencia. Experto en trastornos del estado de
                    ánimo y hospitalización psiquiátrica.
                  </p>
                </CardContent>
              </Card>

              {/* Psicólogos */}
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-[#E91E63] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">EP</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Equipo Psicología</h3>
                  <Badge variant="secondary" className="mb-3">
                    Psicólogos Clínicos
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Especialistas en terapia individual, familiar y grupal. Expertos en intervención en crisis y
                    acompañamiento terapéutico.
                  </p>
                </CardContent>
              </Card>

              {/* Enfermería */}
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-[#4CAF50] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">EE</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Equipo Enfermería</h3>
                  <Badge variant="secondary" className="mb-3">
                    Enfermería Especializada
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Personal de enfermería especializado en salud mental, disponible 24/7 para el cuidado y seguimiento
                    de nuestros pacientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Valores</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Humanización</h3>
                  <p className="text-sm text-muted-foreground">
                    Tratamos a cada paciente con dignidad, respeto y compasión
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Excelencia</h3>
                  <p className="text-sm text-muted-foreground">
                    Buscamos la mejora continua en todos nuestros procesos
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Compromiso</h3>
                  <p className="text-sm text-muted-foreground">Dedicación total al bienestar de nuestros pacientes</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Confidencialidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Protegemos la privacidad y confidencialidad de nuestros pacientes
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas Ayuda Profesional?</h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo está listo para acompañarte en tu proceso de recuperación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${clinicData.whatsapp}?text=Hola, me gustaría conocer más sobre sus servicios`}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contactar por WhatsApp
              </a>
              <a
                href="tel:+573001234567"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
      <CTADrawer />
    </>
  )
}
