"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { X, Check } from "lucide-react";

const traditional = [
  "Broad-spectrum toxicity affecting non-target organisms",
  "Rapid pathogen resistance development",
  "Low precision molecular targeting",
  "Environmental persistence and bioaccumulation",
  "Increasing regulatory restrictions",
];

const molecular = [
  "Precision molecular targeting of pathogen-specific pathways",
  "Autophagy disruption mechanisms",
  "Synthetic biosensor-guided optimization",
  "Reduced off-target effects",
  "Programmable therapeutic modalities",
];

export default function WhyTraditionalFailsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-graphite/30">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <span className="text-crimson text-sm font-semibold tracking-wider uppercase mb-4 block">
            The Paradigm Shift
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Why Traditional Fungicides Fail
          </h2>
          <p className="text-ivory/60 text-lg max-w-2xl mx-auto">
            Decades of chemical fungicide overuse have created a crisis of resistance and
            environmental harm. Molecular precision offers a fundamentally different approach.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-2xl p-8 border-l-4 border-crimson h-full">
              <h3 className="font-heading text-2xl font-bold text-crimson mb-6">
                Traditional Chemical Fungicides
              </h3>
              <ul className="space-y-4">
                {traditional.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-crimson mt-0.5 shrink-0" />
                    <span className="text-ivory/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass rounded-2xl p-8 border-l-4 border-emerald h-full glow-emerald">
              <h3 className="font-heading text-2xl font-bold text-emerald mb-6">
                INNOCORELIX Molecular Therapeutics
              </h3>
              <ul className="space-y-4">
                {molecular.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
                    <span className="text-ivory/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
