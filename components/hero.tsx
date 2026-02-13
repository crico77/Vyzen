"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Visión clara, estilo único
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Descubre la experiencia perfecta en salud visual. Conectamos tu visión con los mejores profesionales y
            productos del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="text-base" onClick={() => window.open("https://wa.me/573054645740", "_blank")}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Contáctanos por WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
              <a href="/catalogo">Ver Catálogo</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}
