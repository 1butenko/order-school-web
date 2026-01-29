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

interface ModuleRaw {
  id: string;
  moduleId: number;
  title: string;
  dateRange?: string; // Format: "DD.MM-DD.MM" (optional for backward compatibility)
  startDate?: string; // ISO format or parseable date string
  endDate?: string;   // ISO format or parseable date string
  description: string;
}

interface Module {
  id: string;
  moduleId: number;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

type ModuleStatus = "триває" | "наступний" | "незабаром початок" | null;

// STEP 1: DATE NORMALIZATION
function normalizeModule(raw: ModuleRaw, baseYear: number): Module | null {
  let startDate: Date;
  let endDate: Date;

  // Handle dateRange format (DD.MM-DD.MM)
  if (raw.dateRange) {
    const parts = raw.dateRange.split("-");
    if (parts.length !== 2) return null;

    const [startPart, endPart] = parts;
    const [startDay, startMonth] = startPart.split(".").map(Number);
    const [endDay, endMonth] = endPart.split(".").map(Number);

    if (!startDay || !startMonth || !endDay || !endMonth) return null;

    let startYear = baseYear;
    let endYear = baseYear;

    // If end month is less than start month, it wraps to next year
    if (endMonth < startMonth) {
      endYear = baseYear + 1;
    }

    startDate = new Date(startYear, startMonth - 1, startDay);
    endDate = new Date(endYear, endMonth - 1, endDay);
  }
  // Handle existing startDate/endDate format
  else if (raw.startDate && raw.endDate) {
    startDate = new Date(raw.startDate);
    endDate = new Date(raw.endDate);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return null;
    }
  }
  else {
    return null; // Invalid format
  }

  return {
    id: raw.id,
    moduleId: raw.moduleId,
    title: raw.title,
    startDate,
    endDate,
    description: raw.description,
  };
}

function formatDateRange(startDate: Date, endDate: Date): string {
  const formatDate = (d: Date) =>
    d.toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit" });
  return `${formatDate(startDate)}-${formatDate(endDate)}`;
}

export default function Timeline({ id }: { id?: string }) {
  const [rawModules, setRawModules] = useState<ModuleRaw[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const now = useMemo(() => new Date(), []);
  const currentYear = now.getFullYear();
  const baseYear = now.getMonth() >= 8 ? currentYear : currentYear - 1; // Academic year starts in September

  useEffect(() => {
    async function fetchModules() {
      try {
        const response = await fetch("/api/modules");
        if (!response.ok) throw new Error("Failed to fetch modules");
        const data = await response.json();
        setRawModules(data.modules);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchModules();
  }, []);

  const { modulesWithStatus, activeModuleId } = useMemo(() => {
    // STEP 1: Normalize all modules
    const normalized: Module[] = rawModules
      .map((raw) => normalizeModule(raw, baseYear))
      .filter((m): m is Module => m !== null);

    // STEP 2: Sort by startDate (MANDATORY)
    const sorted = [...normalized].sort((a, b) => {
      return a.startDate.getTime() - b.startDate.getTime();
    });

    const nowTime = now.getTime();
    let activeIndex = -1;
    let soonIndex = -1;

    // STEP 3: CASE A - Find active module
    for (let i = 0; i < sorted.length; i++) {
      const start = sorted[i].startDate.getTime();
      const end = sorted[i].endDate.getTime();
      if (nowTime >= start && nowTime <= end) {
        activeIndex = i;
        break;
      }
    }

    // STEP 3: CASE B - If no active, find nearest future
    if (activeIndex === -1) {
      for (let i = 0; i < sorted.length; i++) {
        const start = sorted[i].startDate.getTime();
        if (start > nowTime) {
          soonIndex = i;
          break;
        }
      }
    }

    let activeId: string | undefined;

    // Assign statuses based on strict rules
    const processed = sorted.map((module, index) => {
      let status: ModuleStatus = null;

      if (activeIndex !== -1) {
        // CASE A: Active module exists
        if (index === activeIndex) {
          status = "триває";
          if (!activeId) activeId = module.id;
        } else if (index === activeIndex + 1) {
          status = "наступний";
        }
      } else {
        // CASE B: No active module
        if (index === soonIndex) {
          status = "незабаром початок";
          if (!activeId) activeId = module.id;
        }
      }

      return {
        ...module,
        status,
        dateRange: formatDateRange(module.startDate, module.endDate),
      };
    });

    return { modulesWithStatus: processed, activeModuleId: activeId };
  }, [rawModules, now, baseYear]);

  const getStatusBadge = (status: ModuleStatus) => {
    if (!status) return null;

    const badges: Record<Exclude<ModuleStatus, null>, { text: string; className: string }> = {
      "триває": {
        text: "Триває",
        className:
          "bg-primary text-white font-medium uppercase text-xs px-2 py-0.5 rounded-sm tracking-wider",
      },
      "наступний": {
        text: "Наступний",
        className:
          "text-primary border border-dashed font-medium uppercase text-xs px-2 py-0.5 rounded-sm tracking-wider",
      },
      "незабаром початок": {
        text: "Незабаром початок",
        className:
          "bg-primary text-white font-medium uppercase text-xs px-2 py-0.5 rounded-sm tracking-wider",
      },
    };

    const badge = badges[status];
    return <span className={badge.className}>{badge.text}</span>;
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