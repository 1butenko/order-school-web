"use client";

import { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";

import StructureCols from "@/components/sections/StructureCols";

import Image from "next/image";
import outline from "@/assets/outline.png";
import col1 from "@/assets/col1.png";
import col2 from "@/assets/col2.png";
import col3 from "@/assets/col3.png";

export default function Structure({ id }: AnimatedProps) {
  return (
    <section className="w-full min-h-screen py-20 overflow-x-hidden" id={id}>
      <div className="max-w-4xl mx-auto text-foreground px-4">
        <motion.h1
          className="text-4xl tracking-wider uppercase font-sans text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Cтруктура курсу
        </motion.h1>

        <motion.div
          className="my-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image src={outline} alt="Header outline" />
        </motion.div>

        <motion.h2
          className="text-lg font-mono font-medium text-justify mt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Річна програма гуртка поділена на модулі відповідно до кожної теми.
          Кожен навчальний модуль триває 2 тижні і складається з трьох логічно
          пов'язаних занять: Теорія, Практика та Досвід.
        </motion.h2>
      </div>

      <motion.div
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          },
        }}
      >
        <div className="w-full flex justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 md:gap-8 lg:gap-12 xl:gap-16 items-end max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full"
            >
              <StructureCols
                header="1. Теорія"
                paragph1="Заняття відкриває тему модуля, дає теоретичну основу та ключові поняття, необхідні для подальшої роботи. Викладач окреслює актуальні дискусії, презентує концептуальні рамки й показує приклади з політичної практики."
                paragph2="— на засвоєнні теоретичної основи та ключових понять через аналіз дискусій і прикладів із політичної практики."
                span="Акцент"
              />
              <div className="mt-auto pt-8 w-full flex justify-center items-end">
                <Image
                  src={col1}
                  alt="Column 1"
                  className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-contain object-bottom"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col h-full"
            >
              <StructureCols
                header="2. Практика"
                paragph1="Заняття спрямоване на застосування отриманих знань у практичних форматах. Симуляції, ігри, моделювання кейсів та розробка політик на основі пройдених тем, а також дебати – це інструменти ефективного засвоєння усіх матеріалів."
                paragph2="— на розвитку аналітичних і комунікаційних навичок через активне залучення."
                span="Акцент"
              />
              <div className="mt-auto pt-8 w-full flex justify-center items-end">
                <Image
                  src={col2}
                  alt="Column 2"
                  className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-contain object-bottom"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <StructureCols
                header="3. Досвід"
                paragph1="Заняття на якому учні можуть творчо розвинути власні інтереси в межах теми. Окрім можливості запропонувати власну активність, ми будемо відвідувати державні інституції, посольства, слухатизапрошених експертів, а також такі активності як: ігри, творчі завдання, презентації, кіноклуби."
                paragph2="— на творчій самореалізації та розширенні досвіду учнів через власні ініціативи, зовнішні візити й різноманітні активності."
                span="Акцент"
              />
              <div className="mt-auto pt-8 w-full flex justify-center items-end">
                <Image
                  src={col3}
                  alt="Column 3"
                  className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-contain object-bottom"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}