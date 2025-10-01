"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Clock, Users, Sparkles, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/50" />
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-30" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-3 glass-effect rounded-full px-8 py-4 mb-8 border border-white/20 shadow-2xl">
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-base font-bold text-white tracking-wide">
              Powered by GenuineStack - Leading AI Automation Solutions
            </span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
          </div>

          <h1 className="heading-display text-6xl md:text-8xl mb-8 text-balance font-black tracking-tight">
            <span className="text-white drop-shadow-2xl">Transform Your Business with </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent font-black">
              AI Receptionist
            </span>
          </h1>

          <p className="text-premium text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-balance leading-relaxed font-semibold text-gray-100 drop-shadow-lg">
            Never miss another customer call. Our intelligent AI receptionist handles inquiries, appointments, and
            customer management <span className="text-blue-400 font-bold text-2xl">24/7</span> while you focus on
            growing your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-12 py-6 animate-pulse-glow rounded-xl font-bold shadow-2xl border-0 text-shadow"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Sparkles className="mr-3 h-6 w-6" />
              Watch Live Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-12 py-6 border-2 border-white/30 hover:bg-white/10 bg-white/5 backdrop-blur-md rounded-xl font-bold text-white shadow-xl"
              onClick={() => document.getElementById("roi")?.scrollIntoView({ behavior: "smooth" })}
            >
              <TrendingUp className="mr-3 h-6 w-6" />
              See ROI Calculator
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 border border-white/10 shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Phone className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-xl font-bold text-white mb-2">Call Capture Rate</div>
              <div className="text-base text-gray-200 font-medium">Never miss a customer call again</div>
            </div>

            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 border border-white/10 shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-xl font-bold text-white mb-2">Availability</div>
              <div className="text-base text-gray-200 font-medium">Round-the-clock customer support</div>
            </div>

            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 border border-white/10 shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-5xl font-black mb-2 text-green-400">90%</div>
              <div className="text-xl font-bold text-white mb-2">Cost Reduction</div>
              <div className="text-base text-gray-200 font-medium">Significant operational savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
