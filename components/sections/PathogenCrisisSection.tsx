"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { TrendingUp, Sprout, ThermometerSun, ShieldAlert, Wheat } from "lucide-react";

const metrics = [
  { icon: Wheat, value: "$220B", label: "Annual Crop Losses", desc: "Due to fungal pathogens globally" },
  { icon: ShieldAlert, value: "20-40%", label: "Yield Reduction", desc: "In major cereal crops annually" },
  { icon: ThermometerSun, value: "+3°C", label: "Climate Amplification", desc: "Expanding pathogen range" },
  { icon: Sprout, value: "600M", label: "People at Risk", desc: "From plant-based food insecurity" },
];

export default function PathogenCrisisSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <span className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
            The Challenge
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            The Global Pathogen Crisis
          </h2>
          <p className="text-ivory/60 text-lg max-w-2xl mx-auto">
            Fungal and parasitic pathogens threaten global food security, human health, and
            economic stability at an unprecedented scale.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass rounded-2xl p-8 h-full glow-cyan hover:glow-emerald transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                  <metric.icon className="w-6 h-6 text-cyan" />
                </div>
                <div className="text-4xl font-heading font-bold text-gradient mb-2">
                  {metric.value}
                </div>
                <div className="text-ivory font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-ivory/50">{metric.desc}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Animated map visualization placeholder */}
        <ScrollReveal className="mt-20">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-emerald/5" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Expanding Pathogen Geography
                </h3>
                <p className="text-ivory/60 mb-6 leading-relaxed">
                  Climate change is accelerating the spread of fungal pathogens into previously
                  unaffected regions. Rising temperatures expand the viable range for
                  devastating crop diseases, creating new hotspots of agricultural vulnerability.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Wheat rust expansion", value: 78 },
                    { label: "Rice blast severity", value: 65 },
                    { label: "Corn ear rot incidence", value: 52 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-ivory/80">{item.label}</span>
                        <span className="text-cyan">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
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
              <div className="relative h-80 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-cyan/20 animate-pulse-glow" />
                  <div className="absolute w-48 h-48 rounded-full border border-emerald/20 animate-pulse-glow" style={{ animationDelay: "1s" }} />
                  <div className="absolute w-32 h-32 rounded-full border border-cyan/30 animate-pulse-glow" style={{ animationDelay: "2s" }} />
                </div>
                <TrendingUp className="w-16 h-16 text-cyan relative z-10" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
