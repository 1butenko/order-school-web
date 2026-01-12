"use client";

import { motion, useAnimation, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import kse_building from "@/assets/kse-building.png";
import kse_building_mobile from "@/assets/kse-building-mobile.png";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isDesktop;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function AboutCourse() {
  const isDesktop = useIsDesktop();
  const isMobile = useIsMobile();

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  if (isMobile) {
    return (
      <section
        id="about"
        ref={ref}
        className="relative w-full min-h-screen h-auto flex flex-col pt-24 pb-0 overflow-hidden font-mono font-medium"
      >
        <div className="w-full px-6 flex flex-col h-full flex-grow z-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="mb-6"
          >
            <h1 className="text-[20px] leading-[34px] md:text-[46px] md:leading-[54px] uppercase font-black font-mono text-black drop-shadow-[0_6px_6px_rgba(0,0,0,0.25)]">
              Чому варто обрати київський гурток{" "}
              <span className="text-[#F42B39]">політичних</span> студій?
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="font-medium text-[15px] leading-[22px] text-black text-justify space-y-4">
              <p>
                Це практичний курс від факультету соціальних наук{" "}
                <span className="text-[#F42B39] font-bold">KSE</span> для{" "}
                <span className="text-[#F42B39] font-bold">
                  учнів 8–11 класів
                </span>
                , які хочуть глибше зрозуміти політику та суспільство. Навчання
                відбувається офлайн у головному кампусі університету. Тут ви
                ознайомитеся з основами{" "}
                <span className="text-[#F42B39] font-bold">
                  політичних наук і політичної філософії
                </span>
                , вивчите історію політичних ідей та їхній вплив на сучасність.
                Ви отримаєте інструменти, які допоможуть розуміти політичні
                процеси та впливати на зміни у суспільстві.
              </p>
              <p>
                Без зайвих спрощень, казуальності і поверхневості. Лише
                поглиблене вивчення першоджерел і літератури, практичні кейси та
                власні дослідження.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.4 }}
            className="mb-6 flex justify-start"
          >
            <a href="/onboarding">
              <Button className="bg-[#F42B39] text-white -mx-25 py-6 px-3 text-[14px] uppercase font-medium font-mono tracking-wide hover:bg-[#d12432] rounded-[10px] shadow-md transition-colors">
                Дізнатися більше
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.6 }}
          className="relative w-full aspect-[3/2] ml-5 -mt-25 z-10"
        >
          <Image
            src={kse_building_mobile}
            alt="KSE Building"
            fill
            sizes="100vw"
            className="object-contain object-bottom drop-shadow-xl"
          />
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-screen flex items-start justify-start overflow-hidden pt-24 pb-12 md:py-0 md:items-center md:justify-center font-mono font-medium"
    >
      <div className="w-full max-w-[430px] md:max-w-none md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4 px-6 md:px-0">
        <motion.div
          className="md:col-span-2 mb-6 md:mb-0"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
        >
          <div className="max-w-6xl md:ml-16 md:mt-16 text-left text-black">
            <h1 className="text-[28px] leading-[34px] md:text-[46px] md:leading-[54px] tracking-normal md:tracking-wider uppercase font-black font-mono text-black drop-shadow-[0_6px_6px_rgba(0,0,0,0.25)]">
              Чому варто обрати Київський Гурток{" "}
              <span className="text-[#F42B39]">Політичних</span> Студій?
            </h1>
          </div>
        </motion.div>

        {isMobile && (
          <div className="flex justify-end">
            <Image
              src={kse_building_mobile}
              alt="KSE Building"
              className="w-48 my-4"
            />
          </div>
        )}

        {/*  Desktop */}
        <motion.div
          className="hidden md:flex md:row-span-3 md:col-start-3 items-end justify-end"
          variants={fadeRight}
          initial="hidden"
          animate={controls}
        >
          <div className="relative w-full max-w-[760px] aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src={kse_building}
              alt="KSE building"
              fill
              sizes="(min-width: 1280px) 700px, (min-width: 1024px) 520px, 45vw"
              className="object-cover md:object-contain lg:object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2 md:row-span-2 md:row-start-2 mb-6 md:mb-0"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3 }}
        >
          <div className="max-w-4xl md:ml-16 text-justify font-mono font-medium tracking-normal text-[15px] leading-[20px] md:text-base text-black">
            {" "}
            <p>
              {" "}
              Це практичний курс від факультету соціальних наук{" "}
              <span className="text-primary font-bold">KSE</span> для{" "}
              <span className="text-primary font-bold">
                учнів 8–11 класів
              </span>
              , які хочуть глибше зрозуміти політику та суспільство. Навчання
              відбувається офлайн у головному кампусі університету. Тут ви
              ознайомитеся з основами{" "}
              <span className="text-primary font-bold">
                {" "}
                політичних наук і політичної філософії{" "}
              </span>{" "}
              , вивчите історію політичних ідей та їхній вплив на сучасність. Ви
              отримаєте інструменти, які допоможуть розуміти політичні процеси
              та впливати на зміни у суспільстві.{" "}
            </p>{" "}
            <p className="mt-5 md:mt-8">
              {" "}
              Без зайвих спрощень, казуальності і поверхневості. Лише поглиблене
              вивчення першоджерел і літератури, практичні кейси та власні
              дослідження.{" "}
            </p>
            {isDesktop && (
              <div className="mt-6 md:mt-16">
                <h2 className="text-[17px] md:text-xl font-bold mb-4 text-black">
                  Поспішай, кількість місць обмежена
                </h2>
                <a href="/onboarding">
                  <Button className="bg-primary text-white mt-2 text-[17px] md:text-xl py-7 md:py-8 px-8 md:px-12 uppercase font-medium font-mono tracking-wide hover:bg-white hover:text-primary cursor-pointer w-full md:w-auto rounded-[20px] transition-colors">
                    Дізнатися більше
                  </Button>
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {isDesktop && (
          <motion.div
            className="relative md:hidden w-screen h-[420px] mt-8"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
          >
            <div className="absolute right-0 top-0 w-[80%] h-full z-10">
              <Image
                src={kse_building_mobile}
                alt="KSE building"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        )}

        {isMobile && (
          <motion.div>
            <a href="/onboarding">
              <Button className="bg-primary text-white mt-2 text-xs md:text-xl py-7 md:py-8 px-8 md:px-12 uppercase font-medium font-mono tracking-wide hover:bg-white hover:text-primary cursor-pointer w-full md:w-auto rounded-xl transition-colors">
                Дізнатися більше
              </Button>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}