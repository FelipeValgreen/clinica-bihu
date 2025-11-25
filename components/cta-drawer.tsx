"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Phone, X, ChevronUp } from "lucide-react"
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics"
import clinicData from "@/data/clinic.json"

export default function CTADrawer() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const [isPermanentlyClosed, setIsPermanentlyClosed] = useState(false)

  useEffect(() => {
    // Verificar si el usuario cerró permanentemente la barra
    const isClosed = localStorage.getItem('cta-drawer-closed')
    if (isClosed === 'true') {
      setIsPermanentlyClosed(true)
      return
    }

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercent > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClose = () => {
    setIsPermanentlyClosed(true)
    localStorage.setItem('cta-drawer-closed', 'true')
  }

  if (!isVisible || isPermanentlyClosed) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg transition-transform duration-300 ${
        isExpanded ? "translate-y-0" : "translate-y-[calc(100%-3rem)]"
      }`}
    >
      {/* Toggle Button */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[#023B6A] text-white rounded-full p-2 shadow-lg hover:bg-[#034a7a] transition-colors"
          aria-label={isExpanded ? "Ocultar acciones" : "Mostrar acciones"}
        >
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </button>
        <button
          onClick={handleClose}
          className="bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-colors"
          aria-label="Cerrar permanentemente"
          title="Cerrar y no volver a mostrar"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* CTA Content */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-gray-900">¿Necesitas ayuda?</p>
            <p className="text-xs text-gray-600">Estamos aquí para ti 24/7</p>
          </div>

          <div className="flex space-x-2">
            <Button
              asChild
              size="sm"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white"
              onClick={() => trackWhatsAppClick("cta_drawer")}
            >
              <a
                href={`https://wa.me/${clinicData.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-[#023B6A] text-[#023B6A] hover:bg-[#023B6A] hover:text-white bg-transparent"
            >
              <a
                href={clinicData.nicemed_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <Calendar className="h-4 w-4" />
                <span>Agendar</span>
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-[#023B6A] text-[#023B6A] hover:bg-[#023B6A] hover:text-white bg-transparent"
              onClick={() => trackPhoneClick("cta_drawer")}
            >
              <a href={`tel:${clinicData.telefono}`} className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Llamar</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
