"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "blue";
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "cyan",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  const glowClasses = {
    cyan: "hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]",
    purple: "hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
  };

  const borderGradients = {
    cyan: "from-glow-cyan/50 to-transparent",
    purple: "from-glow-purple/50 to-transparent",
    blue: "from-glow-blue/50 to-transparent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`
        relative p-6 rounded-2xl
        bg-glass-white backdrop-blur-xl
        border border-glass-border
        transition-shadow duration-300
        ${hover ? glowClasses[glowColor] : ""}
        ${className}
      `}
    >
      {/* Top gradient border effect */}
      <div
        className={`absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r ${borderGradients[glowColor]}`}
      />
      {children}
    </motion.div>
  );
}

// Floating stat card variant
interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  glowColor?: "cyan" | "purple" | "blue";
  className?: string;
}

export function StatCard({
  value,
  label,
  icon,
  glowColor = "cyan",
  className = "",
}: StatCardProps) {
  const glowTextClasses = {
    cyan: "text-glow-cyan",
    purple: "text-glow-purple",
    blue: "text-glow-blue",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`
        glass rounded-xl p-4
        border border-glass-border
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className={`text-${glowColor === "cyan" ? "glow-cyan" : glowColor === "purple" ? "glow-purple" : "glow-blue"}`}>
            {icon}
          </div>
        )}
        <div>
          <p className={`text-2xl font-bold ${glowTextClasses[glowColor]} text-glow-${glowColor}`}>
            {value}
          </p>
          <p className="text-sm text-secondary">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}
