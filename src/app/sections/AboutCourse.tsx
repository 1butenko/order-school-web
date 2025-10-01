import type { AnimatedProps } from "@/types/motion";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutCourse() {
  return (
    <section
      id="about"
      className="w-full bg-[#E6E1D0] py-20 px-6 md:px-12 lg:px-24 font-grotesk"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Заголовок тест */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black border-2 border-red-600 rounded-xl px-6 py-6 uppercase">
          Чому варто обрати Київський гурток{" "}
          <span className="text-red-600">політичних студій?</span>
        </h2>

        {/* Контент */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Текст */}
          <div className="space-y-6 text-black text-base md:text-lg leading-relaxed">
            <p>
              Це практичний курс від факультету соціальних наук{" "}
              <span className="font-semibold">KSE</span> для учнів{" "}
              <span className="font-semibold text-red-600">8–11 класів</span>,
              які хочуть глибше зрозуміти політику та суспільство. Навчання
              відбувається офлайн у головному кампусі університету.
            </p>
            <p>
              Тут ви ознайомитеся з основами{" "}
              <span className="font-semibold">
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

            <p className="font-bold text-lg md:text-xl text-black">
              Старт навчання — <span className="text-red-600">18 жовтня</span>
            </p>

            {/* button */}
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md px-8 py-6 text-lg uppercase shadow-md">
              Реєструйся вже зараз
            </Button>
          </div>

          {/* photo */}
          <div className="relative w-full h-[420px] md:h-[520px]">
            <Image
              src="/kse-building.png"
              alt="KSE building"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
