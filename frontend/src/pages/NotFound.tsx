
import { motion } from "framer-motion";

const slideVariants = {
  initial: { x: "100%", opacity: 0 },    // Start offscreen right
  animate: { x: 0, opacity: 1 },         // Slide into center
  exit: {}, 
};


export default function NotFound() {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}className="min-h-[50vh] bg-white text-black flex flex-col items-center justify-center pb-4 font-mono">
      <div className="max-w-9xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="border border-gray-200 shadow-lg shadow-blue-400/30 rounded-lg p-6 bg-gray-50">
        Sorry This Path is Not Available...</div>
      </div>
    </motion.div>
  );
}

