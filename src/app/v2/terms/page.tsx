import Link from "next/link";

export const metadata = {
  title: "Terms of Service | MDX Vision",
  description: "MDX Vision Terms of Service - Terms and conditions for using our platform.",
};

export default function TermsOfService() {
  return (
    <div className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/v2"
          className="inline-flex items-center gap-2 text-secondary hover:text-glow-cyan transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Terms of <span className="gradient-text">Service</span>
        </h1>

        <p className="text-secondary mb-8">Last updated: December 2024</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-secondary">
              By accessing or using MDX Vision&apos;s services, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Services</h2>
            <p className="text-secondary">
              MDX Vision provides AI-powered clinical documentation solutions, including:
            </p>
            <ul className="list-disc list-inside text-secondary mt-4 space-y-2">
              <li>Voice-to-text medical transcription</li>
              <li>Real-time language translation</li>
              <li>Augmented reality visualization tools</li>
              <li>EHR integration services</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-secondary">
              Users agree to:
            </p>
            <ul className="list-disc list-inside text-secondary mt-4 space-y-2">
              <li>Provide accurate account information</li>
              <li>Maintain the confidentiality of login credentials</li>
              <li>Use services in compliance with applicable laws and regulations</li>
              <li>Not attempt to reverse engineer or compromise our systems</li>
              <li>Report any security vulnerabilities promptly</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">4. Healthcare Disclaimer</h2>
            <p className="text-secondary">
              MDX Vision is a documentation tool and does not provide medical advice.
              All clinical decisions remain the responsibility of licensed healthcare providers.
              Users should verify all transcribed content before finalizing medical records.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p className="text-secondary">
              All MDX Vision software, designs, and content are protected by intellectual property laws.
              Users retain ownership of their clinical documentation. MDX Vision retains rights to
              aggregated, de-identified data for service improvement.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">6. Service Level Agreement</h2>
            <p className="text-secondary">
              MDX Vision commits to 99.9% uptime for enterprise customers. Scheduled maintenance
              will be communicated in advance. Service credits may be available for qualifying outages.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-secondary">
              MDX Vision shall not be liable for indirect, incidental, or consequential damages.
              Our total liability shall not exceed the fees paid in the twelve months preceding any claim.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">8. Contact</h2>
            <p className="text-secondary">
              For questions about these terms:<br />
              Email:{" "}
              <a href="mailto:legal@mdx.vision" className="text-glow-cyan hover:underline">
                legal@mdx.vision
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
