import Image from "next/image";
import namedafter from "@/assets/namedafter.png";

export default function NamedAfter() {
  return (
    <section className="w-full bg-[#E6E1D0] relative overflow-hidden">

      <div className="w-full flex flex-col lg:flex-row items-stretch pt-30 pb-30">
        {/* Text column */}
        <div className="flex-1 px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-20 flex items-center">
          <div className="w-full max-w-[800px]">
            <h2
              className="uppercase text-[#191a21] leading-[1.2] tracking-[.0.01em] text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[780] mb-6 md:mb-8"
              style={{ fontFamily: '"Cy Grotesk", sans-serif' }}
            >
              <span className="block">ГУРТОК, НАЗВАНИЙ НА</span>
              <span className="block">ЧЕСТЬ <span className="text-[#F42B39]">ЛЕОНІДА ПАСЬКА</span></span>
            </h2>
            <p className="text-[#191a21] text-[15px] md:text-[17px] lg:text-[18px] leading-[1.75]">
              Гурток названо на честь Леоніда Паська — вчителя, педагога й наставника, чиє
              життя було присвячене освіті та громадянському служінню. Він навчив нас любити й
              віддавати, бути відкритими як до світу, так і до людей, служити одне одному. Леонід
              завжди наголошував, що процвітання й загальне благо суспільства та держави залежать
              передусім від якісної освіти, а ключем до неї є викладачі. Ми створили наш гурток,
              натхненні його ідеалами й принципами.
            </p>
          </div>
        </div>

        {/* Image column */}
        <div className="relative flex-1 w-full h-[400px] md:h-[500px] lg:h-auto lg:min-h-[600px]">
          <Image
            src={namedafter}
            alt="Леонід Пасько та його майстерня"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}