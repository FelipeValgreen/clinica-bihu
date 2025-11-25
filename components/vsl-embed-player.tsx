"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

interface VSLEmbedPlayerProps {
  embedUrl: string
  thumbnail: string
  title: string
  className?: string
}

export default function VSLEmbedPlayer({
  embedUrl,
  thumbnail,
  title,
  className = "",
}: VSLEmbedPlayerProps) {
  const [play, setPlay] = useState(false)

  const handlePlay = () => {
    setPlay(true)
    trackEvent("vsl_play", {
      event_category: "video",
      event_label: title,
    })
  }

  // Convertir URL de Google Drive a formato embed si es necesario
  const getEmbedUrl = (url: string): string => {
    // Si ya es un embed URL, devolverla tal cual
    if (url.includes("/embed/")) {
      return url
    }

    // Si es un link de Google Drive file, convertir a embed
    const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
    }

    // Si es un folder, no se puede embed directamente
    // Devolver la URL original para que se abra en nueva pestaña
    return url
  }

  const embedUrlFormatted = getEmbedUrl(embedUrl)
  const isFolder = embedUrl.includes("/folders/")

  return (
    <div
      className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-lg ${className}`}
    >
      {!play && (
        <div
          className="w-full h-full bg-cover bg-center cursor-pointer group relative"
          style={{ backgroundImage: `url(${thumbnail})` }}
          onClick={handlePlay}
          aria-label={`Reproducir video: ${title}`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50 transition-all"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="w-20 h-20 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all text-3xl z-10"
              aria-label="Reproducir video"
            >
              <Play className="w-10 h-10 text-[#023B6A] ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
      )}
      {play && !isFolder && (
        <iframe
          className="w-full h-full"
          src={embedUrlFormatted}
          allow="autoplay; fullscreen"
          allowFullScreen
          title={title}
          loading="lazy"
        />
      )}
      {play && isFolder && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-center p-8">
            <p className="text-gray-700 mb-4">
              Este contenido está en una carpeta de Google Drive.
            </p>
            <a
              href={embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#023B6A] text-white px-6 py-3 rounded-lg hover:bg-[#034a7a] transition-colors"
            >
              Abrir en Google Drive
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

