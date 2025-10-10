"use client";

import { AnimatePresence, motion, Variants, Transition } from "framer-motion";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import mykyta from "@/assets/mykyta.png"; 
import vladyslav from "@/assets/vladyslav.png";

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
];

function TeacherCard({ teacher }: { teacher: Teacher }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-4">
      <div>
        {/* block with photo */}
        <div className="rounded-t-3xl overflow-hidden border-[2px] border-black bg-[#D4C5B9] rounded-b-3xl -mb-3">
          <div className="relative h-[550px]">
            <Image
              src={teacher.photo} 
              alt={teacher.name.replace("\n", " ")}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
              className="object-cover"
              priority={teacher.id === 1}
            />
          </div>
        </div>

        {/* header */}
        <div
          className="bg-[#F42B39] text-white p-5 flex flex-row items-left gap-4 cursor-pointer select-none rounded-b-3xl z-0"
          onClick={() => setIsExpanded((v) => !v)}
          aria-expanded={isExpanded}
          role="button"
          tabIndex={0}
        >
          <div
            className={`w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-in-out ${
              isExpanded ? "rotate-0" : "-rotate-90"
            }`}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 9L14 21L24 9H4Z" fill="#F42B39" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold leading-tight whitespace-pre-line ">
            {teacher.name}
          </h3>
        </div>
      </div>

      {/* block with details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="rounded-3xl bg-[#F42B39] text-white p-6 text-center">
              <ul className="space-y-15 text-left leading-relaxed">
                {teacher.details.map((info, idx) => (
                  <li key={idx}>{info}</li>
                ))}
              </ul>
              <h3 className="text-2xl font-bold leading-tight whitespace-pre-line mt-6">
                {teacher.name}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Teachers({ id }: AnimatedProps) {
  return (
    <motion.section
      id={id}
      className="w-full min-h-screen py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center px-4 mb-16"
        variants={itemVariants}
      >
        <h1 className="text-4xl tracking-wider uppercase font-bold mb-2 relative inline-block">
          ВИКЛАДАЧІ
          <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F42B39]" />
        </h1>
      </motion.div>
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}