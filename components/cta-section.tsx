"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Phone, CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section id="cta" className="py-32 bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-blue-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="max-w-4xl mx-auto p-16 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-400/40 glass-card shadow-2xl">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Ready to Transform <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Your Business?</span>
            </h2>
            <p className="text-2xl text-gray-100 mb-12 max-w-3xl mx-auto text-balance font-medium leading-relaxed">
              Join hundreds of businesses that have revolutionized their operations with our AI receptionist. Start your
              transformation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl px-12 py-7 animate-pulse-glow font-bold shadow-2xl rounded-xl"
                onClick={() => window.open("https://calendly.com/genuinestack/new-meeting", "_blank")}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-green-400/40 hover:bg-green-500/20 bg-green-500/10 text-white font-semibold hover:border-green-400/60 transition-all"
                onClick={() => window.open("tel:+12076068437", "_blank")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now: (207) 606-8437
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3 bg-green-500/20 px-6 py-4 rounded-xl border border-green-400/30">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="font-bold text-white text-lg">30-day free trial</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-blue-500/20 px-6 py-4 rounded-xl border border-blue-400/30">
                <CheckCircle className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-white text-lg">No setup fees</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-purple-500/20 px-6 py-4 rounded-xl border border-purple-400/30">
                <CheckCircle className="h-6 w-6 text-purple-400" />
                <span className="font-bold text-white text-lg">Cancel anytime</span>
              </div>
            </div>

            <div className="border-t border-blue-400/30 pt-10 mt-8">
              <p className="text-gray-100 mb-4 font-semibold text-lg">
                Powered by{" "}
                <a
                  href="https://genuinestack.com/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 hover:underline font-bold"
                  rel="noreferrer"
                >
                  GenuineStack
                </a>{" "}
                - Leading AI Automation Solutions
              </p>
              <p className="text-base text-gray-200 font-semibold">Trusted by 500+ businesses across North America</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
