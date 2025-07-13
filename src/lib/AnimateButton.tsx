/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";

const AnimateButton = ({ text }: any) => {
  return (
    <motion.button
      className="bg-primary text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-lg hover:shadow-xl overflow-hidden relative flex items-center justify-center"
      initial={{ border: "none" }}
      whileHover={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
    >
      {/* Text with drawing animation */}
      <motion.span
        className="mr-4"
        initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{
          WebkitTextStroke: "1px #ffffff",
          stroke: "currentColor",
        }}
      >
        {text}
      </motion.span>

      {/* Line animation (automatically fills and loops) */}
      <motion.div
        className="h-[2px] bg-primary w-full origin-left absolute bottom-0 left-0"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* Arrow icon with drawing animation (loops) */}
      <motion.div
        className="inline-block"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <ArrowRight
          size={24}
          color="#ffffff"
          weight="bold"
          className="stroke-current text-white"
          style={{ strokeWidth: 2 }}
        />
      </motion.div>
    </motion.button>
  );
};

export default AnimateButton;
