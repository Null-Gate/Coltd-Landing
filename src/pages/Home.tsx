import { motion } from "framer-motion";
import Hero from "./Home/Hero";
import Chest from "./Home/Chest";
import MotionBar from "./Home/MotionBar";
import Body from "./Home/Body";

const Home = () => {
  return (
    <div className="grid grid-cols-12 py-10 lg:py-10 gap-3">
      <MotionBar />
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
