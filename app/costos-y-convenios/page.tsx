import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTADrawer from "@/components/cta-drawer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle, Phone, MessageCircle } from "lucide-react"
import { generateSEO } from "@/lib/seo"
import clinicData from "@/data/clinic.json"
import preciosData from "@/data/precios.json"

export const metadata: Metadata = generateSEO({
  title: "Costos y Convenios - Clínica Bihu",
  description: "Precios transparentes de hospitalización psiquiátrica, consultas y terapias. Información sobre reembolsos con boleta.",
  keywords: "precios hospitalización psiquiátrica, costos salud mental, reembolso isapre, fonasa",
  canonical: "/costos-y-convenios",
})

export default function CostosPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#023B6A] to-[#034a7a] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Costos y Convenios
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Precios transparentes para que tomes la mejor decisión para tu familia
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nuestros Precios
                </h2>
                <p className="text-xl text-gray-600">
                  Inversión en salud mental con transparencia total
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Hospitalización */}
                <Card className="relative border-2 border-[#9c27b0]">
                  <CardHeader className="text-center">
                    <Badge className="bg-[#9c27b0] text-white w-fit mx-auto mb-4">
                      Servicio Principal
                    </Badge>
                    <CardTitle className="text-2xl text-[#9c27b0]">
                      Hospitalización Psiquiátrica
                    </CardTitle>
                    <div className="text-4xl font-bold text-gray-900 mt-4">
                      $180.000
                      <span className="text-lg font-normal text-gray-600">/día</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>Habitación individual privada</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>3 consultas psiquiátricas/semana</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>2 sesiones psicología/semana</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>Kinesiología diaria</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>4 comidas balanceadas</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>Enfermería especializada 1:5</span>
                      </li>
                    </ul>
                    <div className="text-sm text-gray-600 mb-4">
                      <strong>No incluye:</strong> Medicamentos, exámenes, traslados
                    </div>
                  </CardContent>
                </Card>

                {/* Consultas */}
                <Card className="border-2 border-[#023B6A]">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-[#023B6A]">
                      Consultas Especializadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Psiquiatría</span>
                        <span className="font-bold">$80.000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Psicología</span>
                        <span className="font-bold">$60.000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Kinesiología</span>
                        <span className="font-bold">$45.000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Terapia Ocupacional</span>
                        <span className="font-bold">$50.000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Nutrición</span>
                        <span className="font-bold">$40.000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cuidador */}
                <Card className="border-2 border-[#4caf50]">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-[#4caf50]">
                      Cuidador Profesional
                    </CardTitle>
                    <div className="text-4xl font-bold text-gray-900 mt-4">
                      $120.000
                      <span className="text-lg font-normal text-gray-600">/día</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>Acompañamiento 24/7</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>Especializado en salud mental</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>Incluido en hospitalización</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Reembolsos Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  ¿Cómo funciona el reembolso?
                </h2>
                <p className="text-xl text-gray-600">
                  Información clara sobre reembolsos con tu seguro
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center">
                      <CheckCircle className="h-6 w-6 mr-2" />
                      Con Boleta
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Solicita reembolso en tu Isapre/Fonasa</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Te entregamos boleta al finalizar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Reembolso según tu plan</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800 flex items-center">
                      <XCircle className="h-6 w-6 mr-2" />
                      Sin Convenios Directos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                        <span>No tenemos convenios directos</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                        <span>No aceptamos pago directo de Isapres</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                        <span>Pago particular con reembolso posterior</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Información Importante
                    </h3>
                    <p className="text-blue-800">
                      Los precios pueden variar según el plan de tu seguro. 
                      Te recomendamos consultar directamente con tu Isapre/Fonasa 
                      sobre los porcentajes de reembolso antes de iniciar el tratamiento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#023B6A] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Tienes dudas sobre costos?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Nuestro equipo te ayuda a entender los reembolsos y encontrar la mejor opción para tu familia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <a
                    href={`https://wa.me/${clinicData.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Hablar por WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#023B6A]">
                  <a href={`tel:${clinicData.telefono}`} className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar ahora
                  </a>
                </Button>
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
