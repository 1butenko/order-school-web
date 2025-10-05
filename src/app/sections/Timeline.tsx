"use client";

import TimeLineImage from "@/assets/TimelineImg";
import { AnimatedProps } from "@/types/motion";

import HoverInfo from "@/components/sections/HoverInfo";

export default function Timeline({ id }: AnimatedProps) {
  return (
    <section id={id} className="w-full min-h-screen py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center text-foreground px-4">
        <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
          Таймлайн модулів
        </h1>
      </div>

      <div className="relative mx-auto mt-8">
        <div className="flex justify-center items-center">
          <TimeLineImage />
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <HoverInfo
            label="Вступ"
            text="Знайомство зі структурою курсу, форматом занять і основними навичками: аргументація, дебати, робота з кейсами. На практиці випробуємо, як виглядає семінар у форматі діалогу."
            top="6%"
            right="15%"
            module="Модуль 1"
            date="17.10 — 25.10"
          />
          <HoverInfo
            label="“Товсті” Ідеології. Частина 1."
            text="Консерватизм, лібералізм, соціалізм, націоналізм, фемінізм, анархізм, екологізм, популізм та інші. Ми розберемо суть кожної ідеології, їхні аргументи та прояви у сучасному житті. Ви навчитеся формувати власну позицію щодо ключових соціальних проблем."
            top="24%"
            left="14%"
            module="Модуль 2"
            date="01.11 — 08.11"
          />
          <HoverInfo
            label="“Товсті” Ідеології. Частина 2"
            text="Консерватизм, лібералізм, соціалізм, націоналізм, фемінізм, анархізм, екологізм, популізм та інші. Ми розберемо суть кожної ідеології, їхні аргументи та прояви у сучасному житті. Ви навчитеся формувати власну позицію щодо ключових соціальних проблем."
            top="44%"
            right="14%"
            module="Модуль 3"
            date="15.11 — 22.11"
          />
          <HoverInfo
            label="Війна, торг, правила"
            text="Як держави взаємодіють між собою та чому їхні інтереси часто стикаються? Обговоримо агресію РФ проти України, можливість вступу до ЄС і НАТО, а також відмінності політичного мислення у Європі, США, РФ та Китаї."
            top="64%"
            left="14%"
            module="Модуль 4"
            date="29.11 — 06.12"
          />
          <HoverInfo
            label="Мораль в політиці"
            text="Досліджуємо моральний бік політики. Думаємо, чи існує він взагалі. Вчимося використовувати дуже специфічний інструментарій моральної філософії."
            top="86%"
            right="14%"
            module="Модуль 5"
            date="13.12 — 20.12"
          />
        </div>
      </div>
    </section>
  );
}
