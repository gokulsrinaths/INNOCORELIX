"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Search, FlaskConical, Beaker, Microscope, Syringe } from "lucide-react";

const stages = [
  { icon: Search, name: "Discovery", description: "Target identification & screening" },
  { icon: FlaskConical, name: "Validation", description: "Hit confirmation & MOA" },
  { icon: Beaker, name: "Optimization", description: "SAR & lead optimization" },
  { icon: Microscope, name: "Translational Research", description: "In vivo efficacy" },
  { icon: Syringe, name: "Preclinical Development", description: "GLP tox & IND-enabling" },
];

const programs = [
  {
    id: "ICX-001",
    name: "Novel ATG4 Inhibitors",
    indication: "Crop fungal pathogens",
    stage: "Lead Optimization",
    stageIdx: 2,
    color: "cyan",
  },
  {
    id: "ICX-002",
    name: "Autophagy Modulator Program",
    indication: "Broad-spectrum antifungal",
    stage: "Hit Validation",
    stageIdx: 1,
    color: "emerald",
  },
  {
    id: "ICX-003",
    name: "Antiparasitic Therapeutics",
    indication: "Protozoan infections",
    stage: "Discovery",
    stageIdx: 0,
    color: "cyan",
  },
  {
    id: "ICX-004",
    name: "Synthetic Nanosensors",
    indication: "Diagnostic platform",
    stage: "Translational Research",
    stageIdx: 3,
    color: "emerald",
  },
  {
    id: "ICX-005",
    name: "Next-Gen Fungicides",
    indication: "Oomycete pathogens",
    stage: "Discovery",
    stageIdx: 0,
    color: "cyan",
  },
];

export default function PipelinePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-emerald text-sm font-semibold tracking-wider uppercase mb-4 block">
              Pipeline
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Therapeutic{" "}
              <span className="text-gradient">Pipeline</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              Five active programs spanning antifungal and antiparasitic therapeutics,
              from discovery through preclinical development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="glass rounded-3xl p-8 md:p-12">
              {/* Stage labels */}
              <div className="grid grid-cols-5 gap-2 mb-12">
                {stages.map((stage, i) => (
                  <div key={stage.name} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3">
                      <stage.icon className="w-6 h-6 text-cyan" />
                    </div>
                    <div className="text-sm font-semibold text-ivory">{stage.name}</div>
                    <div className="text-xs text-ivory/40">{stage.description}</div>
                  </div>
                ))}
              </div>

              {/* Progress bars for each program */}
              <div className="space-y-6">
                {programs.map((program, i) => (
                  <ScrollReveal key={program.id} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="glass rounded-xl p-6 border border-white/5 hover:border-cyan/20 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-ivory/40">{program.id}</span>
                          <h3 className="font-heading text-lg font-bold">{program.name}</h3>
                        </div>
                        <div className="md:ml-auto flex items-center gap-4">
                          <span className="text-sm text-ivory/60">{program.indication}</span>
                          <span
                            className={`text-xs px-3 py-1 rounded-full font-medium ${
                              program.color === "cyan"
                                ? "bg-cyan/10 text-cyan"
                                : "bg-emerald/10 text-emerald"
                            }`}
                          >
                            {program.stage}
                          </span>
                        </div>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${((program.stageIdx + 1) / stages.length) * 100}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                          className={`h-full rounded-full ${
                            program.color === "cyan"
                              ? "bg-gradient-to-r from-cyan to-cyan/50"
                              : "bg-gradient-to-r from-emerald to-emerald/50"
                          }`}
                        />
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
