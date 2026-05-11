"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Technology", href: "/technology" },
    { label: "Research", href: "/research" },
    { label: "Platform", href: "/platform" },
    { label: "Pipeline", href: "/pipeline" },
  ],
  Company: [
    { label: "Team", href: "/team" },
    { label: "Investors", href: "/investors" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Publications", href: "/publications" },
    { label: "Science", href: "/science" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="INNOCORELIX"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-ivory/60 max-w-sm leading-relaxed">
              Reprogramming pathogen biology through molecular intelligence. We build
              programmable pathogen defense systems for a safer, more resilient world.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm text-ivory mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/50 hover:text-cyan transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} INNOCORELIX, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-ivory/40">
            <Link href="/privacy" className="hover:text-ivory/60 transition-colors focus-ring rounded-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ivory/60 transition-colors focus-ring rounded-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

