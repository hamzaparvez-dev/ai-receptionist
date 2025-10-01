"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const workflowSteps = [
  {
    step: "1",
    title: "Patient Calls",
    description: '"Hi, I need to book a physiotherapy appointment for my back pain"',
    type: "patient",
  },
  {
    step: "2",
    title: "AI Responds",
    description:
      "\"I'd be happy to help you book an appointment. Can you tell me about your back pain and when you'd prefer to come in?\"",
    type: "ai",
  },
  {
    step: "3",
    title: "AI Qualifies",
    description: "Asks about injury type, insurance, urgency, and availability preferences",
    type: "process",
  },
  {
    step: "4",
    title: "Smart Scheduling",
    description:
      '"I have Thursday at 2 PM with Dr. Smith who specializes in back injuries. Shall I book that for you?"',
    type: "ai",
  },
  {
    step: "5",
    title: "Confirmation",
    description: "Books appointment, sends confirmation text/email, adds to your calendar system",
    type: "process",
  },
  {
    step: "6",
    title: "Follow-up",
    description: "Sends appointment reminders and intake forms before visit",
    type: "automation",
  },
]

export function WorkflowSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-purple-950/30 via-indigo-950/20 to-purple-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            How It Works - <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Step by Step</span>
          </h2>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto text-balance font-semibold leading-relaxed">
            Follow a real patient interaction from initial call to completed booking. See how our AI handles complex
            scenarios with human-like intelligence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workflowSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card
                className={`p-10 mb-8 shadow-xl ${
                  step.type === "patient"
                    ? "bg-gradient-to-r from-blue-900/40 to-blue-800/30 border-blue-400/40"
                    : step.type === "ai"
                      ? "bg-gradient-to-r from-purple-900/40 to-purple-800/30 border-purple-400/40"
                      : step.type === "process"
                        ? "bg-gradient-to-r from-indigo-900/40 to-indigo-800/30 border-indigo-400/40"
                        : "bg-gradient-to-r from-pink-900/40 to-pink-800/30 border-pink-400/40"
                }`}
              >
                <div className="flex items-start space-x-8">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg ${
                      step.type === "patient"
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                        : step.type === "ai"
                          ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white"
                          : step.type === "process"
                            ? "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white"
                            : "bg-gradient-to-br from-pink-500 to-pink-600 text-white"
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-100 text-lg font-semibold leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>

              {index < workflowSteps.length - 1 && (
                <div className="flex justify-center mb-8">
                  <ArrowRight className="h-8 w-8 text-purple-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
