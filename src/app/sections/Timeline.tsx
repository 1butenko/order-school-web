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
    <section id="timeline" className="relative w-full min-h-screen py-20">
      <div className="max-w-6xl mx-auto text-center text-foreground px-4">
        <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
          Таймлайн модулів
        </h1>
        <h2 className="text-lg font-mono font-medium">
          Ви можете обирати будь-який модуль або повну річну програму
        </h2>
      </div>

      <ol className="relative mt-20 space-y-8 before:absolute before:left-1/2 before:top-0 before:h-full before:w-[3px] before:-translate-x-1/2 before:rounded-full before:bg-primary dark:before:bg-gray-700">
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

      <h2 className="mt-4 text-center font-mono text-xl font-medium uppercase">
        Інші модулі у розробці
      </h2>

      <div className="mt-2 flex items-center justify-center tracking-wider">
        <a href="https://docs.google.com/document/d/1wWxFdJo5cmMuA-vSaSMeI0y0GvrWxxek/edit">
          <Button className="cursor-pointer px-12 py-6 font-sans text-2xl uppercase hover:bg-white hover:text-primary">
            Повна програма
          </Button>
        </a>
      </div>
    </section>
  );
}