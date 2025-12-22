import Link from "next/link";

export const metadata = {
  title: "Security | MDX Vision",
  description: "MDX Vision Security - Enterprise-grade security for healthcare data.",
};

export default function Security() {
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
          Enterprise <span className="gradient-text-purple">Security</span>
        </h1>

        <p className="text-secondary mb-8">
          Security isn&apos;t an afterthought at MDX Vision—it&apos;s foundational to everything we build.
          Our multi-layered security architecture protects your data at every level.
        </p>

        {/* Security Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl glass border border-glass-border text-center">
            <p className="text-2xl font-bold text-glow-purple">256-bit</p>
            <p className="text-sm text-muted">AES Encryption</p>
          </div>
          <div className="p-4 rounded-xl glass border border-glass-border text-center">
            <p className="text-2xl font-bold text-glow-purple">99.99%</p>
            <p className="text-sm text-muted">Uptime</p>
          </div>
          <div className="p-4 rounded-xl glass border border-glass-border text-center">
            <p className="text-2xl font-bold text-glow-purple">SOC 2</p>
            <p className="text-sm text-muted">Type II Certified</p>
          </div>
          <div className="p-4 rounded-xl glass border border-glass-border text-center">
            <p className="text-2xl font-bold text-glow-purple">24/7</p>
            <p className="text-sm text-muted">Monitoring</p>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section className="p-6 rounded-2xl glass border border-glow-purple/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-purple/20 text-glow-purple flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Data Encryption</h2>
            </div>
            <p className="text-secondary">
              All data is encrypted using AES-256 encryption, both in transit (TLS 1.3) and at rest.
              Encryption keys are managed through a dedicated Hardware Security Module (HSM) with
              automatic key rotation.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-glow-purple/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-purple/20 text-glow-purple flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Access Control</h2>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-2">
              <li>Multi-factor authentication (MFA) required for all accounts</li>
              <li>Role-based access control (RBAC) with least-privilege principles</li>
              <li>Single Sign-On (SSO) integration with SAML 2.0 and OIDC</li>
              <li>Automatic session timeout and re-authentication</li>
              <li>IP allowlisting for enterprise customers</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glow-purple/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-purple/20 text-glow-purple flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Infrastructure Security</h2>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-2">
              <li>Hosted on SOC 2 certified cloud infrastructure</li>
              <li>Geographic redundancy with automatic failover</li>
              <li>DDoS protection and Web Application Firewall (WAF)</li>
              <li>Network segmentation and private subnets</li>
              <li>Immutable infrastructure with automated patching</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glow-purple/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-purple/20 text-glow-purple flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Monitoring & Logging</h2>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-2">
              <li>24/7 Security Operations Center (SOC) monitoring</li>
              <li>Real-time threat detection and alerting</li>
              <li>Comprehensive audit logs with 7-year retention</li>
              <li>Anomaly detection using machine learning</li>
              <li>Automated incident response playbooks</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glow-purple/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-glow-purple/20 text-glow-purple flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Security Testing</h2>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-2">
              <li>Annual third-party penetration testing</li>
              <li>Continuous vulnerability scanning</li>
              <li>Bug bounty program for responsible disclosure</li>
              <li>Secure code review in CI/CD pipeline</li>
              <li>Regular tabletop exercises and incident drills</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-glass-border">
            <h2 className="text-xl font-semibold text-white mb-4">Report a Vulnerability</h2>
            <p className="text-secondary">
              We appreciate security researchers who help keep MDX Vision secure.
              To report a vulnerability:<br /><br />
              Email:{" "}
              <a href="mailto:security@mdx.vision" className="text-glow-purple hover:underline">
                security@mdx.vision
              </a><br /><br />
              Please include detailed steps to reproduce the issue. We commit to acknowledging
              reports within 24 hours and providing updates throughout our investigation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
