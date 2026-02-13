"use client"

import { useState } from "react"
import { MessageCircle, X, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Button
            size="icon"
            className="rounded-full shadow-lg bg-[#E4405F] hover:bg-[#E4405F]/90"
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            <Instagram className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="rounded-full shadow-lg bg-[#1877F2] hover:bg-[#1877F2]/90"
            onClick={() => window.open("https://facebook.com", "_blank")}
          >
            <Facebook className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="rounded-full shadow-lg bg-[#1DA1F2] hover:bg-[#1DA1F2]/90"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <Twitter className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="rounded-full shadow-lg bg-[#25D366] hover:bg-[#25D366]/90"
            onClick={() => window.open("https://wa.me/573054645740", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* Main FAB */}
      <Button size="icon" className="w-14 h-14 rounded-full shadow-lg" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  )
}
