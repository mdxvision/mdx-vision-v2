import Link from "next/link";

export const metadata = {
  title: "HIPAA Compliance | MDX Vision",
  description: "MDX Vision HIPAA Compliance - Our commitment to protecting health information.",
};

export default function HIPAACompliance() {
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
          HIPAA <span className="gradient-text-cyan">Compliance</span>
        </h1>

        <p className="text-secondary mb-8">
          MDX Vision is fully committed to protecting the privacy and security of Protected Health Information (PHI)
          in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section className="p-6 rounded-2xl glass border border-glow-cyan/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-cyan/20 text-glow-cyan flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Business Associate Agreements</h2>
            </div>
            <p className="text-secondary">
              We execute Business Associate Agreements (BAAs) with all covered entities before handling any PHI.
              Our BAAs clearly define responsibilities, permitted uses, and breach notification procedures.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-glow-cyan/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-cyan/20 text-glow-cyan flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Technical Safeguards</h2>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-2">
              <li>256-bit AES encryption for data at rest and in transit</li>
              <li>Multi-factor authentication for all users</li>
              <li>Role-based access controls</li>
              <li>Automatic session timeouts</li>
              <li>Comprehensive audit logging</li>
              <li>Secure API endpoints with OAuth 2.0</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glow-cyan/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-cyan/20 text-glow-cyan flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Physical Safeguards</h2>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-2">
              <li>SOC 2 Type II certified data centers</li>
              <li>24/7 physical security monitoring</li>
              <li>Biometric access controls</li>
              <li>Environmental controls and redundancy</li>
              <li>Secure disposal of hardware</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glow-cyan/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-cyan/20 text-glow-cyan flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Administrative Safeguards</h2>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-2">
              <li>Designated Privacy and Security Officers</li>
              <li>Regular workforce training on HIPAA requirements</li>
              <li>Documented policies and procedures</li>
              <li>Annual risk assessments</li>
              <li>Incident response and breach notification procedures</li>
              <li>Vendor management and oversight</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glow-cyan/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-cyan/20 text-glow-cyan flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Certifications & Audits</h2>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-2">
              <li>Annual third-party HIPAA audits</li>
              <li>SOC 2 Type II certification</li>
              <li>HITRUST CSF certification</li>
              <li>Regular penetration testing</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Our Compliance Team</h2>
            <p className="text-secondary">
              For HIPAA-related inquiries or to request a BAA:<br />
              Email:{" "}
              <a href="mailto:compliance@mdx.vision" className="text-glow-cyan hover:underline">
                compliance@mdx.vision
              </a><br />
              Phone: 1-800-MDX-HIPAA
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
