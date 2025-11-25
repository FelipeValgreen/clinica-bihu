import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generateSEO } from "@/lib/seo"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

export const metadata: Metadata = generateSEO({
  title: "Blog de Salud Mental - Clínica Bihu",
  description:
    "Artículos especializados sobre salud mental, bienestar emocional y tratamientos psiquiátricos. Información actualizada por profesionales.",
  keywords: "blog salud mental, artículos psiquiatría, bienestar emocional, tratamientos mentales, Chile",
  canonical: "/blog",
})

const blogPosts = [
  {
    id: 1,
    title: "¿Cuándo buscar ayuda psiquiátrica? Señales importantes",
    excerpt: "Conoce las señales que indican cuándo es momento de buscar ayuda profesional para tu salud mental.",
    slug: "cuando-buscar-ayuda-psiquiatrica",
    category: "Salud Mental",
    readTime: "5 min",
    date: "2025-01-15",
    author: "Dr. Mario Sánchez",
    featured: true
  },
  {
    id: 2,
    title: "El papel de la familia en el tratamiento psiquiátrico",
    excerpt: "Descubre cómo la inclusión familiar mejora significativamente los resultados del tratamiento.",
    slug: "familia-tratamiento-psiquiatrico",
    category: "Tratamiento",
    readTime: "7 min",
    date: "2025-01-12",
    author: "Equipo Clínica Bihu",
    featured: false
  },
  {
    id: 3,
    title: "Ansiedad: Síntomas, causas y tratamientos efectivos",
    excerpt: "Una guía completa sobre la ansiedad, sus manifestaciones y las mejores formas de tratarla.",
    slug: "ansiedad-sintomas-tratamientos",
    category: "Ansiedad",
    readTime: "8 min",
    date: "2025-01-10",
    author: "Psicóloga Carmen López",
    featured: false
  },
  {
    id: 4,
    title: "Depresión: Mitos y realidades sobre esta condición",
    excerpt: "Desmitificamos los conceptos erróneos más comunes sobre la depresión y su tratamiento.",
    slug: "depresion-mitos-realidades",
    category: "Depresión",
    readTime: "6 min",
    date: "2025-01-08",
    author: "Dr. Mario Sánchez",
    featured: false
  },
  {
    id: 5,
    title: "Hospitalización psiquiátrica: ¿Cuándo es necesaria?",
    excerpt: "Entiende cuándo la hospitalización psiquiátrica es la mejor opción para el bienestar del paciente.",
    slug: "hospitalizacion-psiquiatrica-cuando-necesaria",
    category: "Hospitalización",
    readTime: "9 min",
    date: "2025-01-05",
    author: "Equipo Clínica Bihu",
    featured: false
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#023B6A] to-[#034a7a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Blog de Salud Mental
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
                Artículos especializados sobre salud mental, bienestar emocional y tratamientos psiquiátricos por profesionales.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Artículo Destacado</h2>
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2 bg-gradient-to-br from-[#023B6A] to-[#034a7a] p-8 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">🧠</div>
                        <h3 className="text-2xl font-bold mb-2">{featuredPost.title}</h3>
                        <p className="text-white/90">{featuredPost.excerpt}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="secondary">{featuredPost.category}</Badge>
                        <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                      </div>
                      <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString('es-CL')}</span>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center text-[#023B6A] hover:text-[#034a7a] font-medium"
                      >
                        Leer artículo completo →
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Últimos Artículos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#023B6A] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString('es-CL')}</span>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-[#023B6A] hover:text-[#034a7a] font-medium text-sm"
                        >
                          Leer más →
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#023B6A] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Necesitas ayuda profesional?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Nuestros especialistas están disponibles para brindarte la atención que necesitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/56920108958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Consultar por WhatsApp
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
