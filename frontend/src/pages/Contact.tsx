
import { motion } from "framer-motion";
import Form from "../components/Sub/Form";

const slideVariants = {
  initial: { x: "100%", opacity: 0 },    // Start offscreen right
  animate: { x: 0, opacity: 1 },         // Slide into center
  exit: {}, 
};


export default function ContactPage() {
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
      <div className="min-h-svh mt-10 h-fit flex flex-col"><Form /></div>
    </motion.div>
  );
}



