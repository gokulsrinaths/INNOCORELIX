"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Atom, Users, FlaskConical, ArrowRight, MapPin } from "lucide-react";

const values = [
  {
    icon: Atom,
    title: "Frontier Science",
    description: "We operate at the bleeding edge of molecular biology, where curiosity drives discovery.",
  },
  {
    icon: Users,
    title: "Interdisciplinary Teams",
    description: "Biologists, chemists, engineers, and AI researchers working as one unified team.",
  },
  {
    icon: FlaskConical,
    title: "Rigorous Standards",
    description: "Publication-quality data and reproducibility are non-negotiable in everything we do.",
  },
];

const positions = [
  {
    title: "Senior Scientist, Molecular Biology",
    department: "Research",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Machine Learning Engineer",
    department: "Computational",
    location: "Remote / SF",
    type: "Full-time",
  },
  {
    title: "Medicinal Chemist",
    department: "Chemistry",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Research Associate, Screening",
    department: "Operations",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Biostatistician",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-emerald text-sm font-semibold tracking-wider uppercase mb-4 block">
              Careers
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Build the Future of{" "}
              <span className="text-gradient">Molecular Intelligence</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              Join a team of world-class scientists and engineers building programmable
              pathogen defense systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-8 h-full text-center hover:glow-cyan transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-cyan" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-graphite/30">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-ivory/60">
              We are always looking for exceptional talent
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {positions.map((position, i) => (
              <ScrollReveal key={position.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 border border-white/5 hover:border-cyan/20 transition-all cursor-pointer group"
                >
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold group-hover:text-cyan transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-ivory/50">
                      <span>{position.department}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {position.location}
                      </span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-ivory/30 group-hover:text-cyan group-hover:translate-x-1 transition-all" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
