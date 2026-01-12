"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

interface Module {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

const modules: Module[] = [
  {
    id: "module-1",
    title: "Модуль 1: Вступ",
    startDate: "2025-10-17",
    endDate: "2025-10-25",
    description:
      "Ми зʼясуємо що таке політологія, навіщо її вивчати і як вона допомагає зрозуміти владу та ключові суспільні процеси. Ми розберемося, чому дебати та вміння будувати сильні аргументи є одним із найважливіших політичних інструментів. Цей модуль закладе фундамент для всіх наших майбутніх дискусій.",
  },
  {
    id: "module-2",
    title: "Модуль 2: «Товсті» ідеології. Частина 1",
    startDate: "2025-11-01",
    endDate: "2025-11-08",
    description:
      "Досліджуємо класичні, фундаментальні ідеології через призму чотирьох основних джерел політики: порядок, свобода, справедливість та приналежність. Наша мета — відчути «дух» кожної ідеології, зрозуміти її як технологічний проєкт та спрощення дійсності. Навчимося впізнавати прояви цих ідеологій у різноманітних «текстах» і визначимо, яка з них є для нас найближчою чи найвіддаленішою.",
  },
  {
    id: "module-3",
    title: "Модуль 3: «Тонкі» ідеології",
    startDate: "2025-11-15",
    endDate: "2025-11-22",
    description:
      "Досліджуємо букет сучасних «тонких» ідеологій (фемінізм, екологізм, популізм та інші), які впливають на політику через призму понять «народ», «тіло» та «планета». Розглянемо їхню взаємодію з класичними ідеологіями. Спробуємо себе в ролі політтехнологів, сконструюємо нову ідеологію та визначимо власну позицію щодо суспільних питань.",
  },
  {
    id: "module-4",
    title: "Модуль 4: Мораль в політиці",
    startDate: "2025-12-13",
    endDate: "2025-12-20",
    description:
      "Досліджуємо моральний бік політики. Думаємо, чи існує він взагалі. Вчимося використовувати специфічний інструментарій моральної філософії для аналізу політичних рішень.",
  },
  {
    id: "module-5",
    title: "Модуль 5: Міжнародне право",
    startDate: "2026-01-17",
    endDate: "2026-01-24",
    description:
      "Вторгнутись у Венесуелу виправдано, а в Палестину — ні? Чи спрацює ордер на арешт Путіна від міжнародного суду? Чому так складно використати заморожені активи РФ? Ми розбиратимемось у фундаментальних принципах міжнародного права, структурі міжнародної системи, її органах, правах та обмеженнях. Дебатуватимемо на гострі теми та аналізуватимемо реальні кейси.",
  },
  {
    id: "module-6",
    title: "Модуль 6: Війна, торг, правила",
    startDate: "2026-01-31",
    endDate: "2026-02-07",
    description:
      "Як держави взаємодіють між собою та чому їхні інтереси часто стикаються? Обговоримо агресію РФ проти України, можливість вступу до ЄС і НАТО, а також відмінності політичного мислення у Європі, США, РФ та Китаї.",
  },
  {
    id: "module-7",
    title: "Модуль 7: Політичні режими",
    startDate: "2026-02-14",
    endDate: "2026-02-21",
    description:
      "Чи завжди демократія — це шлях до процвітання, а авторитаризм — абсолютне зло? Ми дослідимо політичний спектр: від анархії до ефективних диктатур на кшталт Сінгапуру. Проаналізуємо легітимність влади та теорію «хвиль демократії» Хантінгтона, щоб зрозуміти механіку падіння й відродження режимів.",
  },
  {
    id: "module-8",
    title: "Модуль 8: Корупція та теорія ігор",
    startDate: "2026-02-28",
    endDate: "2026-03-07",
    description:
      "Цей модуль перетворює хаос політичних конфліктів на стратегічні моделі. Ми розглянемо політику крізь призму теорії ігор: «Дилема в'язня», гра в «Боягуза», ядерний шантаж, зрада і співпраця. Це набір інструментів для прорахунку ходів опонента, де вирішує холодна логіка, а не емоції.",
  },
];

type ModuleStatus = "upcoming" | "current" | "next" | "completed";

function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const formatDate = (d: Date) =>
    d.toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit" });
  return `${formatDate(start)}-${formatDate(end)}`;
}

export default function Timeline({ id }: { id?: string }) {
  const now = useMemo(() => new Date(), []);
  const currentYear = now.getFullYear();

  const modulesWithStatus = useMemo(() => {
    const firstModuleThisYearIndex = modules.findIndex(
      (m) => new Date(m.startDate).getFullYear() === currentYear
    );

    return modules.map((module, index) => {
      const start = new Date(module.startDate);
      const end = new Date(module.endDate);

      let status: ModuleStatus = "completed";

      if (now >= start && now <= end) {
        status = "current";
      } else if (now < start) {
        if (index === firstModuleThisYearIndex) {
          status = "upcoming"; // «Незабаром почнеться»
        } else if (
          index === firstModuleThisYearIndex + 1 &&
          now >= new Date(modules[firstModuleThisYearIndex].endDate)
        ) {
          status = "next";
        }
      }

      return {
        ...module,
        status,
        dateRange: formatDateRange(module.startDate, module.endDate),
      };
    });
  }, [now, currentYear]);

  const getStatusBadge = (status: ModuleStatus) => {
    if (status === "completed") return null;

    const badges = {
      upcoming: {
        text: "Незабаром початок",
        className:
          "bg-primary text-white font-medium uppercase text-xs px-2 py-0.5 rounded-sm tracking-wider",
      },
      current: {
        text: "Триває",
        className:
          "bg-primary text-white font-medium uppercase text-xs px-2 py-0.5 rounded-sm tracking-wider",
      },
      next: {
        text: "Наступний",
        className:
          "text-primary border border-dashed font-medium uppercase text-xs px-2 py-0.5 rounded-sm tracking-wider",
      },
    };

    const badge = badges[status];
    return badge ? <span className={badge.className}>{badge.text}</span> : null;
  };

  return (
    <motion.section
      id={id || "timeline"}
      className="relative w-full min-h-screen py-12 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto text-center text-black px-6 md:px-4">
        <h1 className="text-2xl md:text-4xl tracking-wide md:tracking-wider uppercase font-sans font-bold mb-2 md:mb-2">
          Навчальні модулі
        </h1>
        <div className="my-6 mx-auto max-w-36 md:max-w-xl h-1 bg-primary rounded-full"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto font-mono my-16 px-4 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        <Accordion type="single" collapsible>
          {modulesWithStatus.map((module) => (
            <motion.div
              key={module.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <AccordionItem value={module.id} className="border-dashed">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex flex-col text-left gap-1 font-sans">
                    <div className="flex items-center gap-2 font-medium">
                      <span>{module.dateRange}</span>
                      {getStatusBadge(module.status)}
                    </div>
                    <div className="group-hover:underline font-medium">
                      {module.title}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground">{module.description}</p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      <div className="mt-4 md:mt-2 flex items-center justify-center tracking-wider px-6">
        <a href="/onboarding">
          <Button className="cursor-pointer px-8 md:px-12 py-5 md:py-6 font-sans text-lg md:text-2xl uppercase hover:bg-white hover:text-primary w-full md:w-auto">
            Хочу на курс
          </Button>
        </a>
      </div>
    </motion.section>
  );
}