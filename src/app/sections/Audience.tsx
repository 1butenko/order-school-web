"use client";

import { AnimatedProps } from '@/types/motion';
import React from 'react';

export default function Audience({ id } : AnimatedProps) {
  return (
    <section id="audience" className="relative py-12 md:py-20 bg-[#F0E9D9] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <h2 className="cy-grotesk text-[#191A21] uppercase tracking-[0.09em] font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[1.04] max-w-[784px] mb-10 md:mb-16">
          Для кого створений Гурток Політичних Студій
        </h2>

        {/* Main Content Grid */}
        <div className="relative grid lg:grid-cols-[525px_1fr] gap-8 lg:gap-16 items-start">
          {/* SVG Connecting Lines - Desktop Only */}
          <svg 
            className="hidden lg:block absolute pointer-events-none" 
            style={{ left: '-29%', top: '70px', width: '1306px', height: '510px' }} 
            viewBox="0 0 1307 511" 
            fill="none" 
            preserveAspectRatio="xMidYMid meet"
          >
            <path 
              d="M-1 217H777.227C789.93 217 800.227 206.703 800.227 194V25C800.227 12.2975 810.524 2 823.227 2H1199.84H1282C1294.7 2 1305 12.2975 1305 25V183.5C1305 196.203 1294.7 206.5 1282 206.5H913.866C901.163 206.5 890.866 216.797 890.866 229.5V337.5C890.866 350.203 901.163 360.5 913.866 360.5H1236.43C1249.13 360.5 1259.43 370.797 1259.43 383.5V486C1259.43 498.703 1249.13 509 1236.43 509H849.302" 
              stroke="#F42B39" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
          </svg>

          {/* Central Image */}
          <div className="relative z-10 mx-auto lg:mx-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c772a27ad3770362cc17ecec8f9bd0c1b87b38a9?width=1050" 
              alt="Студенти за роботою" 
              className="w-full max-w-[525px] h-auto"
            />
          </div>

          {/* Text Content - Right Side */}
          <div className="relative z-10 mr-[-29%] flex flex-col gap-6 md:gap-8 lg:gap-10 lg:pt-12 font-medium -ml-15">
            {/* Row 1: Учні 8-11 класів */}
            <div className="gotham-pro text-[#191A21] text-lg md:text-xl leading-[110%] tracking-[0.02em]">
              Учні 8-11 класів
            </div>

            {/* Row 2: Спеціальності - With line breaks */}
            <div className="flex flex-col gap-2">
              <p className="gotham-pro text-lg md:text-xl leading-[110%] tracking-[0.02em]">
                <span className="text-[#191A21]">Ті, хто планує вступати на </span><br></br>
                <span className="text-[#F42B39]">спеціальності:</span>
              </p>
              <p className="gotham-pro text-[#191A21] text-lg md:text-xl leading-[110%] tracking-[0.02em]">
                політологія, міжнародні<br></br> відносини,
                право,
                соціологія<br />
                філософія,
                журналістика<br />
              </p>
            </div>

            {/* Row 3: Ще не визначилися */}
            <div className="gotham-pro text-[#191A21] mt-15 text-lg md:text-xl leading-[110%] tracking-[0.02em] max-w-[220px]">
              Ще не визначилися з напрямом, але зацікавлені в соціальних науках
            </div>

            {/* Row 4: Бажаючі здобути */}
            <div className="gotham-pro text-[#191A21] mt-5 text-lg md:text-xl leading-[110%] tracking-[0.02em] max-w-[300px]">
              Бажаючі здобути загальну ерудицію в питаннях політичних та соціальних процесів
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cy-grotesk {
          font-family: var(--font-grotesk), -apple-system, Roboto, Helvetica, sans-serif;
        }
        
        .gotham-pro {
          font-family: var(--font-gotham-pro), -apple-system, Roboto, Helvetica, sans-serif;
        }
      `}</style>
    </section>
  );
}
