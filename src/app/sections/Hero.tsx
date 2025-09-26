import type { AnimatedProps } from "@/types/motion";
import hero from "@/assets/hero.jpg";

export function Hero({ id }: AnimatedProps) {
  return (
    <section id={id} className="relative w-full h-screen">
      <div
        className={`w-full h-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>
    </section>
  );
}