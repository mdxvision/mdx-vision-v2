"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

// Formspree form ID - replace with your actual form ID from formspree.io
const FORMSPREE_FORM_ID = "xpwzgkdr";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          _subject: `Demo Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", organization: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-glow-purple/20 via-dark-950 to-glow-cyan/20" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] radial-glow-purple opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] radial-glow-cyan opacity-30" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
          >
            Ready to Transform Your{" "}
            <span className="gradient-text">
              Practice?
            </span>
          </h2>
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto text-center">
            Join healthcare organizations already using MDX Vision to deliver
            better care with less burnout.
          </p>

          {status !== "success" ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-4"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  disabled={status === "submitting"}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl glass border border-glass-border bg-dark-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-glow-cyan transition-colors disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Work email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Work email"
                  required
                  disabled={status === "submitting"}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl glass border border-glass-border bg-dark-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-glow-cyan transition-colors disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="organization" className="sr-only">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Organization"
                  disabled={status === "submitting"}
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl glass border border-glass-border bg-dark-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-glow-cyan transition-colors disabled:opacity-50"
                />
              </div>

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Request a Demo"
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto p-8 rounded-2xl glass border border-glow-cyan/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-glow-cyan/20 text-glow-cyan flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Thank You!
              </h3>
              <p className="text-secondary">
                We'll be in touch within 24 hours to schedule your personalized demo.
              </p>
            </motion.div>
          )}

          {/* Trust signals */}
          <p className="mt-8 text-sm text-muted">
            No credit card required • HIPAA compliant • Cancel anytime
          </p>

          {/* Contact alternatives */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-secondary">
            <a
              href="mailto:info@mdx.vision"
              className="flex items-center gap-2 hover:text-glow-cyan transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              info@mdx.vision
            </a>
            <a
              href="tel:+18001234567"
              className="flex items-center gap-2 hover:text-glow-cyan transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              1-800-MDX-VISION
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
