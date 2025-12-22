import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | MDX Vision",
  description: "MDX Vision Privacy Policy - How we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
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
          Privacy <span className="gradient-text">Policy</span>
        </h1>

        <p className="text-secondary mb-8">Last updated: December 2024</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-secondary">
              MDX Vision collects information necessary to provide our clinical documentation services, including:
            </p>
            <ul className="list-disc list-inside text-secondary mt-4 space-y-2">
              <li>Account information (name, email, organization)</li>
              <li>Voice recordings for transcription purposes</li>
              <li>Clinical documentation data</li>
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-secondary">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-secondary mt-4 space-y-2">
              <li>Provide and improve our documentation services</li>
              <li>Process voice-to-text transcriptions</li>
              <li>Ensure HIPAA compliance and data security</li>
              <li>Communicate service updates and support</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">3. Data Protection</h2>
            <p className="text-secondary">
              All data is encrypted using 256-bit AES encryption both in transit and at rest.
              We maintain SOC 2 Type II certification and undergo regular security audits.
              Protected Health Information (PHI) is handled in strict accordance with HIPAA regulations.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">4. Data Sharing</h2>
            <p className="text-secondary">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside text-secondary mt-4 space-y-2">
              <li>Your healthcare organization (as authorized)</li>
              <li>Service providers bound by confidentiality agreements</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p className="text-secondary">
              You have the right to access, correct, or delete your personal information.
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@mdx.vision" className="text-glow-cyan hover:underline">
                privacy@mdx.vision
              </a>.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">6. Contact Us</h2>
            <p className="text-secondary">
              For privacy-related inquiries:<br />
              Email:{" "}
              <a href="mailto:privacy@mdx.vision" className="text-glow-cyan hover:underline">
                privacy@mdx.vision
              </a><br />
              MDX Vision, Inc.<br />
              123 Healthcare Way<br />
              San Francisco, CA 94102
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
