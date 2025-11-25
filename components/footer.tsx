import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import Logo from "@/components/logo"
import clinicData from "@/data/clinic.json"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo 
                showText={true}
                showTagline={true}
                size="lg"
                className="text-white"
              />
            </div>
            <p className="text-white/70 text-sm">Salud mental humanizada, integral y cercana para ti y tu familia.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{clinicData.direccion}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${clinicData.telefono}`} className="text-white/80 hover:text-white transition-colors">
                  {clinicData.telefono}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${clinicData.email}`} className="text-white/80 hover:text-white transition-colors">
                  {clinicData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hospitalizacion-psiquiatrica" className="text-white/80 hover:text-white transition-colors">
                  Hospitalización
                </Link>
              </li>
              <li>
                <Link href="/psiquiatria" className="text-white/80 hover:text-white transition-colors">
                  Psiquiatría
                </Link>
              </li>
              <li>
                <Link href="/psicologia" className="text-white/80 hover:text-white transition-colors">
                  Psicología
                </Link>
              </li>
              <li>
                <Link href="/kinesiologia" className="text-white/80 hover:text-white transition-colors">
                  Kinesiología
                </Link>
              </li>
              <li>
                <Link href="/terapia-ocupacional" className="text-white/80 hover:text-white transition-colors">
                  Terapia Ocupacional
                </Link>
              </li>
              <li>
                <Link href="/nutricion" className="text-white/80 hover:text-white transition-colors">
                  Nutrición
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <Link href="/nosotros" className="text-white/80 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/costos-y-convenios" className="text-white/80 hover:text-white transition-colors">
                  Costos
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="text-white/80 hover:text-white transition-colors">
                  Privacidad
                </Link>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/406002979254320"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/clinica_bihu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/clinica-bihu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@clinicabihu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@clinicabihu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2025 Clínica Bihu - Mente y Salud SpA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
