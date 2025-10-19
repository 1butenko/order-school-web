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
      <div className="mt-4">
        <div
          className="hidden md:block pointer-events-auto cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h3 className="uppercase text-4xl bg-primary w-lg px-2 text-center py-4 tracking-wider font-medium text-white rounded mt-2">
            {label}
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full bg-white rounded cursor-auto"
          >
            <p className="max-w-lg font-mono font-medium text-base/tight py-4 px-8 text-black text-justify">
              {text}
            </p>
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <h3 className="uppercase text-base bg-primary w-full px-4 text-center py-3 tracking-wide font-bold text-white rounded-xl mt-2">
            {label}
          </h3>

          <div className="w-full bg-white rounded mt-2">
            <p className="font-mono font-normal text-sm py-4 px-4 text-black text-justify">
              {text}
            </p>
          </div>
        </div>
      </div>
  );
}
