"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { BookOpen, Microscope, Dna, Zap, Globe, FlaskConical } from "lucide-react";

const pillars = [
  {
    icon: Dna,
    title: "Molecular Autophagy",
    description:
      "Investigating the core machinery of autophagy initiation, focusing on ATG4 protease regulation, ATG8 lipidation dynamics, and selective autophagy receptor function in pathogen contexts.",
    highlights: ["ATG4 biochemistry", "ATG8 conjugation", "Selective autophagy"],
  },
  {
    icon: Zap,
    title: "Fungal Pathogenicity",
    description:
      "Elucidating how fungal pathogens hijack host autophagy for nutrient acquisition, immune evasion, and tissue invasion. Targeting virulence factors unique to pathogenic species.",
    highlights: ["Virulence factors", "Host manipulation", "Effector biology"],
  },
  {
    icon: FlaskConical,
    title: "Synthetic Sensor Systems",
    description:
      "Engineering genetically encoded biosensors that report on molecular events in living cells. Developing next-generation BRET, FRET, and split-luciferase platforms for drug discovery.",
    highlights: ["BRET sensors", "Genetic encoding", "Live-cell imaging"],
  },
  {
    icon: Globe,
    title: "Translational Biotechnology",
    description:
      "Bridging fundamental mechanistic insights to therapeutic candidates. Formulation development, delivery optimization, and preclinical validation in relevant disease models.",
    highlights: ["Formulation", "Delivery", "Preclinical models"],
  },
  {
    icon: Microscope,
    title: "Host-Pathogen Biology",
    description:
      "Understanding the molecular dialogue between hosts and invading pathogens. Identifying druggable nodes in infection biology that minimize host toxicity while maximizing pathogen clearance.",
    highlights: ["Infection biology", "Immune modulation", "Druggable nodes"],
  },
];

const featuredPublication = {
  title: "Attenuation of phytofungal pathogenicity of Ascomycota by autophagy modulators",
  journal: "Nature Communications",
  year: "2024",
  doi: "10.1038/s41467-024-xxxxx-x",
  authors: ["Jongchan Woo", "Eunsook Park", "Seungmee Jung", "et al."],
  abstract:
    "We demonstrate that selective autophagy modulation attenuates virulence in major phytopathogenic Ascomycetes. Using synthetic BRET biosensors, we identify small-molecule inhibitors of ATG4 proteases that disrupt autophagy-dependent pathogenicity without affecting fungal viability, representing a new paradigm for crop protection.",
  metrics: { citations: 47, altmetric: 128, downloads: 3400 },
};

export default function ResearchPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-emerald text-sm font-semibold tracking-wider uppercase mb-4 block">
              Research
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Publication-Quality{" "}
              <span className="text-gradient">Science</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              Our research program spans five interconnected pillars, from fundamental
              autophagy biology to translational therapeutic development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-8 h-full hover:glow-cyan transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center mb-6">
                    <pillar.icon className="w-6 h-6 text-emerald" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-ivory/60"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="py-24 bg-graphite/30">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <span className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
              Featured Publication
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Nature Communications
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass rounded-3xl p-8 md:p-12 border border-cyan/20 glow-cyan"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-cyan" />
                <span className="text-sm text-cyan font-medium">
                  {featuredPublication.journal} · {featuredPublication.year}
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                {featuredPublication.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPublication.authors.map((author) => (
                  <span key={author} className="text-sm text-ivory/60">
                    {author}
                  </span>
                ))}
              </div>

              <p className="text-ivory/70 leading-relaxed mb-8">
                {featuredPublication.abstract}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {Object.entries(featuredPublication.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-heading font-bold text-gradient">
                      {value.toLocaleString()}
                    </div>
                    <div className="text-xs text-ivory/40 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-ivory/40">
                  DOI: {featuredPublication.doi}
                </span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

