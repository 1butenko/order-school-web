"use client";

import { motion } from "framer-motion";
import { AnimatedProps } from "@/types/motion";

import TimelineItem from "@/components/sections/TimelineItem";

import module1 from "@/assets/module1.png";
import module2 from "@/assets/module2.png"
import module3 from "@/assets/module3.png"
import module4 from "@/assets/module4.png"
import module5 from "@/assets/module5.png"

import { Button } from "@/components/ui/button";

export default function Timeline({ id }: AnimatedProps) {
  return (
    <section className="relative w-full min-h-screen py-20" id={id}>
       <motion.div
        className="max-w-6xl mx-auto text-center text-foreground px-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
          Таймлайн модулів
        </h1>
        <h2 className="text-lg font-mono font-medium">
          Ви можете обирати будь-який модуль або повну річну програму
        </h2>
      </motion.div>
      <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-[3px] before:-translate-x-1/2 before:rounded-full before:bg-primary dark:before:bg-gray-700 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TimelineItem
            module="Модуль 1"
            date="01.11 - 08.11"
            text="Знайомство зі структурою курсу, форматом занять і основними навичками: аргументація, дебати, робота з кейсами. На практиці випробуємо, як виглядає семінар у форматі діалогу."
            label="Вступ"
            image={module1}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TimelineItem
            module="Модуль 2"
            date="12.11 - 22.11"
            text='Досліджуємо класичні, фундаментальні ідеології через призму чотирьох основних джерел політики: порядок, свобода, справедливість та приналежність. Наша мета — відчути "дух" кожної ідеології, зрозуміти її як технологічний проєкт та спрощення дійсності. Навчимося впізнавати прояви цих ідеологій у різноманітних "текстах" і визначимо, яка з них є для нас найближчою чи найвіддаленішою.'
            label='"Товсті" Ідеології. Частина 1'
            image={module2}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TimelineItem
            module="Модуль 3"
            date="26.11 - 06.12"
            text='Досліджуємо букет сучасних "тонких" ідеологій (фемінізм, екологізм, популізм та інші), які впливають на політику через призму понять "народ", "тіло" та "планета". Розглянемо їхню взаємодію з класичними ідеологіями. Спробуємо себе в ролі політтехнологів, сконструюємо нову ідеологію та визначимо власну позицію щодо суспільних питань.'
            label='"Тонкі" Ідеології. Частина 2'
            image={module3}
          />
        </motion.div>
         <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TimelineItem
            module="Модуль 4"
            date="10.12 - 20.12"
            text='Досліджуємо моральний бік політики. Думаємо, чи існує він взагалі. Вчимося використовувати дуже специфічний інструментарій моральної філософії.'
            label="Мораль в політиці"
            image={module4}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TimelineItem
            module="Модуль 5"
            date="10.01 - 17.01"
            text='Як держави взаємодіють між собою та чому їхні інтереси часто стикаються? Обговоримо агресію РФ проти України, можливість вступу до ЄС і НАТО, а також відмінності політичного мислення у Європі, США, РФ та Китаї.'
            label="Війна, торг, правила"
            image={module5}
          />
        </motion.div>
      </ol>
       <motion.h2 
        className="text-xl font-medium text-center mt-4 uppercase font-mono"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
          Інші модулі у розробці
        </motion.h2>
        <motion.div 
          className="flex items-center justify-center mt-2 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="https://docs.google.com/document/d/1wWxFdJo5cmMuA-vSaSMeI0y0GvrWxxek/edit">
            <Button className="uppercase text-2xl font-sans px-12 py-6 hover:bg-white hover:text-primary cursor-pointer">Повна програма</Button>
          </a>
        </motion.div>
    </section>
  );
}