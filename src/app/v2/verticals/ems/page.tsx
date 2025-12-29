"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "ePCR Documentation",
    description: "Speak patient assessments, vitals, and interventions. MDX Vision generates compliant electronic Patient Care Reports in real-time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Seamless Hospital Handoff",
    description: "Patient data transfers to receiving facility before you arrive. ED staff is prepared, handoff is streamlined, care is faster.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Multi-Language Patient Communication",
    description: "Break language barriers in critical moments. Real-time translation for patient history, allergies, and consent in 500+ languages.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
  {
    title: "Protocol Guidance Overlay",
    description: "AR display shows treatment protocols, drug dosages, and decision trees. The right information at the right time, hands-free.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Voice-Activated Vitals",
    description: "Speak vitals as you assess—BP, pulse, respiration, SpO2. MDX Vision timestamps and logs everything automatically to your ePCR.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Real-Time GPS Tracking",
    description: "Dispatch sees your exact location. Hospitals track your ETA. Seamless coordination from scene to ER without radio check-ins.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "80%", label: "Less documentation time" },
  { value: "Real-time", label: "Hospital sync" },
  { value: "NEMSIS", label: "Compliant" },
  { value: "500+", label: "Languages" },
];

export default function EMSPage() {
  return (
    <div className="min-h-screen">
      {/* Internal Badge */}
      <div className="fixed top-20 right-4 z-50 px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-xs font-medium">
        Internal Use Only
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] radial-glow-cyan opacity-30 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link
              href="/v2"
              className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 border border-glow-cyan/30">
              <svg className="w-5 h-5 text-glow-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <span className="text-sm text-glow-cyan">Emergency Medical Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Save Lives,{" "}
              <span className="text-glow-cyan">Not Keystrokes</span>
            </h1>
            <p className="text-xl text-secondary mb-8">
              MDX Vision brings voice-first documentation to the ambulance.
              Patient care comes first—documentation follows automatically.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="px-6 py-3 bg-glow-cyan hover:bg-cyan-400 text-dark-950 font-medium rounded-lg transition-colors"
              >
                Request Demo
              </a>
              <a
                href="#features"
                className="px-6 py-3 glass border border-glass-border hover:border-glow-cyan/50 text-white font-medium rounded-lg transition-colors"
              >
                See Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-glass-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-glow-cyan">{stat.value}</p>
                <p className="text-sm text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl glass border border-glass-border flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-glow-cyan/20 text-glow-cyan flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </div>
              <p className="text-secondary">Demo Video Coming Soon</p>
              <p className="text-sm text-muted mt-2">EMS Field Demo</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for the Rig
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Every feature designed for the realities of prehospital care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border border-glass-border hover:border-glow-cyan/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-glow-cyan/20 text-glow-cyan flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works on Scene
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Three seamless phases. Patient care stays first.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-glow-cyan/20 text-glow-cyan flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Respond</h3>
              <p className="text-secondary">
                Dispatch info displays on arrival. Patient history from linked records. Protocols ready before you touch the patient.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-glow-cyan/20 text-glow-cyan flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Treat</h3>
              <p className="text-secondary">
                Speak vitals and interventions as you work. Drug dosages overlay in AR. Everything timestamped and logged automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-glow-cyan/20 text-glow-cyan flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Handoff</h3>
              <p className="text-secondary">
                ePCR complete before arrival. Hospital receives patient data in transit. ED staff prepared. Seamless transfer of care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Service?
            </h2>
            <p className="text-lg text-secondary mb-8">
              Let&apos;s discuss how MDX Vision can reduce documentation burden for your crews.
            </p>
            <a
              href="mailto:rafael@mdx.vision?subject=EMS Demo Request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-glow-cyan hover:bg-cyan-400 text-dark-950 font-semibold rounded-xl transition-colors"
            >
              <span>Contact Us</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="mt-4 text-sm text-muted">rafael@mdx.vision</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
