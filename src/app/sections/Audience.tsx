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
      className="relative w-full min-h-screen py-12 md:py-20 bg-[#E8E3D6] overflow-hidden"
    >
      {/* Mobile Layout */}
      <div className="md:hidden relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <h1 className="text-2xl tracking-normal uppercase font-sans font-bold mb-6 text-black">
            Для кого створений Гурток Політичних Студій
          </h1>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="relative z-10"
          >
            <ul className="list-disc custom-bullets text-base font-mono font-normal space-y-4 text-black ml-5">
              <li className="leading-relaxed">
                <span className="font-semibold">Учні 8-11 класів</span>
              </li>
              <li className="leading-relaxed">
                Ті, хто планує вступати на{" "}
                <span className="text-primary font-semibold">спеціальності:</span> політологія,
                міжнародні відносини, право, соціологія, філософія, журналістика
              </li>
              <li className="leading-relaxed">
                Ще не визначилися з напрямом, але зацікавлені в соціальних науках
              </li>
              <li className="leading-relaxed">
                Бажаючі здобути загальну ерудицію в питаннях політичних та
                соціальних процесів
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut"}}
              className="mt-8"
            >
              <a href="https://forms.gle/Cqax94UHrydS7tEq6">
                <Button className="text-base py-6 px-8 uppercase font-bold font-sans tracking-wide hover:bg-white hover:text-primary cursor-pointer rounded-[20px] w-full">
                  Дізнатися більше
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile Image - справа */}
          <motion.div
            className="absolute right-0 top-0 w-[50%] h-full pointer-events-none"
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
          >
            <div className="relative w-full h-[500px]">
              <Image 
                src={audience} 
                alt="Audience Image" 
                fill
                className="object-contain object-right-top"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-3 md:gap-0 md:pl-32 md:pr-64">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <div className="max-w-5xl text-left text-black px-4">
            <h1 className="text-4xl tracking-wider uppercase font-sans font-bold mb-2 mt-32">
              Для кого створений Гурток Політичних Студій
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="md:row-span-3 md:col-start-3"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
        >
          <Image src={audience} alt="Audience Image" className="min-w-150" />
        </motion.div>

        <motion.div
          className="md:col-span-2 md:row-span-2 md:row-start-2 ml-16"
          initial={{ opacity: 0 }}
          animate={controls}
        >
          <ul className="list-disc max-w-128 custom-bullets text-lg font-mono font-medium space-y-4 text-black">
            <li className="leading-relaxed">
              <span className="font-semibold">Учні 8-11 класів</span>
            </li>
            <li className="leading-relaxed">
              Ті, хто планує вступати на{" "}
              <span className="text-primary font-semibold">спеціальності:</span> політологія,
              міжнародні відносини, право, соціологія, філософія, журналістика
            </li>
            <li className="leading-relaxed">
              Ще не визначилися з напрямом, але зацікавлені в соціальних науках
            </li>
            <li className="leading-relaxed">
              Бажаючі здобути загальну ерудицію в питаннях політичних та
              соціальних процесів
            </li>
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut"}}
            className="mt-16"
          >
            <a href="https://forms.gle/Cqax94UHrydS7tEq6">
              <Button className="text-xl py-8 px-12 uppercase font-semibold font-sans tracking-wider hover:bg-white hover:text-primary cursor-pointer rounded-[20px]">
                Дізнатися більше
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}