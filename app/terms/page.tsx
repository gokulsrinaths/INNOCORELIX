"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-10">
            <span className="text-emerald text-sm font-semibold tracking-wider uppercase mb-4 block">
              Legal
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-ivory/60">
              This page is a placeholder. Replace with your finalized terms.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-10 leading-relaxed text-ivory/70 space-y-6">
              <p>
                This website is provided for informational purposes only. Content does not
                constitute medical, regulatory, investment, or legal advice.
              </p>
              <p>
                Add your official terms covering acceptable use, IP, disclaimers, and
                limitation of liability before public launch.
              </p>
              <p className="text-sm text-ivory/50">
                Last updated: {new Date().toISOString().slice(0, 10)}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

