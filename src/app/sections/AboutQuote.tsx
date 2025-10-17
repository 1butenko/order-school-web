"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import quote from "@/assets/quote.png";

export default function AboutQuote() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0.5, 1]);
  
  const imageX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0.5, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [15, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full mt-20 flex items-center justify-center"
    >
      <div className="grid grid-cols-4 grid-rows-1 gap-1">
        <motion.div 
          className="col-span-3 flex items-center justify-center"
          style={{ x: textX, opacity: textOpacity }}
        >
          <div className="w-full border-4 border-l-0 py-16 rounded-r-4xl">
            <h1 className="ml-16 font-sans uppercase font-bold text-4xl/11 max-w-7xl tracking-wide">
              "Демократія має народжуватися у кожному новому поколінні, і саме освіта допомагає їй з'явитися на світ." — Джон Дьюї
            </h1>
          </div>
        </motion.div>
        <motion.div 
          className="col-start-4"
          style={{ x: imageX, opacity: imageOpacity, rotate: imageRotate }}
        >
          <Image src={quote} alt="John Dewey" />
        </motion.div>
      </div>
    </section>
  );
}