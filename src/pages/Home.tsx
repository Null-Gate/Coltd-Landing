import {
  motion,
  useAnimation,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";
import Hero from "./Home/Hero";
import logo from "../assets/KarGate.png";
import Chest from "./Home/Chest";
import Body from "./Home/Body";

const Home = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, 150], { clamp: false });

  useEffect(() => {
    y.onChange((latest) => {
      controls.start({
        y: latest,
        transition: { stiffness: 50, damping: 10 },
      });
    });
  }, [y, controls]);

  return (
    <div className="grid grid-cols-12 py-10 lg:py-10">
      <motion.div
        className="col-span-1 lg:w-[50px] w-[30px] flex justify-center border-2 border-primary rounded-full relative"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] object-cover rounded-full sticky top-0"
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
