"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import modle1 from '@/assets/modle1.png';
import { AnimatedProps } from '@/types/motion';
// import modle2 from '@/assets/modle2.png';
// import modle3 from '@/assets/modle3.png';
// import modle4 from '@/assets/modle4.png';
// import modle5 from '@/assets/modle5.png';


const modules = [
  {
    id: 1,
    position: "right",
    number: "МОДУЛЬ 1",
    dates: "17.10 — 25.10",
    title: "ВСТУП",
    description: "Знайомство зі структурою курсу, форматом занять і основними навичками: аргументація, дебати, робота з кейсами. На практиці випробуємо, як виглядає семінар у форматі діалогу.",
    image: modle1
  },
  {
    id: 2,
    position: "left",
    number: "МОДУЛЬ 2",
    dates: "01.11 — 8.11",
    title: "ТОВСТІ ІДЕОЛОГІЇ. ЧАСТИНА 1",
    description: "Консерватизм, лібералізм, соціалізм, націоналізм, фемінізм, анархізм, екологізм, популізм та інші. Ми розберемо суть кожної ідеології, їхні аргументи та прояви у сучасному житті. Ви навчитесь формувати власну позицію щодо ключових соціальних проблем.",
    image: null
  },
  {
    id: 3,
    position: "right",
    number: "МОДУЛЬ 3",
    dates: "15.11 — 22.11",
    title: "ТОВСТІ ІДЕОЛОГІЇ. ЧАСТИНА 2",
    description: "Консерватизм, лібералізм, соціалізм, націоналізм, фемінізм, анархізм, екологізм, популізм та інші. Ми розберемо суть кожної ідеології, їхні аргументи та прояви у сучасному житті. Ви навчитесь формувати власну позицію щодо ключових соціальних проблем.",
    image: null
  },
  {
    id: 4,
    position: "left",
    number: "МОДУЛЬ 4",
    dates: "29.11 — 06.12",
    title: "ВІЙНА, ТОРГ, ПРАВИЛА",
    description: "Як держави взаємодіють між собою та чому (які інститути та організації об'єднують)? Оборонний рух проти України, можливість вступу до ЄС і НАТО, а також динаміка політичного мислення у період війни.",
    image: null
  },
  {
    id: 5,
    position: "right",
    number: "МОДУЛЬ 5",
    dates: "13.12 — 20.12",
    title: "МОРАЛЬ В ПОЛІТИЦІ",
    description: "Досліджуємо моральний бік політики. Думаємо, чи існує він взагалі. Вчимося використовувати дуже специфічний інструментарій моральної філософії.",
    image: null
  }
];

