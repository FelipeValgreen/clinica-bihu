"use client"

import { useState } from "react"
import { Play, ExternalLink } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import Image from "next/image"

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
  const [error, setError] = useState(false)

  const handlePlay = () => {
    setPlay(true)
    trackEvent("vsl_play", {
      event_category: "video",
      event_label: title,
    })
  }

  // Convertir URL de Google Drive a formato embed
  const getEmbedUrl = (url: string): string | null => {
    // Si ya es un embed URL, devolverla tal cual
    if (url.includes("/embed/") || url.includes("/preview")) {
      return url
    }

    // Si es un link de Google Drive file, convertir a embed
    const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    if (fileIdMatch) {
      const fileId = fileIdMatch[1]
      // Formato correcto para embed de Google Drive
      return `https://drive.google.com/file/d/${fileId}/preview?usp=sharing`
    }

    // Si es un folder, no se puede embed
    return null
  }

  const embedUrlFormatted = getEmbedUrl(embedUrl)
  const isFolder = embedUrl.includes("/folders/") || !embedUrlFormatted

  return (
    <div
      className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-900 ${className}`}
    >
      {!play && (
        <div
          className="w-full h-full cursor-pointer group relative"
          onClick={handlePlay}
          aria-label={`Reproducir video: ${title}`}
        >
          <div className="relative w-full h-full">
            {!error ? (
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover"
                priority
                onError={() => setError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#023B6A] to-[#034a7a] flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">{title}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60 transition-all"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 transition-all z-10 group"
              aria-label="Reproducir video"
            >
              <Play className="w-12 h-12 text-[#023B6A] ml-1 group-hover:text-[#034a7a]" fill="currentColor" />
            </button>
          </div>
          {/* Título del video en la parte inferior */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-lg text-center">
              {title}
            </h3>
          </div>
        </div>
      )}
      {play && !isFolder && embedUrlFormatted && (
        <div className="w-full h-full relative">
          <iframe
            className="w-full h-full border-0"
            src={embedUrlFormatted}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            title={title}
            loading="lazy"
            onError={() => {
              setError(true)
              setPlay(false)
            }}
          />
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center p-8">
                <p className="text-gray-700 mb-4">
                  No se pudo cargar el video. Por favor, intenta abrirlo directamente.
                </p>
                <a
                  href={embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#023B6A] text-white px-6 py-3 rounded-lg hover:bg-[#034a7a] transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Abrir video en Google Drive
                </a>
              </div>
            </div>
          )}
        </div>
      )}
      {play && isFolder && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-center p-8 max-w-md">
            <p className="text-gray-700 mb-4 text-lg">
              Este contenido está en una carpeta de Google Drive.
            </p>
            <p className="text-gray-600 mb-6 text-sm">
              Haz clic en el botón para abrir y ver el video.
            </p>
            <a
              href={embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#023B6A] text-white px-6 py-3 rounded-lg hover:bg-[#034a7a] transition-colors shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Abrir en Google Drive
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

