import { Header } from "@/components/header"
import { CatalogGrid } from "@/components/catalog-grid"
import { FloatingActionButton } from "@/components/floating-action-button"

export default function CatalogoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Nuestro Catálogo</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Explora nuestra selección de productos y servicios diseñados para tu visión perfecta
        </p>
        <CatalogGrid />
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
      </div>
      <FloatingActionButton />
    </main>
  )
}
