"use client";

import { useState, FormEvent } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Demo requested for:", email);
    setSubmitted(true);
  };

  return (
    <section
      id="demo"
      className="section-padding bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
      aria-labelledby="cta-heading"
    >
      <div className="container-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Ready to Transform Your{" "}
            <span className="text-primary-400">Clinical Workflow?</span>
          </h2>
          <p className="mt-6 text-xl text-neutral-300">
            See MDX Vision in action. Request a personalized demo and discover
            how our AI-powered platform can help your practice work smarter.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                aria-required="true"
                className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Request Demo
              </button>
            </form>
          ) : (
            <div
              className="mt-10 p-6 bg-accent-green/20 border border-accent-green/30 rounded-lg"
              role="alert"
            >
              <p className="text-accent-green font-medium text-lg">
                Thank you! We'll be in touch soon to schedule your demo.
              </p>
            </div>
          )}

          <p className="mt-6 text-sm text-neutral-400">
            No credit card required • HIPAA compliant • Free consultation
          </p>

          {/* Contact info */}
          <div
            id="contact"
            className="mt-12 pt-12 border-t border-neutral-700 grid sm:grid-cols-3 gap-8"
          >
            <div>
              <p className="text-neutral-400 text-sm mb-2">Email</p>
              <a
                href="mailto:info@mdx.vision"
                className="text-white hover:text-primary-400 transition-colors"
              >
                info@mdx.vision
              </a>
            </div>
            <div>
              <p className="text-neutral-400 text-sm mb-2">Phone</p>
              <a
                href="tel:+18001234567"
                className="text-white hover:text-primary-400 transition-colors"
              >
                1-800-MDX-VISION
              </a>
            </div>
            <div>
              <p className="text-neutral-400 text-sm mb-2">Location</p>
              <p className="text-white">United States</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
