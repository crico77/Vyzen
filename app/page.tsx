import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { OptometristSection } from "@/components/optometrist-section"
import { ContactInfo } from "@/components/contact-info"
import { FloatingActionButton } from "@/components/floating-action-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <OptometristSection />
      <ContactInfo />
      <FloatingActionButton />
    </main>
  )
}
