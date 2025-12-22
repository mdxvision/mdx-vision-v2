"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    name: "HIPAA Compliant",
    description: "Full compliance with healthcare privacy regulations",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "SOC 2 Type II",
    description: "Enterprise-grade security and availability",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: "HL7 FHIR",
    description: "Industry-standard healthcare interoperability",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    name: "HITRUST",
    description: "Comprehensive security framework certification",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const integrations = [
  { name: "Epic", logo: "/logos/integrations/epic.svg" },
  { name: "Cerner", logo: "/logos/integrations/cerner.svg" },
  { name: "Veradigm", logo: "/logos/integrations/veradigm.svg" },
  { name: "MEDITECH", logo: "/logos/integrations/meditech.svg" },
  { name: "athenahealth", logo: "/logos/integrations/athenahealth.svg" },
  { name: "eClinicalWorks", logo: "/logos/integrations/eclinicalworks.svg" },
  { name: "TWS", logo: "/logos/integrations/tws.svg" },
  { name: "PHC", logo: "/logos/integrations/phc.svg" },
];

const partners = [
  { name: "Nuance", logo: "/logos/integrations/nuance.svg" },
  { name: "JBI", logo: "/logos/integrations/jbi.svg" },
];

const stats = [
  { value: "10M+", label: "Patient encounters documented" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "256-bit", label: "AES encryption" },
  { value: "<50ms", label: "Average response time" },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="py-20 md:py-32 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="trust-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center"
          >
            Built on{" "}
            <span className="gradient-text-cyan">
              Trust
            </span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto text-center">
            Enterprise-grade security and compliance, trusted by healthcare
            organizations worldwide.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl glass border border-glass-border"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-glow-cyan/10 text-glow-cyan flex items-center justify-center">
                {cert.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
              <p className="text-sm text-secondary">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 p-8 rounded-2xl bg-gradient-to-r from-glow-purple/10 via-glow-blue/10 to-glow-cyan/10 border border-glass-border"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-secondary">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* EHR Integrations - Above partners, bigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary mb-8 text-lg">
            Seamlessly integrates with leading EHR platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {integrations.map((ehr) => (
              <div
                key={ehr.name}
                className="px-8 py-4 rounded-xl glass border border-glass-border hover:border-glow-cyan/50 transition-colors"
              >
                <img
                  src={ehr.logo}
                  alt={ehr.name}
                  className="h-10 w-auto min-w-[100px] object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partners - Below integrations, smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-secondary mb-6 text-sm">
            Strategic technology partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="px-6 py-3 rounded-lg glass border border-glass-border hover:border-glow-purple/50 transition-colors"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-6 w-auto min-w-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
