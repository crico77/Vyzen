"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Glasses, Eye, Calendar, Package, Sparkles } from "lucide-react"
import { ProductModal } from "@/components/product-modal"

const categories = [
  {
    id: "marcos",
    icon: Glasses,
    title: "Marcos",
    description: "Monturas para todos los estilos",
    image: "/elegant-eyeglass-frames-display.jpg",
  },
  {
    id: "lentes",
    icon: Eye,
    title: "Lentes",
    description: "Lentes de alta tecnología y precisión",
    image: "/redd-francisco-zgtTjXKxdDE-unsplash.jpg",
  },
  {
    id: "cita",
    icon: Calendar,
    title: "Agendar Cita",
    description: "Programa tu evaluación visual",
    image: "/optometrist-appointment.jpg",
  },
  {
    id: "accesorios",
    icon: Package,
    title: "Accesorios",
    description: "Estuches, limpiadores y más",
    image: "/eyewear-accessories.jpg",
  },
  {
    id: "combos",
    icon: Sparkles,
    title: "Combos",
    description: "Paquetes completos con descuento",
    image: "/complete-eyewear-package.jpg",
  },
]

export function CatalogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 group"
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="aspect-video relative overflow-hidden bg-muted">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {selectedCategory && <ProductModal categoryId={selectedCategory} onClose={() => setSelectedCategory(null)} />}
    </>
  )
}
