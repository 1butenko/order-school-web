"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface HoverInfoProps {
  text: string;
  label: string;
}

export default function HoverInfo({
  text,
  label,
}: HoverInfoProps) {
  const [hovered, setHovered] = useState(false);

  return (
      <div
        className="pointer-events-auto cursor-pointer mt-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(!hovered)}
      >
        <h3 className="uppercase text-base md:text-4xl bg-primary w-full md:w-lg px-4 md:px-2 text-center py-3 md:py-4 tracking-wide md:tracking-wider font-bold md:font-medium text-white rounded-xl md:rounded mt-2 flex items-center justify-center gap-2">
          {label}
          <span className="md:hidden text-white">
            {hovered ? '▼' : '▶'}
          </span>
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full bg-white rounded cursor-auto"
        >
          <p className="max-w-lg font-mono font-normal md:font-medium text-sm md:text-base/tight py-4 px-4 md:px-8 text-black text-justify">
            {text}
          </p>
        </motion.div>
      </div>
  );
}
