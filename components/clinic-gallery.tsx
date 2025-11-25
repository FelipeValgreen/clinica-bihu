import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function ClinicGallery() {
  const clinicImages = [
    {
      src: "/images/clinic/garden.jpg",
      alt: "Jardín y área verde de Clínica Bihu diseñado para la tranquilidad y bienestar de pacientes y familias",
      title: "Entorno Natural",
      description: "Espacios verdes diseñados para la tranquilidad y bienestar"
    },
    {
      src: "/images/clinic/walkway.jpg", 
      alt: "Pasillo cubierto de Clínica Bihu con ambientes seguros y acogedores para pacientes",
      title: "Pasillos Tranquilos",
      description: "Ambientes seguros y acogedores para nuestros pacientes"
    },
    {
      src: "/images/clinic/building.jpg",
      alt: "Exterior de Clínica Bihu con infraestructura moderna diseñada para atención especializada en salud mental",
      title: "Instalaciones Modernas",
      description: "Infraestructura diseñada para la atención especializada"
    }
  ]

  const teamImages = [
    {
      src: "/images/team/team-group.jpg",
      alt: "Equipo multidisciplinario de Clínica Bihu con profesionales especializados en salud mental",
      title: "Equipo Multidisciplinario",
      description: "Profesionales especializados en salud mental"
    },
    {
      src: "/images/team/team-meeting.jpg",
      alt: "Reunión del equipo médico de Clínica Bihu colaborando para el mejor cuidado de pacientes",
      title: "Trabajo en Equipo",
      description: "Colaboración constante para el mejor cuidado"
    },
    {
      src: "/images/team/team-celebration.jpg",
      alt: "Equipo de Clínica Bihu comprometido con el bienestar de pacientes y familias",
      title: "Compromiso Profesional",
      description: "Dedicados al bienestar de nuestros pacientes"
    }
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Instalaciones */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Espacios diseñados para brindar tranquilidad, seguridad y bienestar a nuestros pacientes y sus familias.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicImages.map((image, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                            <div class="text-center text-white">
                              <div class="text-4xl mb-2">🏥</div>
                              <h3 class="text-lg font-bold">${image.title}</h3>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales especializados comprometidos con la atención humanizada y el bienestar integral.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamImages.map((image, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                            <div class="text-center text-white">
                              <div class="text-4xl mb-2">👥</div>
                              <h3 class="text-lg font-bold">${image.title}</h3>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
