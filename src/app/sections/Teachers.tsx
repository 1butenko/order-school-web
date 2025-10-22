"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

import mykyta from "@/assets/mykyta.jpg";
import vlad from "@/assets/vlad.jpg";

interface TeacherDescriptionProps {
  name: string;
  surname: string;
  description: string[];
}

const TeacherDescription: React.FC<TeacherDescriptionProps> = ({
  name,
  surname,
  description,
}) => {
  return (
    <motion.div
      className="relative w-full h-full bg-primary rounded-2xl px-8 py-10 flex flex-col items-center justify-center text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-white font-mono font-medium text-lg max-w-64 flex flex-col items-center space-y-4">
        {description.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
        <div className="mt-4 text-center">
          <h2 className="font-bold text-2xl">{name}</h2>
          <h2 className="font-bold text-2xl">{surname}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default function Teachers() {
  const teachers = [
    {
      img: mykyta,
      name: "Микита",
      surname: "Семенов",
      description: [
        "Співробітник дипломатичної місії США в Україні.",
        "Магістр філософії НаУКМА",
        "Стипендіат Єнського університету ім. Фрідріха Шиллера.",
        "Спеціалізується на праві, міжнародних відносинах, політичній філософії, етиці, моральній філософії.",
      ],
    },
    {
      img: vlad,
      name: "Владислав",
      surname: "Озеранський",
      description: [
        'Політолог Католицького Університету спеціальності "Етика-Політика-Економіка"',
        "Молодіжний лектор та тренер, волонтер, донор крові",
        "Спеціалізується на теорії міжнародної політики, ідеологіях, теорії ігор і пропаганді.",
      ],
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const swiperRefs = useRef<any[]>([]);

  const handleClick = (index: number) => {
    const swiper = swiperRefs.current[index];
    if (!swiper) return;
    if (swiper.isEnd) {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  return (
    <motion.section
      className="relative w-full min-h-screen py-20 bg-cover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      id="teachers"
    >
      <div className="max-w-6xl mx-auto text-center text-foreground px-4">
        <h1 className="text-2xl md:text-4xl tracking-wider uppercase font-sans mb-2">
          Викладачі
        </h1>
        <div className="my-2 mx-auto max-w-36 md:max-w-3xs h-1 bg-primary rounded-full"></div>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-18 mx-2 sm:mx-0">
        {teachers.map((teacher, idx) => (
          <Swiper
            key={idx}
            effect={"flip"}
            grabCursor={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="w-full max-w-md h-[600px] cursor-pointer my-4 sm:my-0"
            onSwiper={(swiper) => (swiperRefs.current[idx] = swiper)}
            onClick={() => handleClick(idx)}
          >
            <SwiperSlide className="cursor-pointer">
              <motion.div
                ref={ref}
                className="relative w-full h-full bg-primary rounded-2xl font-mono text-2xl/7 text-center text-white font-medium flex flex-col items-center justify-center p-4 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-2xl pointer-events-none z-20"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="w-full h-128 relative mb-4">
                  <Image
                    src={teacher.img}
                    alt={`Teacher: ${teacher.name} ${teacher.surname}`}
                    className="rounded-2xl border-2 border-foreground object-cover"
                    fill
                  />
                </div>

                <motion.div
                  className="absolute bottom-32 left-1/2 -translate-x-1/2 pointer-events-none z-30"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isMobile && inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white text-xl font-bold whitespace-nowrap">
                    Читати більше
                  </span>
                  <div className="my-2 mx-auto max-w-3xs h-1 bg-primary rounded-full"></div>
                </motion.div>

                <h2 className="text-2xl font-bold relative z-10">
                  {teacher.name}
                </h2>
                <h2 className="text-2xl font-bold relative z-10">
                  {teacher.surname}
                </h2>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide className="cursor-pointer">
              <TeacherDescription
                name={teacher.name}
                surname={teacher.surname}
                description={teacher.description}
              />
            </SwiperSlide>
          </Swiper>
        ))}
      </div>
    </motion.section>
  );
}