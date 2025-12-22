"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface VoiceWaveformProps {
  isActive?: boolean;
  barCount?: number;
  className?: string;
}

export default function VoiceWaveform({
  isActive = true,
  barCount = 40,
  className = "",
}: VoiceWaveformProps) {
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div
      className={`flex items-center justify-center gap-[2px] h-12 ${className}`}
      role="img"
      aria-label="Voice waveform visualization"
    >
      {bars.map((_, index) => {
        // Create a wave pattern
        const delay = index * 0.05;
        const baseHeight = Math.sin((index / barCount) * Math.PI) * 0.7 + 0.3;

        return (
          <motion.div
            key={index}
            className="w-[3px] rounded-full bg-gradient-to-t from-glow-purple via-glow-blue to-glow-cyan"
            initial={{ height: "20%" }}
            animate={
              isActive
                ? {
                    height: ["20%", `${baseHeight * 100}%`, "20%"],
                  }
                : { height: "20%" }
            }
            transition={
              isActive
                ? {
                    duration: 1.2,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut",
                  }
                : {}
            }
            style={{
              opacity: 0.6 + baseHeight * 0.4,
            }}
          />
        );
      })}
    </div>
  );
}

// Smaller inline waveform for UI elements
export function WaveformIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[1px] ${className}`}>
      {[0.3, 0.6, 1, 0.8, 0.4, 0.9, 0.5, 0.7, 0.3].map((height, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full bg-glow-cyan"
          animate={{
            height: [`${height * 12}px`, `${height * 20}px`, `${height * 12}px`],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
