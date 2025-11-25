"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import testimoniosData from "@/data/testimonios.json"

export function Testimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Lo que Dicen Nuestras <span className="font-brittany text-secondary">Familias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de familias que han confiado en nosotros durante momentos difíciles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimoniosData.testimonios.map((testimonio, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>

                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonio.comentario}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary">{testimonio.nombre}</p>
                    <p className="text-sm text-muted-foreground">{testimonio.relacion}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonio.servicio}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">¿Quieres compartir tu experiencia con nosotros?</p>
          <a
            href="https://wa.me/573001234567?text=Me gustaría compartir mi testimonio"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Enviar Testimonio
          </a>
        </div>
      </div>
    </section>
  )
}
