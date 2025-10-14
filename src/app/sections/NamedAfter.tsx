import Image from "next/image";
import namedafter from "@/assets/namedafter.png";

export default function NamedAfter() {
  return (
    <section className="w-full bg-[#E6E1D0]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-16 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text column */}
        <div className="flex-1 max-w-[800px] pt-[5%]">
          <h2
            className="uppercase text-[#191a21] leading-[1.05] tracking-[.08em] text-[30px] md:text-[48px] lg:text-[36px] font-[800] mb-6"
            style={{ fontFamily: '"Cy Grotesk", sans-serif' }}
          >
            <span className="block">ГУРТОК, НАЗВАНИЙ НА</span>
            <span className="block">ЧЕСТЬ <span className="text-[#F42B39]">ЛЕОНІДА ПАСЬКА</span></span>
          </h2>
          <p className="text-[#191a21] text-[14px] md:text-[18px] leading-[1.75] max-w-[860px]">
            Гурток названо на честь Леоніда Паська — вчителя, педагога й наставника, чиє
            життя було присвячене освіті та громадянському служінню. Він навчив нас любити й
            віддавати, бути відкритими як до світу, так і до людей, служити одне одному. Леонід
            завжди наголошував, що процвітання й загальне благо суспільства та держави залежать
            передусім від якісної освіти, а ключем до неї є викладачі. Ми створили наш гурток,
            натхненні його ідеалами й принципами.
          </p>
        </div>

        {/* Image column */}
        <div className="relative flex-1 w-full max-w-[780px] h-[420px] md:h-[540px] overflow-hidden">
          <Image
            src={namedafter}
            alt="Леонід Пасько та його майстерня"
            fill
            priority
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}