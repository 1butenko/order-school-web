"use client";

import { useMemo, useEffect, useState } from "react";
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
  moduleId: number;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

type ModuleStatus = "upcoming" | "current" | "next" | "completed";

function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const formatDate = (d: Date) =>
    d.toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit" });
  return `${formatDate(start)}-${formatDate(end)}`;
}

export default function Timeline({ id }: { id?: string }) {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const now = useMemo(() => new Date(), []);
  const currentYear = now.getFullYear();

  useEffect(() => {
    async function fetchModules() {
      try {
        const response = await fetch("/api/modules");
        if (!response.ok) throw new Error("Failed to fetch modules");
        const data = await response.json();
        setModules(data.modules);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchModules();
  }, []);

  const { modulesWithStatus, activeModuleId } = useMemo(() => {
    let foundNext = false;
    let activeId: string | undefined;

    const processedModules = modules.map((module) => {
      const start = new Date(module.startDate);
      const end = new Date(module.endDate);
      let status: ModuleStatus = "completed";

      if (now >= start && now <= end) {
        status = "current";
        if (!activeId) activeId = module.id;
      } else if (now < start && !foundNext) {
        status = "next";
        foundNext = true;
        if (!activeId) activeId = module.id;
      }

      return {
        ...module,
        status,
        dateRange: formatDateRange(module.startDate, module.endDate),
      };
    });

    return { modulesWithStatus: processedModules, activeModuleId: activeId };
  }, [modules, now]);

  const getStatusBadge = (status: ModuleStatus) => {
    if (status === "completed") return null;

    const badges = {
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

    const badge = badges[status as keyof typeof badges];
    return badge ? <span className={badge.className}>{badge.text}</span> : null;
  };

  if (loading) {
    return (
      <section id={id || "timeline"} className="relative w-full min-h-screen py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center text-black px-6 md:px-4">
          <h1 className="text-2xl md:text-4xl tracking-wide md:tracking-wider uppercase font-sans font-bold mb-2 md:mb-2">
            Навчальні модулі
          </h1>
          <div className="my-6 mx-auto max-w-36 md:max-w-xl h-1 bg-primary rounded-full"></div>
          <p className="text-lg font-mono font-medium mt-8">Завантаження...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id={id || "timeline"} className="relative w-full min-h-screen py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center text-black px-6 md:px-4">
          <h1 className="text-2xl md:text-4xl tracking-wide md:tracking-wider uppercase font-sans font-bold mb-2 md:mb-2">
            Навчальні модулі
          </h1>
          <div className="my-6 mx-auto max-w-36 md:max-w-xl h-1 bg-primary rounded-full"></div>
          <p className="text-lg font-mono font-medium mt-8 text-red-600">
            Помилка: {error}
          </p>
        </div>
      </section>
    );
  }

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

        <motion.p
          className="text-lg font-mono font-medium text-center mt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Ви можете обирати будь-який модуль або повну річну програму
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto font-mono my-16 px-4 sm:px-0">
        <Accordion type="single" collapsible defaultValue={activeModuleId}>
          {modulesWithStatus.map((module) => (
            <AccordionItem key={module.id} value={module.id} className="border-dashed">
              <AccordionTrigger className="hover:no-underline group">
                <div className="flex flex-col text-left gap-1 font-sans">
                  <div className="flex items-center gap-2 font-medium">
                    <span>{module.dateRange}</span>
                    {getStatusBadge(module.status)}
                  </div>
                  <div className="group-hover:underline font-medium">
                    Модуль {module.moduleId}: {module.title}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground">{module.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}

          <AccordionItem value="other-modules" className="border-dashed">
            <AccordionTrigger className="hover:no-underline group">
              <div className="flex flex-col text-left gap-1 font-sans">
                <div className="group-hover:underline font-medium">
                  Інші модулі у розробці
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-foreground">
                Ми прагнемо зробити навчальні модулі захопливими і практичними. Для
                цього ми ретельно готуємо кожен модуль та залучаємо досвідчених
                експертів та лекторів. Тому точна інформація про нові модулі буде
                з'являтися поступово
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

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