"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Activity, Cpu, Network, Scan, Brain, Shield } from "lucide-react";

const technologies = [
  {
    icon: Activity,
    title: "BRET Biosensor Architecture",
    subtitle: "Real-time molecular interaction monitoring",
    description:
      "Our proprietary Bioluminescence Resonance Energy Transfer (BRET) biosensors enable quantitative, real-time monitoring of protein-protein and protein-ligand interactions with sub-nanometer resolution. These synthetic sensors report on molecular binding events through spectral shifts, providing unprecedented insight into dynamic biological processes.",
    stats: [
      { label: "Resolution", value: "< 1nm" },
      { label: "Throughput", value: "50K/day" },
      { label: "Sensitivity", value: "pM range" },
    ],
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "ATG4/ATG8 Targeting",
    subtitle: "Autophagy modulation for pathogen suppression",
    description:
      "We pioneer selective inhibition of ATG4 proteases, the gatekeepers of autophagy initiation. By modulating ATG4-mediated cleavage of ATG8 family proteins, we disrupt the autophagic machinery that fungal and parasitic pathogens exploit for survival, virulence, and immune evasion.",
    stats: [
      { label: "Selectivity", value: ">100x" },
      { label: "IC50", value: "12 nM" },
      { label: "Targets", value: "4 ATG4s" },
    ],
    color: "emerald",
  },
  {
    icon: Network,
    title: "High-Throughput Screening Engine",
    subtitle: "Automated molecular discovery at scale",
    description:
      "Our integrated HTS platform combines acoustic dispensing, automated imaging, and machine learning to screen 50,000+ compounds daily. The system generates multi-dimensional activity profiles, enabling rapid prioritization of candidates with optimal target engagement and selectivity.",
    stats: [
      { label: "Daily Screens", value: "50K+" },
      { label: "Precision", value: "99.7%" },
      { label: "Z'-factor", value: ">0.8" },
    ],
    color: "cyan",
  },
  {
    icon: Scan,
    title: "Molecular Binding Analysis",
    subtitle: "Thermodynamic and kinetic characterization",
    description:
      "We employ surface plasmon resonance, isothermal titration calorimetry, and microscale thermophoresis to characterize binding interactions with exquisite precision. This multi-modal approach reveals binding kinetics, thermodynamic signatures, and allosteric mechanisms.",
    stats: [
      { label: "Kd range", value: "fM - mM" },
      { label: "Techniques", value: "6+" },
      { label: "Throughput", value: "384-well" },
    ],
    color: "emerald",
  },
  {
    icon: Brain,
    title: "AI-Assisted Molecular Prioritization",
    subtitle: "Machine learning for candidate selection",
    description:
      "Our neural network models integrate chemical structure, target affinity, ADMET predictions, and pathogen genomic data to prioritize candidates with the highest probability of clinical success. The system continuously learns from experimental outcomes, improving prediction accuracy over time.",
    stats: [
      { label: "Models", value: "12" },
      { label: "Accuracy", value: "94%" },
      { label: "Speedup", value: "100x" },
    ],
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Pathogenicity Suppression Systems",
    subtitle: "Multi-layered therapeutic intervention",
    description:
      "We design therapeutics that suppress pathogenicity through multiple concurrent mechanisms: autophagy disruption, ROS modulation, cell wall integrity interference, and secreted virulence factor inhibition. This multi-pronged approach minimizes resistance development.",
    stats: [
      { label: "Mechanisms", value: "4+" },
      { label: "Resistance", value: "<0.1%" },
      { label: "Efficacy", value: "99.9%" },
    ],
    color: "emerald",
  },
];

export default function TechnologyPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
              Technology
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Molecular Intelligence{" "}
              <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              Six integrated technology pillars power our discovery engine, from synthetic
              biosensor design to AI-assisted therapeutic prioritization.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {technologies.map((tech, i) => (
              <ScrollReveal key={tech.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`glass rounded-2xl p-8 h-full border-l-4 ${
                    tech.color === "cyan" ? "border-cyan" : "border-emerald"
                  } hover:glow-${tech.color} transition-all duration-500`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${
                        tech.color === "cyan" ? "bg-cyan/10" : "bg-emerald/10"
                      } flex items-center justify-center shrink-0`}
                    >
                      <tech.icon
                        className={`w-7 h-7 ${
                          tech.color === "cyan" ? "text-cyan" : "text-emerald"
                        }`}
                      />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-bold">{tech.title}</h2>
                      <p className="text-sm text-ivory/50">{tech.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-ivory/70 leading-relaxed mb-8">{tech.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    {tech.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-3 rounded-xl bg-white/5">
                        <div
                          className={`text-xl font-heading font-bold ${
                            tech.color === "cyan" ? "text-cyan" : "text-emerald"
                          }`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-ivory/40 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive molecular diagram section */}
      <section className="py-24 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Biosensor Architecture
            </h2>
            <p className="text-ivory/60 max-w-2xl mx-auto">
              Real-time molecular sensing through resonance energy transfer
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-3xl p-8 md:p-16 relative overflow-hidden">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <div className="w-12 h-12 rounded-full bg-cyan/20" />
                  </div>
                  <h3 className="font-semibold mb-2">Donor Luciferase</h3>
                  <p className="text-sm text-ivory/50">NanoLuc emission at 460nm</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-full h-px bg-gradient-to-r from-cyan/50 to-emerald/50 mb-4" />
                  <div className="text-xs font-mono text-cyan mb-4">ENERGY TRANSFER</div>
                  <div className="w-16 h-16 rounded-full border-2 border-cyan/30 flex items-center justify-center animate-spin-slow">
                    <div className="w-2 h-2 rounded-full bg-cyan" />
                  </div>
                  <div className="text-xs font-mono text-emerald mt-4">BRET RATIO</div>
                  <div className="w-full h-px bg-gradient-to-r from-emerald/50 to-cyan/50 mt-4" />
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4 animate-pulse-glow" style={{ animationDelay: "1s" }}>
                    <div className="w-12 h-12 rounded-full bg-emerald/20" />
                  </div>
                  <h3 className="font-semibold mb-2">Acceptor fluorophore</h3>
                  <p className="text-sm text-ivory/50">YFP emission at 530nm</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
