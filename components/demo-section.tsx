"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ExternalLink, Volume2, Pause, Phone, Calendar, MessageSquare, Clock } from "lucide-react"
import { useState, useRef } from "react"

const voiceSamples = [
  {
    id: 1,
    name: "Real Estate Agent",
    description: "Professional and persuasive voice for property inquiries",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758876389/RealEstateAgents_nwtorv.mp3",
    scenario: "Property consultations",
  },
  {
    id: 2,
    name: "Physio Agent",
    description: "Caring and knowledgeable voice for healthcare services",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758876375/Pysio-agent_suqlck.mp3",
    scenario: "Appointment scheduling",
  },
  {
    id: 3,
    name: "Marketing Agency",
    description: "Dynamic and engaging voice for creative services",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758876368/Marketing-Agency_ronynp.mp3",
    scenario: "Client consultations",
  },
  {
    id: 4,
    name: "Legend Physio Voice",
    description: "Expert and reassuring voice for specialized treatments",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1758875710/Legend_Physio_Voice_Agent_dvxr6c.mp3",
    scenario: "Treatment inquiries",
  },
  {
    id: 5,
    name: "Professional Savannah",
    description: "Warm and professional voice for Pysiotherapy business inquiries",
    url: "https://res.cloudinary.com/dij5outes/video/upload/v1757866506/voice1_aazx8x.mp4",
    scenario: "Customer service",
  },
]

const demoFeatures = [
  {
    icon: Phone,
    title: "Call Handling",
    description: "Watch how AI answers calls professionally and routes them appropriately",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "See real-time calendar integration and automatic scheduling",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description: "Experience natural conversation flow and information gathering",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Understand how after-hours calls are handled seamlessly",
  },
]

export function DemoSection() {
  const [playingVoice, setPlayingVoice] = useState<number | null>(null)
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({})

  const handleVoicePlay = (voiceId: number) => {
    // Stop any currently playing audio
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio && !audio.paused) {
        audio.pause()
        audio.currentTime = 0
      }
    })

    const audio = audioRefs.current[voiceId]
    if (audio) {
      if (playingVoice === voiceId) {
        audio.pause()
        audio.currentTime = 0
        setPlayingVoice(null)
      } else {
        audio.play()
        setPlayingVoice(voiceId)
      }
    }
  }

  return (
    <section id="demo" className="py-32 bg-gradient-to-br from-green-950/40 via-teal-950/30 to-green-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Experience Our AI - <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Live Demo & Voice Samples</span>
          </h2>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto text-balance leading-relaxed font-semibold">
            See and hear exactly how our AI receptionist handles real customer interactions. Choose from 5 professional
            voices and watch complete call scenarios from various business types.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Choose Your AI Voice</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {voiceSamples.map((voice) => (
              <Card
                key={voice.id}
                className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-900/40 to-teal-900/30 border-green-400/40 hover:border-green-400/60 hover:shadow-green-500/30 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <button
                      onClick={() => handleVoicePlay(voice.id)}
                      className="w-full h-full rounded-full flex items-center justify-center hover:bg-green-500/40 transition-colors"
                    >
                      {playingVoice === voice.id ? (
                        <Pause className="h-8 w-8 text-green-400" />
                      ) : (
                        <Volume2 className="h-8 w-8 text-green-400" />
                      )}
                    </button>
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-white">{voice.name}</h4>
                  <p className="text-sm text-gray-100 mb-4 font-semibold">{voice.description}</p>
                  <div className="text-sm text-green-300 font-bold bg-green-500/30 px-4 py-2 rounded-xl border border-green-400/40">
                    {voice.scenario}
                  </div>

                  <audio
                    ref={(el) => (audioRefs.current[voice.id] = el)}
                    onEnded={() => setPlayingVoice(null)}
                    preload="metadata"
                  >
                    <source src={voice.url} type="audio/mpeg" />
                    <source src={voice.url} type="audio/mp4" />
                    <source src={voice.url} type="audio/aac" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">What You'll See in the Demo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center bg-gradient-to-br from-teal-900/40 to-green-900/30 border-teal-400/40 hover:shadow-xl transition-all duration-300 hover:border-teal-400/60 hover:shadow-teal-500/30 hover:scale-105"
              >
                <div className="w-16 h-16 bg-teal-500/30 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="h-8 w-8 text-teal-400" />
                </div>
                <h4 className="font-bold mb-4 text-white text-xl">{feature.title}</h4>
                <p className="text-base text-gray-100 font-semibold">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="max-w-5xl mx-auto p-16 bg-gradient-to-br from-green-900/50 to-emerald-900/40 border-green-400/50 shadow-2xl">
          <div className="text-center">
            <div className="w-32 h-32 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-10 animate-pulse-glow shadow-xl">
              <Play className="h-16 w-16 text-green-400" />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">Complete System Walkthrough</h3>
            <p className="text-2xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed font-semibold">
              Watch our AI handle complete customer interactions from initial call to appointment booking. See the admin
              dashboard, real-time analytics, and integration with your business management system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-xl px-12 py-7 font-bold shadow-2xl rounded-xl"
                onClick={() =>
                  window.open("https://excalidraw.com/#json=EqjgvRHBRK69-yXCGVYyR,GWI1VxddOIn8yetwBGK4Wg", "_blank")
                }
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Full System Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-7 border-2 border-green-400/40 hover:bg-green-500/20 bg-green-500/10 text-white font-bold rounded-xl"
                onClick={() => window.open("https://calendly.com/genuinestack/new-meeting", "_blank")}
              >
                <ExternalLink className="mr-3 h-6 w-6" />
                Schedule Personal Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-3 p-6 bg-green-500/20 rounded-2xl border border-green-400/40">
                <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg" />
                <span className="font-bold text-white text-lg">15-minute comprehensive walkthrough</span>
                <span className="text-gray-100 text-base font-semibold">Complete system overview</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-teal-500/20 rounded-2xl border border-teal-400/40">
                <div className="w-4 h-4 bg-teal-400 rounded-full shadow-lg" />
                <span className="font-bold text-white text-lg">No signup or installation required</span>
                <span className="text-gray-100 text-base font-semibold">Instant access</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-green-500/20 rounded-2xl border border-green-400/40">
                <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg" />
                <span className="font-bold text-white text-lg">Real business scenarios</span>
                <span className="text-gray-100 text-base font-semibold">Industry-specific examples</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
