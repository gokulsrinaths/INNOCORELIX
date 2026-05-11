"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Search, Filter, Microscope, Target, Syringe, Rocket } from "lucide-react";

const stages = [
  {
    icon: Search,
    title: "Synthetic Biosensor Generation",
    desc: "Engineering BRET-based sensors for real-time molecular interaction monitoring",
    color: "cyan",
  },
  {
    icon: Filter,
    title: "Molecular Screening",
    desc: "AI-assisted compound prioritization against validated pathogen targets",
    color: "emerald",
  },
  {
    icon: Microscope,
    title: "High-Throughput Assays",
    desc: "Automated screening of 50,000+ compounds with 99.7% precision",
    color: "cyan",
  },
  {
    icon: Target,
    title: "Target Validation",
    desc: "Biochemical and cellular confirmation of mechanism of action",
    color: "emerald",
  },
  {
    icon: Syringe,
    title: "Pathogen Inhibition",
    desc: "In vivo efficacy testing in plant and animal infection models",
    color: "cyan",
  },
  {
    icon: Rocket,
    title: "Translational Deployment",
    desc: "Regulatory strategy and partnership for commercial deployment",
    color: "emerald",
  },
];

export default function DiscoveryEngineSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <span className="text-emerald text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Approach
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Our Discovery Engine
          </h2>
          <p className="text-ivory/60 text-lg max-w-2xl mx-auto">
            An integrated molecular intelligence platform that accelerates therapeutic
            discovery from concept to candidate in record time.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-emerald/30 to-cyan/30 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {stages.map((stage, i) => (
              <ScrollReveal key={stage.title} delay={i * 0.1}>
                <div className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-2xl p-8 hover:glow-cyan transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${stage.color === "cyan" ? "bg-cyan/10" : "bg-emerald/10"} flex items-center justify-center shrink-0`}>
                          <stage.icon className={`w-6 h-6 ${stage.color === "cyan" ? "text-cyan" : "text-emerald"}`} />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-ivory/40 mb-1">
                            STAGE {String(i + 1).padStart(2, "0")}
                          </div>
                          <h3 className="font-heading text-xl font-bold mb-2">{stage.title}</h3>
                          <p className="text-ivory/60 text-sm leading-relaxed">{stage.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Node on timeline */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-midnight border-2 border-cyan items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
