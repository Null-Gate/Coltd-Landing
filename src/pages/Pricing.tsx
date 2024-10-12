import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="text-primary font-bold text-3xl flex justify-center items-center h-[90vh] overflow-hidden">
      <motion.span
        className="inline-block whitespace-nowrap"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        COMING SOON..
      </motion.span>
    </div>
  );
};

export default Pricing;
