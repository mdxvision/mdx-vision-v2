"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoEmbedProps {
  videoId: string;
  platform: "youtube" | "vimeo";
  title: string;
  thumbnail?: string;
  className?: string;
}

/**
 * Lazy-loading video embed component for YouTube and Vimeo.
 * Improves performance by only loading the iframe when user clicks to play.
 *
 * Usage:
 * <VideoEmbed
 *   platform="youtube"
 *   videoId="dQw4w9WgXcQ"
 *   title="Product Demo"
 * />
 */
export default function VideoEmbed({
  videoId,
  platform,
  title,
  thumbnail,
  className = "",
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getEmbedUrl = () => {
    switch (platform) {
      case "youtube":
        return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      case "vimeo":
        return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
      default:
        return "";
    }
  };

  const getThumbnailUrl = () => {
    if (thumbnail) return thumbnail;

    switch (platform) {
      case "youtube":
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      case "vimeo":
        // Vimeo thumbnails require API call, use placeholder
        return null;
      default:
        return null;
    }
  };

  const thumbnailUrl = getThumbnailUrl();

  if (isLoaded) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <iframe
          src={getEmbedUrl()}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      className={`relative w-full h-full bg-neutral-900 group cursor-pointer ${className}`}
      aria-label={`Play ${title}`}
    >
      {/* Thumbnail */}
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt={`Thumbnail for ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg
            className="w-8 h-8 text-primary-600 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-medium">{title}</p>
      </div>
    </button>
  );
}
