import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import { ProjectShowcase } from "@/components/project-showcase";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactCTA } from "@/components/contact-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProjectShowcase />
        <SkillsSection />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
