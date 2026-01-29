"use client";

import { motion, Variants, Transition } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import mykyta from "@/assets/mykyta.jpg";
import vladyslav from "@/assets/vlad.jpg";
import oksana from "@/assets/oksana.jpg";


type AnimatedProps = { id?: string };

const transition: Transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] };

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition },
};

type Teacher = {
  id: number;
  name: string;
  photo: StaticImageData;
  details: string[];
};

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Микита\nСеменов",
    photo: mykyta,
    details: [
      "Співробітник дипломатичної місії США в Україні.",
      "Магістр філософії НаУКМА.",
      "Стипендіат Єнського університету ім. Фрідріха Шіллера.",
      "Спеціалізується на праві, міжнародних відносинах, політичній філософії, етиці, моральній філософії.",
    ],
  },
  {
    id: 2,
    name: "Владислав\nОзеранський",
    photo: vladyslav,
    details: [
      'Політолог Католицького Університету спеціальності "Етика-Політика-Економіка".',
      "Молодіжний лектор та тренер, волонтер, донор крові.",
      "Спеціалізується на теорії міжнародної політики, ідеологіях, теорії ігор і пропаганді.",
    ],
  },
  {
    id: 3,
    name: "Оксана\nСироїд",
    photo: oksana,
    details: [
      "Випускниця Оттавського університету (Master of Laws), Магістра права КНУ імені Тараса Шевченка (2002) та бакалавр політології НаУКМА (1997).",
      "З 2014 народний депутат України і до 2019 обіймала посаду заступника Голови Верховної Ради України.",
      "З липня 2024 року військовослужбовиця.",
      "З 2017 і до тепер викладач і доцент Київської школи економіки.",
    ],
  },
];

function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-6 h-full">
      <div className="rounded-3xl border border-black bg-[#E8DED1] overflow-hidden">
        <div className="relative h-[420px]">
          <Image
            src={teacher.photo}
            alt={teacher.name.replace("\n", " ")}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
            className="object-cover"
            priority={teacher.id === 1}
          />
        </div>
        <div className="bg-[#F42B39] text-white py-4 text-center">
          <h3 className="text-2xl font-bold leading-tight whitespace-pre-line">
            {teacher.name}
          </h3>
        </div>
      </div>

      <div className="rounded-3xl border border-black bg-[#F42B39] text-white px-6 py-8 flex flex-col gap-8 flex-1">
        <ul className="space-y-3 text-left leading-relaxed flex-1">
          {teacher.details.map((info, idx) => (
            <li key={idx}>{info}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Teachers({ id }: AnimatedProps) {
  return (
    <motion.section
      id={id}
      className="w-full min-h-screen py-20 bg-[#E8DED1]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ fontFamily: '"Gotham Pro ", "Gotham Pro", sans-serif' }}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center px-4 mb-16"
        variants={itemVariants}
      >
        <h2 className="text-4xl tracking-wider uppercase font-bold mb-2 relative inline-block">
          ВИКЛАДАЧІ
          <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F42B39]" />
        </h2>
      </motion.div>
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-0 md:auto-rows-[minmax(0,1fr)]">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}