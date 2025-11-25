"use client"

import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface ScrollToFormButtonProps {
  targetId: string
  children: ReactNode
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function ScrollToFormButton({
  targetId,
  children,
  variant = "outline",
  size = "lg",
  className = "",
}: ScrollToFormButtonProps) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
      // Enfocar el primer input del formulario después de un pequeño delay
      setTimeout(() => {
        const firstInput = targetElement.querySelector("input, textarea, select")
        if (firstInput instanceof HTMLElement) {
          firstInput.focus()
        }
      }, 500)
    }
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleClick}>
      {children}
    </Button>
  )
}

