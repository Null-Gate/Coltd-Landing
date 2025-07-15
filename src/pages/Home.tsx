import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Hero from "./Home/Hero";
import Chest from "./Home/Chest";
import MotionBar from "./Home/MotionBar";
import Body from "./Home/Body";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>KarGate - Transport & Tracking Platform in Asia</title>
        <meta name="description" content="KarGate is a transport platform offering real-time vehicle tracking, smart logistics, and driver-car matching in Asia." />

        <link rel="canonical" href="https://kargate.site/" />
        <meta property="og:title" content="KarGate - Smarter Transport in Asia" />
        <meta property="og:description" content="Book and track transport smartly with KarGate." />
        <meta property="og:url" content="https://kargate.site/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="grid grid-cols-12 py-10 lg:py-10 gap-3">
        <MotionBar />
        <motion.div
          className="flex flex-col col-span-11 mx-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="sr-only">KarGate - Smart Transport Solutions</h1>
          <h2 className="sr-only">Book, Track, and Manage Vehicles in Real-Time</h2>

          <Hero />
          <Chest />
          <Body />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
