"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.5, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.5, ease: "easeInOut" },
          }}
          className="w-[240px] h-[240px] md:w-[340px] md:h-[340px] xl:w-[380px] xl:h-[380px] absolute -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 mix-blend-lighten"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-cover scale-90 border-2 border-accent mt-8 "
          />
        </motion.div>
        {/* circle - to see circle remove opacity-0 class*/}
        <motion.svg
          className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] xl:w-[400px] xl:h-[400px] opacity-0"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "10 10" }}
            animate={{
              strokeDasharray: ["100 50", "50 100", "25 125"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
