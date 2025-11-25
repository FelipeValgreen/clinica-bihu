import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { generateSEO } from "@/lib/seo"
import testimoniosData from "@/data/testimonios.json"

export const metadata: Metadata = generateSEO({
  title: "Testimonios de Pacientes - Clínica Bihu",
  description:
    "Conoce las experiencias reales de nuestros pacientes y sus familias. Testimonios auténticos sobre la atención humanizada en Clínica Bihu.",
  keywords: "testimonios clínica psiquiátrica, experiencias pacientes, salud mental Chile, hospitalización psiquiátrica",
  canonical: "/testimonios",
})

export default function TestimoniosPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#023B6A] to-[#034a7a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Historias reales de familias que se atrevieron a pedir ayuda
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/95 text-pretty">
                Experiencias reales de personas que han confiado en nosotros para su bienestar mental y el de sus familias.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Testimonios Auténticos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Historias reales de recuperación, esperanza y transformación en un entorno seguro y humanizado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimoniosData.testimonios.map((testimonio) => (
                <Card key={testimonio.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonio.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "{testimonio.testimonio}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonio.nombre}
                        {testimonio.edad && `, ${testimonio.edad} años`}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {testimonio.rol || testimonio.servicio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#023B6A] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para tu propia historia de bienestar?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Únete a las familias que han encontrado esperanza y recuperación en Clínica Bihu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/56920108958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Habla con nosotros
                </a>
                <a
                  href="/contacto"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#023B6A] px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Más información
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
