"use client"
import { useState } from "react";

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
}

export default function VideoPlayer({ videoSrc, posterSrc, name, grade }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="rounded-2xl relative overflow-hidden">
      {isLoading && (
        <Skeleton className="absolute inset-0 rounded-2xl aspect-9/16" />
      )}
      <Video
        src={videoSrc}
        theme={Instaplay}
        poster={posterSrc}
        onLoadedData={() => setIsLoading(false)}
        onCanPlay={() => setIsLoading(false)}
        style={{
          "--media-primary-color": "#FFFFFF",
          "--media-secondary-color": "#F42B39",
          "--media-accent-color": "#F42B39",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
      {name && grade && (
        <div className="absolute bottom-8 left-0 right-0 text-center text-white z-20 pointer-events-none">
          <h3 className="font-sans font-bold text-xl md:text-2xl uppercase tracking-wide">
            {name}
          </h3>
          <p className="font-sans text-lg md:text-xl">
            {grade}
          </p>
        </div>
      )}
    </div>
  );
}