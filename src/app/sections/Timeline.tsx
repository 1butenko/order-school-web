"use client";

import TimeLineImage from "@/assets/TimelineImg";
import { AnimatedProps } from "@/types/motion";

import HoverInfo from "@/components/sections/HoverInfo";
import TimelineFigure from "@/components/sections/TimelineFigure";
import model1 from "@/assets/model1(1).png";
import model1_2 from "@/assets/model1(2).png";
import model2 from "@/assets/model2.png";
import model2_2 from "@/assets/model2(2).png";
import model3 from "@/assets/model3.png";
import model3_2 from "@/assets/model3(2).png";
import model3_3 from "@/assets/model3(3).png";
import model3_4 from "@/assets/model3(4).png";
import model4 from "@/assets/model4.png";
import model4__2 from "@/assets/model4(2).png";
import model5 from "@/assets/model5.png";


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

        {/* Decorative figures to mimic the poster collage */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Top left - near module 1 (person sitting) */}
          <TimelineFigure src={model1} alt="person sitting" left="2%" top="3%" width={300} height={340} className="opacity-90" />
          
          {/* Top left - near module 1 (notebook/calendar) */}
          <TimelineFigure src={model1_2} alt="notebook" left="12%" top="1%" width={180} height={200} className="opacity-85" />

          {/* Left side - near module 2 (collage) */}
         
          <TimelineFigure src={model2} alt="collage right" left="60%" top="27%" width={280} height={200} className="opacity-90" />
          <TimelineFigure src={model2_2} alt="collage right" left="67%" top="25%" width={280} height={200} className="opacity-90" />

          {/* Right side - near module 3 (large collage) */}
          <TimelineFigure src={model3} alt="collage left" right="70%" top="50%" width={320} height={240} className="opacity-85" />
          <TimelineFigure src={model3_2} alt="collage left" right="85%" top="58%" width={320} height={240} className="opacity-85" />
          <TimelineFigure src={model3_3} alt="collage left" right="55%" top="58%" width={320} height={240} className="opacity-85" />

          <TimelineFigure src={model3_4} alt="collage left" right="57%" top="56.5%" width={320} height={240} className="opacity-85" />
          <TimelineFigure src={model3_4} alt="collage left" right="57%" top="58%" width={320} height={240} className="opacity-85" />
          <TimelineFigure src={model3_4} alt="collage left" right="57%" top="59.5%" width={320} height={240} className="opacity-85" />
          <TimelineFigure src={model3_4} alt="collage left" right="57%" top="61%" width={320} height={240} className="opacity-85" />
          

          {/* Left side - near module 4 (tractor/machinery) */}
          <TimelineFigure src={model4} alt="machinery" left="67%" top="70%" width={240} height={180} className="opacity-85" />
          <TimelineFigure src={model4__2} alt="machinery" left="75%" top="72%" width={240} height={180} className="opacity-85" />
          
          {/* Right bottom - near module 5 (historical photos) */}
          <TimelineFigure src={model5} alt="historical collage" right="60%" top="90%" width={260} height={200} className="opacity-90" />
          
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
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
