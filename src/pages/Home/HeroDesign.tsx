import { motion } from "framer-motion";
import { HeroWord } from "../../components/HeroWord";

const HeroDesign = () => {
  const words = ["JOURNEYS", "ROADS", "HEARTS", "BUSINESS", "PEOPLES"];

  // Text animation variant
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 25 },
    },
  };

  return (
    <div className="relative sub-font flex items-center justify-center text-slate-50  lg:py-0 py-16 px-6">
      {/* Center Hero Box */}
      <motion.div
        className="text-center backdrop-blur-lg h-full  bg-primary/90 border border-white/30 shadow-2xl rounded-2xl p-8 md:p-12 w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        <h1 className="text-[28px] blur-[0.5px] lg:text-[40px] font-extrabold tracking-wide leading-snug mb-6">
          Empowering Efficiency Linking
        </h1>
        <motion.h2
          className="text-[22px] lg:text-[32px] font-semibold uppercase tracking-wide text-shadow-lg mb-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <HeroWord words={words} />
        </motion.h2>
        <motion.p
          className="text-lg font-medium opacity-80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Driving Innovation
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroDesign;