export default function Timeline({ id }: AnimatedProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 px-4 bg-[#F0E9D9] overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase">
            ТАЙМЛАЙН МОДУЛІВ
          </h2>
        </div>

        {/* Timeline SVG Path */}
        <div className="absolute left-1/2 top-[100px] bottom-0 transform -translate-x-1/2 w-full max-w-[362px] h-auto z-0 pointer-events-none">
          <svg width="362" height="1094" viewBox="0 0 362 1094" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '28px' }}>
            <path d="M72.6461 1V370.991C72.6461 386.455 60.1101 398.991 44.6461 398.991H0M267.015 1V153.833C267.015 169.297 279.551 181.833 295.015 181.833H362M133.229 1V823.5C133.229 838.964 120.693 851.5 105.229 851.5H0M219.054 1L220.236 597.556C220.266 612.998 232.793 625.5 248.236 625.5H362M175.033 1V1058C175.033 1073.46 187.569 1086 203.033 1086H362" stroke="#F42B39" strokeWidth="15" />
          </svg>
        </div>

        {/* Timeline Container */}
        <div className="relative py-10 z-10">
          {/* Рендеринг модулів на основі масиву */}
          {modules.map((module, index) => (
            <div key={module.id} className={`mb-32 animate-fadeIn ${index === 1 ? "-mt-170" : ""}`} style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Для правостороннього модуля */}
              {module.position === 'right' && (
                <div className="flex flex-col md:flex-row items-end justify-center relative">
                  {/* Пустий простір ліворуч */}
                  <div className="hidden md:block md:w-[89%]"></div>
                  
                  {/* Контент модуля праворуч */}
                  <div className="md:w-[50%] ml-50px w-full">
                    {/* Зміст модуля */}
                    <div className="max-w-[600px]">
                      {/* Номер модуля */}
                      <div className="font-sans font-black text-[48px] leading-[1.1] text-[#191a21]">
                        {module.number}
                      </div>
                      
                      {/* Дати */}
                      <div className="font-sans font-black text-[48px] leading-[1.1] mb-0 text-[#191a21]">
                        {module.dates}
                      </div>
                      
                      {/* Червоний заголовок */}
                      <div className="relative bg-[#F42B39] py-2 pl-12 pr-6 w-full mb-0">
                        {/* Білий трикутник */}
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <svg width="14" height="16" viewBox="0 0 18 20" fill="none">
                            <path d="M0 10L18 0V20L0 10Z" fill="white"/>
                          </svg>
                        </div>
                        
                        {/* Заголовок */}
                        <div className="text-white font-sans font-bold text-[48px] tracking-wide uppercase">
                          {module.title}
                        </div>
                      </div>
                      
                      {/* Опис */}
                      <div className="bg-white p-6">
                        <p className="text-[18px] leading-[1.4] text-[#191a21]">
                          {module.description}
                        </p>
                      </div>
                      
                      {/* Зображення */}
                      {module.image ? (
                        <div className="mt-0 relative">
                          <Image 
                            src={module.image}
                            alt={`${module.number} ілюстрація`}
                            className="w-full h-auto"
                            style={{ maxHeight: "280px" }}
                          />
                        </div>
                      ) : (
                        <div className="mt-0 relative">
                          <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Зображення {module.number.toLowerCase()}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Для лівостороннього модуля */}
              {module.position === 'left' && (
                <div className="flex flex-col md:flex-row items-start justify-center relative">
                  {/* Контент модуля ліворуч */}
                  <div className="md:w-[50%] w-full">
                    <div className="max-w-[500px] ml-auto mr-45">
                      {/* Номер модуля */}
                      <div className="font-sans font-black text-[48px] leading-[1.1] text-[#191a21] text-right">
                        {module.number}
                      </div>
                      
                      {/* Дати */}
                      <div className="font-sans font-black text-[48px] leading-[1.1] mb-0 text-[#191a21] text-right">
                        {module.dates}
                      </div>
                      
                      {/* Червоний заголовок */}
                      <div className="relative bg-[#F42B39] py-2 pr-12 pl-6 w-full mb-0">
                        {/* Білий трикутник для правого боку */}
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-180">
                          <svg width="14" height="16" viewBox="0 0 18 20" fill="none">
                            <path d="M0 10L18 0V20L0 10Z" fill="white"/>
                          </svg>
                        </div>
                        
                        {/* Заголовок */}
                        <div className="text-white font-sans font-bold text-[40px] tracking-wide uppercase text-right">
                          {module.title}
                        </div>
                      </div>
                      
                      {/* Опис */}
                      <div className="bg-white p-6 text-left">
                        <p className="text-[18px] leading-[1.4] text-[#191a21]">
                          {module.description}
                        </p>
                      </div>
                      
                      {/* Зображення*/}
                      {module.image ? (
                        <div className="mt-0 relative">
                          <Image 
                            src={module.image}
                            alt={`${module.number} ілюстрація`}
                            className="w-full h-auto"
                            style={{ maxHeight: "280px" }}
                          />
                        </div>
                      ) : (
                        <div className="mt-0 relative">
                          <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Зображення {module.number.toLowerCase()}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Пустий простір праворуч */}
                  <div className="hidden md:block md:w-[50%]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 relative z-10">
          <h3 className="text-3xl font-bold text-black uppercase">ДАЛІ БІЛЬШЕ</h3>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:pr-[50%] {
            padding-right: 50%;
          }
          .md\\:pl-[50%] {
            padding-left: 50%;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}