import Image from "next/image";

const integrations = [
  { name: "Epic", logo: "/integrations/epic.svg" },
  { name: "Cerner", logo: "/integrations/cerner.svg" },
  { name: "Veradigm", logo: "/integrations/veradigm.svg" },
  { name: "Meditech", logo: "/integrations/meditech.svg" },
  { name: "Athenahealth", logo: "/integrations/athena.svg" },
  { name: "eClinicalWorks", logo: "/integrations/ecw.svg" },
];

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="section-padding bg-neutral-50"
      aria-labelledby="integrations-heading"
    >
      <div className="container-default">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2
              id="integrations-heading"
              className="text-3xl md:text-4xl font-bold text-neutral-900"
            >
              Connects to Your{" "}
              <span className="text-primary-600">Existing Systems</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              MDX Vision integrates seamlessly with the EHR systems you already
              use. No workflow disruption, no learning curve – just enhanced
              productivity from day one.
            </p>

            <ul className="mt-8 space-y-4" role="list">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <strong className="text-neutral-900">HL7 FHIR Compliant</strong>
                  <p className="text-neutral-600">
                    Industry-standard data exchange protocols ensure compatibility
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <strong className="text-neutral-900">Real-Time Sync</strong>
                  <p className="text-neutral-600">
                    Documentation flows instantly to patient charts
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <strong className="text-neutral-900">Bi-Directional</strong>
                  <p className="text-neutral-600">
                    Read from and write to your EHR seamlessly
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Logos grid */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-neutral-100">
            <p className="text-center text-neutral-500 font-medium mb-8">
              Integrated with leading EHR platforms
            </p>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-8"
              role="list"
              aria-label="Supported EHR integrations"
            >
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="flex items-center justify-center p-4 bg-neutral-50 rounded-xl h-20"
                  role="listitem"
                >
                  {/* Placeholder for logos - replace with actual images */}
                  <span className="text-neutral-400 font-semibold text-lg">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
