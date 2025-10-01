"use client";

import { AnimatedProps } from "@/types/motion";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import StructureCols from "@/components/sections/StructureCols";

import outline from "@/assets/outline.png";
import col1 from "@/assets/col1.png";
import col2 from "@/assets/col2.png";
import col3 from "@/assets/col3.png";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const staggerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const structureData = [
  {
    header: "1. Теорія",
    paragph1:
      "Заняття відкриває тему модуля, дає теоретичну основу та ключові поняття, необхідні для подальшої роботи. Викладач окреслює актуальні дискусії, презентує концептуальні рамки й показує приклади з політичної практики.",
    paragph2:
      "— на засвоєнні теоретичної основи та ключових понять через аналіз дискусій і прикладів із політичної практики.",
    span: "Акцент",
  },
  {
    header: "2. Практика",
    paragph1:
      "Заняття спрямоване на застосування отриманих знань у практичних форматах. Симуляції, ігри, моделювання кейсів та розробка політик на основі пройдених тем, а також дебати – це інструменти ефективного засвоєння усіх матеріалів.",
    paragph2:
      "— на розвитку аналітичних і комунікаційних навичок через активне залучення.",
    span: "Акцент",
  },
  {
    header: "3. Досвід",
    paragph1:
      "Заняття на якому учні можуть творчо розвинути власні інтереси в межах теми. Окрім можливості запропонувати власну активність, ми будемо відвідувати державні інституції, посольства, слухати запрошених експертів, а також такі активності як: ігри, творчі завдання, презентації, кіноклуби.",
    paragph2:
      "— на творчій самореалізації та розширенні досвіду учнів через власні ініціативи, зовнішні візити й різноманітні активності.",
    span: "Акцент",
  },
];

const images = [col1, col2, col3];

export default function Structure({ id }: AnimatedProps) {
  return (
    <section id={id} className="w-full min-h-screen py-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 text-foreground">
        <motion.h1
          className="text-4xl tracking-wider uppercase font-sans text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Cтруктура курсу
        </motion.h1>

        <motion.div
          className="my-6 flex justify-center"
          variants={scaleVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image src={outline} alt="Header outline" />
        </motion.div>

        <motion.h2
          className="text-lg font-mono font-medium text-justify mt-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Річна програма гуртка поділена на модулі відповідно до кожної теми.
          Кожен навчальний модуль триває 2 тижні і складається з трьох логічно
          пов’язаних занять: Теорія, Практика та Досвід.
        </motion.h2>
      </div>

      <motion.div
        className="mt-16"
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-48 items-start">
            {structureData.map((item, index) => (
              <motion.div
                key={index}
                variants={headerVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <StructureCols {...item} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-48 items-end">
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={headerVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image src={img} alt={`Column ${index + 1}`} className="w-96 h-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}