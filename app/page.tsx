import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { SolutionSection } from "@/components/solution-section"
import { DemoSection } from "@/components/demo-section"
import { WorkflowSection } from "@/components/workflow-section"
import { ROISection } from "@/components/roi-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TechnologySection } from "@/components/technology-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"

export default function AIReceptionistProposal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <main>
          <HeroSection />
          <ProblemsSection />
          <SolutionSection />
          <DemoSection />
          <WorkflowSection />
          <TechnologySection />
          <ROISection />
          <BenefitsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
      </div>
    </div>
  )
}
