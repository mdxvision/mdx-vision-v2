"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import VoiceWaveform, { WaveformIcon } from "./VoiceWaveform";
import { StatCard } from "./GlassCard";
import { VideoEmbed } from "@/components/video";

export default function HeroFuturistic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { stiffness: 100, damping: 30 };
  const mouseX = useSpring(mousePosition.x * 20, springConfig);
  const mouseY = useSpring(mousePosition.y * 20, springConfig);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient grain"
      aria-labelledby="hero-heading"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Radial glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] radial-glow-purple rounded-full"
        style={{ x: mouseX, y: mouseY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] radial-glow-cyan rounded-full"
        style={{ x: useSpring(mousePosition.x * -15, springConfig), y: useSpring(mousePosition.y * -15, springConfig) }}
      />

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
              >
                <span className="w-2 h-2 bg-glow-cyan rounded-full animate-pulse" />
                <span className="text-sm text-secondary">
                  A.R.I.M. Technology™ — Patent Pending
                </span>
              </motion.div>

              {/* Headline */}
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="text-white">Speak naturally.</span>
                <br />
                <span className="bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan bg-clip-text text-transparent">
                  Watch it happen.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-lg md:text-xl text-secondary max-w-lg mx-auto lg:mx-0">
                AI-powered voice documentation with augmented reality visualization.
                Real-time translation in 500+ languages. The future of clinical care is here.
              </p>

              {/* Voice waveform demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 p-4 glass rounded-2xl max-w-md mx-auto lg:mx-0"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-glow-cyan rounded-full animate-pulse" />
                  <span className="text-sm text-secondary">Listening...</span>
                </div>
                <VoiceWaveform barCount={50} className="h-16" />
                <p className="mt-3 text-sm text-muted italic">
                  "Patient presents with mild fatigue and elevated blood pressure..."
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="#demo"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan" />
                  <span className="absolute inset-0 bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    Request a Demo
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full glass border border-glass-border hover:bg-glass-highlight transition-colors"
                >
                  See How It Works
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Video Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Video Container with glow effect */}
              <motion.div
                className="relative rounded-3xl overflow-hidden glow-cyan"
                style={{
                  x: useSpring(mousePosition.x * -10, springConfig),
                  y: useSpring(mousePosition.y * -10, springConfig),
                }}
              >
                {/* Gradient border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-glow-purple via-glow-blue to-glow-cyan rounded-3xl" />

                {/* Video embed */}
                <div className="relative m-[1px] rounded-3xl overflow-hidden aspect-video bg-dark-900">
                  <VideoEmbed
                    platform="youtube"
                    videoId="_A2V4Z6FTTQ"
                    title="MDX Vision Demo - See the Future of Clinical Documentation"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -top-6 -right-6 z-10 hidden lg:block"
                style={{
                  x: useSpring(mousePosition.x * 15, springConfig),
                  y: useSpring(mousePosition.y * 15, springConfig),
                }}
              >
                <StatCard
                  value="500+"
                  label="Languages"
                  glowColor="purple"
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  }
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-8 z-10 hidden lg:block"
                style={{
                  x: useSpring(mousePosition.x * -12, springConfig),
                  y: useSpring(mousePosition.y * -12, springConfig),
                }}
              >
                <StatCard
                  value="60%"
                  label="Less Admin Time"
                  glowColor="cyan"
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-20 text-center"
          >
            <p className="text-sm text-muted mb-6">
              Trusted by healthcare organizations worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {["HIPAA Compliant", "SOC 2 Type II", "HL7 FHIR", "HITRUST"].map(
                (cert, i) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-secondary"
                  >
                    <svg
                      className="w-5 h-5 text-glow-cyan"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs">Scroll to explore</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
