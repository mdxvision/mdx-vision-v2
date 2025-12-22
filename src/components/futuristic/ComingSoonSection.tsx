"use client";

import { motion } from "framer-motion";

const verticals = [
  {
    name: "Law Enforcement",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    description: "Incident reports & field documentation",
  },
  {
    name: "Fire & Rescue",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    description: "Scene reports & safety logs",
  },
  {
    name: "EMS",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    description: "Patient care & handoff reports",
  },
  {
    name: "Defense",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    description: "Mission briefs & after-action reports",
  },
];

export default function ComingSoonSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="coming-soon-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] radial-glow-blue opacity-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 border border-glow-blue/30">
            <span className="w-2 h-2 rounded-full bg-glow-blue animate-pulse" />
            <span className="text-sm text-glow-blue">Coming Soon</span>
          </span>

          <h2
            id="coming-soon-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Beyond Healthcare
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            MDX Vision is expanding to serve those who serve others.
            The same hands-free documentation that transforms healthcare
            is coming to first responders and defense.
          </p>
        </motion.div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass border border-glass-border hover:border-glow-blue/50 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-glow-blue/10 text-glow-blue flex items-center justify-center group-hover:bg-glow-blue/20 transition-colors">
                {vertical.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{vertical.name}</h3>
              <p className="text-xs text-muted">{vertical.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-secondary mb-6">
            Interested in bringing MDX Vision to your department?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-glow-blue/50 text-glow-blue hover:bg-glow-blue/10 hover:border-glow-blue transition-all duration-300"
          >
            <span>Get Early Access</span>
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
