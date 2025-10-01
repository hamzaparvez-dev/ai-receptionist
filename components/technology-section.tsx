"use client"

import { Card } from "@/components/ui/card"
import { Brain, Shield, Zap, Globe, Database, Headphones } from "lucide-react"

const technologies = [
  {
    icon: Brain,
    title: "Advanced NLP",
    description: "Natural Language Processing understands context, intent, and medical terminology",
    features: ["Context awareness", "Medical vocabulary", "Multi-language support"],
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security ensures patient data protection and regulatory compliance",
    features: ["End-to-end encryption", "Audit trails", "Compliance monitoring"],
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast response times with cloud-based infrastructure and edge computing",
    features: ["<200ms response", "99.9% uptime", "Auto-scaling"],
  },
  {
    icon: Globe,
    title: "Multi-channel Integration",
    description: "Seamlessly handles phone calls, web chat, SMS, and email communications",
    features: ["Unified inbox", "Cross-platform sync", "API integrations"],
  },
  {
    icon: Database,
    title: "Smart Data Management",
    description: "Intelligent patient data organization with automated insights and reporting",
    features: ["Patient profiles", "Appointment history", "Analytics dashboard"],
  },
  {
    icon: Headphones,
    title: "24/7 Monitoring",
    description: "Continuous system monitoring with human oversight for complex cases",
    features: ["Live monitoring", "Escalation protocols", "Quality assurance"],
  },
]

export function TechnologySection() {
  return (
    <section className="py-32 bg-gradient-to-br from-cyan-950/30 via-blue-950/20 to-cyan-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Powered by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Cutting-Edge Technology</span>
          </h2>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto text-balance font-semibold leading-relaxed">
            Our AI receptionist leverages the latest advances in artificial intelligence, natural language processing,
            and healthcare technology to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-10 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-cyan-900/40 to-blue-900/30 border-cyan-400/40 shadow-xl hover:shadow-cyan-500/30">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-cyan-500/30 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <tech.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
              </div>
              <p className="text-gray-100 mb-6 font-semibold text-lg text-center leading-relaxed">{tech.description}</p>
              <ul className="space-y-3 bg-cyan-500/10 p-4 rounded-xl border border-cyan-400/30">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-base">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-100 font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
