"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

import mykyta from "@/assets/mykyta.png"

export default function Teachers(){
  return (
    <section className="relative w-full min-h-screen py-20 bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto text-center text-foreground px-4">
        <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
          Викладачі
        </h1>
        <div className="my-2 mx-auto max-w-3xs h-1 bg-primary rounded-full"></div>
      </div>
      
      <div className='flex items-center justify-center mt-10'>
        <Swiper
          effect={'flip'}
          grabCursor={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="w-full max-w-md h-[600px]"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image 
                src={mykyta} 
                alt="Teacher image"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image 
                src={mykyta} 
                alt="Teacher image"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}