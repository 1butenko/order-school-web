"use client";

import { useEffect, useState } from "react";
import type { AnimatedProps } from "@/types/motion";
import Image from "next/image";
import hero from "@/assets/hero.png";
import { Button } from "@/components/ui/button";

export default function Hero({ id }: AnimatedProps) {
  const [timeLeft, setTimeLeft] = useState("00:00:00:00");

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const daysUntilMonday = (8 - day) % 7 || 7;
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + daysUntilMonday);
    nextMonday.setHours(0, 0, 0, 0);

    const updateCountdown = () => {
      const diff = nextMonday.getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft("00:00:00:00");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      );
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-transparent overflow-hidden">
      <Image src={hero} alt="Hero" fill className="w-full" priority />
      <div className="absolute right-0 bottom-0 bg-primary flex justify-between py-8 px-12 rounded-l-4xl">
        <Button className="bg-white text-primary text-2xl font-sans font-medium uppercase py-8 px-12 cursor-pointer hover:bg-white">
          Хочу на курс
        </Button>

        <div className="mx-24 w-0.5 rounded-2xl bg-white"></div>

        <div className="mr-24 font-mono">
          <h2 className="text-md uppercase font-medium text-white ml-5">
            Початок через
          </h2>
          <time
            className="text-3xl tracking-wider font-medium text-white tabular-nums inline-block w-[11ch] text-center"
          >
            {timeLeft}
          </time>
        </div>
      </div>
    </section>
  );
}