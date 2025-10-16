"use client"

import { AnimatedProps } from "@/types/motion";
import { motion, Variants, Transition } from "framer-motion";

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
  return (
    <motion.section
      className="relative w-full min-h-screen py-20 bg-cover bg-center bg-no-repeat"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      id={id}
    >
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center text-foreground px-4 mb-16"
        variants={itemVariants}
      >
        <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
          Інтервʼю з випускниками
        </h1>
      </motion.div>

      <div
        className="bg-cover bg-center bg-no-repeat py-12"
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
              <VideoPlayer videoSrc={interviewOne} posterSrc={interviewOneBg} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <VideoPlayer videoSrc={interviewTwo} posterSrc={interviewTwoBg} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <VideoPlayer
                videoSrc={interviewThree}
                posterSrc={interviewThreeBg}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}