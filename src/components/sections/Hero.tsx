import Link from "next/link";
import VideoPlayer from "@/components/video/VideoPlayer";

export default function Hero() {
  return (
    <section
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-neutral-50 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container-default relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
              A.R.I.M. Technology™ - Patent Pending
            </span>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight"
            >
              Your Voice.{" "}
              <span className="text-primary-600">Your Workflow.</span>{" "}
              <span className="block mt-2">Perfectly in Sync.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-xl mx-auto lg:mx-0">
              Speak naturally. MDX® listens, connects, and documents – instantly.
              Transform your clinical workflow with AI-powered voice
              documentation and augmented reality visualization.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30"
              >
                Request a Demo
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-4">
                Trusted by leading healthcare organizations
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <span className="text-neutral-400 font-medium">HIPAA Compliant</span>
                <span className="text-neutral-300" aria-hidden="true">|</span>
                <span className="text-neutral-400 font-medium">SOC 2 Type II</span>
                <span className="text-neutral-300" aria-hidden="true">|</span>
                <span className="text-neutral-400 font-medium">HL7 FHIR</span>
              </div>
            </div>
          </div>

          {/* Video/Image placeholder */}
          <div className="relative">
            <div className="video-container bg-neutral-100 shadow-2xl">
              <VideoPlayer
                placeholder="/hero-placeholder.jpg"
                alt="MDX Vision platform demonstration showing voice-activated clinical documentation"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-neutral-100">
              <p className="text-3xl font-bold text-primary-600">500+</p>
              <p className="text-sm text-neutral-600">Languages Supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
