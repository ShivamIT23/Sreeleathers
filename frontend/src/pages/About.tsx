
import { motion } from "framer-motion";
import About from "../components/Sub/About";

const slideVariants = {
  initial: { x: "100%", opacity: 0 },    // Start offscreen right
  animate: { x: 0, opacity: 1 },         // Slide into center
  exit: {}, 
};


export default function AboutPage() {
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
      }}className=" h-fit w-full">
      <div className="min-h-svh -mt-10 h-fit flex flex-col"><About></About></div>
    </motion.div>
  );
}



