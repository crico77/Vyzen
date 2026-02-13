import { Card } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function OptometristSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-balance">Nuestro Optometrista Aliado</h2>
            <p className="text-muted-foreground text-pretty">
              Profesionales certificados comprometidos con tu salud visual
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Dr. Cristian Andres Satoba Garzon</h3>
              <p className="text-muted-foreground">Optometrista Profesional</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Formación Académica</h4>
                  <p className="text-sm text-muted-foreground">Universidad de La Salle - Optometría</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experiencia</h4>
                  <p className="text-sm text-muted-foreground">
                    Más de 5 años de experiencia en salud visual y adaptación de lentes especializados
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Agenda tu cita</h4>
                  <p className="text-sm text-muted-foreground">
                    L–V | 3:00 PM – 6:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    S–D | 10:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
