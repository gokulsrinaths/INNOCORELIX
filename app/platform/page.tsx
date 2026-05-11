"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { BarChart3, Layers, Workflow, Database, Radar, Target } from "lucide-react";

const modules = [
  {
    icon: Layers,
    title: "Assay Orchestration",
    description: "Centralized command interface managing multi-modal screening campaigns",
    status: "Live",
    throughput: "50K compounds/day",
  },
  {
    icon: Workflow,
    title: "HTS Simulation",
    description: "Virtual high-throughput screening with physics-based docking predictions",
    status: "Live",
    throughput: "1M compounds/hour",
  },
  {
    icon: Database,
    title: "Molecular Ranking Engine",
    description: "AI-driven prioritization using multi-parameter optimization algorithms",
    status: "Live",
    throughput: "Real-time",
  },
  {
    icon: Radar,
    title: "Binding Affinity Maps",
    description: "Thermodynamic landscape visualization for target-ligand interactions",
    status: "Beta",
    throughput: "10K interactions/day",
  },
  {
    icon: BarChart3,
    title: "Pathogen Suppression Metrics",
    description: "Live dashboard tracking efficacy across fungal and parasitic panels",
    status: "Live",
    throughput: "Continuous",
  },
  {
    icon: Target,
    title: "Target Validation Suite",
    description: "Integrated biochemical and cellular validation workflows",
    status: "Live",
    throughput: "100 targets/week",
  },
];

export default function PlatformPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
              Platform
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              An Operating System for{" "}
              <span className="text-gradient">Molecular Discovery</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              Our discovery platform integrates synthetic biology, automated screening, and
              artificial intelligence into a unified molecular intelligence system.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Dashboard-style modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, i) => (
              <ScrollReveal key={module.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-cyan/30 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <module.icon className="w-5 h-5 text-cyan" />
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        module.status === "Live"
                          ? "bg-emerald/10 text-emerald"
                          : "bg-amber/10 text-amber"
                      }`}
                    >
                      {module.status}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{module.title}</h3>
                  <p className="text-sm text-ivory/50 mb-4">{module.description}</p>
                  <div className="text-xs font-mono text-cyan">{module.throughput}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Command center visualization */}
      <section className="py-24 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Discovery Command Center
            </h2>
            <p className="text-ivory/60 max-w-2xl mx-auto">
              Real-time visibility into every stage of the therapeutic pipeline
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-3xl p-8 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Active Screens", value: "14", change: "+3" },
                  { label: "Compounds Tested", value: "2.4M", change: "+180K" },
                  { label: "Hit Rate", value: "0.8%", change: "+0.12%" },
                  { label: "Avg Processing", value: "4.2s", change: "-0.8s" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-ivory/40 mt-1">{stat.label}</div>
                    <div className="text-xs text-emerald mt-1">{stat.change} this week</div>
                  </div>
                ))}
              </div>

              {/* Simulated pipeline flow */}
              <div className="relative">
                <div className="flex justify-between items-center mb-4">
                  {["Screening", "Hit Validation", "Lead Optimization", "Preclinical"].map(
                    (stage, i) => (
                      <div key={stage} className="text-center flex-1">
                        <div
                          className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                            i < 3 ? "bg-emerald" : "bg-ivory/20"
                          }`}
                        />
                        <div className="text-xs text-ivory/60">{stage}</div>
                      </div>
                    )
                  )}
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan to-emerald rounded-full"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
