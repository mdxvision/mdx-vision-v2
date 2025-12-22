const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
    title: "Voice-Activated Documentation",
    description:
      "Speak naturally and let MDX® capture, interpret, and document your clinical notes in real-time. Hands-free operation means more time with patients.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
        />
      </svg>
    ),
    title: "Real-Time Translation",
    description:
      "Break language barriers with instant translation across 500+ languages and dialects. Communicate seamlessly with every patient, regardless of their native language.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Augmented Reality Visualization",
    description:
      "See patient data overlaid in your field of view with AR technology. Access critical information without looking away from your patient.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
    title: "Seamless EHR Integration",
    description:
      "Connect directly to Epic, Cerner, Veradigm, and other major EHR systems. Your documentation flows automatically into the right charts.",
  },
];

const benefits = [
  {
    stat: "60%",
    label: "Less Admin Time",
    description: "Reduce documentation burden significantly",
  },
  {
    stat: "3x",
    label: "Faster Charts",
    description: "Complete documentation in record time",
  },
  {
    stat: "40%",
    label: "Faster Reimbursement",
    description: "Get paid sooner with accurate coding",
  },
  {
    stat: "85%",
    label: "Less Burnout",
    description: "Clinicians report improved satisfaction",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding bg-white"
      aria-labelledby="features-heading"
    >
      <div className="container-default">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-neutral-900"
          >
            Work Smarter. <span className="text-primary-600">Care Better.</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            MDX Vision combines cutting-edge AI, voice recognition, and
            augmented reality to transform how you deliver care.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <article
              key={index}
              className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Benefits stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Chart Faster. Reimburse Sooner.
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white">
                  {benefit.stat}
                </p>
                <p className="text-primary-100 font-medium mt-2">
                  {benefit.label}
                </p>
                <p className="text-primary-200 text-sm mt-1">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
