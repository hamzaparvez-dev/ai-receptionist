"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { PhoneOff, Clock, DollarSign, Calendar, Moon, Frown } from "lucide-react"

const problems = [
  {
    icon: PhoneOff,
    title: "Missed Calls = Lost Revenue",
    description: "30% of calls go unanswered during busy hours, meetings, or after closing time",
    impact: "$15,000+ annual revenue loss",
  },
  {
    icon: Clock,
    title: "Staff Overwhelmed",
    description: "Reception staff juggling phones, scheduling, and customer service simultaneously",
    impact: "Reduced customer satisfaction",
  },
  {
    icon: DollarSign,
    title: "High Operational Costs",
    description: "Paying full-time reception staff $35K+ annually plus benefits and training",
    impact: "$50,000+ total annual cost",
  },
  {
    icon: Calendar,
    title: "Booking Inefficiencies",
    description: "Manual scheduling leads to double bookings, no-shows, and poor time management",
    impact: "20% scheduling errors",
  },
  {
    icon: Moon,
    title: "After-Hours Losses",
    description: "Zero availability for urgent inquiries during evenings, weekends, and holidays",
    impact: "40% of calls Missed",
  },
  {
    icon: Frown,
    title: "Customer Frustration",
    description: "Long hold times and busy signals drive potential customers to competitors",
    impact: "45% customer lost",
  },
]

export function ProblemsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".problem-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
                card.classList.remove("opacity-0")
                card.classList.add("opacity-100")
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
      const cards = document.querySelectorAll(".problem-card")
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
    <section id="problems" ref={sectionRef} className="py-32 bg-gradient-to-br from-red-950/30 via-orange-950/20 to-red-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 heading-primary text-white leading-tight">
            The Problems <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Costing You Money</span>
          </h2>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto text-balance text-premium font-semibold leading-relaxed">
            Every missed call, scheduling error, and after-hours inquiry represents lost revenue and frustrated
            customers choosing your competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="problem-card opacity-100 p-10 bg-gradient-to-br from-red-900/40 to-orange-900/30 border-red-400/40 hover:border-red-400/60 transition-all duration-300 hover:scale-105 glass-card shadow-xl hover:shadow-red-500/30"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-red-500/30 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <problem.icon className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold heading-primary text-white">{problem.title}</h3>
              </div>
              <p className="text-gray-100 mb-6 text-premium font-semibold text-lg text-center leading-relaxed">{problem.description}</p>
              <div className="text-base font-bold text-red-300 bg-red-500/30 px-5 py-3 rounded-xl text-center border border-red-400/40">
                {problem.impact}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-red-900/50 to-orange-900/40 border-2 border-red-400/50 rounded-3xl p-12 max-w-5xl mx-auto glass-card shadow-2xl">
            <h3 className="text-4xl font-bold mb-10 text-red-300 heading-primary">Total Annual Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-red-500/20 p-6 rounded-2xl border border-red-400/40">
                <div className="text-5xl font-bold text-red-300 mb-3">$65,000+</div>
                <div className="text-gray-100 text-premium font-bold text-xl">Lost Revenue</div>
              </div>
              <div className="bg-orange-500/20 p-6 rounded-2xl border border-orange-400/40">
                <div className="text-5xl font-bold text-orange-300 mb-3">500+</div>
                <div className="text-gray-100 text-premium font-bold text-xl">Missed Opportunities</div>
              </div>
              <div className="bg-red-500/20 p-6 rounded-2xl border border-red-400/40">
                <div className="text-5xl font-bold text-red-300 mb-3">25%</div>
                <div className="text-gray-100 text-premium font-bold text-xl">Customer Churn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
