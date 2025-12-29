"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Get basePath from environment variable (set at build time)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Trust", href: "#trust" },
  { name: "About", href: "#about" },
];

const solutions = [
  { name: "Healthcare", href: "/v2", description: "Clinical documentation" },
  { name: "Police", href: "/v2/verticals/police", description: "Law enforcement" },
  { name: "Fire", href: "/v2/verticals/fire", description: "Fire & rescue" },
  { name: "EMS", href: "/v2/verticals/ems", description: "Emergency medical" },
  { name: "Military", href: "/v2/verticals/military", description: "Defense" },
];

export default function HeaderDark() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-glass-border" : ""
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/v2" className="relative z-10" aria-label="MDX Vision - Home">
          <img
            src={`${basePath}/logos/mdx-logo-white.png`}
            alt="MDX Vision"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className="px-4 py-2 text-sm text-secondary hover:text-white transition-colors rounded-lg hover:bg-glass-white inline-flex items-center gap-1"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <svg
                className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 glass border border-glass-border rounded-xl overflow-hidden shadow-xl"
                >
                  <div className="py-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="block px-4 py-3 hover:bg-glass-white transition-colors"
                      >
                        <span className="block text-sm font-medium text-white">{solution.name}</span>
                        <span className="block text-xs text-muted">{solution.description}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-secondary hover:text-white transition-colors rounded-lg hover:bg-glass-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <span className="relative">Request Demo</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">
            {mobileMenuOpen ? "Close menu" : "Open menu"}
          </span>
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-glass-border"
          >
            <div className="px-6 py-4 space-y-2">
              {/* Solutions Section */}
              <div className="pb-2 border-b border-glass-border mb-2">
                <p className="text-xs text-muted uppercase tracking-wider mb-2">Solutions</p>
                {solutions.map((solution) => (
                  <Link
                    key={solution.name}
                    href={solution.href}
                    className="block py-2 text-secondary hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-secondary hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="block mt-4 text-center py-3 bg-gradient-to-r from-glow-purple to-glow-cyan text-white font-medium rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
