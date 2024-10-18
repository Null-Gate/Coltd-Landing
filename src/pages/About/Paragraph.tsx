import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

interface PropsType {
  num: string;
  para: string;
  title: string;
}

const Paragraph: React.FC<PropsType> = ({ num ,para,title }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // Use the scrollYProgress to create smooth animations
  const y = useTransform(scrollYProgress, [0, 1], ["20vh", "0vh"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="w-[90%] min-h-[150vh] flex flex-col lg:flex-row justify-between items-start gap-10 mx-auto"
    >
      <motion.div className="flex justify-start items-start w-full lg:w-[30vw] min-h-[150vh] text-center font-bold text-primary relative">
        <motion.span
          style={{ y, opacity }}
          className="sticky top-0 text-[100px] lg:text-[250px] w-full"
        >
          {num}
        </motion.span>
      </motion.div>
      <motion.div className="w-full flex flex-col lg:flex-row justify-center border-t-4 border-primary gap-5 py-5">
        <div className="w-full lg:w-[30%] text-lg font-bold">
          {title}
        </div>
        <p className="w-full lg:w-[70%] leading-10 tracking-wide">
          {para}
        </p>
      </motion.div>
      <motion.div
        className="absolute lg:hidden bottom-10 left-1/2 transform -translate-x-1/2 text-primary text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Scroll Down
      </motion.div>
    </div>
  );
};

export default Paragraph;
