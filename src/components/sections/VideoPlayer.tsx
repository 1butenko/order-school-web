"use client";
import { useEffect, useState } from "react";
import Video from "next-video";
import Instaplay from "player.style/instaplay/react";
import type { Asset } from "next-video/dist/assets.js";
import type { StaticImageData } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoPlayerProps {
  videoSrc: Asset | string;
  posterSrc: StaticImageData | string;
  name?: string;
  grade?: string;
  disableLoader?: boolean;
  disableAnimation?: boolean;
}

export default function VideoPlayer({
  videoSrc,
  posterSrc,
  name,
  grade,
  disableLoader = false,
  disableAnimation = false,
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(checkMobile());
  }, []);

  // 📌 If mobile, show poster and play video on click
  if (isMobile) {
    return (
      <div className="rounded-2xl relative overflow-hidden">
        {!isPlaying ? (
          <div
            className="relative cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={posterSrc as string}
              alt="video poster"
              className="rounded-2xl w-full object-cover aspect-9/16"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 2v20l18-10L4 2z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <Video
            src={videoSrc}
            theme={Instaplay}
            poster={posterSrc}
            playsInline
            muted
            autoPlay
            controls
            onLoadedData={() => setIsLoading(false)}
            onCanPlay={() => setIsLoading(false)}
            style={{
              "--media-primary-color": "#FFFFFF",
              "--media-secondary-color": "#F42B39",
              "--media-accent-color": "#F42B39",
              opacity: 1,
            }}
          />
        )}
      </div>
    );
  }

  // ✅ Desktop: original behavior
  return (
    <div className="rounded-2xl relative overflow-hidden">
      {!disableLoader && isLoading && (
        <Skeleton className="absolute inset-0 rounded-2xl aspect-9/16" />
      )}
      <Video
        src={videoSrc}
        theme={Instaplay}
        poster={posterSrc}
        playsInline
        muted
        preload="metadata"
        onLoadedData={() => setIsLoading(false)}
        onCanPlay={() => setIsLoading(false)}
        style={{
          "--media-primary-color": "#FFFFFF",
          "--media-secondary-color": "#F42B39",
          "--media-accent-color": "#F42B39",
          opacity: disableAnimation ? 1 : isLoading ? 0 : 1,
          transition: disableAnimation ? "none" : "opacity 0.3s ease-in-out",
        }}
      />
      {name && grade && (
        <div className="absolute bottom-8 left-0 right-0 text-center text-white z-20 pointer-events-none">
          <h3 className="font-sans font-bold text-xl md:text-2xl uppercase tracking-wide">
            {name}
          </h3>
          <p className="font-sans text-lg md:text-xl">{grade}</p>
        </div>
      )}
    </div>
  );
}