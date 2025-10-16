"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import audience from "@/assets/audience.png";
import { Button } from "@/components/ui/button";

export default function Audience() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        x: -100,
      });
    }
  }, [controls, inView]);

  return (
    <section
      id="audience"
      ref={ref}
      className="relative w-full min-h-screen py-20"
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-0 pl-32 pr-64">
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <div className="max-w-5xl text-left text-foreground px-4">
            <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
              Для кого створений Гурток Політичних Студій
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="row-span-3 col-start-3"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
        >
          <Image src={audience} alt="Audience Image" />
        </motion.div>

        <motion.div
          className="col-span-2 row-span-2 row-start-2 ml-16"
          initial={{ opacity: 0 }}
          animate={controls}
        >
          <ul className="list-disc max-w-128 custom-bullets text-lg font-mono font-medium space-y-4">
            <li>Учні 8-11 класів</li>
            <li>
              Ті, хто планує вступати на{" "}
              <span className="text-primary">спеціальності:</span> політологія,
              міжнародні відносини, право, соціологія, філософія, журналістика
            </li>
            <li>
              Ще не визначилися з напрямом, але зацікавлені в соціальних науках
            </li>
            <li>
              Бажаючі здобути загальну ерудицію в питаннях політичних та
              соціальних процесів
            </li>
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <a href="https://forms.gle/Cqax94UHrydS7tEq6">
              <Button className="mt-16 text-xl py-8 px-12 uppercase font-semibold font-sans tracking-wider hover:bg-white hover:text-primary cursor-pointer">
                Дізнатися більше
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}