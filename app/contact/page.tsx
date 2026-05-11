"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Send, MapPin, Mail, Phone, Building2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. We will respond within 24 hours.");
    setFormState({ name: "", email: "", organization: "", message: "" });
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
              Contact
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Let&apos;s Build the{" "}
              <span className="text-gradient">Future Together</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-3xl mx-auto">
              Partnership inquiries, scientific collaborations, and investor relations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12">
                <h2 className="font-heading text-2xl font-bold mb-8">Send a Message</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-ivory/60 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-cyan/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ivory/60 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-cyan/50 transition-colors"
                      placeholder="you@organization.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-ivory/60 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formState.organization}
                    onChange={(e) =>
                      setFormState({ ...formState, organization: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-cyan/50 transition-colors"
                    placeholder="Company or institution"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-ivory/60 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-cyan/50 transition-colors resize-none"
                    placeholder="How can we collaborate?"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-cyan text-midnight font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan/20 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2" delay={0.1}>
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Headquarters</h3>
                      <p className="text-sm text-ivory/60">
                        455 Mission Bay Blvd South
                        <br />
                        San Francisco, CA 94158
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-ivory/60">hello@innocorelix.com</p>
                      <p className="text-sm text-ivory/60">investors@innocorelix.com</p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-ivory/60">+1 (415) 555-0192</p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Partnerships</h3>
                      <p className="text-sm text-ivory/60">
                        We actively seek academic, pharmaceutical, and agricultural
                        partnerships to accelerate therapeutic deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
