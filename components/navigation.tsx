"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lg.png" 
              alt="GenuineStack Logo" 
              className="w-12 h-12 object-contain rounded-full"
            />
            <span className="text-2xl font-black text-white tracking-tight">Genuine Stack</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("problems")}
              className="text-gray-200 hover:text-white transition-colors font-semibold text-lg"
            >
              Problems
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-gray-200 hover:text-white transition-colors font-semibold text-lg"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-gray-200 hover:text-white transition-colors font-semibold text-lg"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("roi")}
              className="text-gray-200 hover:text-white transition-colors font-semibold text-lg"
            >
              ROI
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("cta")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg border-0"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
