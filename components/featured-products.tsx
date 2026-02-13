import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Glasses, Eye, Package, Sparkles } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Glasses,
    title: "Monturas Premium",
    description: "Amplia selección de monturas de las mejores marcas y estilos",
  },
  {
    icon: Eye,
    title: "Lentes Especializados",
    description: "Lentes de alta tecnología adaptados a tus necesidades",
  },
  {
    icon: Package,
    title: "Accesorios",
    description: "Todo lo que necesitas para el cuidado de tus gafas",
  },
  {
    icon: Sparkles,
    title: "Combos Especiales",
    description: "Paquetes completos con precios preferenciales",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-balance">
            Nuestros Productos y Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todo lo que necesitas para una visión perfecta en un solo lugar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/catalogo">Explorar Catálogo Completo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
