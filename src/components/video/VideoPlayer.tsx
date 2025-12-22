"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  placeholder?: string;
  alt: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}

/**
 * Accessible video player component with lazy loading support.
 *
 * Usage:
 * - For local videos: <VideoPlayer src="/videos/demo.mp4" alt="Demo video" />
 * - For YouTube: Use VideoEmbed component instead
 * - For placeholder only: <VideoPlayer placeholder="/image.jpg" alt="Coming soon" />
 */
export default function VideoPlayer({
  src,
  poster,
  placeholder,
  alt,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // If no video source, show placeholder
  if (!src) {
    return (
      <div
        className={`relative w-full h-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt}
      >
        {placeholder ? (
          <Image
            src={placeholder}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
            <p className="text-primary-700 font-medium">Video Coming Soon</p>
            <p className="text-primary-600/70 text-sm mt-1">{alt}</p>
          </div>
        )}
        {/* Play button overlay for placeholder images */}
        {placeholder && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button
              type="button"
              className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors group"
              aria-label="Play video"
              onClick={() => {
                // This would trigger video load in a real implementation
                console.log("Video playback requested");
              }}
            >
              <svg
                className="w-8 h-8 text-primary-600 ml-1 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  }

  // Error state
  if (hasError) {
    return (
      <div
        className={`relative w-full h-full bg-neutral-100 flex items-center justify-center ${className}`}
        role="alert"
      >
        <div className="text-center p-8">
          <p className="text-neutral-600">Unable to load video</p>
          <button
            type="button"
            onClick={() => setHasError(false)}
            className="mt-2 text-primary-600 hover:underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        preload="metadata"
        onError={() => setHasError(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
        aria-label={alt}
      >
        <track kind="captions" src="" label="English" default />
        Your browser does not support the video tag.
      </video>

      {/* Custom play button overlay (shows when paused and no controls) */}
      {!controls && !isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
          aria-label="Play video"
        >
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
        </button>
      )}
    </div>
  );
}
