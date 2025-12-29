"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Patient-First Innovation",
    description:
      "Every feature we build starts with one question: how does this improve patient care?",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: "Clinical Expertise",
    description:
      "Built by healthcare professionals who understand the realities of modern medicine.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Relentless Security",
    description:
      "HIPAA compliance isn't a checkbox—it's embedded in everything we do.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-dark-950 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] radial-glow-purple opacity-20" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] radial-glow-cyan opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <svg
                className="w-4 h-4 text-glow-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span className="text-sm text-secondary">Our Story</span>
            </span>

            <h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Reimagining{" "}
              <span className="gradient-text-purple">Healthcare</span>{" "}
              Documentation
            </h2>

            <div className="space-y-4 text-secondary">
              <p>
                MDX Vision was born from a simple observation: physicians spend
                more time on paperwork than with patients. We believed there had
                to be a better way.
              </p>
              <p>
                Our team of clinicians, engineers, and AI researchers came
                together with a shared mission—to give healthcare providers
                their time back while improving the quality of clinical
                documentation.
              </p>
              <p>
                Today, MDX Vision combines cutting-edge AI, augmented reality,
                and voice recognition to create the most intuitive documentation
                experience in healthcare. We&apos;re not just building
                software—we&apos;re shaping the future of how medicine is
                practiced.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  2016
                </p>
                <p className="text-sm text-muted">Founded</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  500+
                </p>
                <p className="text-sm text-muted">Languages</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-8">
              Our Values
            </h3>

            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border border-glass-border hover:border-glow-purple/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-glow-purple/10 text-glow-purple flex items-center justify-center flex-shrink-0 group-hover:bg-glow-purple/20 transition-colors">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {value.title}
                    </h4>
                    <p className="text-secondary text-sm">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-glow-purple hover:text-white transition-colors"
              >
                <span>Join our mission</span>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
