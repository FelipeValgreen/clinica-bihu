import Image from "next/image"
import Link from "next/link"
import clinicData from "@/data/clinic.json"

interface LogoProps {
  showText?: boolean
  showTagline?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
  href?: string
}

export default function Logo({ 
  showText = true, 
  showTagline = false, 
  size = "md",
  className = "",
  href = "/"
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  }

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  }

  const taglineSizes = {
    sm: "text-xs",
    md: "text-sm", 
    lg: "text-base"
  }

  return (
    <Link href={href} className={`flex items-center space-x-3 ${className}`}>
      <Image 
        src="/isotipo-bihu.png" 
        alt="Clínica Bihu" 
        width={size === "sm" ? 24 : size === "md" ? 32 : 48}
        height={size === "sm" ? 24 : size === "md" ? 32 : 48}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
      {showText && (
        <div className="flex flex-col">
          <div className={`font-bold text-white ${textSizes[size]}`}>
            Clínica Bihu
          </div>
          {showTagline && (
            <div className={`text-white/80 ${taglineSizes[size]}`}>
              {clinicData.claim}
            </div>
          )}
        </div>
      )}
    </Link>
  )
}
