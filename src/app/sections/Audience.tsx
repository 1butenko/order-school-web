"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import audience from "@/assets/audience.png";
import audienceMobile from "@/assets/audience-mobile.png";
import { Button } from "@/components/ui/button";

export default function Audience() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [controls, inView]);

  return (
    <section
      id="audience"
      ref={ref}
      className="relative w-full min-h-screen py-10 md:py-20 bg-[#E8E3D6]"
    >
      {/* Mobile Layout */}
      <div className="md:hidden relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-10 left-20 right-0 z-0 h-[60vh]">
          <Image 
            src={audienceMobile} 
            alt="Background" 
            fill
            className="object-cover object-top"
            quality={100}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-8">
          <h1 className="text-2xl tracking-tight uppercase font-mono font-black mb-8 text-black leading-tight">
            Для кого створений Гурток Політичних Студій
          </h1>

          <div className="space-y-4 mb-8">
            {/* Item 1 */}
            <div className="bg-[#E8DDD0]/80 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-primary mt-0.5 flex-shrink-0"></span>
              <span className="font-mono font-bold text-base text-black leading-snug">Учні 8-11 класів</span>
            </div>

            {/* Item 2 */}
            <div className="bg-[#E8DDD0]/80 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-primary mt-0.5 flex-shrink-0"></span>
              <span className="font-mono text-base text-black leading-snug">
                Плануєте вступати на{" "}
                <span className="text-primary font-bold">спеціальності</span>{" "}
                політологія, міжнародні відносини, право, соціологія, філософія, журналістика
              </span>
            </div>

            {/* Item 3 */}
            <div className="bg-[#E8DDD0]/80 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-primary mt-0.5 flex-shrink-0"></span>
              <span className="font-mono text-base text-black leading-snug">
                Бажаєте здобути загальну ерудицію у питаннях політичних та соціальних процесів
              </span>
            </div>

            {/* Item 4 */}
            <div className="bg-[#E8DDD0]/80 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-primary mt-0.5 flex-shrink-0"></span>
              <span className="font-mono text-base text-black leading-snug">
                Ще не визначилися з напрямом, але зацікавлені у соціальних науках
              </span>
            </div>
          </div>

          <a href="https://forms.gle/Cqax94UHrydS7tEq6">
            <Button className="text-base bg-[#F42B39] py-7 px-8 uppercase font-black font-mono tracking-wide hover:bg-white hover:text-primary cursor-pointer rounded-[20px] w-full">
              Дізнатися більше
            </Button>
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Ліва колонка */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="space-y-10"
            >
              <h1 className="text-3xl lg:text-4xl tracking-wide uppercase font-sans font-bold text-black leading-tight">
                Для кого створений<br />Гурток Політичних<br />Студій
              </h1>

              <ul className="space-y-6 text-black">
                <li className="flex items-start gap-4">
                  <span className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                  <span className="font-sans font-bold text-lg">Учні 8-11 класів</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                  <span className="font-sans text-lg">
                    Ті, хто планує вступати на{" "}
                    <span className="text-primary font-bold">спеціальності:</span>{" "}
                    політологія, міжнародні відносини, право, соціологія, філософія, журналістика
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                  <span className="font-sans text-lg">
                    Ще не визначилися з напрямом, але зацікавлені в соціальних науках
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                  <span className="font-sans text-lg">
                    Бажаючі здобути загальну ерудицію в питаннях політичних та соціальних процесів
                  </span>
                </li>
              </ul>

              <a href="https://forms.gle/Cqax94UHrydS7tEq6">
                <Button className="text-xl py-7 px-12 uppercase font-bold font-sans tracking-wide hover:bg-white hover:text-primary cursor-pointer rounded-[20px]">
                  Дізнатися більше
                </Button>
              </a>
            </motion.div>

            {/* Права колонка - зображення */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="relative"
            >
              <Image 
                src={audience} 
                alt="Audience Image" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}