"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { trackFormStart, trackLead } from "@/lib/analytics"

interface LeadFormProps {
  source?: string
  className?: string
}

export default function LeadForm({ source = "general", className = "" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [consent, setConsent] = useState(false)
  const { toast } = useToast()

  const handleFormStart = () => {
    if (!hasStarted) {
      setHasStarted(true)
      trackFormStart(source)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!consent) {
      toast({
        title: "Necesitamos tu consentimiento",
        description: "Por favor, acepta el procesamiento de datos para poder ayudarte.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get("nombre"),
      telefono: formData.get("telefono"),
      email: formData.get("email"),
      motivo: formData.get("motivo"),
      source,
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'web',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'organic',
      consent: true,
      timestamp: new Date().toISOString()
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Track successful form submission
        trackLead(data)

        toast({
          title: "¡Gracias por escribirnos!",
          description: "Nuestro equipo te contactará en pocos minutos para orientarte.",
        })

        // Reset form
        e.currentTarget.reset()
        setHasStarted(false)
      } else {
        throw new Error("Error al enviar el formulario")
      }
    } catch (error) {
      toast({
        title: "No pudimos enviar tu mensaje",
        description: "Por favor, intenta nuevamente o contáctanos directamente por WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`space-y-4 ${className}`}
      aria-label="Formulario de contacto"
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input 
            id="nombre" 
            name="nombre" 
            required 
            className="mt-1" 
            onFocus={handleFormStart}
            aria-required="true"
            aria-describedby="nombre-error"
            autoComplete="name"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <Label htmlFor="telefono">Teléfono o WhatsApp *</Label>
          <Input 
            id="telefono" 
            name="telefono" 
            type="tel" 
            required 
            className="mt-1" 
            onFocus={handleFormStart}
            aria-required="true"
            aria-describedby="telefono-error"
            autoComplete="tel"
            placeholder="+56 9 1234 5678"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email (opcional)</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          className="mt-1" 
          onFocus={handleFormStart}
          aria-describedby="email-error"
          autoComplete="email"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <Label htmlFor="motivo">¿En qué podemos ayudarte?</Label>
        <Select name="motivo" onOpenChange={handleFormStart}>
          <SelectTrigger className="mt-1" id="motivo" aria-label="Selecciona el motivo de consulta">
            <SelectValue placeholder="Cuéntanos cómo podemos ayudarte" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hospitalizacion">Hospitalización psiquiátrica</SelectItem>
            <SelectItem value="psiquiatria">Consulta psiquiátrica</SelectItem>
            <SelectItem value="psicologia">Psicología</SelectItem>
            <SelectItem value="kinesiologia">Kinesiología</SelectItem>
            <SelectItem value="terapia_ocupacional">Terapia ocupacional</SelectItem>
            <SelectItem value="nutricion">Nutrición</SelectItem>
            <SelectItem value="medicina_general">Medicina general</SelectItem>
            <SelectItem value="informacion">Información general</SelectItem>
            <SelectItem value="urgencia">Urgencia</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="consent" 
          checked={consent} 
          onCheckedChange={setConsent}
          required
          aria-required="true"
          aria-describedby="consent-error"
        />
        <Label htmlFor="consent" className="text-sm">
          Acepto el procesamiento de mis datos para ser contactado.{" "}
          <a 
            href="/politica-de-privacidad" 
            className="text-[#023B6A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#023B6A] focus:ring-offset-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leer política de privacidad (se abre en nueva ventana)"
          >
            Política de privacidad
          </a>
        </Label>
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting || !consent} 
        className="w-full bg-[#023B6A] hover:bg-[#034a7a] disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#023B6A] focus:ring-offset-2"
        aria-busy={isSubmitting}
        aria-disabled={isSubmitting || !consent}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>

      <p className="text-xs text-gray-600 text-center" role="note" aria-label="Aviso importante">
        <strong>Importante:</strong> Esta información no reemplaza la evaluación médica profesional. 
        En caso de emergencia, llama al 131 o acude a urgencias.
      </p>
      
      {/* Aria live region for form status */}
      <div 
        id="form-status" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {isSubmitting && "Enviando formulario..."}
      </div>
    </form>
  )
}
