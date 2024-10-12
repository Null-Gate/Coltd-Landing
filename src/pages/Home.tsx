import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";
import Hero from "./Home/Hero";
import logo from "../assets/KarGate.png";
import Chest from "./Home/Chest";
import Body from "./Home/Body";

const Home = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, 220], { clamp: false });

  useEffect(() => {
    y.onChange((latest) => {
      console.log("latest", latest);
      controls.start({
        y: latest,
        transition: { stiffness: 50, damping: 10 },
      });
    });
  }, [y, controls]);

  return (
    <div className="grid grid-cols-12 py-10 lg:py-10 gap-3">
      <motion.div
        className="col-span-1 lg:w-[60px] w-[30px] p-[5px] flex justify-center border-2 border-primary rounded-full relative"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          className="lg:w-[50px] lg:h-[50px] w-[20px] h-[20px] object-cover rounded-full absolute "
          src={logo}
          alt="#"
          style={{ y }}
          animate={controls}
        />
      </motion.div>
      <motion.div
        className="flex flex-col col-span-11 mx-3 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Hero />
        <Chest />
        <Body />
      </motion.div>
    </div>
  );
};

export default Home;
