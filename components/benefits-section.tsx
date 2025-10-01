"use client"

import { Card } from "@/components/ui/card"
import { Rocket, Target, Smartphone, Shield, BarChart, Settings } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Instant Setup",
    description: "Live in 48 hours with zero downtime",
    details: "Our team handles complete integration with your existing systems",
  },
  {
    icon: Target,
    title: "Higher Conversion",
    description: "Convert 85% more calls to bookings",
    details: "AI qualification ensures only serious patients get scheduled",
  },
  {
    icon: Smartphone,
    title: "Multi-Channel",
    description: "Handles calls, texts, and web chats",
    details: "Unified communication across all patient touchpoints",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Fully secure patient data handling",
    details: "Enterprise-grade security with audit trails and compliance monitoring",
  },
  {
    icon: BarChart,
    title: "Detailed Analytics",
    description: "Track performance and optimize",
    details: "Real-time dashboards with actionable insights and reporting",
  },
  {
    icon: Settings,
    title: "Custom Training",
    description: "AI learns your specific protocols",
    details: "Tailored to your practice's unique processes and terminology",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-teal-950/30 via-green-950/20 to-teal-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Key Benefits for <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Your Practice</span>
          </h2>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto text-balance font-semibold leading-relaxed">
            Beyond cost savings and increased revenue, our AI receptionist delivers operational excellence that
            transforms how your practice operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-10 hover:scale-105 transition-all duration-300 group bg-gradient-to-br from-teal-900/40 to-green-900/30 border-teal-400/40 shadow-xl hover:shadow-teal-500/30">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
              </div>
              <p className="text-xl font-bold mb-6 text-teal-300 text-center">{benefit.description}</p>
              <p className="text-gray-100 text-base font-semibold text-center leading-relaxed">{benefit.details}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-5xl mx-auto p-12 bg-gradient-to-r from-teal-900/40 to-green-900/40 border-teal-400/50 shadow-2xl">
            <h3 className="text-4xl font-bold mb-10 text-white">Implementation Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center bg-teal-500/20 p-6 rounded-2xl border border-teal-400/40">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                  1
                </div>
                <div className="font-bold text-xl text-white mb-2">Day 1</div>
                <div className="text-base text-gray-100 font-semibold">Initial consultation</div>
              </div>
              <div className="text-center bg-green-500/20 p-6 rounded-2xl border border-green-400/40">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                  2
                </div>
                <div className="font-bold text-xl text-white mb-2">Week 1</div>
                <div className="text-base text-gray-100 font-semibold">System integration</div>
              </div>
              <div className="text-center bg-teal-500/20 p-6 rounded-2xl border border-teal-400/40">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                  3
                </div>
                <div className="font-bold text-xl text-white mb-2">Week 2</div>
                <div className="text-base text-gray-100 font-semibold">AI training & testing</div>
              </div>
              <div className="text-center bg-green-500/20 p-6 rounded-2xl border border-green-400/40">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                  4
                </div>
                <div className="font-bold text-xl text-white mb-2">Go Live</div>
                <div className="text-base text-gray-100 font-semibold">Full deployment</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
