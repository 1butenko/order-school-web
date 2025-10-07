"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface HoverInfoProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  text: string;
  label: string;
  module : string;
  date : string;
}

export default function HoverInfo({
  top,
  left,
  right,
  bottom,
  text,
  label,
  module,
  date
}: HoverInfoProps) {
  const [hovered, setHovered] = useState(false);

  return (
      <div
        className="absolute pointer-events-auto cursor-pointer z-20"
        style={{ top, left, right, bottom }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="text-4xl font-normal tracking-wider uppercase text-foreground">
            <h2>{module}</h2>
            <h2>{date}</h2>
        </div>
        <h3 className="uppercase text-4xl bg-primary w-lg px-2 text-center py-2 tracking-wider font-medium text-white rounded mt-2">
          {label}
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute left-0 w-full bg-white rounded cursor-auto"
        >
          <p className="font-mono font-medium text-base/tight py-4 px-8 text-foreground">
            {text}
          </p>
        </motion.div>
      </div>
  );
}
