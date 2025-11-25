"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import testimoniosData from "@/data/testimonios.json"

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimoniosData.testimonios.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimoniosData.testimonios.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimoniosData.testimonios.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Get visible testimonials (4 at a time)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % testimoniosData.testimonios.length
      visible.push(testimoniosData.testimonios[index])
    }
    return visible
  }

  return (
    <div className="relative" role="region" aria-label="Testimonios de pacientes">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6" role="toolbar" aria-label="Navegación del carrusel">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-[#023B6A] focus:ring-offset-2"
          aria-label="Testimonio anterior"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          <span>Anterior</span>
        </Button>
        
        <div className="flex space-x-2" role="tablist" aria-label="Indicadores de testimonios">
          {testimoniosData.testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir al testimonio ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#023B6A] focus:ring-offset-2 ${
                index === currentIndex ? 'bg-[#023B6A]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-[#023B6A] focus:ring-offset-2"
          aria-label="Siguiente testimonio"
        >
          <span>Siguiente</span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      {/* Testimonials Grid */}
      <div 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        role="group"
        aria-live="polite"
        aria-atomic="false"
        aria-label={`Mostrando testimonios ${currentIndex + 1} a ${Math.min(currentIndex + 4, testimoniosData.testimonios.length)} de ${testimoniosData.testimonios.length}`}
      >
        {getVisibleTestimonials().map((testimonio, index) => (
          <Card 
            key={`${testimonio.id}-${currentIndex}-${index}`} 
            className="bg-white hover:shadow-lg transition-shadow"
            role="article"
            aria-label={`Testimonio de ${testimonio.nombre}`}
          >
            <CardContent className="p-6">
              <div className="flex mb-4" role="img" aria-label={`${testimonio.rating} de 5 estrellas`}>
                {[...Array(testimonio.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                "{testimonio.testimonio}"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900 text-sm">
                  {testimonio.nombre}
                  {testimonio.edad && `, ${testimonio.edad} años`}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {testimonio.rol || testimonio.servicio}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Auto-play toggle */}
      <div className="text-center mt-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#023B6A] focus:ring-offset-2"
          aria-label={isAutoPlaying ? "Pausar reproducción automática del carrusel" : "Reproducir automáticamente el carrusel"}
          aria-pressed={isAutoPlaying}
        >
          {isAutoPlaying ? 'Pausar' : 'Reproducir'} carrusel
        </Button>
      </div>
    </div>
  )
}
