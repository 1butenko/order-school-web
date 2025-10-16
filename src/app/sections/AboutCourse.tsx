"use client";

import { motion, useAnimation, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import kse_building from "@/assets/kse-building.png";

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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <motion.div
          className="col-span-2"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
        >
          <div className="max-w-6xl ml-16 text-left text-foreground">
            <h1 className="text-4xl/12 tracking-wider uppercase font-sans mb-2">
              Чому варто обрати Київський Гурток{" "}
              <span className="text-primary">Політичних</span> Студій?
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="row-span-3 col-start-3"
          variants={fadeRight}
          initial="hidden"
          animate={controls}
        >
          <Image src={kse_building} alt="KSE building" />
        </motion.div>

        <motion.div
          className="col-span-2 row-span-2 row-start-2"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3 }}
        >
          <div className="max-w-4xl ml-16 text-justify font-mono font-medium tracking-wide">
            <p>
              Це практичний курс від факультету соціальних наук{" "}
              <span className="text-primary">KSE</span> для{" "}
              <span className="text-primary">учнів 8–11 класів</span>, які
              хочуть глибше зрозуміти політику та суспільство. Навчання
              відбувається офлайн у головному кампусі університету. Тут ви
              ознайомитеся з основами{" "}
              <span className="text-primary">
                політичних наук і політичної філософії
              </span>
              , вивчите історію політичних ідей та їхній вплив на сучасність. Ви
              отримаєте інструменти, які допоможуть розуміти політичні процеси
              та впливати на зміни у суспільстві.
            </p>

            <p className="mt-8">
              Без зайвих спрощень, казуальності і поверхневості. Лише поглиблене
              вивчення першоджерел і літератури, практичні кейси та власні
              дослідження.
            </p>

            <div className="mt-16">
              <h2 className="text-xl font-semibold">
                Поспішай, кількість місць обмежена
              </h2>
              <a href="https://forms.gle/Cqax94UHrydS7tEq6">
                <Button className="mt-4 text-xl py-8 px-12 uppercase font-semibold font-sans tracking-wider hover:bg-white hover:text-primary cursor-pointer">
                  Дізнатися більше
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}