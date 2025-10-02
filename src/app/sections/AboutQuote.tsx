"use client";

import Image from "next/image";
import johndewey from "@/assets/john-dewey.png";

export default function AboutQuote() {
  return (
    <section
      className="relative w-[1425px] h-[625px] bg-[#E6E1D0] mx-auto flex items-center justify-between"
    >
      {/* Цитата*/}
      <div className="relative w-[1213px]">
        <p
          className="uppercase text-[#191a21] leading-[1.7] text-left pl-25"
          style={{
            fontFamily: '"Cy Grotesk", sans-serif',
            fontWeight: 600,
            fontSize: "36px",
          }}
        >
          “Демократія має народжуватися у кожному новому поколінні, і саме
          освіта допомагає їй з’явитися на світ.” — Джон Дьюї
        </p>
        <span
          className="mt-4 uppercase text-[#191a21] block"
          style={{
            fontFamily: '"Cy Grotesk", sans-serif',
            fontWeight: 650,
            fontSize: "36px",
          }}
        ></span>

        {/* SVG  */}
        <svg
          className="absolute bottom-0 left-0"
          width="1215"
          height="223"
          viewBox="0 0 1215 223"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2H1185C1200.46 2 1213 14.536 1213 30V193C1213 208.464 1200.46 221 1185 221H0"
            stroke="#F42B39"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Фото Джона Дьюї */}
      <div className="relative w-[311px] h-[443px]">
        <Image
          src={johndewey}
          alt="John Dewey"
          width={311}
          height={443}  
          priority
        />
      </div>
    </section>
  );
}