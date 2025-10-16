"use client";

import knowledge from "@/assets/knowledge.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedProps } from "@/types/motion";

export default function Knowledge({ id }: AnimatedProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const scaleImg = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen py-20 overflow-x-hidden" id={id}
    >
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="max-w-6xl mx-auto text-center text-foreground px-4"
      >
        <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
          Навички і знання, які ти отримаєш
        </h1>
        <h2 className="text-lg font-mono font-medium">
          Ти розберешся, як працює політика на різних рівнях — від ідей та
          історії до сучасних процесів:
        </h2>
      </motion.div>

      <motion.div
        style={{ scale: scaleImg, opacity: opacity1 }}
        className="w-full mt-8 overflow-hidden"
      >
        <Image
          src={knowledge}
          alt="Навички і знання, які ти отримаєш"
          className="w-full h-auto max-w-full object-contain"
          priority
        />
      </motion.div>

      <motion.div
        style={{ opacity: opacityText, y: y1 }}
        className="max-w-4xl mx-auto mt-8 font-mono font-medium text-justify text-lg bg-primary px-4 py-6 rounded-2xl text-white"
      >
        Крім цього, на тебе чекають візити до посольств, зустрічі з відомими
        спікерами та дослідницькі завдання, щоб глибше зрозуміти політичні
        процеси.
      </motion.div>
    </section>
  );
}