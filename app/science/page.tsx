"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useState } from "react";
import { Dna, Scissors, Eye, FlaskConical } from "lucide-react";

const mechanisms = [
  {
    id: "autophagy",
    icon: Dna,
    title: "Autophagy Pathway",
    description:
      "Autophagy is a conserved catabolic process wherein cellular components are engulfed by double-membrane vesicles (autophagosomes) and delivered to lysosomes for degradation. Pathogens have co-opted this machinery for nutrient acquisition and immune evasion.",
    details: [
      "Initiation by ULK1 complex activation",
      "Phagophore nucleation at ER membranes",
      "ATG8 lipidation via ATG4 cleavage",
      "Autolysosome formation and cargo degradation",
    ],
  },
  {
    id: "atg4",
    icon: Scissors,
    title: "ATG4 Cleavage Mechanism",
    description:
      "ATG4 cysteine proteases perform essential priming and deconjugation of ATG8 proteins. This cleavage exposes a C-terminal glycine required for subsequent lipidation, making ATG4 an attractive drug target.",
    details: [
      "Cysteine protease active site",
      "Recognition of ATG8 C-terminus",
      "Priming cleavage exposes Glycine",
      "Delipidation recycles ATG8-PE",
    ],
  },
  {
    id: "bret",
    icon: Eye,
    title: "BRET Assay Mechanism",
    description:
      "Bioluminescence Resonance Energy Transfer (BRET) assays measure real-time protein interactions by coupling a luciferase donor to a fluorescent acceptor. Binding events modulate the energy transfer efficiency, producing quantifiable spectral shifts.",
    details: [
      "NanoLuc donor emission at 460nm",
      "YFP acceptor excitation overlap",
      "Energy transfer upon proximity",
      "Ratiometric BRET signal quantification",
    ],
  },
  {
    id: "docking",
    icon: FlaskConical,
    title: "Protein-Ligand Docking",
    description:
      "Molecular docking predicts the preferred orientation of small molecules within protein binding sites. Our pipeline integrates physics-based scoring with machine learning to identify high-affinity inhibitors of ATG4 proteases.",
    details: [
      "Binding site identification",
      "Conformational sampling",
      "Scoring function optimization",
      "Molecular dynamics validation",
    ],
  },
];

export default function SciencePage() {
  const [activeMech, setActiveMech] = useState("autophagy");
  const mechanism = mechanisms.find((m) => m.id === activeMech)!;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
              Science
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Next-Generation{" "}
              <span className="text-gradient">Molecular Research</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              Interactive exploration of the molecular mechanisms underpinning our
              therapeutic platform.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive mechanisms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <ScrollReveal className="lg:col-span-1">
              <div className="space-y-3">
                {mechanisms.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMech(m.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeMech === m.id
                        ? "glass border-cyan/30 glow-cyan"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          activeMech === m.id ? "bg-cyan/10" : "bg-white/5"
                        }`}
                      >
                        <m.icon
                          className={`w-5 h-5 ${
                            activeMech === m.id ? "text-cyan" : "text-ivory/40"
                          }`}
                        />
                      </div>
                      <div>
                        <div
                          className={`font-semibold ${
                            activeMech === m.id ? "text-ivory" : "text-ivory/60"
                          }`}
                        >
                          {m.title}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal className="lg:col-span-2" delay={0.1}>
              <motion.div
                key={mechanism.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-8 md:p-12 h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <mechanism.icon className="w-7 h-7 text-cyan" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold">{mechanism.title}</h2>
                </div>

                <p className="text-ivory/70 leading-relaxed mb-8 text-lg">
                  {mechanism.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {mechanism.details.map((detail, i) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5"
                    >
                      <div className="w-8 h-8 rounded-full bg-cyan/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-mono text-cyan">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-sm text-ivory/80">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Molecular visualization placeholder */}
      <section className="py-24 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Molecular Interaction Visualization
            </h2>
            <p className="text-ivory/60 max-w-2xl mx-auto">
              Hover over molecular components to explore binding interactions
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-3xl p-12 flex items-center justify-center min-h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-emerald/5" />
              <div className="relative z-10 flex items-center gap-16">
                {/* Protein */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan/20 to-cyan/5 border border-cyan/20 flex items-center justify-center cursor-pointer"
                >
                  <Dna className="w-12 h-12 text-cyan" />
                </motion.div>

                {/* Interaction zone */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-24 h-px bg-gradient-to-r from-cyan to-emerald" />
                  <span className="text-xs font-mono text-cyan">BINDING</span>
                  <div className="w-24 h-px bg-gradient-to-r from-emerald to-cyan" />
                </div>

                {/* Ligand */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald/20 to-emerald/5 border border-emerald/20 flex items-center justify-center cursor-pointer"
                >
                  <FlaskConical className="w-8 h-8 text-emerald" />
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
