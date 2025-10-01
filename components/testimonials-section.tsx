"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell Wellness Center",
    location: "Toronto, ON",
    quote:
      "Our AI receptionist has been a game-changer. We've seen a 45% increase in bookings and our staff can now focus entirely on customer service instead of managing phones.",
    rating: 5,
    results: "45% more bookings, $3,200 monthly savings",
  },
  {
    name: "James Rodriguez",
    business: "Peak Performance Solutions",
    location: "Vancouver, BC",
    quote:
      "The 24/7 availability has captured so many after-hours calls that we were missing before. The ROI was evident within the first month.",
    rating: 5,
    results: "60% after-hours conversion, 2-month ROI",
  },
  {
    name: "Emily Chen",
    business: "Wellness First Consulting",
    location: "Calgary, AB",
    quote:
      "Integration was seamless and the AI understands our specific protocols perfectly. Customers often don't realize they're speaking with AI - it's that natural.",
    rating: 5,
    results: "Zero integration downtime, 95% customer satisfaction",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-indigo-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            What Our Clients <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Are Saying</span>
          </h2>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto text-balance font-semibold leading-relaxed">
            Real results from businesses across Canada who have transformed their operations with our AI receptionist
            solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-10 relative overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/30 border-purple-400/40 shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-20 w-20 text-white" />
              </div>

              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl mb-8 relative z-10 text-gray-100 font-semibold leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-purple-400/30 pt-6">
                <div className="font-bold text-white text-xl mb-2">{testimonial.name}</div>
                <div className="text-base text-gray-200 font-semibold mb-1">{testimonial.business}</div>
                <div className="text-base text-gray-200 font-semibold mb-3">{testimonial.location}</div>
                <div className="text-base font-bold text-purple-300 bg-purple-500/20 px-4 py-2 rounded-xl inline-block">{testimonial.results}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-5xl mx-auto p-12 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border-purple-400/50 glass-card shadow-2xl">
            <h3 className="text-4xl font-bold mb-10 text-white">Client Success Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center bg-purple-500/20 p-6 rounded-2xl border border-purple-400/40">
                <div className="text-5xl font-bold text-purple-300 mb-2">98%</div>
                <div className="text-gray-100 font-bold text-lg">Client Satisfaction</div>
              </div>
              <div className="text-center bg-indigo-500/20 p-6 rounded-2xl border border-indigo-400/40">
                <div className="text-5xl font-bold text-indigo-300 mb-2">2.3x</div>
                <div className="text-gray-100 font-bold text-lg">Average ROI</div>
              </div>
              <div className="text-center bg-pink-500/20 p-6 rounded-2xl border border-pink-400/40">
                <div className="text-5xl font-bold text-pink-300 mb-2">48hrs</div>
                <div className="text-gray-100 font-bold text-lg">Average Setup Time</div>
              </div>
              <div className="text-center bg-purple-500/20 p-6 rounded-2xl border border-purple-400/40">
                <div className="text-5xl font-bold text-purple-300 mb-2">99.9%</div>
                <div className="text-gray-100 font-bold text-lg">System Uptime</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
