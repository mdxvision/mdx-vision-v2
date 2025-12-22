"use client";

import { motion } from "framer-motion";
import { WaveformIcon } from "./VoiceWaveform";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Voice-First Documentation",
    description: "Speak naturally and watch your words transform into structured clinical notes in real-time. No typing, no clicking—just talking.",
    color: "cyan",
    stat: "3x faster",
    statLabel: "than typing",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    title: "500+ Languages",
    description: "Break every language barrier. Real-time translation ensures clear communication with any patient, regardless of their native tongue.",
    color: "purple",
    stat: "500+",
    statLabel: "languages",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "AR Visualization",
    description: "See patient data overlaid in your field of view. Access vitals, history, and notes without ever looking away from your patient.",
    color: "blue",
    stat: "Hands-free",
    statLabel: "operation",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Seamless EHR Sync",
    description: "Bi-directional integration with Epic, Cerner, and all major EHRs. Your documentation flows automatically—no manual entry required.",
    color: "cyan",
    stat: "Real-time",
    statLabel: "sync",
  },
];

export default function FeaturesFuturistic() {
  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-dark-950 relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Background elements */}
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
            <WaveformIcon />
            <span className="text-sm text-secondary">Powered by A.R.I.M.™</span>
          </span>

          <h2
            id="features-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center"
          >
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan bg-clip-text text-transparent">
              Nothing You Don&apos;t
            </span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto text-center">
            Built for clinicians, by clinicians. Every feature designed to give you
            more time with patients and less time with paperwork.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl glass border border-glass-border hover:border-transparent transition-colors overflow-hidden">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                  feature.color === "cyan" ? "from-glow-cyan/20 to-glow-blue/20" :
                  feature.color === "purple" ? "from-glow-purple/20 to-glow-blue/20" :
                  "from-glow-blue/20 to-glow-cyan/20"
                } opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    feature.color === "cyan" ? "bg-glow-cyan/20 text-glow-cyan" :
                    feature.color === "purple" ? "bg-glow-purple/20 text-glow-purple" :
                    "bg-glow-blue/20 text-glow-blue"
                  }`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className={`text-2xl font-bold ${
                      feature.color === "cyan" ? "text-glow-cyan" :
                      feature.color === "purple" ? "text-glow-purple" :
                      "text-glow-blue"
                    }`}>
                      {feature.stat}
                    </span>
                    <span className="text-sm text-muted">{feature.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
