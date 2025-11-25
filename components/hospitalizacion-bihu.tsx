"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, CheckCircle2, PhoneCall, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function HospitalizacionBihu() {
  const [variant, setVariant] = useState("A")

  useEffect(() => {
    const storedVariant = localStorage.getItem("bihu_ab")
    if (storedVariant) {
      setVariant(storedVariant)
    } else {
      const random = Math.random()
      const newVariant = random < 0.33 ? "A" : random < 0.66 ? "B" : "C"
      localStorage.setItem("bihu_ab", newVariant)
      setVariant(newVariant)
    }

    // Track page view
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent")
    }
  }, [])

  const H1 =
    variant === "A"
      ? "Hospitalización Psiquiátrica 24/7 — segura, privada y humanizada"
      : variant === "B"
        ? "Crisis de salud mental: te ayudamos HOY con hospitalización psiquiátrica 24/7"
        : "Recuperación integral: hospitalización psiquiátrica con enfoque familiar 24/7"

  const CTA =
    variant === "A"
      ? "Habla con un especialista ahora"
      : variant === "B"
        ? "Recibe orientación en minutos"
        : "Inicia el proceso de recuperación"

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "cta_whatsapp_click")
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead")
    }
    alert("Gracias. Te contactaremos en minutos para orientarte.")
  }

  return (
    <div className="bg-white text-[#023B6A] font-sans">
      <style jsx>{`
        :root {
          --bihu-blue: #023B6A;
          --bihu-purple: #8E06DF;
          --bihu-pink: #DE027B;
          --bihu-green: #95C122;
          --bihu-blue2: #0A83FD;
        }
        .brand-primary {
          background: var(--bihu-blue);
          color: #fff;
        }
        .brand-outline {
          border-color: var(--bihu-blue);
          color: var(--bihu-blue);
        }
        .font-brittany {
          font-family: 'Brittany Signature', cursive;
        }
      `}</style>

      {/* Topbar sticky */}
      <header className="brand-primary sticky top-0 z-50">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <img src="/isotipo-bihu.png" alt="Clínica Bihu" className="w-8 h-8" />
              <span className="font-bold tracking-wide">CLÍNICA BIHU</span>
            </div>
            <span className="opacity-90 text-sm" aria-hidden="true">
              · servicio humanizado 24/7
            </span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a className="hover:underline flex items-center gap-1" href="tel:+56920108958" aria-label="Llamar">
              <PhoneCall size={16} /> +56 9 2010 8958
            </a>
            <a
              className="hover:underline flex items-center gap-1"
              href="https://wa.me/56920108958"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#023B6A]">{H1}</h1>
            <p className="mt-4 text-lg md:text-xl max-w-prose text-gray-700">
              Un entorno clínico integral con atención psiquiátrica, psicológica y terapéutica, donde la familia también
              se trata.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                asChild
                className="brand-primary px-6 py-4 rounded-2xl text-lg hover:opacity-90"
                data-cta-variant={variant}
                onClick={handleWhatsAppClick}
              >
                <a href="https://wa.me/56920108958" target="_blank" rel="noreferrer">
                  {CTA}
                </a>
              </Button>
              <Button
                variant="outline"
                className="brand-outline px-6 py-4 rounded-2xl text-lg bg-transparent hover:bg-[#023B6A] hover:text-white"
                onClick={() => document.getElementById("form-bihu")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agenda orientación
              </Button>
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <li className="flex items-center gap-2">
                <Shield size={18} className="text-[#023B6A]" /> Entorno seguro
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-[#023B6A]" /> Atención 24/7
              </li>
              <li className="flex items-center gap-2">
                <Users size={18} className="text-[#023B6A]" /> Equipo multidisciplinario
              </li>
            </ul>
          </div>

          {/* VSL */}
          <div className="rounded-2xl overflow-hidden ring-2 ring-[rgba(142,6,223,.25)] shadow-lg">
            <video
              className="w-full h-64 md:h-[420px] object-cover"
              controls
              poster="/psychiatric-hospitalization-video-thumbnail.jpg"
              preload="metadata"
            >
              <source
                src={
                  variant === "C" ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generacio%CC%81n_de_Video_Sales_Letter_Psiquia%CC%81trico-6naHiZN8zShXHvr1TNxGBxPXxnp8jU.mp4" : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generacio%CC%81n_de_Video_Sales_Letter_Psiquia%CC%81trico-Zhsp93xpSkPJaSce71sF85XMwAPuJN.mp4"
                }
                type="video/mp4"
              />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>

      {/* Sección Dolor/Empatía */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023B6A]">
            Cuando la salud mental entra en crisis, la familia entera sufre
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Depresión, brotes psicóticos, intento de suicidio, bipolaridad, consumo de sustancias.
            <strong> No estás solo: podemos orientarte hoy.</strong>
          </p>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023B6A] mb-8">
            Lo que incluye nuestro servicio
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Habitación individual con cama doble y privacidad.",
              "3 sesiones/semana con psiquiatría + 2 psicológicas.",
              "Kinesiología diaria (L–V) y terapia ocupacional 2× día.",
              "4 comidas/día con pauta de nutricionista.",
              "Enfermería 1:5 + cuidador de apoyo.",
              "Rutina de sueño y hábitos para sostener el alta.",
            ].map((item, i) => (
              <Card key={i} className="border-l-4 border-[#95C122]">
                <CardContent className="p-5 flex gap-3">
                  <CheckCircle2 className="text-[#95C122] flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-700">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial familia */}
      <section className="py-12 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023B6A]">
            La <span className="font-brittany text-[#8E06DF]">familia</span> también se trata
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Integramos a la familia en el proceso terapéutico. Les entregamos herramientas y acompañamiento: la red
            principal de apoyo comienza en casa.
          </p>
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-gray-600 italic">
              "El apoyo que recibimos como familia fue fundamental. Nos enseñaron cómo acompañar mejor a nuestro hijo en
              su proceso de recuperación."
            </p>
            <div className="mt-3 font-semibold text-[#023B6A]">- Familia de paciente</div>
          </div>
        </div>
      </section>

      {/* Proceso paso a paso */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023B6A] mb-8">Así funciona el proceso</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { t: "Evaluación inicial", d: "Documentos, pesquisa y examen físico." },
              { t: "Asignación de habitación", d: "Revisión de pertenencias. Bienvenida." },
              { t: "Rutina terapéutica", d: "Psiquiatría, psicología, kinesiología, ocupacional." },
              { t: "Seguimiento familiar", d: "Control a 2 semanas; ajustes de rutinas." },
            ].map((step, i) => (
              <Card key={i} className="border-t-4 border-[#8E06DF]">
                <CardContent className="p-6">
                  <div className="text-sm opacity-70 text-[#8E06DF] font-semibold">Paso {i + 1}</div>
                  <h3 className="font-bold text-xl mt-1 text-[#023B6A]">{step.t}</h3>
                  <p className="mt-2 text-gray-600">{step.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incluye vs No incluye */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023B6A] mb-8">
            Qué incluye y qué no incluye
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-[rgba(142,6,223,.25)]">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#023B6A] mb-4">✅ Incluye</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Habitación individual con cama doble</li>
                  <li>• Terapias: psiquiatría, psicología, kinesiología, ocupacional</li>
                  <li>• 4 comidas por nutricionista</li>
                  <li>• Enfermería 1:5 + cuidador de apoyo</li>
                  <li>• Rutina estructurada (sueño, hábitos, actividades)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-[rgba(142,6,223,.25)]">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#023B6A] mb-4">❌ No incluye</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Medicamentos</li>
                  <li>• Interconsultas adicionales (neurólogo/med. general)</li>
                  <li>• Exámenes</li>
                  <li>• Cuidador personal</li>
                  <li>• Traslado en ambulancia</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023B6A] mb-8">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: "¿Qué edad mínima y condiciones de ingreso?",
                a: "Desde 14 años, autovalente y con familiar responsable. Evaluamos cada caso individualmente para asegurar que nuestro programa sea el más adecuado.",
              },
              {
                q: "¿Cómo es el proceso de pago?",
                a: "El apoderado firma pagaré y paga 1 semana por anticipado al ingreso. Aceptamos múltiples formas de pago y facilitamos el proceso administrativo.",
              },
              {
                q: "¿Cómo se garantiza la privacidad?",
                a: "Todas nuestras habitaciones son individuales. Mantenemos estricta confidencialidad médica y respetamos la privacidad de cada paciente y familia.",
              },
              {
                q: "¿Qué compromiso requiere la familia?",
                a: "La familia participa activamente en el proceso terapéutico. Incluimos sesiones familiares y entregamos herramientas para el acompañamiento en casa.",
              },
            ].map((faq, i) => (
              <Card key={i} className="border border-[rgba(2,59,106,.15)]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-[#023B6A] mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner urgencia */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-[rgba(2,59,106,.15)] rounded-2xl p-6 bg-gradient-to-r from-blue-50 to-white">
            <div className="text-lg font-semibold text-[#023B6A]">¿Es una urgencia? Estamos disponibles ahora.</div>
            <Button
              asChild
              className="bg-[#128C7E] hover:bg-[#075E54] text-white rounded-2xl px-6 py-4"
              onClick={() => {
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("trackCustom", "whatsapp_floating_click")
                }
              }}
            >
              <a href="https://wa.me/56920108958" target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50" id="form-bihu">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023B6A]">Agenda orientación</h2>
          <p className="text-center mt-2 text-gray-700">Déjanos tus datos y te contactaremos en minutos.</p>
          <form className="mt-8 bg-white p-8 rounded-2xl shadow-lg" onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nombre" className="text-[#023B6A] font-semibold">
                  Nombre*
                </Label>
                <Input id="nombre" required placeholder="Nombre y apellido" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="telefono" className="text-[#023B6A] font-semibold">
                  Teléfono*
                </Label>
                <Input id="telefono" required type="tel" placeholder="+56 9 ..." className="mt-1" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="correo" className="text-[#023B6A] font-semibold">
                  Correo
                </Label>
                <Input id="correo" type="email" placeholder="correo@ejemplo.cl" className="mt-1" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="motivo" className="text-[#023B6A] font-semibold">
                  Motivo
                </Label>
                <Textarea id="motivo" placeholder="Cuéntanos brevemente el caso (opcional)" className="mt-1" />
              </div>
              <div className="md:col-span-2 text-sm text-gray-600">
                Al enviar aceptas nuestra{" "}
                <a
                  className="underline text-[#023B6A]"
                  href="/politicas-de-privacidad"
                  target="_blank"
                  rel="noreferrer"
                >
                  Política de Privacidad
                </a>{" "}
                y el tratamiento de datos de salud.
              </div>
              <div className="md:col-span-2 flex gap-3">
                <Button type="submit" className="brand-primary rounded-2xl px-6 py-4 text-lg hover:opacity-90">
                  Enviar
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="brand-outline rounded-2xl px-6 py-4 text-lg bg-transparent hover:bg-[#023B6A] hover:text-white"
                >
                  <a href="https://wa.me/56920108958" target="_blank" rel="noreferrer">
                    Prefiero WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023B6A] mb-6">
            Tu familia no tiene que enfrentar esto sola
          </h2>
          <div className="flex gap-4 justify-center">
            <Button
              asChild
              className="brand-primary px-8 py-4 rounded-2xl text-lg hover:opacity-90"
              onClick={handleWhatsAppClick}
            >
              <a href="https://wa.me/56920108958" target="_blank" rel="noreferrer">
                {CTA}
              </a>
            </Button>
            <Button
              variant="outline"
              className="brand-outline px-8 py-4 rounded-2xl text-lg bg-transparent hover:bg-[#023B6A] hover:text-white"
              onClick={() => document.getElementById("form-bihu")?.scrollIntoView({ behavior: "smooth" })}
            >
              Agenda orientación
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="brand-primary">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/isotipo-bihu.png" alt="Clínica Bihu" className="w-8 h-8" />
              <div>
                <div className="font-bold tracking-wide">CLÍNICA BIHU</div>
                <div className="text-sm opacity-90">Servicio Humanizado</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm">Chopin 3157, San Joaquín, Santiago</div>
              <div className="text-sm">+56 9 2010 8958 • gerenciageneral@clinicabihu.cl</div>
              <div className="text-xs opacity-75 mt-1">© {new Date().getFullYear()} Mente y Salud SpA</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp button */}
      <a
        href="https://wa.me/56920108958"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#128C7E] hover:bg-[#075E54] text-white rounded-full shadow-lg p-4 transition-colors z-50"
        aria-label="WhatsApp Clínica Bihu"
        onClick={() => {
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("trackCustom", "whatsapp_floating_click")
          }
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Clínica Bihu",
            medicalSpecialty: "Psychiatric",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Chopin 3157",
              addressLocality: "San Joaquín",
              addressRegion: "Región Metropolitana",
              addressCountry: "CL",
            },
            telephone: "+56920108958",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
            ],
            areaServed: "Santiago, Chile",
            url: "https://clinicabihu.cl",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué edad mínima y condiciones de ingreso?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Desde 14 años, autovalente y con familiar responsable.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo es el proceso de pago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apoderado firma pagaré y paga 1 semana por anticipado al ingreso.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué está incluido?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Habitación individual, terapias integrales, 4 comidas por nutricionista y enfermería 1:5 + cuidador de apoyo.",
                },
              },
            ],
          }),
        }}
      />

      {/* Disclaimer médico */}
      <div className="text-xs text-gray-500 text-center py-4 px-6">
        Este material es informativo y no reemplaza la evaluación clínica profesional.
      </div>
    </div>
  )
}
