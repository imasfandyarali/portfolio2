"use client";
import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* 
            Render 6 motion divs, each representing a step of the stairs.
            Each div will have the same animation defined by the stairsAnimation object.
            The delay for each div is calculated dynamically based on its reversed index,
            creating a staggered effect with decreasing delay for each subsequent step.
            */}
      {/* Create 6 stair steps with staggered animations */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index} // Unique key for each step
            variants={stairAnimation}
            initial="initial" // Starting animation state
            animate="animate" // Active animation state
            exit="exit" // Exit animation state
            transition={{
              // Animation properties
              duration: 0.4, // Animation duration in seconds
              ease: "easeInOut", // Smooth easing function
              delay: reverseIndex(index) * 0.1, // Staggered delay based on position
            }}
            className="h-full w-full bg-white relative" // Styling classes
          />
        );
      })}
    </>
  );
};

export default Stairs;
