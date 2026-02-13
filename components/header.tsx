"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/vyzen-logo.png" alt="VYZEN" width={120} height={60} className="h-30 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                pathname === "/" ? "text-primary" : ""
              }`}
            >
              Inicio
              {pathname === "/" && <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />}
            </Link>
            <Link
              href="/catalogo"
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                pathname === "/catalogo" ? "text-primary" : ""
              }`}
            >
              Catálogo
              {pathname === "/catalogo" && <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />}
            </Link>
            <Link
              href="/nosotros"
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                pathname === "/nosotros" ? "text-primary" : ""
              }`}
            >
              Nosotros
              {pathname === "/nosotros" && <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/catalogo" ? "text-primary font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Catálogo
            </Link>
            <Link
              href="/nosotros"
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/nosotros" ? "text-primary font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
