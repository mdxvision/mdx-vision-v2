"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "auto";
  href?: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Logo component that adapts to light and dark backgrounds
 * - light: White logo for dark backgrounds
 * - dark: Inverted/dark logo for light backgrounds
 * - auto: Uses CSS to adapt based on parent background
 */
export default function Logo({
  variant = "light",
  href = "/",
  className = "",
  width = 120,
  height = 32,
}: LogoProps) {
  const logoSrc = "/logos/mdx-logo-white.png";

  const filterClass = variant === "dark" ? "invert" : "";

  const logo = (
    <Image
      src={logoSrc}
      alt="MDX Vision"
      width={width}
      height={height}
      className={`h-8 w-auto ${filterClass} ${className}`}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} aria-label="MDX Vision - Home">
        {logo}
      </Link>
    );
  }

  return logo;
}

/**
 * SVG-based logo that can be styled with CSS
 * Use this when you need full control over colors
 */
export function LogoSVG({
  color = "currentColor",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 w-auto ${className}`}
      aria-label="MDX Vision"
    >
      {/* MDX Text */}
      <text
        x="0"
        y="24"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill={color}
        letterSpacing="-0.02em"
      >
        MDX
      </text>
      {/* Vision Text - smaller */}
      <text
        x="58"
        y="24"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="500"
        fill={color}
        opacity="0.8"
      >
        Vision
      </text>
    </svg>
  );
}
