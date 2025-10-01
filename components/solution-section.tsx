"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle, Bot, MessageSquare, Database, TrendingUp, RefreshCw } from "lucide-react"

const solutions = [
  {
    icon: CheckCircle,
    title: "100% Call Capture",
    description: "Never miss a customer call again - AI answers instantly, 24/7(365)",
    benefit: "Capture every opportunity",
  },
  {
    icon: Bot,
    title: "Smart Booking System",
    description: "Automated scheduling based on your availability, services, and customer preferences",
    benefit: "Zero scheduling conflicts",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Conversations",
    description: "Natural language processing handles complex customer inquiries professionally",
    benefit: "Human-like interactions",
  },
  {
    icon: Database,
    title: "Instant Integration",
    description: "Seamlessly connects with your existing business management software",
    benefit: "No workflow disruption",
  },
  {
    icon: TrendingUp,
    title: "Lead Qualification",
    description: "AI pre-screens customers, collects information, and prioritizes urgent inquiries",
    benefit: "Higher quality leads",
  },
  {
    icon: RefreshCw,
    title: "Smart Follow-ups",
    description: "Automated appointment reminders and rescheduling reduce no-show rates by 40%",
    benefit: "Improved attendance",
  },
]

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".solution-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const fallbackTimer = setTimeout(() => {
      const cards = document.querySelectorAll(".solution-card")
      cards.forEach((card) => {
        card.classList.remove("opacity-0")
        card.classList.add("opacity-100")
      })
    }, 500)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <section id="solution" ref={sectionRef} className="py-32 bg-gradient-to-br from-green-950/40 via-emerald-950/30 to-green-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-display text-pretty text-white leading-tight">
            Our AI Solution <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Delivers Results</span>
          </h2>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto text-balance leading-relaxed font-semibold">
            Transform every challenge into an opportunity with our intelligent AI receptionist that works around the
            clock to grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="solution-card opacity-100 p-10 bg-gradient-to-br from-green-900/40 to-emerald-900/30 border-green-400/40 hover:border-green-400/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-xl hover:shadow-green-500/30"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-green-500/30 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <solution.icon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">{solution.title}</h3>
              </div>
              <p className="text-gray-100 mb-6 leading-relaxed font-semibold text-lg text-center">{solution.description}</p>
              <div className="text-base font-bold text-green-300 bg-green-500/30 px-5 py-3 rounded-xl text-center border border-green-400/40">
                {solution.benefit}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/40 border-2 border-green-400/50 rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl">
            <h3 className="text-4xl font-bold mb-10 text-green-300">Transformation Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-green-500/20 p-6 rounded-2xl border border-green-400/40">
                <div className="text-5xl font-bold text-green-300 mb-3">+40%</div>
                <div className="text-gray-100 font-bold text-xl">More Bookings</div>
              </div>
              <div className="bg-emerald-500/20 p-6 rounded-2xl border border-emerald-400/40">
                <div className="text-5xl font-bold text-emerald-300 mb-3">-90%</div>
                <div className="text-gray-100 font-bold text-xl">Operational Costs</div>
              </div>
              <div className="bg-green-500/20 p-6 rounded-2xl border border-green-400/40">
                <div className="text-5xl font-bold text-green-300 mb-3">100%</div>
                <div className="text-gray-100 font-bold text-xl">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
