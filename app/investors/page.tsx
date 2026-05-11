"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { TrendingUp, Shield, Globe, Lock, Zap, BarChart3 } from "lucide-react";

const metrics = [
  { icon: Globe, label: "Addressable Market", value: "$45B", sub: "Crop protection & animal health" },
  { icon: TrendingUp, label: "CAGR", value: "8.4%", sub: "Biotech therapeutics segment" },
  { icon: Shield, label: "Patent Portfolio", value: "4", sub: "Families filed globally" },
  { icon: Lock, label: "Platform Defensibility", value: "High", sub: "Multi-layer moat" },
];

const opportunities = [
  {
    icon: Zap,
    title: "Market Opportunity",
    description:
      "The global fungicide market exceeds $20B annually, with resistance rendering 40% of existing chemistries obsolete within a decade. Our molecular therapeutics address this $8B+ replacement market.",
  },
  {
    icon: BarChart3,
    title: "Platform Scalability",
    description:
      "Our biosensor and AI platform is target-agnostic. Having validated ATG4 as a druggable node, we can rapidly expand to other autophagy regulators and beyond, creating multiple shots on goal.",
  },
  {
    icon: Shield,
    title: "IP Strategy",
    description:
      "We pursue composition-of-matter patents on chemical scaffolds, method-of-use claims on autophagy modulation, and platform IP on biosensor architectures, creating a fortress around our innovations.",
  },
];

export default function InvestorsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-emerald text-sm font-semibold tracking-wider uppercase mb-4 block">
              Investors
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Deep-Tech Biotech{" "}
              <span className="text-gradient">Unicorn Potential</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              INNOCORELIX represents a generational opportunity at the intersection of
              synthetic biology, AI, and global pathogen defense.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <ScrollReveal key={metric.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-8 text-center h-full hover:glow-cyan transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-gradient mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-ivory mb-1">{metric.label}</div>
                  <div className="text-xs text-ivory/40">{metric.sub}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-24 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Investment Thesis
            </h2>
            <p className="text-ivory/60 max-w-2xl mx-auto">
              Why INNOCORELIX represents a compelling deep-tech investment
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opp, i) => (
              <ScrollReveal key={opp.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-8 h-full border-t-4 border-cyan hover:glow-cyan transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                    <opp.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4">{opp.title}</h3>
                  <p className="text-ivory/60 leading-relaxed text-sm">{opp.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth projection */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Growth Projection
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                {[
                  { year: "2024", label: "Platform Validation", value: 15, milestones: ["Series A", "4 programs"] },
                  { year: "2025", label: "Lead Optimization", value: 35, milestones: ["First IND", "Partnerships"] },
                  { year: "2026", label: "Clinical Entry", value: 55, milestones: ["Phase I", "Platform expansion"] },
                  { year: "2027", label: "Clinical Proof", value: 75, milestones: ["Phase II", "Global filings"] },
                  { year: "2028", label: "Commercialization", value: 100, milestones: ["Product launch", "Series C"] },
                ].map((item) => (
                  <div key={item.year}>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-mono text-cyan w-12">{item.year}</span>
                      <span className="text-sm text-ivory/60 flex-1">{item.label}</span>
                      <div className="flex gap-2">
                        {item.milestones.map((m) => (
                          <span key={m} className="text-xs px-2 py-1 rounded-full bg-white/5 text-ivory/40">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden ml-16">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan to-emerald rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
