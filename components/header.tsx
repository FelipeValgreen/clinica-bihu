"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Logo from "@/components/logo"
import clinicData from "@/data/clinic.json"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Inicio", href: "/" },
    { 
      name: "Servicios", 
      href: "/servicios",
      submenu: [
        { name: "Hospitalización Psiquiátrica", href: "/hospitalizacion-psiquiatrica" },
        { name: "Psiquiatría", href: "/psiquiatria" },
        { name: "Psicología", href: "/psicologia" },
        { name: "Kinesiología", href: "/kinesiologia" },
        { name: "Terapia Ocupacional", href: "/terapia-ocupacional" },
        { name: "Nutrición", href: "/nutricion" },
        { name: "Medicina General", href: "/medicina-general" },
      ]
    },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Testimonios", href: "/testimonios" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#023B6A] shadow-lg" : "bg-[#023B6A]"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo 
            showText={true}
            showTagline={true}
            size="md"
            className="text-white"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Navegación principal">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#023B6A] rounded"
                  aria-label={item.submenu ? `${item.name}, menú desplegable` : item.name}
                >
                  {item.name}
                  {item.submenu && (
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#023B6A] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & Social Media */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-white/90 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>24/7</span>
              </div>
              <a href={`tel:${clinicData.telefono}`} className="hover:text-white transition-colors">
                {clinicData.telefono}
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-3">
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

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-900 hover:text-[#023B6A] transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <a
                      href={`tel:${clinicData.telefono}`}
                      className="flex items-center space-x-2 text-gray-700 hover:text-[#023B6A] transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>{clinicData.telefono}</span>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
