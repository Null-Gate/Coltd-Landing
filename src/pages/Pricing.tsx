import { Helmet } from "react-helmet-async"; 
import { motion } from "framer-motion";

const Pricing = () => {
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

    <div className="text-primary font-bold text-3xl flex justify-center items-center h-[90vh] overflow-hidden">
      <motion.span
        className="inline-block whitespace-nowrap"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        COMING SOON..
      </motion.span>
    </div>
  </>
  );
};

export default Pricing;
