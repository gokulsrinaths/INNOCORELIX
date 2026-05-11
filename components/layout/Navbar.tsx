"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/research", label: "Research" },
  { href: "/platform", label: "Platform" },
  { href: "/pipeline", label: "Pipeline" },
  { href: "/science", label: "Science" },
  { href: "/team", label: "Team" },
  { href: "/investors", label: "Investors" },
  { href: "/publications", label: "Publications" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img
              src="/logo.png"
              alt="INNOCORELIX"
              className="h-9 w-auto object-contain"
            />
          </motion.div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors focus-ring ${
                pathname === link.href
                  ? "text-ivory bg-white/5"
                  : "text-ivory/70 hover:text-ivory hover:bg-white/5"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan/70 to-emerald/70" />
              )}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 text-ivory focus-ring rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`px-3 py-3 text-sm font-medium rounded-md transition-colors focus-ring ${
                    pathname === link.href
                      ? "text-ivory bg-white/10"
                      : "text-ivory/80 hover:text-ivory hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
