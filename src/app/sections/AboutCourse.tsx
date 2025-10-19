"use client";

import { motion, useAnimation, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import kse_building from "@/assets/kse-building.png";
import kse_building_mobile from "@/assets/kse-building-mobile.png";

export default function AboutCourse() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-screen flex items-start justify-start overflow-hidden bg-[#E8E3D6] pt-24 pb-12 md:py-0 md:items-center md:justify-center"
    >
      <div className="w-full max-w-[430px] md:max-w-none md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4 px-6 md:px-0">
        {/* Заголовок */}
        <motion.div
          className="md:col-span-2 mb-6 md:mb-0"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
        >
          <div className="max-w-6xl md:ml-16 md:mt-16 text-left text-black">
            <h1 className="text-[22px] leading-[30px] md:text-4xl/12 tracking-normal md:tracking-wider uppercase font-bold font-sans">
              Чому варто обрати Київський Гурток{" "}
              <span className="text-primary">Політичних</span> Студій?
            </h1>
          </div>
        </motion.div>

        {/* Зображення KSE - Desktop */}
        <motion.div
          className="hidden md:block md:row-span-3 md:col-start-3"
          variants={fadeRight}
          initial="hidden"
          animate={controls}
        >
          <div className="relative w-full h-full">
            <Image 
              src={kse_building} 
              alt="KSE building" 
              className="w-full h-full object-cover md:min-w-[700px]"
            />
          </div>
        </motion.div>

        {/* Текстовий контент */}
        <motion.div
          className="md:col-span-2 md:row-span-2 md:row-start-2 mb-6 md:mb-0"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3 }}
        >
          <div className="max-w-4xl md:ml-16 text-justify font-mono font-normal tracking-normal text-[15px] leading-[20px] md:text-base text-black">
            <p>
              Це практичний курс від факультету соціальних наук{" "}
              <span className="text-primary font-semibold">KSE</span> для{" "}
              <span className="text-primary font-semibold">учнів 8–11 класів</span>, які
              хочуть глибше зрозуміти політику та суспільство. Навчання
              відбувається офлайн у головному кампусі університету. Тут ви
              ознайомитеся з основами{" "}
              <span className="text-primary font-semibold">
                політичних наук і політичної філософії
              </span>
              , вивчите історію політичних ідей та їхній вплив на сучасність. Ви
              отримаєте інструменти, які допоможуть розуміти політичні процеси
              та впливати на зміни у суспільстві.
            </p>

            <p className="mt-5 md:mt-8">
              Без зайвих спрощень, казуальності і поверхневості. Лише поглиблене
              вивчення першоджерел і літератури, практичні кейси та власні
              дослідження.
            </p>

            <div className="mt-6 md:mt-16">
              <h2 className="text-[17px] md:text-xl font-bold mb-4 text-black">
                Поспішай, кількість місць обмежена
              </h2>
              <a href="https://forms.gle/Cqax94UHrydS7tEq6">
                <Button className="bg-primary hover:bg-primary/90 text-white mt-2 text-[17px] md:text-xl py-7 md:py-8 px-8 md:px-12 uppercase font-bold font-sans tracking-wide hover:bg-white hover:text-primary cursor-pointer w-full md:w-auto rounded-[20px] transition-colors">
                  Дізнатися більше
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Зображення KSE - Mobile (внизу з оверлеєм) */}
        <motion.div
          className="relative md:hidden w-screen h-[420px]  mt-8"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
        >
          
          {/* Зображення */}
          <div className="absolute right-0 top-0 w-[80%] h-full z-10">
            <div className="relative w-full h-full">
              <Image 
                src={kse_building_mobile} 
                alt="KSE building" 
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 