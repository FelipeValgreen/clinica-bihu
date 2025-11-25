import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTADrawer from "@/components/cta-drawer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Política de Privacidad - Clínica Bihu",
  description: "Política de privacidad y protección de datos personales de Clínica Bihu. Cumplimiento con la Ley 19.628 de Chile.",
  keywords: "política de privacidad, protección datos, ley 19628, clínica bihu",
  canonical: "/politica-de-privacidad",
})

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#023B6A] to-[#034a7a] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Política de Privacidad
              </h1>
              <p className="text-xl text-white/90">
                Protección de datos personales y cumplimiento legal
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">
                  Información Importante
                </h2>
                <p className="text-blue-800">
                  Esta política de privacidad cumple con la Ley 19.628 sobre Protección de la Vida Privada de Chile. 
                  Última actualización: {new Date().toLocaleDateString('es-CL')}
                </p>
              </div>

              <h2>1. Responsable del Tratamiento</h2>
              <p>
                <strong>Clínica Bihu</strong><br />
                Razón Social: Mente y Salud SpA<br />
                Dirección: Chopin 3157, San Joaquín, Región Metropolitana, Santiago, Chile<br />
                Teléfono: +56 32 328 3068<br />
                Email: gerenciageneral@clinicabihu.cl
              </p>

              <h2>2. Datos Personales que Recopilamos</h2>
              <p>Recopilamos los siguientes tipos de datos personales:</p>
              <ul>
                <li><strong>Datos de identificación:</strong> Nombre completo, RUT, fecha de nacimiento</li>
                <li><strong>Datos de contacto:</strong> Teléfono, email, dirección</li>
                <li><strong>Datos de salud:</strong> Información médica, historial clínico, tratamientos</li>
                <li><strong>Datos de navegación:</strong> IP, cookies, páginas visitadas</li>
                <li><strong>Datos de comunicación:</strong> Mensajes, consultas, feedback</li>
              </ul>

              <h2>3. Finalidades del Tratamiento</h2>
              <p>Utilizamos tus datos personales para:</p>
              <ul>
                <li>Brindar servicios de salud mental</li>
                <li>Gestionar citas y tratamientos</li>
                <li>Comunicarnos contigo</li>
                <li>Cumplir obligaciones legales</li>
                <li>Mejorar nuestros servicios</li>
                <li>Marketing directo (con tu consentimiento)</li>
              </ul>

              <h2>4. Base Legal</h2>
              <p>El tratamiento de datos se basa en:</p>
              <ul>
                <li><strong>Consentimiento:</strong> Para marketing y comunicaciones</li>
                <li><strong>Ejecución contractual:</strong> Para prestar servicios de salud</li>
                <li><strong>Interés legítimo:</strong> Para mejorar servicios</li>
                <li><strong>Obligación legal:</strong> Para cumplir normativas sanitarias</li>
              </ul>

              <h2>5. Compartir Información</h2>
              <p>Podemos compartir tus datos con:</p>
              <ul>
                <li>Profesionales de la salud del equipo</li>
                <li>Proveedores de servicios (con acuerdos de confidencialidad)</li>
                <li>Autoridades sanitarias (cuando sea requerido)</li>
                <li>Isapres/Fonasa (para reembolsos, con tu autorización)</li>
              </ul>

              <h2>6. Seguridad de los Datos</h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas:</p>
              <ul>
                <li>Encriptación de datos sensibles</li>
                <li>Acceso restringido al personal autorizado</li>
                <li>Copias de seguridad regulares</li>
                <li>Auditorías de seguridad periódicas</li>
              </ul>

              <h2>7. Tus Derechos</h2>
              <p>Según la Ley 19.628, tienes derecho a:</p>
              <ul>
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
              </ul>

              <h2>8. Retención de Datos</h2>
              <p>
                Conservamos tus datos durante el tiempo necesario para cumplir las finalidades descritas, 
                respetando los plazos legales establecidos para datos de salud (mínimo 5 años).
              </p>

              <h2>9. Cookies y Tecnologías Similares</h2>
              <p>
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. 
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad.
              </p>

              <h2>10. Menores de Edad</h2>
              <p>
                Para menores de 18 años, requerimos el consentimiento de sus padres o tutores legales 
                para el tratamiento de sus datos personales.
              </p>

              <h2>11. Transferencias Internacionales</h2>
              <p>
                En caso de transferir datos fuera de Chile, nos aseguraremos de que el país de destino 
                ofrezca un nivel adecuado de protección o contemos con garantías apropiadas.
              </p>

              <h2>12. Cambios en esta Política</h2>
              <p>
                Podemos actualizar esta política de privacidad. Te notificaremos sobre cambios significativos 
                a través de nuestro sitio web o por email.
              </p>

              <h2>13. Contacto</h2>
              <p>
                Para ejercer tus derechos o resolver dudas sobre esta política, contáctanos:
              </p>
              <ul>
                <li>Email: gerenciageneral@clinicabihu.cl</li>
                <li>Teléfono: +56 32 328 3068</li>
                <li>Dirección: Chopin 3157, San Joaquín, Santiago</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                  Disclaimer Clínico
                </h3>
                <p className="text-yellow-800">
                  <strong>Importante:</strong> La información en este sitio web no reemplaza la evaluación médica profesional. 
                  En caso de emergencia, llama al 131 o acude a urgencias. Los servicios de Clínica Bihu están destinados 
                  a personas que requieren atención especializada en salud mental.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CTADrawer />
      <WhatsAppFloat />
    </>
  )
}
