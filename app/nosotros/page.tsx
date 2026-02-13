import { Header } from "@/components/header"
import { FloatingActionButton } from "@/components/floating-action-button"
import { Card } from "@/components/ui/card"
import { Eye, Users, Award, Heart } from "lucide-react"

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Visión clara, estilo único</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            VYZEN es más que un servicio de salud visual. Somos tu aliado en el camino hacia una visión perfecta con
            estilo inigualable.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">¿Qué es VYZEN?</h2>
            <p className="text-lg leading-relaxed mb-6 text-pretty">
              VYZEN es un servicio completo de salud visual sin punto físico, que actúa como intermediario comercial
              conectando al cliente con una red de aliados especializados: optometristas profesionales, proveedores de
              monturas de alta calidad y laboratorios ópticos de última generación.
            </p>
            <p className="text-lg leading-relaxed text-pretty">
              Nuestro objetivo es ofrecer una experiencia rápida, personalizada y accesible para que cualquier persona
              pueda obtener sus gafas de manera sencilla, sin complicaciones y con la garantía de calidad que mereces.
            </p>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Visión</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Ser el referente en servicios de salud visual accesibles y personalizados
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Red de Aliados</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Trabajamos con los mejores profesionales y proveedores del sector
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Calidad</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Productos y servicios de la más alta calidad garantizada
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Compromiso</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Tu satisfacción y bienestar visual son nuestra prioridad
            </p>
          </Card>
        </div>

        {/* How it Works */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">¿Cómo funciona?</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Contáctanos</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Comunícate con nosotros por WhatsApp y cuéntanos qué necesitas. Nuestro equipo te guiará en todo el
                  proceso.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Evaluación Profesional</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Te conectamos con nuestro optometrista aliado para una evaluación completa de tu salud visual.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Elige tu Estilo</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Selecciona entre nuestra amplia variedad de monturas y lentes que se adaptan a tu estilo y
                  necesidades.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Recibe tus Gafas</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Nuestro laboratorio óptico prepara tus gafas con precisión y te las entregamos listas para usar.
                </p>
              </div>
            </div>
          </div>
        </div>
         <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} VYZEN. Todos los derechos reservados.
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
      </div>
      <FloatingActionButton />
    </main>
  )
}
