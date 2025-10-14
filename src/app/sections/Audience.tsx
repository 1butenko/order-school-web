"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants, Transition } from "framer-motion";

import audience from "@/assets/audience.png";

export default function Audience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const transition: Transition = {
    duration: 0.8,
    ease: "easeOut",
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition },
  };

  return (
    <section id="audience" className="relative w-full min-h-screen">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-5xl ml-32 text-left text-foreground px-4"
      >
        <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
          Для кого створений Гурток Політичних Студій
        </h1>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0, transition: { ...transition, delay: 0.2 } } : {}}
        className="w-full overflow-hidden"
      >
        <Image
          src={audience}
          alt="Для кого створений Гурток Політичних Студій"
          className="w-full h-auto max-w-full object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}