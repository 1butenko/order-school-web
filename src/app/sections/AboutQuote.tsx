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
      className="relative w-full mt-12 md:mt-20 flex items-center justify-center px-0 md:px-0"
    >
      <div className="grid grid-cols-[1fr_auto] md:grid-cols-[4fr_1fr] md:grid-rows-1 gap-4 md:gap-1 w-full max-w-[1800px] items-center">
        <motion.div 
          className="flex items-center justify-center"
          style={{ 
            x: typeof window !== 'undefined' && window.innerWidth >= 768 ? textX : 0, 
            opacity: typeof window !== 'undefined' && window.innerWidth >= 768 ? textOpacity : 1 
          }}
        >
          <div className="w-full border-3 md:border-l-0 py-6 md:py-10 px-4 md:px-16 rounded-r-4xl border-primary">
            <h1 className="font-sans uppercase md:normal-case font-bold text-base md:text-3xl md:leading-snug tracking-wide md:tracking-normal">
              "Демократія має народжуватися у кожному новому поколінні, і саме освіта допомагає їй з'явитися на світ." — Джон Дьюї
            </h1>
          </div>
        </motion.div>
        <motion.div 
          className="flex justify-end md:justify-start"
          style={{ 
            x: typeof window !== 'undefined' && window.innerWidth >= 768 ? imageX : 0, 
            opacity: typeof window !== 'undefined' && window.innerWidth >= 768 ? imageOpacity : 1,
            rotate: typeof window !== 'undefined' && window.innerWidth >= 768 ? imageRotate : 0
          }}
        >
          <div className="w-32 md:w-full md:max-w-sm flex-shrink-0">
            <Image src={quote} alt="John Dewey" className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}