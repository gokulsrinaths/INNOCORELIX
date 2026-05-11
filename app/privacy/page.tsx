"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-10">
            <span className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
              Legal
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-ivory/60">
              This page is a placeholder. Replace with your finalized privacy policy.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-10 leading-relaxed text-ivory/70 space-y-6">
              <p>
                INNOCORELIX may collect information you provide through forms (such as your
                name, email, and organization) for the purpose of responding to inquiries.
              </p>
              <p>
                If you need to publish a compliant policy (e.g., GDPR/CCPA), add details
                for data retention, lawful basis, cookies/analytics, and contact methods.
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

