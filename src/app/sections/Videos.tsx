"use client"

import { AnimatedProps } from "@/types/motion";
import { motion, Variants, Transition } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import VideoPlayer from "@/components/sections/VideoPlayer";

import interviewOneBg from "@/assets/prev_interview_1.png";
import interviewTwoBg from "@/assets/prev_interview_2.png";
import interviewThreeBg from "@/assets/prev_interview_3.png";
import sectionBackground from "@/assets/videos-bg.png";

import interviewOne from "../../../videos/interview_1.mp4";
import interviewTwo from "../../../videos/interview_2.mp4";
import interviewThree from "../../../videos/interview_3.mp4";

const transition: Transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] };

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition },
};

export default function Videos({ id }: AnimatedProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.offsetWidth * 0.75; // 75vw
        const newIndex = Math.round(scrollLeft / (itemWidth + 16)); // 16 is gap
        setActiveIndex(newIndex);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <motion.section
      className="relative w-full min-h-screen py-12 md:py-20 bg-[#E8E3D6]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      id={id}
    >
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center text-black px-4 mb-8 md:mb-16"
        variants={itemVariants}
      >
        <h1 className="text-2xl md:text-4xl tracking-wide md:tracking-wider uppercase font-sans font-bold mb-2">
          Інтервʼю з випускниками
        </h1>
      </motion.div>

      {/* Mobile - Horizontal Scroll */}
      <div className="md:hidden">
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          <div className="flex gap-4 px-[12.5vw] pb-4 items-center">
            <div 
              className={`flex-shrink-0 w-[75vw] snap-center transition-all duration-300 ${
                activeIndex === 0 ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
              }`}
            >
              <VideoPlayer 
                videoSrc={interviewOne} 
                posterSrc={interviewOneBg}
              />
            </div>
            <div 
              className={`flex-shrink-0 w-[75vw] snap-center transition-all duration-300 ${
                activeIndex === 1 ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
              }`}
            >
              <VideoPlayer 
                videoSrc={interviewTwo} 
                posterSrc={interviewTwoBg}
              />
            </div>
            <div 
              className={`flex-shrink-0 w-[75vw] snap-center transition-all duration-300 ${
                activeIndex === 2 ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
              }`}
            >
              <VideoPlayer
                videoSrc={interviewThree}
                posterSrc={interviewThreeBg}
              />
            </div>
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const itemWidth = scrollRef.current.offsetWidth * 0.75;
                  scrollRef.current.scrollTo({
                    left: index * (itemWidth + 16),
                    behavior: 'smooth'
                  });
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary w-6' : 'bg-black/30'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop - Grid Layout */}
      <div
        className="hidden md:block bg-cover bg-center bg-no-repeat py-12"
        style={{
          backgroundImage: `url(${sectionBackground.src})`,
        }}
      >
        <motion.div
          className="relative z-10 mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 my-8 sm:my-12 md:my-16 lg:my-18">
            <motion.div variants={itemVariants}>
              <VideoPlayer 
                videoSrc={interviewOne} 
                posterSrc={interviewOneBg}
                name="Віталій"
                grade="10 клас"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <VideoPlayer 
                videoSrc={interviewTwo} 
                posterSrc={interviewTwoBg}
                name="Марія"
                grade="11 клас"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <VideoPlayer
                videoSrc={interviewThree}
                posterSrc={interviewThreeBg}
                name="Олександр"
                grade="10 клас"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}