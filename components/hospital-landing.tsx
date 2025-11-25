"use client"

import { Button } from "@/components/ui/button"
import {
  PhoneCall,
  Shield,
  Clock,
  Star,
  MessageSquareText,
  WheatIcon as Whatsapp,
  Heart,
  Users,
  Home,
  Stethoscope,
  Brain,
  Activity,
  Apple,
  UserCheck,
} from "lucide-react"
import { motion } from "framer-motion"

/**
 * Landing – Clínica Bihu · Servicio Humanizado
 * Diseño actualizado con lineamientos de marca auténticos
 */

export default function HospitalLanding() {
  return (
    <div className="bg-white text-[#023B6A] font-sans">
      <header className="bg-[#023B6A] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/isotipo-bihu.png" alt="Isotipo Clínica Bihu" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <div className="font-bold text-lg">CLÍNICA Bihu</div>
                <div className="text-sm opacity-90">Servicio Humanizado</div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              className="flex items-center gap-2 text-sm hover:opacity-80"
              href="tel:+56920108958"
              aria-label="Llamar Clínica Bihu"
            >
              <PhoneCall size={18} /> +56 9 2010 8958
            </a>
            <a
              className="flex items-center gap-2 text-sm hover:opacity-80"
              href="https://wa.me/56920108958"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Clínica Bihu"
            >
              <Whatsapp size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#023B6A]">
              Atención Integral en Salud Mental con Servicio Humanizado
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-prose">
              Hospitalización psiquiátrica, consultas especializadas y terapias integrales en un entorno seguro y
              acogedor en Santiago.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Hospitalización Psiquiátrica
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Psicología</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Medicina General</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Kinesiología</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Neurología</span>
            </div>
            <div className="mt-8 flex gap-4">
              <Button
                className="bg-[#023B6A] hover:bg-[#034a7a] text-white px-6 py-4 rounded-2xl text-lg"
                aria-label="Contactar especialista"
              >
                Contactar Especialista
              </Button>
              <Button
                variant="outline"
                className="border-[#023B6A] text-[#023B6A] hover:bg-[#023B6A] hover:text-white px-6 py-4 rounded-2xl text-lg bg-transparent"
                aria-label="Agendar consulta"
              >
                Agendar Consulta
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-[#023B6A]" /> Entorno seguro
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#023B6A]" /> Atención 24/7
              </div>
              <div className="flex items-center gap-2">
                <Heart size={18} className="text-[#023B6A]" /> Servicio humanizado
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/modern-clinic-building-with-gardens-and-peaceful-e.jpg"
              alt="Clínica Bihu - Instalaciones modernas y acogedoras"
              className="w-full h-64 md:h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023B6A] mb-4">Nuestros Servicios</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            En Clínica Bihu, nos comprometemos a ofrecer un apoyo integral y especializado para cada uno de nuestros
            pacientes y para sus familias.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "Hospitalización Psiquiátrica",
                desc: "Atención integral en un entorno seguro, cómodo y humano, con acompañamiento 24/7 por un equipo multidisciplinario.",
                color: "purple",
              },
              {
                icon: Brain,
                title: "Consulta Psiquiátrica",
                desc: "Evaluación, diagnóstico y tratamiento especializado en salud mental, centrado en la persona y sus necesidades.",
                color: "purple",
              },
              {
                icon: Stethoscope,
                title: "Medicina General",
                desc: "Cuidado médico oportuno y cercano, enfocado en el bienestar físico de nuestros pacientes durante su proceso terapéutico.",
                color: "blue",
              },
              {
                icon: Users,
                title: "Consulta Psicológica",
                desc: "Espacio de contención y orientación emocional para acompañar, escuchar y fortalecer los recursos internos de cada persona.",
                color: "pink",
              },
              {
                icon: Brain,
                title: "Neurología",
                desc: "Atención profesional para abordar trastornos neurológicos con enfoque diagnóstico y terapéutico integral.",
                color: "indigo",
              },
              {
                icon: Activity,
                title: "Kinesiología",
                desc: "Rehabilitación física personalizada que promueve el movimiento, el bienestar corporal y la calidad de vida.",
                color: "green",
              },
              {
                icon: UserCheck,
                title: "Terapia Ocupacional",
                desc: "Intervención que potencia la autonomía, la funcionalidad y la participación activa en actividades significativas para la vida diaria.",
                color: "teal",
              },
              {
                icon: Apple,
                title: "Nutrición",
                desc: "Asesoría nutricional adaptada a cada paciente, promoviendo una alimentación equilibrada y consciente como parte del tratamiento.",
                color: "green",
              },
            ].map((service, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow-lg">
                <service.icon className={`w-8 h-8 mb-4 text-${service.color}-600`} />
                <h3 className="font-bold text-lg text-[#023B6A] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023B6A] mb-4">Nuestras Instalaciones</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            En Clínica Bihu contamos con una infraestructura diseñada para brindar el máximo bienestar tanto a nuestros
            pacientes como a sus familias.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "16",
                title: "Habitaciones de Alojamiento",
                desc: "Espacios cómodos y privados para pacientes",
              },
              { number: "8", title: "Salas de Consultas", desc: "Consultorios ambulatorios equipados" },
              { title: "Espacios Exteriores", desc: "Amplios jardines y áreas verdes" },
              { title: "Cafetería Equipada", desc: "Espacio de encuentro y alimentación" },
              { title: "Capilla Acogedora", desc: "Espacio de reflexión y espiritualidad" },
              { title: "Comedor Confortable", desc: "Área de alimentación familiar" },
              { title: "Huerto Sustentable", desc: "Espacio terapéutico y de conexión con la naturaleza" },
            ].map((facility, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl">
                {facility.number && <div className="text-3xl font-bold text-[#023B6A] mb-2">{facility.number}</div>}
                <h3 className="font-bold text-lg text-[#023B6A] mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023B6A] mb-4">
            Voces que Inspiran Confianza
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            En Clínica Bihu, cada persona que atendemos es parte de nuestra historia. Sus experiencias, palabras y
            recorridos nos motivan a seguir creciendo con compromiso y empatía.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Marco González",
                text: "Excelente atención de todo el equipo de la clínica, desde Sandrita que está en recepción, pasando por el psiquiatra el doctor Mario, el psicólogo Maximiliano, Christian el terapeuta, Daniela la kinesióloga, los enfermeros Willbert y Macarena, la doctora Juliette, estuve internado un mes y sólo puedo decir buenas cosas de todos.",
              },
              {
                name: "Julieta Méndez",
                text: "Tienen profesionales con una excelente calidez humana, te sientes siempre en familia y sus instalaciones te hacen sentir en la naturaleza y con mucha paz, el mejor lugar para tener tranquilidad y estar acompañado del mejor equipo que guía tu proceso. Una clínica muy recomendada.",
              },
              {
                name: "Giselle Rodríguez",
                text: "Una clínica con excelente servicio al cliente, un trato humanizado e integral tanto a los pacientes como a su red de apoyo. Instalaciones hermosas y acogedoras, donde tienes más que una hospitalización un tiempo de descanso y encuentro consigo mismo.",
              },
              {
                name: "Beatriz Echeverry",
                text: "Un equipo muy profesional. Me sentí muy bien atendida. Amé las instalaciones, pura paz. Recomiendo la clínica sin pensarlo dos veces. El personal es muy especial, lo que uno necesita cuando no se siente bien.",
              },
            ].map((testimonial, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-bold text-[#023B6A]">- {testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023B6A] mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            En Clínica Bihu estamos aquí para ti. Si necesitas más información, agendar una hora o resolver cualquier
            duda, no dudes en comunicarte con nosotros.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl">
              <PhoneCall className="w-8 h-8 text-[#023B6A] mb-4" />
              <h3 className="font-bold text-lg text-[#023B6A] mb-2">Teléfono</h3>
              <a href="tel:+56920108958" className="text-gray-700 hover:text-[#023B6A]">
                +56 9 2010 8958
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl">
              <MessageSquareText className="w-8 h-8 text-[#023B6A] mb-4" />
              <h3 className="font-bold text-lg text-[#023B6A] mb-2">Email</h3>
              <a href="mailto:gerenciageneral@clinicabihu.cl" className="text-gray-700 hover:text-[#023B6A]">
                gerenciageneral@clinicabihu.cl
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl">
              <Home className="w-8 h-8 text-[#023B6A] mb-4" />
              <h3 className="font-bold text-lg text-[#023B6A] mb-2">Dirección</h3>
              <p className="text-gray-700">Chopin 3157, San Joaquín, Región Metropolitana</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              className="bg-[#023B6A] hover:bg-[#034a7a] text-white px-8 py-4 rounded-2xl text-lg"
              aria-label="Contactar ahora"
            >
              Contactar Ahora
            </Button>
            <Button
              variant="outline"
              className="border-[#023B6A] text-[#023B6A] hover:bg-[#023B6A] hover:text-white px-8 py-4 rounded-2xl text-lg bg-transparent"
              aria-label="Ver más información"
            >
              Más Información
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp button */}
      <a
        href="https://wa.me/56920108958"
        aria-label="WhatsApp Clínica Bihu"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 transition-colors"
      >
        <Whatsapp className="w-6 h-6" />
      </a>

      <footer className="bg-[#023B6A] text-white">
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/isotipo-bihu.png" alt="Isotipo Clínica Bihu" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <div className="font-bold">CLÍNICA Bihu</div>
              <div className="text-sm opacity-90">Servicio Humanizado</div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-sm">Chopin 3157, San Joaquín, Santiago</div>
            <div className="text-sm opacity-90">© {new Date().getFullYear()} Clínica Bihu</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
