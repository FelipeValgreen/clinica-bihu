import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import CTADrawer from "@/components/cta-drawer"
import LeadForm from "@/components/lead-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generateSEO } from "@/lib/seo"
import clinicData from "@/data/clinic.json"

export const metadata: Metadata = generateSEO({
  title: "Contacto - Clínica Bihu | Atención 24/7 en Santiago",
  description:
    "Contacta a Clínica Bihu. Atención 24/7, ubicados en Santiago. WhatsApp, teléfono y formulario de contacto disponibles.",
  keywords: "contacto clínica psiquiátrica, atención 24/7 Santiago, WhatsApp salud mental",
  canonical: "/contacto",
})

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contáctanos</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Estamos disponibles 24/7 para atenderte. Tu bienestar es nuestra prioridad.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Información de Contacto</h2>
                  <p className="text-muted-foreground mb-8">
                    Múltiples formas de contactarnos para tu comodidad y urgencias.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* WhatsApp */}
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📱</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">WhatsApp</h3>
                          <p className="text-muted-foreground mb-2">Respuesta inmediata</p>
                          <a
                            href={`https://wa.me/${clinicData.whatsapp}`}
                            className="text-green-600 font-semibold hover:underline"
                          >
                            {clinicData.whatsapp}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📞</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">Teléfono</h3>
                          <p className="text-muted-foreground mb-2">Atención 24/7</p>
                          <a href={`tel:${clinicData.telefono}`} className="text-primary font-semibold hover:underline">
                            {clinicData.telefono}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">✉️</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">Email</h3>
                          <p className="text-muted-foreground mb-2">Consultas generales</p>
                          <a href={`mailto:${clinicData.email}`} className="text-primary font-semibold hover:underline">
                            {clinicData.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Address */}
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📍</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">Dirección</h3>
                          <p className="text-muted-foreground mb-2">Visítanos en</p>
                          <p className="text-primary font-semibold">{clinicData.direccion}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Hours */}
                <Card className="p-6 bg-primary/5">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-primary">Horarios de Atención</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Emergencias:</span>
                        <span className="font-semibold text-primary">24/7</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Consultas:</span>
                        <span className="font-semibold">Lun - Vie: 8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sábados:</span>
                        <span className="font-semibold">9:00 AM - 2:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8">
                  <CardHeader className="p-0 pb-6">
                    <CardTitle className="text-2xl text-primary">Envíanos un Mensaje</CardTitle>
                    <p className="text-muted-foreground">
                      Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <LeadForm source="contacto" ctaText="Enviar Mensaje" showServices={true} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="py-12 bg-red-50 border-t border-red-200">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-red-800 mb-4">🚨 ¿Es una Emergencia Psiquiátrica?</h2>
              <p className="text-red-700 mb-6">
                Si tú o un ser querido están en crisis, no esperes. Contáctanos inmediatamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${clinicData.whatsapp}?text=EMERGENCIA: Necesito ayuda inmediata`}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  WhatsApp Emergencia
                </a>
                <a
                  href={`tel:${clinicData.telefono}`}
                  className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
                >
                  Llamar Ahora
                </a>
              </div>
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
