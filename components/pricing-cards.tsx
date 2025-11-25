"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checklist } from "@/components/checklist"
import { trackEvent } from "@/lib/analytics"
import preciosData from "@/data/precios.json"
import clinicData from "@/data/clinic.json"

interface PricingCardsProps {
  showTitle?: boolean
  highlightPlan?: string
}

export function PricingCards({ showTitle = true, highlightPlan }: PricingCardsProps) {
  const handleCTAClick = (planName: string, price: string) => {
    trackEvent("pricing_cta_click", {
      plan: planName,
      price: price,
      source: "pricing_cards",
    })
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Planes de <span className="font-brittany text-secondary">Hospitalización</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Opciones flexibles adaptadas a las necesidades de cada paciente y familia
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {preciosData.planes.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 hover:shadow-xl transition-all duration-300 ${
                plan.nombre === highlightPlan ? "ring-2 ring-primary shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  Más Popular
                </Badge>
              )}

              <CardHeader className="p-0 pb-6 text-center">
                <CardTitle className="text-2xl text-primary mb-2">{plan.nombre}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">${plan.precio}</span>
                  <span className="text-muted-foreground">/{plan.periodo}</span>
                </div>
                <p className="text-muted-foreground">{plan.descripcion}</p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Incluye:</h4>
                  <Checklist items={plan.incluye} />
                </div>

                <div className="space-y-4">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handleCTAClick(plan.nombre, plan.precio)}
                    asChild
                  >
                    <a
                      href={`https://wa.me/${clinicData.whatsapp}?text=Hola, me interesa el plan ${plan.nombre} de $${plan.precio}. ¿Podrían darme más información?`}
                    >
                      Solicitar Información
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href={`tel:${clinicData.phone}`}>Llamar Ahora</a>
                  </Button>
                </div>

                {plan.nota && <p className="text-xs text-muted-foreground mt-4 text-center">{plan.nota}</p>}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas un plan personalizado? Contáctanos para una cotización especial.
          </p>
          <Button variant="outline" asChild>
            <a href="/contacto">Solicitar Cotización Personalizada</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
