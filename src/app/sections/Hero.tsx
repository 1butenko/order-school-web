"use client";

import type { AnimatedProps } from "@/types/motion";
import Image from "next/image";
import hero from "@/assets/hero.png";

import { Button } from "@/components/ui/button";

export default function Hero({ id }: AnimatedProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={hero}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center border-b-4 border-primary"
        />
      </div>

      <div className="relative z-10 flex items-center justify-left min-h-screen">
        <div className="mt-96 ml-16">
          <h1 className="text-white text-5xl/14 font-bold font-sans max-w-6xl uppercase tracking-wider">
            Стань частиною Гуртка з{" "}
            <span className="text-primary">політології</span> від КSE. <br />{" "}
            Відкривай світ суспільних змін
          </h1>
          <a href="https://forms.gle/Cqax94UHrydS7tEq6">
            <Button className="uppercase bg-white text-primary mt-16 py-8 px-16 text-2xl tracking-wider hover:text-white cursor-pointer">Хочу на курс</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
