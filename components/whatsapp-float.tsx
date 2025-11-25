"use client"

import { MessageCircle } from "lucide-react"
import { trackWhatsAppClick } from "@/lib/analytics"
import clinicData from "@/data/clinic.json"

export default function WhatsAppFloat() {
  const handleClick = () => {
    trackWhatsAppClick("floating_button")
  }

  return (
    <a
      href="https://wa.me/56920108958"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 group"
      aria-label="Hablar con admisión ahora por WhatsApp"
      title="Hablar con admisión ahora"
    >
      <MessageCircle className="h-6 w-6" />
      {/* Tooltip para móvil */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        Hablar con admisión ahora
      </span>
    </a>
  )
}
