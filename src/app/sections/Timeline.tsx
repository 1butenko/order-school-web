"use client";

import { AnimatedProps } from "@/types/motion";

export default function Timeline({ id }: AnimatedProps) {
  return (
    <section id="timeline" className="relative w-full min-h-screen">
      <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-primary dark:before:bg-gray-700">
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-primary"></span>

            <div className="-mt-2">
              <div>
                <h3 className="text-4xl font-medium text-foreground font-sans">
                Модуль 1
              </h3>
              <time className="text-4xl/none font-medium text-foreground font-sans">
                17.10 — 25.10
              </time>

              </div>
            </div>
          </div>

          <div aria-hidden="true"></div>
        </li>
      </ol>
    </section>
  );
}
