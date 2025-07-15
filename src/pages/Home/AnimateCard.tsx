import { useState } from "react";
import { motion } from "framer-motion";
import image from "../../assets/vecteezy_red-wave-fluid-abstract-background-for-banner-web-vector_26609272-1.avif";
/* eslint-disable @typescript-eslint/no-explicit-any */
const AnimateCard = ({ data }: any) => {
  const [isAnimate, setIsAnimate] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsAnimate(true)}
      onMouseLeave={() => setIsAnimate(false)}
      className="border border-[#8c8c8c] group h-[60vh] rounded-xl relative overflow-hidden shadow-md bg-white transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="h-[100vh] relative">
        <h1 className=" absolute text-[20px] text-primary sub-font transition duration-[1s] group-hover:text-white z-50 lg:top-5 lg:left-5 top-1 left-3">
          {data.title}
          <hr className="bg-primary h-0.5 sub-font transition duration-[1.3s] group-hover:bg-white" />
        </h1>
        {/* Base Layer */}
        <div className="h-[60vh] bg-slate-50 flex items-center justify-center sub-font z-10 relative rounded-xl">
          <div className=" text-[100px] lg:text-[150px] absolute top-3 left-5 lg:top-0 lg:left-3 z-20 text-primary">
            {data.num}
          </div>
          <img
            src={image}
            className="absolute object-cover h-full w-full"
            alt=""
          />
        </div>

        {/* Elegant Slide Overlay */}
        <motion.div
          initial={{ translateY: "100%" }}
          animate={{
            translateY: isAnimate ? "0%" : "100%",
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            mass: 0.2,
          }}
          className="h-[60vh] absolute top-0 left-0 w-full z-20 bg-gradient-to-t from-[#7D0A0A] via-[#A31D1D] to-[#7D0A0A] shadow-inner"
        >
          <div className="h-full flex items-center justify-center text-white text-lg text-sm tracking-wide font-medium p-5">
            {data.description}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimateCard;
