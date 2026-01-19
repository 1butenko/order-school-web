"use client";

import knowledge from "@/assets/knowledge.png";
import knowledgeMobile from "@/assets/knowledge-mobile.svg";
import redRectangle from "@/assets/Skills_Rounded_Rectangle_knowledge-mobile.svg";
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
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const scaleImg = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="w-full md:min-h-screen py-12 md:py-20 overflow-x-hidden"
      id={id}
    >
      {/* Desktop header */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="max-w-6xl mx-auto text-center text-foreground px-6 md:px-4"
      >
        <h2 className="hidden md:block text-[22px] leading-[30px] md:text-4xl tracking-normal md:tracking-wider uppercase font-sans font-bold mb-2">
          Навички і знання, які ти отримаєш
        </h2>
        <h3 className="hidden md:block text-lg font-mono font-medium">
          Ти розберешся, як працює політика на різних рівнях — від ідей та
          історії до сучасних процесів:
        </h3>
      </motion.div>

      {/* Mobile header */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="block md:hidden max-w-6xl mx-auto text-left text-foreground px-6"
      >
        <div className="relative inline-block mb-2">
          <Image
            src={redRectangle}
            alt=""
            className="absolute -top-3 right-6 w-[40px] h-[60px]"
            width={40}
            height={60}
          />
          <h2 className="text-[22px] leading-[30px] uppercase font-sans font-bold relative z-10">
            Навички і знання,
            <br />
            які ви отримаєте
          </h2>
        </div>
        <h3 className="text-[15px] leading-[20px] font-mono font-medium mb-6">
          Ви розберетеся, як працює політика на різних рівнях — від ідей та історії
          до сучасних процесів:
        </h3>
      </motion.div>

      <motion.div
        style={{ scale: scaleImg, opacity: opacity1 }}
        className="w-full mt-6 md:mt-8 overflow-hidden px-4 md:px-0"
      >
        {/* Desktop version */}
        <Image
          src={knowledge}
          alt="Навички і знання, які ти отримаєш"
          className="hidden md:block w-full h-auto max-w-full object-contain"
          priority
        />
        {/* Mobile version */}
        <Image
          src={knowledgeMobile}
          alt="Навички і знання"
          className="block md:hidden w-full h-auto max-w-full object-contain"
          priority
        />
      </motion.div>

      <motion.div
        style={{ opacity: opacityText, y: y1 }}
        className="hidden md:block max-w-4xl mt-6 md:mt-8 font-mono font-medium text-justify text-[15px] leading-[20px] md:text-lg bg-primary px-6 md:px-8 py-6 md:py-6 rounded-[24px] md:rounded-2xl text-white mx-4 md:mx-auto"
      >
        Крім цього, на тебе чекають візити до посольств, зустрічі з відомими
        спікерами та дослідницькі завдання, щоб глибше зрозуміти політичні
        процеси.
      </motion.div>
    </section>
  );
}
