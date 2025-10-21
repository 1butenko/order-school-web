"use client"

import { AnimatedProps } from "@/types/motion";
import { motion, Variants, Transition } from "framer-motion";

import VideoPlayer from "@/components/sections/VideoPlayer";

import interviewOneBg from "@/assets/prev_interview_1.png";
import sectionBackground from "@/assets/videos-bg.png";

import interviewOne from "../../../videos/int1.mp4";

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
  return (
    <motion.section
      className="relative w-full min-h-screen py-12 md:py-20"
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

      {/* Mobile - Single Video Centered */}
      <div className="md:hidden px-4">
        <VideoPlayer 
          videoSrc={interviewOne} 
          posterSrc={interviewOneBg}
        />
      </div>

      {/* Desktop - Single Video Centered */}
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
          <div className="flex justify-center my-8 sm:my-12 md:my-16 lg:my-18">
            <motion.div variants={itemVariants} className="w-full max-w-2xl">
              <VideoPlayer 
                videoSrc={interviewOne} 
                posterSrc={interviewOneBg}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}