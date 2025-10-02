"use client";

import type { AnimatedProps } from "@/types/motion";

import Image from "next/image";
import kse_building from "@/assets/kse-building.png";
import { Button } from "@/components/ui/button";
import { section } from "framer-motion/client";


export default function AboutCourse() {
  return (
    <section
      id="about"
      className="relative max-w-[1500px] w-full h-[920px] bg-[#E6E1D0] mx-auto pt-16 pb-10 px-6 md:px-10 lg:px-12 font-grotesk overflow-hidden"
    >
      <div className="w-full h-full mx-auto flex flex-col gap-10">
        {/* Заголовок */}
        <div className="relative">
          <h2
            className="text-[36px] font-[700] tracking-[.08em] text-[#191a21] rounded-[26px] px-1 py-2 uppercase"
            style={{ fontFamily: "var(--second-family)" }}
          >
            <span className="block">Чому варто обрати Київський</span>
            <span className="block">
              гурток{" "}
              <span className="text-accent-foreground">політичних</span> студій?
            </span>
          </h2>

          {/* SVG */}
          <svg
            className="absolute left-0 top-full -translate-y-[12px] md:-translate-y-[90px] w-[1360px] h-[82px] max-w-none pointer-events-none"
            width="1360"
            height="72"
            viewBox="0 0 1360 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M0 79.5H830C844.36 79.5 856 67.8594 856 53.5V28C856 13.6406 867.641 2 882 2H1383.5"
              stroke="#F42B39"
              strokeWidth="4"
            />
          </svg>
        </div>

        {/* Контент */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Текст */}
          <div className="space-y-6 text-black text-base md:text-lg leading-relaxed max-w-[663px] min-h-[274px]">
            <p>
              Це практичний курс від факультету соціальних наук{" "}
              <span className="font-semibold text-accent-foreground">KSE</span> для учнів{" "}
              <span className="font-semibold text-accent-foreground">8–11 класів</span>,
              які хочуть глибше зрозуміти політику та суспільство. Навчання
              відбувається офлайн у головному кампусі університету.
              Тут ви ознайомитеся з основами{" "}
              <span className="font-semibold text-accent-foreground">
                політичних наук і політичної філософії
              </span>
              , вивчите історію політичних ідей та їхній вплив на сучасність. Ви
              отримаєте інструменти, які допоможуть розуміти політичні процеси
              та впливати на зміни у суспільстві.
            </p>
            <p>
              Без зайвих спрощень, казуальності і поверхневості. Лише
              поглиблене вивчення першоджерел і літератури, практичні кейси та
              власні дослідження.
            </p>
            
          <p className="text-center mt-20">
  <span
    className="font-[100] text-[26px] leading-[1.1] tracking-[0.02em] text-[#000]"
    style={{ fontFamily: "var(--font-family)" }}
  >
    Старт навчання 18 жовтня
  </span>
</p>

            <svg
              className="absolute right-130 top-full -translate-y-[12px] md:-translate-y-[270px] -left-3 w-[960px] h-[82px] max-w-none pointer-events-none"
            width="1360"
            height="72"
            viewBox="0 0 1360 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M0 79.5H830C844.36 79.5 856 67.8594 856 53.5V28C856 13.6406 867.641 2 882 2H1383.5"
              stroke="#F42B39"
              strokeWidth="4"
            />
          </svg>

            {/* Кнопка */}
            <Button
              className="bg-[#F42B39] hover:bg-[#dc2230] text-white font-semibold rounded-[15px] w-[313px] h-[84px] uppercase shadow-md tracking-wide block mx-auto text-[16px] mt-10"
            >
              Реєструйся вже зараз
            </Button>
          </div>

          {/* Фото */}
          <div className="relative w-full left-12 h-[650px] md:h-[630px] z-10">
            <Image
              src={kse_building}
              alt="KSE building"
              fill
              className="object-cover grayscale rounded-bl-[15px] z-1"
              priority
            />
            {/* Червоне коло*/}
            <div className="absolute  -top-5 right-50 w-50 h-50 bg-[#F42B39] rounded-full opacity-90 -z-1" />
            {/* Червоні прямокутники*/}
            <div className="absolute top-[34%] right-[0%] w-78 h-16 bg-[#F42B39] opacity-90 z-2"/>
            <div className="absolute bottom-[-5%] left-[-5%] w-43 h-44 bg-[#f42b39] opacity-80 z-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
