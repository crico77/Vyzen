"use client"

import { X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProductModalProps {
  categoryId: string
  onClose: () => void
}

const categoryContent: Record<
  string,
  {
    title: string
    image: string
    description: string
    details: string[]
    price?: string
  }
> = {
  marcos: {
    title: "Marcos",
    image: "/luxury-eyeglass-frames-collection.jpg",
    description: "Descubre nuestra exclusiva colección de monturas",
    details: [
      "Materiales de alta calidad: acetato, titanio y acero inoxidable",
      "Diseños clásicos y modernos",
      "Ajuste personalizado",
      "Variedad de colores y estilos",
    ],
    price: "Desde $80.000 COP",
  },
  lentes: {
    title: "Lentes Especializados",
    image: "/josh-calabrese-qmnpqDwla_E-unsplash.jpg",
    description: "Tecnología de punta para tu visión perfecta",
    details: [
      "Lentes antirreflejantes",
      "Protección UV400",
      "Lentes fotocromáticos",
      "Lentes para pantallas (filtro azul)",
      "Lentes progresivos y bifocales",
      "Y muchos mas",
    ],
    price: "Desde $120.000 COP",
  },
  cita: {
    title: "Agendar Cita",
    image: "/professional-optometrist-consultation.jpg",
    description: "Programa tu evaluación visual con nuestro optometrista y obten un 50% de descuento si haces tus lentes con nosotros",
    details: [
      "Examen visual completo",
      "Evaluación de salud ocular",
      "Prescripción de lentes si es necesario",
      "Asesoría personalizada",
      "Duración: 15-30 minutos",
    ],
    price: "Consulta: $80.000 COP",
   
  },
  accesorios: {
    title: "Accesorios para tus Gafas",
    image: "/premium-eyewear-accessories-kit.jpg",
    description: "Todo lo necesario para el cuidado de tus gafas",
    details: [
      "Estuches rígidos y blandos",
      "Soluciones de limpieza profesional",
      "Paños de microfibra",
      "Cordones y cadenas",
      "Kits de reparación",
    ],
    price: "Desde $15.000 COP",
  },
  combos: {
    title: "Combos Especiales",
    image: "/complete-eyewear-bundle-package.jpg",
    description: "Paquetes completos con precios preferenciales",
    details: [
      "Combo Básico: Marco + Lentes básicos + Accesorio",
      "Combo Premium: Marco + Lentes antirreflejantes + Accesorios",
      "Combo Completo: Consulta + Marco + Lentes especializados + Accesorios",
      "Ahorra hasta 20% comprando en combo",
      "Garantía extendida incluida",
    ],
    price: "Desde $200.000 COP",
  },
}

export function ProductModal({ categoryId, onClose }: ProductModalProps) {
  const content = categoryContent[categoryId]

  if (!content) return null

  const handleWhatsApp = () => {
    const message =
      categoryId === "cita"
        ? `Hola! Me gustaría agendar una cita para evaluación visual.`
        : `Hola! Estoy interesado en ${content.title}.`
    window.open(`https://wa.me/573054645740?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <Card className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-video relative overflow-hidden bg-muted">
          <img src={content.image || "/placeholder.svg"} alt={content.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-8">
          <h2 className="font-serif text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-lg text-muted-foreground mb-6">{content.description}</p>

          {content.price && (
            <div className="mb-6 p-4 bg-primary/5 rounded-lg">
              <p className="text-2xl font-bold text-primary">{content.price}</p>
            </div>
          )}

          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">{categoryId === "cita" ? "Incluye:" : "Características:"}</h3>
            <ul className="space-y-2">
              {content.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button size="lg" className="w-full" onClick={handleWhatsApp}>
            <MessageCircle className="w-5 h-5 mr-2" />
            {categoryId === "cita" ? "Agendar por WhatsApp" : "Consultar por WhatsApp"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
