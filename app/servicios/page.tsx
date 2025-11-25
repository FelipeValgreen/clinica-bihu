import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTADrawer from "@/components/cta-drawer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Users, Heart, Activity, Brain, Utensils, Stethoscope } from "lucide-react"
import { generateSEO } from "@/lib/seo"
import serviciosData from "@/data/servicios.json"
import preciosData from "@/data/precios.json"

export const metadata: Metadata = generateSEO({
  title: "Servicios de Salud Mental - Clínica Bihu",
  description:
    "Servicios integrales de salud mental: hospitalización psiquiátrica, psiquiatría, psicología, kinesiología, terapia ocupacional, nutrición y medicina general.",
  keywords: "servicios salud mental, psiquiatría Santiago, psicología, hospitalización psiquiátrica, terapias",
  canonical: "/servicios",
})

export default function ServiciosPage() {
  const servicios = [
    {
      ...serviciosData.hospitalizacion,
      href: "/hospitalizacion-psiquiatrica",
      color: "bg-[#8E06DF]",
      icon: Shield,
      precio: `Desde $${preciosData.hospitalizacion.precio_dia.toLocaleString()}`,
    },
    {
      ...serviciosData.psiquiatria,
      href: "/psiquiatria",
      color: "bg-[#023B6A]",
      icon: Brain,
      precio: `$${preciosData.consultas.psiquiatria.toLocaleString()}`,
    },
    {
      ...serviciosData.psicologia,
      href: "/psicologia",
      color: "bg-[#DE027B]",
      icon: Heart,
      precio: `$${preciosData.consultas.psicologia.toLocaleString()}`,
    },
    {
      ...serviciosData.kinesiologia,
      href: "/kinesiologia",
      color: "bg-[#95C122]",
      icon: Activity,
      precio: `$${preciosData.consultas.kinesiologia.toLocaleString()}`,
    },
    {
      ...serviciosData.terapia_ocupacional,
      href: "/terapia-ocupacional",
      color: "bg-[#0A83FD]",
      icon: Users,
      precio: `$${preciosData.consultas.kinesiologia.toLocaleString()}`,
    },
    {
      ...serviciosData.nutricion,
      href: "/nutricion",
      color: "bg-[#95C122]",
      icon: Utensils,
      precio: `$${preciosData.consultas.nutricion.toLocaleString()}`,
    },
    {
      ...serviciosData.medicina_general,
      href: "/medicina-general",
      color: "bg-[#023B6A]",
      icon: Stethoscope,
      precio: `$${preciosData.consultas.medicina_general.toLocaleString()}`,
    },
  ]

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#023B6A] to-[#034a7a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Nuestros Servicios</h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
                Atención integral en salud mental con un equipo multidisciplinario especializado
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((servicio, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${servicio.color} rounded-lg flex items-center justify-center mb-6`}>
                      <servicio.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{servicio.titulo}</h3>
                    <p className="text-gray-600 mb-4">{servicio.descripcion}</p>

                    {'beneficios' in servicio && servicio.beneficios && Array.isArray(servicio.beneficios) && (
                      <ul className="space-y-1 mb-6">
                        {servicio.beneficios.slice(0, 3).map((beneficio: string, idx: number) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#023B6A] rounded-full mr-2"></span>
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold text-[#023B6A]">{servicio.precio}</span>
                      <Button asChild size="sm" className="bg-[#023B6A] hover:bg-[#034a7a] text-white px-6 py-2 min-w-[100px] h-10">
                        <Link href={servicio.href} className="flex items-center justify-center">
                          Ver más
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿No sabes qué servicio necesitas?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Nuestro equipo te ayudará a encontrar el tratamiento más adecuado para tu situación
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <a href="https://wa.me/56920108958" target="_blank" rel="noopener noreferrer">
                    Consultar por WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#023B6A] text-[#023B6A] hover:bg-[#023B6A] hover:text-white bg-transparent"
                >
                  <Link href="/contacto">Solicitar orientación</Link>
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
