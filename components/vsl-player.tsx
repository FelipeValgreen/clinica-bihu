"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Volume2, VolumeX } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

interface VSLPlayerProps {
  videoId?: string
  videoUrl?: string
  title?: string
  className?: string
  subtitlesUrl?: string
  poster?: string
  lazy?: boolean
  autoMute?: boolean
}

export default function VSLPlayer({
  videoId,
  videoUrl,
  title = "Video informativo",
  className = "",
  subtitlesUrl,
  poster = "/psychiatric-hospitalization-video-thumbnail.jpg",
  lazy = true,
  autoMute = true,
}: VSLPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(autoMute)
  const [isLoaded, setIsLoaded] = useState(!lazy)
  const [progress, setProgress] = useState(0)
  const [hasTracked25, setHasTracked25] = useState(false)
  const [hasTracked50, setHasTracked50] = useState(false)
  const [hasTracked75, setHasTracked75] = useState(false)
  const [hasTracked100, setHasTracked100] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Lazy load: Intersection Observer
  useEffect(() => {
    if (!lazy || isLoaded) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "50px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [lazy, isLoaded])

  // Track video progress
  useEffect(() => {
    const video = videoRef.current
    if (!video || !isPlaying) return

    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / video.duration) * 100
      setProgress(currentProgress)

      // Track milestones
      if (currentProgress >= 25 && !hasTracked25) {
        setHasTracked25(true)
        trackEvent("vsl_25", {
          event_category: "video",
          event_label: title,
        })
      }
      if (currentProgress >= 50 && !hasTracked50) {
        setHasTracked50(true)
        trackEvent("vsl_50", {
          event_category: "video",
          event_label: title,
        })
      }
      if (currentProgress >= 75 && !hasTracked75) {
        setHasTracked75(true)
        trackEvent("vsl_75", {
          event_category: "video",
          event_label: title,
        })
      }
      if (currentProgress >= 100 && !hasTracked100) {
        setHasTracked100(true)
        trackEvent("vsl_100", {
          event_category: "video",
          event_label: title,
        })
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    return () => video.removeEventListener("timeupdate", handleTimeUpdate)
  }, [isPlaying, hasTracked25, hasTracked50, hasTracked75, hasTracked100, title])

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
      if (!hasTracked25) {
        trackEvent("vsl_play", {
          event_category: "video",
          event_label: title,
        })
      }
    }
  }

  const handleMuteToggle = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  if (videoUrl && isLoaded) {
    return (
      <div ref={containerRef} className={`relative aspect-video rounded-lg overflow-hidden shadow-lg ${className}`}>
        <video
          ref={videoRef}
          controls
          className="w-full h-full object-cover"
          poster={poster}
          muted={isMuted}
          playsInline
          preload={lazy ? "none" : "metadata"}
        >
          <source src={videoUrl} type="video/mp4" />
          {subtitlesUrl && (
            <track kind="subtitles" srcLang="es" src={subtitlesUrl} label="Español" default />
          )}
          <p>Tu navegador no soporta el elemento de video.</p>
        </video>

        {/* Custom Play Button Overlay */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black/50 via-black/30 to-black/50 cursor-pointer group"
            onClick={handlePlay}
            aria-label="Reproducir video"
          >
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center drop-shadow-lg px-4">
              Hospitalización Psiquiátrica Humanizada en Clínica Bihu
            </h3>
            <div className="w-20 h-20 bg-[#8E06DF] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
            </div>
            {subtitlesUrl && (
              <p className="text-white/90 text-sm mt-4 text-center px-4">
                Ver video con audio y subtítulos
              </p>
            )}
          </div>
        )}

        {/* Mute Toggle Button */}
        <button
          onClick={handleMuteToggle}
          className="absolute bottom-4 right-4 bg-black/70 text-white rounded-full p-2 hover:bg-black/90 transition-colors z-10"
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    )
  }

  if (videoUrl && !isLoaded) {
    return (
      <div
        ref={containerRef}
        className={`relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100 ${className}`}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
          onClick={() => setIsLoaded(true)}
        >
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          
          {/* Texto superpuesto en el poster */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center drop-shadow-lg">
              Hospitalización Psiquiátrica Humanizada en Clínica Bihu
            </h3>
            <div className="w-20 h-20 bg-[#8E06DF] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (videoId) {
    return (
      <div className={`relative aspect-video rounded-lg overflow-hidden shadow-lg ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?cc_load_policy=1&cc_lang_pref=es&hl=es&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading={lazy ? "lazy" : "eager"}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center ${className}`}
    >
      <p className="text-gray-500">Video no disponible</p>
    </div>
  )
}
