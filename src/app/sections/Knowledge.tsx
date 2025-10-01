"use client";

import knowledge from "@/assets/knowledge.png";
import Image from "next/image";
import { motion } from "framer-motion";

import { AnimatedProps } from "@/types/motion";

export default function Knowledge({ id }: AnimatedProps) {
  return (
    <section className="w-full min-h-screen py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center text-foreground px-4">
        <motion.h1
          className="text-4xl tracking-wider uppercase font-sans mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Навички і знання, які ти отримаєш
        </motion.h1>

        <motion.h2
          className="text-lg font-mono font-medium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Ти розберешся, як працює політика на різних рівнях — від ідей та
          історії до сучасних процесів:
        </motion.h2>
      </div>

      <motion.div
        className="w-full mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src={knowledge}
          alt="Навички і знання, які ти отримаєш"
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto mt-8 font-mono font-medium text-justify text-lg bg-primary px-4 py-6 rounded-2xl text-white"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Крім цього, на тебе чекають візити до посольств, зустрічі з відомими
        спікерами та дослідницькі завдання, щоб глибше зрозуміти політичні
        процеси.
      </motion.div>
    </section>
  );
}
