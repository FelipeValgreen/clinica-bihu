"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
    
    // Initialize analytics if consent is given
    if (typeof window !== "undefined") {
      // Analytics will be initialized by AnalyticsProvider
      window.dispatchEvent(new Event("cookie-consent-accepted"))
    }
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-2xl p-4 md:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="flex-shrink-0">
              <Cookie className="w-6 h-6 text-[#023B6A] mt-1" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Uso de cookies y tecnologías de seguimiento
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico del sitio
                y personalizar el contenido. Al hacer clic en "Aceptar", consientes el uso de estas tecnologías según
                nuestra{" "}
                <Link href="/politica-de-privacidad" className="text-[#023B6A] hover:underline font-medium">
                  Política de Privacidad
                </Link>
                .
              </p>
              <p className="text-xs text-gray-500">
                Puedes cambiar tus preferencias en cualquier momento desde la configuración de tu navegador.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              onClick={handleReject}
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Rechazar
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="bg-[#023B6A] hover:bg-[#034a7a] text-white"
            >
              Aceptar todas
            </Button>
          </div>

          <button
            onClick={handleReject}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

