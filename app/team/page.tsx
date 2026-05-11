"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Award, GraduationCap, Microscope } from "lucide-react";

const team = [
  {
    name: "Jongchan Woo, PhD",
    role: "Co-Founder & CEO",
    specialization: "Molecular Biology & Autophagy",
    achievements: [
      "Former NIH Postdoctoral Fellow",
      "Published in Nature Communications, Cell",
      "Expert in ATG4 protease biology",
    ],
    color: "cyan",
  },
  {
    name: "Eunsook Park, PhD",
    role: "Co-Founder & CSO",
    specialization: "Synthetic Biology & Biosensors",
    achievements: [
      "Pioneer in BRET sensor technology",
      "15+ years drug discovery experience",
      "Former principal scientist at Genentech",
    ],
    color: "emerald",
  },
  {
    name: "Seungmee Jung, PhD",
    role: "Co-Founder & CTO",
    specialization: "AI & Computational Biology",
    achievements: [
      "Machine learning for molecular design",
      "PhD in Computational Chemistry, MIT",
      "Former DeepMind researcher",
    ],
    color: "cyan",
  },
  {
    name: "Jason Gigley, PhD",
    role: "Co-Founder & VP Research",
    specialization: "Parasitology & Immunology",
    achievements: [
      "Leading expert in Toxoplasma biology",
      "NIH R01 principal investigator",
      "100+ peer-reviewed publications",
    ],
    color: "emerald",
  },
];

export default function TeamPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
              Team
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              The Scientists Building{" "}
              <span className="text-gradient">Molecular Futures</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              World-class researchers and operators united by a vision to reprogram
              pathogen biology through molecular intelligence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`glass rounded-2xl p-8 h-full border border-white/5 hover:border-${member.color}/30 transition-all duration-500`}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl ${
                        member.color === "cyan"
                          ? "bg-gradient-to-br from-cyan/20 to-cyan/5"
                          : "bg-gradient-to-br from-emerald/20 to-emerald/5"
                      } flex items-center justify-center shrink-0`}
                    >
                      <GraduationCap
                        className={`w-10 h-10 ${
                          member.color === "cyan" ? "text-cyan" : "text-emerald"
                        }`}
                      />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-bold">{member.name}</h2>
                      <p
                        className={`text-sm font-medium ${
                          member.color === "cyan" ? "text-cyan" : "text-emerald"
                        }`}
                      >
                        {member.role}
                      </p>
                      <p className="text-sm text-ivory/50 mt-1">{member.specialization}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {member.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-3">
                        <Award
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            member.color === "cyan" ? "text-cyan" : "text-emerald"
                          }`}
                        />
                        <span className="text-sm text-ivory/70">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional affiliations */}
      <section className="py-24 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Research Network
            </h2>
            <p className="text-ivory/60 max-w-2xl mx-auto">
              Collaborations with leading academic and research institutions
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-3xl p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["NIH", "MIT", "Stanford", "Broad Institute", "UCSF", "Harvard", "Scripps", "Cold Spring Harbor"].map(
                  (inst) => (
                    <div key={inst} className="flex items-center justify-center p-4">
                      <div className="text-center">
                        <Microscope className="w-8 h-8 text-ivory/20 mx-auto mb-2" />
                        <span className="text-sm font-semibold text-ivory/40">{inst}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
