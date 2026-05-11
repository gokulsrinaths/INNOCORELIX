"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FlaskConical, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-deep-bio/30 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* DNA Helix decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
        <svg width="400" height="800" viewBox="0 0 400 800" fill="none" className="animate-float">
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`translate(0, ${i * 70})`}>
              <motion.path
                d={`M 100 0 Q 200 ${35}, 300 0`}
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
              <motion.path
                d={`M 100 70 Q 200 ${35}, 300 70`}
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 + 0.5 }}
              />
              <line x1="100" y1="0" x2="300" y2="70" stroke="rgba(0,209,255,0.3)" strokeWidth="1" />
            </g>
          ))}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D1FF" />
              <stop offset="100%" stopColor="#2AF598" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2AF598" />
              <stop offset="100%" stopColor="#00D1FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="INNOCORELIX"
            className="h-24 md:h-32 w-auto mx-auto object-contain mb-6"
          />
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-cyan tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Frontier Molecular Intelligence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
        >
          Reprogramming{" "}
          <span className="text-gradient">Pathogen Biology</span>{" "}
          Through Molecular Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-ivory/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          INNOCORELIX develops next-generation antifungal and antiparasitic therapeutics
          using synthetic biosensors, autophagy modulation, and AI-assisted molecular discovery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/platform"
            className="group relative px-8 py-4 bg-cyan text-midnight font-semibold rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FlaskConical className="w-5 h-5" />
              Explore Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/research"
            className="group px-8 py-4 glass text-ivory font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Read Research
          </Link>
        </motion.div>

        {/* Live metrics ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "50K+", label: "Molecules Screened" },
            { value: "12", label: "Active Programs" },
            { value: "4", label: "Patent Families" },
            { value: "99.7%", label: "Assay Precision" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-ivory/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-ivory/20 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
