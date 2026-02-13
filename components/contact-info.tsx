import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-balance">Información de Contacto</h2>
            <p className="text-muted-foreground text-pretty">
              Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <a
                href="tel:+573054645740"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +57 305 464 5740
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Correo Electrónico</h3>
              <a
                href="mailto:cricami7@hotmial.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                contacto@vyzen.com
              </a>
              
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Ubicación</h3>
              <p className="text-sm text-muted-foreground">
                Servicio a domicilio
                <br />
                Bogotá, Colombia
              </p>
            </Card>
           
          </div>
        </div>
      </div>
       <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Comercializadora ESAN SAS. Todos los derechos reservados.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-2">
            <a
              href="https://portafolio-upig.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Programador y diseñador
            </a>
          </p>
        </div>
    </section>
  )
}
