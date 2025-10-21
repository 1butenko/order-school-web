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

  useEffect(() => {
    const checkMobile = () =>
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(checkMobile());
  }, []);

  return (
    <div className="rounded-2xl relative overflow-hidden">
      {/* 🧱 Show skeleton only if not disabled and not on mobile */}
      {!disableLoader && !isMobile && isLoading && (
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
          opacity: disableAnimation || isMobile ? 1 : isLoading ? 0 : 1,
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