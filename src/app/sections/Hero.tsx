"use client";

import type { AnimatedProps } from "@/types/motion";
import Image from "next/image";
import hero from "@/assets/hero.png";
import heroMobile from "@/assets/Hero_mobile.png";

import { Button } from "@/components/ui/button";

export default function Hero({ id }: AnimatedProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Mobile Image */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src={heroMobile}
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-cover"
          style={{ objectPosition: 'center center' }}
        />
      </div>

      {/* Desktop Image */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={hero}
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-cover border-b-4 border-primary"
          style={{ objectPosition: 'center center' }}
        />
      </div>

      <div className="relative z-10 flex items-end md:items-center justify-start min-h-screen">
        <div className="pb-16 md:pb-0 px-[27px] md:px-0 md:mt-96 md:ml-16 w-full md:w-auto">
          <h1 className="text-white text-xl leading-[22px] md:text-5xl md:leading-[56px] font-bold md:font-bold font-sans max-w-[333px] md:max-w-6xl uppercase tracking-[0] md:tracking-wider drop-shadow-2xl">
            Стань частиною Гуртка з{" "}
            <span className="text-primary drop-shadow-2xl">політології</span> від КSE <br />
            Відкривай світ суспільних змін
          </h1>
          <a href="https://forms.gle/Cqax94UHrydS7tEq6">
            <Button className="uppercase bg-white text-primary mt-[26px] md:mt-16 h-11 md:h-auto md:py-8 w-[231px] md:w-auto md:px-16 text-sm md:text-2xl tracking-[0] md:tracking-wider hover:bg-primary hover:text-white cursor-pointer rounded-[10px] flex items-center justify-center font-medium transition-all shadow-lg">
              Хочу на курс
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}