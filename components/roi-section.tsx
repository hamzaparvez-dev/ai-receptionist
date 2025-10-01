"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react"

export function ROISection() {
  return (
    <section id="roi" className="py-32 bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-blue-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Return on Investment - <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Real Numbers</span>
          </h2>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto text-balance leading-relaxed font-semibold">
            See the concrete financial impact our AI receptionist delivers to businesses. These numbers are based on
            real client data and industry benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="p-10 text-center bg-gradient-to-br from-green-900/40 to-emerald-900/30 border-green-400/40 shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105">
            <TrendingUp className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <div className="text-5xl font-bold text-green-300 mb-3">40%</div>
            <div className="text-white font-bold text-xl mb-2">More Bookings</div>
            <div className="text-base text-green-200 mt-2 font-semibold">+$2,000/month average</div>
          </Card>

          <Card className="p-10 text-center bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border-blue-400/40 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
            <DollarSign className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <div className="text-5xl font-bold text-blue-300 mb-3">$2,500</div>
            <div className="text-white font-bold text-xl mb-2">Monthly Savings</div>
            <div className="text-base text-blue-200 mt-2 font-semibold">vs. full-time staff</div>
          </Card>

          <Card className="p-10 text-center bg-gradient-to-br from-yellow-900/40 to-orange-900/30 border-yellow-400/40 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105">
            <Clock className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <div className="text-5xl font-bold text-yellow-300 mb-3">24/7</div>
            <div className="text-white font-bold text-xl mb-2">Availability</div>
            <div className="text-base text-yellow-200 mt-2 font-semibold">Never miss a call</div>
          </Card>

          <Card className="p-10 text-center bg-gradient-to-br from-purple-900/40 to-pink-900/30 border-purple-400/40 shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
            <Users className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <div className="text-5xl font-bold text-purple-300 mb-3">90%</div>
            <div className="text-white font-bold text-xl mb-2">Cost Reduction</div>
            <div className="text-base text-purple-200 mt-2 font-semibold">vs. traditional staffing</div>
          </Card>
        </div>

        <Card className="max-w-5xl mx-auto p-16 bg-gradient-to-br from-blue-900/50 to-green-900/40 border-blue-400/50 shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">12-Month Financial Impact</h3>

          <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-2 border-green-400/50 rounded-2xl p-10 mb-12 text-center shadow-xl">
            <div className="text-6xl md:text-7xl font-bold text-green-300 mb-4">$98,000</div>
            <div className="text-3xl text-white font-bold mb-3">Net Annual Benefit</div>
            <div className="text-green-200 font-bold text-xl">ROI: 1,633% • Break-even in 2 months</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-900/40 to-orange-900/30 border-2 border-red-400/40 rounded-2xl p-10 shadow-xl">
              <h4 className="text-2xl font-bold mb-8 text-red-300 text-center">❌ Current Costs (Annual)</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-red-400/30">
                  <span className="text-gray-100 font-semibold text-lg">Reception Staff Salary</span>
                  <span className="font-bold text-red-300 text-xl">$35,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-red-400/30">
                  <span className="text-gray-100 font-semibold text-lg">Benefits & Training</span>
                  <span className="font-bold text-red-300 text-xl">$15,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-red-400/30">
                  <span className="text-gray-100 font-semibold text-lg">Lost Revenue (Missed Calls)</span>
                  <span className="font-bold text-red-300 text-xl">$18,000</span>
                </div>
                <div className="border-t-2 border-red-400/50 pt-6 mt-8">
                  <div className="flex justify-between text-2xl font-bold text-red-200 bg-red-500/20 p-5 rounded-xl">
                    <span>Total Annual Cost</span>
                    <span>$68,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border-2 border-green-400/40 rounded-2xl p-10 shadow-xl">
              <h4 className="text-2xl font-bold mb-8 text-green-300 text-center">
                ✅ With AI Receptionist (Annual)
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-green-400/30">
                  <span className="text-gray-100 font-semibold text-lg">AI Service Cost</span>
                  <span className="font-bold text-white text-xl">$6,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-400/30">
                  <span className="text-gray-100 font-semibold text-lg">Additional Revenue</span>
                  <span className="font-bold text-green-300 text-xl">+$24,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-400/30">
                  <span className="text-gray-100 font-semibold text-lg">Efficiency Gains</span>
                  <span className="font-bold text-green-300 text-xl">+$12,000</span>
                </div>
                <div className="border-t-2 border-green-400/50 pt-6 mt-8">
                  <div className="flex justify-between text-2xl font-bold text-green-200 bg-green-500/20 p-5 rounded-xl">
                    <span>Net Annual Benefit</span>
                    <span>+$98,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-blue-500/30 to-green-500/30 border-2 border-blue-400/50 rounded-2xl p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-blue-500/20 p-6 rounded-2xl border border-blue-400/40">
                <div className="text-5xl font-bold text-blue-300 mb-3">1,633%</div>
                <div className="text-white font-bold text-xl">Return on Investment</div>
              </div>
              <div className="bg-green-500/20 p-6 rounded-2xl border border-green-400/40">
                <div className="text-5xl font-bold text-green-300 mb-3">2 Months</div>
                <div className="text-white font-bold text-xl">Break-even Period</div>
              </div>
              <div className="bg-yellow-500/20 p-6 rounded-2xl border border-yellow-400/40">
                <div className="text-5xl font-bold text-yellow-300 mb-3">$8,167</div>
                <div className="text-white font-bold text-xl">Monthly Net Benefit</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
