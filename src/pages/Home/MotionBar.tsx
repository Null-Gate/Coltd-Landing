/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/KarGate.avif";

const MotionBar = () => {
  const [advertText] = useState("KarGate!");

  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 500], [0, 1]);

  return (
    <div className="col-span-1 relative">
      <motion.div
        className="fixed left-2 top-[55%] xl:left-6 lg:left-16 lg:top-1/2 transform -translate-y-1/2 lg:w-[60px] w-[30px] p-[5px] flex justify-center border-2 bg-primary rounded-full"
        style={{
          height: useTransform(scrollProgress, [0, 1], ["30vh", "80vh"]),
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 1.5,
          repeat: Infinity, // Repeat the height animation infinitely
          repeatType: "loop", // Loop the height animation
        }}
      >
        <motion.img
          className="lg:w-[50px] lg:h-[50px] w-[20px] h-[20px] object-cover rounded-full absolute"
          src={logo}
          alt="Logo"
        />

        {/* Advertisement text inside the Motion Bar */}
        <motion.div
          className="absolute -rotate-90 inset-0 flex justify-center items-center text-white text-xl font-bold"
          style={{
            whiteSpace: "nowrap",
            opacity: useTransform(scrollProgress, [0.5, 1], [0, 1]),
          }}
        >
          {advertText}
          {"  "} ────────── {"  "}
          BestService
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MotionBar;
