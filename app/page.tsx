import ParticleBackground from "@/components/animations/ParticleBackground";
import HeroSection from "@/components/sections/HeroSection";
import PathogenCrisisSection from "@/components/sections/PathogenCrisisSection";
import WhyTraditionalFailsSection from "@/components/sections/WhyTraditionalFailsSection";
import DiscoveryEngineSection from "@/components/sections/DiscoveryEngineSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Dna } from "lucide-react";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <HeroSection />
      <PathogenCrisisSection />
      <WhyTraditionalFailsSection />
      <DiscoveryEngineSection />

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-bio/20 to-midnight" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <Dna className="w-16 h-16 text-cyan mx-auto mb-8" />
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Build the Future of{" "}
              <span className="text-gradient">Molecular Intelligence</span>
            </h2>
            <p className="text-ivory/60 text-lg mb-10 max-w-2xl mx-auto">
              Join us in developing programmable pathogen defense systems that will
              reshape global health and food security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-cyan text-midnight font-semibold rounded-xl flex items-center gap-2 hover:shadow-lg hover:shadow-cyan/20 transition-all"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/careers"
                className="px-8 py-4 glass text-ivory font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                View Careers
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
