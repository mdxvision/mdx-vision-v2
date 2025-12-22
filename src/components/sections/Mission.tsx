export default function Mission() {
  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-labelledby="mission-heading"
    >
      <div className="container-default">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
            Our Mission
          </span>
          <h2
            id="mission-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight"
          >
            Transforming Healthcare Through{" "}
            <span className="text-primary-600">Innovation</span>
          </h2>
          <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
            We believe clinicians should spend their time caring for patients,
            not fighting with documentation. MDX Vision was built to eliminate
            the administrative burden that leads to burnout and takes focus away
            from what matters most – patient care.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Patient-First
              </h3>
              <p className="text-neutral-600">
                Every feature is designed to give clinicians more time with
                their patients.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Privacy-Focused
              </h3>
              <p className="text-neutral-600">
                HIPAA compliant with enterprise-grade security at every layer.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Innovation-Driven
              </h3>
              <p className="text-neutral-600">
                Constantly evolving with the latest in AI and AR technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
