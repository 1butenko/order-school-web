"use client";

import { AnimatedProps } from "@/types/motion";
import TimelineItem from "@/components/sections/TimelineItem";
import module1 from "@/assets/module1.png";
import module2 from "@/assets/module2.png";
import module3 from "@/assets/module3.png";
import module4 from "@/assets/module4.png";
import module5 from "@/assets/module5.png";
import { Button } from "@/components/ui/button";

export default function Timeline({ id }: AnimatedProps) {
  return (
    <section id="timeline" className="relative w-full min-h-screen py-12 md:py-20">
      <div className="max-w-6xl mx-auto text-center text-black px-6 md:px-4">
        <h1 className="text-2xl md:text-4xl tracking-wide md:tracking-wider uppercase font-sans font-bold mb-2 md:mb-2">
          Таймлайн модулів
        </h1>
        <h2 className="text-sm md:text-lg font-mono font-medium md:font-medium">
          Ви можете обирати будь-який модуль або повну річну програму
        </h2>

      </div>

      <ol className="relative mt-12 md:mt-20 space-y-8 before:absolute before:left-7.5 before:top-0 before:h-full before:w-[3px] before:bg-primary md:before:left-1/2 md:before:-translate-x-1/2">
        <TimelineItem
          module="Модуль 1"
          date="01.11 - 08.11"
          text="Знайомство зі структурою курсу, форматом занять і основними навичками: аргументація, дебати, робота з кейсами. На практиці випробуємо, як виглядає семінар у форматі діалогу."
          label="Вступ"
          image={module1}
        />
        <TimelineItem
          module="Модуль 2"
          date="12.11 - 22.11"
          text='Досліджуємо класичні, фундаментальні ідеології через призму чотирьох основних джерел політики: порядок, свобода, справедливість та приналежність. Наша мета — відчути "дух" кожної ідеології, зрозуміти її як технологічний проєкт та спрощення дійсності. Навчимося впізнавати прояви цих ідеологій у різноманітних "текстах" і визначимо, яка з них є для нас найближчою чи найвіддаленішою.'
          label="“Товсті” Ідеології. Частина 1"
          image={module2}
        />
        <TimelineItem
          module="Модуль 3"
          date="26.11 - 06.12"
          text='Досліджуємо букет сучасних "тонких" ідеологій (фемінізм, екологізм, популізм та інші), які впливають на політику через призму понять "народ", "тіло" та "планета". Розглянемо їхню взаємодію з класичними ідеологіями. Спробуємо себе в ролі політтехнологів, сконструюємо нову ідеологію та визначимо власну позицію щодо суспільних питань.'
          label="“Тонкі” Ідеології. Частина 2"
          image={module3}
        />
        <TimelineItem
          module="Модуль 4"
          date="10.12 - 20.12"
          text="Досліджуємо моральний бік політики. Думаємо, чи існує він взагалі. Вчимося використовувати дуже специфічний інструментарій моральної філософії."
          label="Мораль в політиці"
          image={module4}
        />
        <TimelineItem
          module="Модуль 5"
          date="10.01 - 17.01"
          text="Як держави взаємодіють між собою та чому їхні інтереси часто стикаються? Обговоримо агресію РФ проти України, можливість вступу до ЄС і НАТО, а також відмінності політичного мислення у Європі, США, РФ та Китаї."
          label="Війна, торг, правила"
          image={module5}
        />
      </ol>

      <h2 className="mt-8 md:mt-4 text-center font-mono text-base md:text-xl font-medium uppercase text-black px-6">
        Інші модулі у розробці
      </h2>

      <div className="mt-4 md:mt-2 flex items-center justify-center tracking-wider px-6">
        <a href="https://docs.google.com/document/d/1wWxFdJo5cmMuA-vSaSMeI0y0GvrWxxek/edit">
          <Button className="cursor-pointer px-8 md:px-12 py-5 md:py-6 font-sans text-lg md:text-2xl uppercase hover:bg-white hover:text-primary w-full md:w-auto">
            Повна програма
          </Button>
        </a>
      </div>
    </section>
  );
}