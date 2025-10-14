"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

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

  return (
    <motion.section
      className="relative w-full min-h-screen py-20 bg-cover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto text-center text-foreground px-4">
        <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
          Викладачі
        </h1>
        <div className="my-2 mx-auto max-w-3xs h-1 bg-primary rounded-full"></div>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-18">
        {teachers.map((teacher, idx) => {
          let swiperRef: any = null;

          return (
            <Swiper
              key={idx}
              effect={"flip"}
              grabCursor={true}
              modules={[EffectFlip, Pagination, Navigation]}
              className="w-full max-w-md h-[600px] cursor-pointer"
              onSwiper={(swiper) => (swiperRef = swiper)}
              onClick={() => {
                if (!swiperRef) return;
                if (swiperRef.isEnd) {
                  swiperRef.slidePrev();
                } else {
                  swiperRef.slideNext();
                }
              }}
            >
              <SwiperSlide className="cursor-pointer">
                <motion.div
                  className="relative w-full h-full bg-primary rounded-2xl font-mono text-2xl/7 text-center text-white font-medium flex flex-col items-center justify-center p-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-128 relative mb-4">
                    <Image
                      src={teacher.img}
                      alt={`Teacher: ${teacher.name} ${teacher.surname}`}
                      className="rounded-2xl border-2 border-foreground object-cover"
                      fill
                    />
                  </div>
                  <h2 className="text-2xl font-bold">{teacher.name}</h2>
                  <h2 className="text-2xl font-bold">{teacher.surname}</h2>
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
          );
        })}
      </div>
    </motion.section>
  );
}