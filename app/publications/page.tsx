"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useState } from "react";
import { Search, FileText, ExternalLink, BookOpen } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Attenuation of phytofungal pathogenicity of Ascomycota by autophagy modulators",
    authors: "Woo J, Park E, Jung S, et al.",
    journal: "Nature Communications",
    year: "2024",
    doi: "10.1038/s41467-024-xxxxx-x",
    topic: "Autophagy",
    citations: 47,
    abstract:
      "Selective autophagy modulation attenuates virulence in major phytopathogenic Ascomycetes without affecting viability.",
  },
  {
    id: 2,
    title: "BRET-based biosensors for real-time ATG4 activity monitoring in living cells",
    authors: "Park E, Woo J, Kim H, et al.",
    journal: "Cell Chemical Biology",
    year: "2023",
    doi: "10.1016/j.chembiol.2023.xxxxx",
    topic: "Biosensors",
    citations: 32,
    abstract:
      "Development of genetically encoded BRET sensors reporting ATG4 protease activity with sub-cellular resolution.",
  },
  {
    id: 3,
    title: "Machine learning prioritization of autophagy inhibitors against fungal pathogens",
    authors: "Jung S, Park E, Woo J, et al.",
    journal: "Nature Machine Intelligence",
    year: "2023",
    doi: "10.1038/s42256-023-xxxxx-x",
    topic: "AI/ML",
    citations: 28,
    abstract:
      "Graph neural networks trained on ATG4-ligand interactions predict novel scaffolds with 94% accuracy.",
  },
  {
    id: 4,
    title: "ATG8 delipidation as a therapeutic node in Toxoplasma gondii infection",
    authors: "Gigley J, Woo J, Park E, et al.",
    journal: "PLOS Pathogens",
    year: "2022",
    doi: "10.1371/journal.ppat.xxxxx",
    topic: "Antiparasitic",
    citations: 41,
    abstract:
      "Pharmacological inhibition of ATG4 disrupts Toxoplasma autophagy and attenuates virulence in murine models.",
  },
  {
    id: 5,
    title: "High-throughput screening identifies selective ATG4A inhibitors",
    authors: "Woo J, Jung S, Park E, et al.",
    journal: "Journal of Medicinal Chemistry",
    year: "2022",
    doi: "10.1021/acs.jmedchem.xxxxx",
    topic: "Screening",
    citations: 55,
    abstract:
      "Discovery of first-in-class small molecule inhibitors of human ATG4A with >100-fold selectivity over ATG4B.",
  },
  {
    id: 6,
    title: "Autophagy-dependent virulence in emerging fungal pathogens",
    authors: "Park E, Gigley J, Woo J, et al.",
    journal: "Nature Reviews Microbiology",
    year: "2021",
    doi: "10.1038/s41579-021-xxxxx-x",
    topic: "Review",
    citations: 89,
    abstract:
      "Comprehensive review of autophagy manipulation by fungal pathogens and therapeutic implications.",
  },
];

const topics = ["All", "Autophagy", "Biosensors", "AI/ML", "Antiparasitic", "Screening", "Review"];

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState("All");

  const filtered = publications.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.toLowerCase().includes(search.toLowerCase());
    const matchesTopic = activeTopic === "All" || p.topic === activeTopic;
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
              Publications
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Scientific{" "}
              <span className="text-gradient">Publications</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              Peer-reviewed research advancing the frontiers of molecular biology,
              autophagy, and therapeutic discovery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="glass rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ivory/40" />
                  <input
                    type="text"
                    placeholder="Search publications..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-cyan/50 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTopic === topic
                        ? "bg-cyan text-midnight"
                        : "bg-white/5 text-ivory/60 hover:bg-white/10"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Publication list */}
          <div className="space-y-4">
            {filtered.map((pub, i) => (
              <ScrollReveal key={pub.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  className="glass rounded-xl p-6 border border-white/5 hover:border-cyan/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-cyan" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg font-bold mb-1">{pub.title}</h3>
                      <p className="text-sm text-ivory/60 mb-2">{pub.authors}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="text-cyan font-medium">{pub.journal}</span>
                        <span className="text-ivory/40">{pub.year}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-ivory/40">
                          {pub.topic}
                        </span>
                        <span className="text-xs text-ivory/40">
                          {pub.citations} citations
                        </span>
                      </div>
                      <p className="text-sm text-ivory/50 mt-3">{pub.abstract}</p>
                    </div>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-ivory/40" />
                    </a>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-ivory/40">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <p>No publications match your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
