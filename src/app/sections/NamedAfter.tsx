"use client";

import Image from "next/image";
import namedafter from "@/assets/namedafter.png";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function NamedAfter() {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const controlsQuote = useAnimation();

  const [refText, inViewText] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refImage, inViewImage] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    controlsText.start(inViewText ? "visible" : "hidden");
    controlsImage.start(inViewImage ? "visible" : "hidden");
    controlsQuote.start(inViewQuote ? "visible" : "hidden");
  }, [inViewText, inViewImage, inViewQuote, controlsText, controlsImage, controlsQuote]);

  const textVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
  };

  const imageVariant: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } },
  };

  const quoteVariant: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
  };

  return (
    <section className="w-full bg-[#E6E1D0] relative overflow-hidden py-20">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        <motion.div
          ref={refText}
          initial="hidden"
          animate={controlsText}
          variants={textVariant}
          className="flex-1 px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-20 flex items-center"
        >
          <div className="w-full max-w-[800px]">
            <h2 className="uppercase text-[#191a21] leading-[1.2] tracking-[.0.01em] text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[780] mb-6 md:mb-8 font-sans">
              <span className="block">ГУРТОК, НАЗВАНИЙ НА</span>
              <span className="block">
                ЧЕСТЬ <span className="text-[#F42B39]">ЛЕОНІДА ПАСЬКА</span>
              </span>
            </h2>

            {/* 👇 Mobile-only image under <h2> */}
            <div className="relative w-full h-[250px] sm:h-[300px] mb-6 md:hidden">
              <Image
                src={namedafter}
                alt="Леонід Пасько та його майстерня"
                fill
                priority
                sizes="100vw"
                className="object-cover rounded-xl"
              />
            </div>

            <p className="text-[#191a21] text-[15px] md:text-[17px] lg:text-[18px] leading-[1.75] font-mono font-medium text-justify">
              Гурток названо на честь Леоніда Паська — вчителя, педагога й наставника, чиє життя було присвячене освіті та громадянському служінню. Леонід викладав історію, був головою Світловодського осередку «Пласту», а також наставником у радіогуртку. Він навчив нас любити й віддавати, бути відкритими як до світу, так і до людей, служити одне одному. Леонід завжди наголошував, що процвітання й загальне благо суспільства та держави залежать передусім від якісної освіти, а ключем до неї є викладачі. Ми створили наш гурток, натхненні його ідеалами й принципами. Коротку частину його життя і захоплення читайте на{" "}
              <span className="text-primary font-bold underline cursor-pointer">
                <a href="https://www.ukrainer.net/radio/">Ukrainer</a>
              </span>
            </p>
          </div>
        </motion.div>

        {/* 👇 Desktop / large screens image */}
        <motion.div
          ref={refImage}
          initial="hidden"
          animate={controlsImage}
          variants={imageVariant}
          className="relative hidden lg:block flex-1 w-full h-[400px] md:h-[500px] lg:h-auto lg:min-h-[600px]"
        >
          <Image
            src={namedafter}
            alt="Леонід Пасько та його майстерня"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        ref={refQuote}
        initial="hidden"
        animate={controlsQuote}
        variants={quoteVariant}
        className="text-justify font-sans text-sm sm:text-4xl font-medium flex justify-center items-center my-1 sm:my-40 mx-2 sm:mx-0"
      >
        <div className="max-w-7xl bg-primary py-2 px-4 sm:p-8 rounded-2xl text-white">
          "Змінити світ – це вкласти свою працю в цей світ, тобто відчути, що не даром проходять дні. Це виконувати свої обов'язки перед родиною, перед суспільством. Ну і допомагати, по можливості, дітям." — Леонід Пасько
        </div>
      </motion.div>
    </section>
  );
}