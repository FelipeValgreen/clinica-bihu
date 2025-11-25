import { Play } from "lucide-react"

interface VideoThumbnailProps {
  title: string
  description: string
  duration?: string
  thumbnail?: string
  onClick?: () => void
}

export default function VideoThumbnail({
  title,
  description,
  duration = "5:30",
  thumbnail,
  onClick,
}: VideoThumbnailProps) {
  return (
    <div className="relative group cursor-pointer" onClick={onClick} role="button" tabIndex={0}>
      <div className="relative w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
        {/* Thumbnail image or gradient background */}
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#8E06DF] to-[#a020f0] opacity-80"></div>
        )}

        {/* Overlay gradient for better play button visibility */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

        {/* Large play button overlay - more visible */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-[#8E06DF] rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#a020f0] transition-all duration-300 shadow-2xl">
            <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">
          {duration}
        </div>

        {/* Clínica Bihu branding */}
        <div className="absolute top-3 left-3 bg-[#023B6A]/90 text-white text-xs font-semibold px-2 py-1 rounded backdrop-blur-sm">
          Clínica Bihu
        </div>
      </div>

      {/* Video info */}
      <div className="mt-3">
        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-[#023B6A] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-xs mt-1 line-clamp-2">{description}</p>
        <div className="flex items-center mt-2 text-xs text-gray-500">
          <span>Clínica Bihu</span>
          <span className="mx-1">•</span>
          <span>Video informativo</span>
        </div>
      </div>
    </div>
  )
}
