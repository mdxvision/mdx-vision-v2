"use client";

import { motion } from "framer-motion";
import { VideoEmbed } from "@/components/video";

const videos: { videoId: string; title: string; description: string }[] = [
  // Video moved to EMS vertical page
];

export default function VideoShowcase() {
  return (
    <section
      id="demo"
      className="py-20 md:py-32 bg-dark-900 relative overflow-hidden"
      aria-labelledby="demo-heading"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow-blue opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <svg
              className="w-4 h-4 text-glow-cyan"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-secondary">See It In Action</span>
          </span>

          <h2
            id="demo-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mx-auto"
          >
            Experience the{" "}
            <span className="gradient-text">
              Future
            </span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto text-center">
            Watch how MDX Vision seamlessly integrates into clinical workflows,
            from emergency response to routine care.
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              {/* Video container */}
              <div className="relative rounded-2xl overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative m-[1px] rounded-2xl overflow-hidden bg-dark-800">
                  <div className="aspect-video">
                    <VideoEmbed
                      platform="youtube"
                      videoId={video.videoId}
                      title={video.title}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Video info */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-glow-cyan transition-colors">
                  {video.title}
                </h3>
                <p className="mt-1 text-secondary">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-secondary mb-6">
            Ready to see how MDX Vision can transform your practice?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan hover:opacity-90 transition-opacity"
          >
            Schedule a Live Demo
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
