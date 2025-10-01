import type { AnimatedProps } from "@/types/motion";

import hero from "@/assets/hero.jpg";

export default function Hero({ id }: AnimatedProps) {
  return (
    <section className="relative w-full h-screen">
      <div
        className={`w-full h-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>
    </section>
  );
}