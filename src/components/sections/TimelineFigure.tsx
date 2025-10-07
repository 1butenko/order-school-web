"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

type TimelineFigureProps = {
  src: StaticImageData;
  alt: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export default function TimelineFigure({
  src,
  alt,
  top,
  left,
  right,
  bottom,
  width = 220,
  height,
  className,
  priority,
}: TimelineFigureProps) {
  return (
    <div
      className={`absolute select-none pointer-events-none ${className ?? ""}`}
      style={{ top, left, right, bottom }}
      aria-hidden
    >
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height}
        className="h-auto w-auto" 
        priority={priority} 
      />
    </div>
  );
}
