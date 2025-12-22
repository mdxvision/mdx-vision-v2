"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string | null;
  status: string;
  description: string;
  available: boolean;
  isGoogle?: boolean;
  isOwn?: boolean;
}

const partners: Partner[] = [
  {
    name: "Vuzix",
    logo: "/logos/partners/vuzix.png",
    status: "Current Partner",
    description: "Enterprise-grade AR smart glasses powering MDX Vision deployments today",
    available: true,
  },
  {
    name: "Android XR",
    logo: null,
    status: "Coming 2026",
    description: "Google's next-generation AI glasses platform integration in development",
    available: false,
    isGoogle: true,
  },
  {
    name: "MDX Glasses",
    logo: "/logos/mdx-logo-work.png",
    status: "In Development",
    description: "Our proprietary AR hardware, purpose-built for clinical workflows",
    available: false,
    isOwn: true,
  },
];

export default function HardwarePartners() {
  return (
    <section
      className="py-20 md:py-32 bg-dark-950 relative overflow-hidden"
      aria-labelledby="hardware-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] radial-glow-purple opacity-20 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] radial-glow-cyan opacity-20 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <svg
              className="w-4 h-4 text-glow-cyan"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <span className="text-sm text-secondary">Hardware Ecosystem</span>
          </span>

          <h2
            id="hardware-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
          >
            Platform{" "}
            <span className="gradient-text">
              Agnostic
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto text-center">
            MDX Vision works with leading AR hardware today and is built to support
            next-generation platforms. Your investment is future-proof.
          </p>
        </motion.div>

        {/* Partners grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className={`relative h-full p-8 rounded-2xl glass border transition-all duration-300 ${
                  partner.available
                    ? "border-glow-cyan/50 hover:border-glow-cyan"
                    : "border-glass-border hover:border-glow-purple/50"
                }`}
              >
                {/* Status badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    partner.available
                      ? "bg-glow-cyan/20 text-glow-cyan"
                      : partner.isOwn
                      ? "bg-glow-purple/20 text-glow-purple"
                      : "bg-glow-blue/20 text-glow-blue"
                  }`}
                >
                  {partner.status}
                </div>

                {/* Logo area */}
                <div className="h-20 mb-6 text-center">
                  <div className="h-full flex items-center justify-center">
                    {partner.isGoogle ? (
                      // Google/Android XR custom logo
                      <div className="flex items-center gap-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="text-xl font-semibold text-white">Android XR</span>
                      </div>
                    ) : partner.isOwn ? (
                      // MDX own hardware - white logo centered
                      <Image
                        src="/logos/mdx-logo-white.png"
                        alt="MDX Glasses"
                        width={120}
                        height={32}
                        className="h-8 w-auto mx-auto block"
                      />
                    ) : partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={100}
                        height={28}
                        className="h-7 w-auto object-contain mx-auto"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    ) : (
                      <span className="text-2xl font-bold text-white">
                        {partner.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {partner.name}
                </h3>
                <p className="text-secondary text-center text-sm">
                  {partner.description}
                </p>

                {/* Highlight for own hardware */}
                {partner.isOwn && (
                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <p className="text-xs text-center text-glow-purple">
                      A.R.I.M. Technology™ — Patent Pending
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-secondary mb-6">
            Don&apos;t see your preferred hardware? We&apos;re always expanding compatibility.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-glow-cyan hover:text-white transition-colors"
          >
            <span>Discuss integration options</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
